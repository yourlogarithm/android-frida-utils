import frida, sys, time, argparse, re, os, subprocess
from utils import on_message
from multiprocessing import Process

SCRIPT_PATH = os.path.dirname(os.path.realpath(__file__))

class keyvalue(argparse.Action):
    # Constructor calling
    def __call__( self , parser, namespace, values, option_string = None):
        setattr(namespace, self.dest, dict())
          
        for value in values:
            # split it into key and value
            key, value = value.split('=')
            # assign into dictionary
            getattr(namespace, self.dest)[key] = value

def get_arguments():
    parser = argparse.ArgumentParser()
    subparsers = parser.add_subparsers(help='Action', dest='action')

    setup_parser = subparsers.add_parser('setup', help='Setup frida android server on device')
    setup_parser.add_argument('server', help='Frida server version')

    hook_parser = subparsers.add_parser('hook', help='Hook a package')
    hook_parser.add_argument('js', help='JS file(s) to hook', nargs='+')
    hook_parser.add_argument('pkg', type=str, help='Package name / activity to hook')
    hook_parser.add_argument('--exportjs', '-ex', help='Export JS to file', action='store_true')
    hook_parser.add_argument('-e', '--extras', help='Extra arguments to pass to the hooker', nargs='*', action=keyvalue)

    full_parser = subparsers.add_parser('full', help='Setup frida server, install apk hook methods all at once')
    full_parser.add_argument('server', help='Frida server version')
    full_parser.add_argument('js', help='JS file(s) to hook', nargs='+')
    full_parser.add_argument('filename', help='Filename of apk to install and debug')
    full_parser.add_argument('pkg', type=str, help='Package name / activity to hook')
    full_parser.add_argument('--exportjs', '-ex', help='Export JS to file', action='store_true')
    full_parser.add_argument('-e', '--extras', help='Extra arguments to pass to the hooker', nargs='*', action=keyvalue)

    interactive_parser = subparsers.add_parser('interactive', help='Interactive mode')

    args = parser.parse_args()

    if not args.action:
        parser.print_help()
        sys.exit(1)

    return args


def setup(server):
    server_path = os.path.join(SCRIPT_PATH, 'servers', server)
    output = '/data/local/tmp/frida-server'
    subprocess.call(f'adb push {server_path} {output}', shell=True)
    subprocess.call(f'adb shell "su 0 chmod 755 {output}"', shell=True)
    if os.fork() != 0:
        return
    subprocess.call(f'adb shell "su 0 {output}"', shell=True)


def setup_wrapper(server):
    p = Process(target=setup, args=(server,))
    p.start()
    p.join()
    print('Server running')


def hook(js_filenames, export_js, pkg, extras):
    jscode = 'Java.perform(function () {\n'
    for js in js_filenames:
        if not js.endswith('.js'): js += '.js'
        with open(os.path.join(SCRIPT_PATH, 'javascript', js), 'r') as f:
            code = f.read()
            if extras:
                for k, v in extras.items():
                    code = code.replace(f'__{k}__', v)
            code = re.sub(r'\'__([a-z0-9]*_)*_\'', '\'\'', code)
            jscode += code
    jscode += '});'
    
    if export_js:
        with open('rpc.js', 'w') as f:
            f.write(jscode)

    device = frida.get_usb_device()

    try:
        pid = frida.get_usb_device().spawn([pkg])
        device.resume(pid)
        time.sleep(1)
        session = device.attach(pid)
        script = session.create_script(jscode)
        script.on('message', on_message)
        print('[*] Running script')
        script.load()
        sys.stdin.read()
    except frida.NotSupportedError:
        raise


def install(filename):
    subprocess.call(f'adb install -r {filename}', shell=True)

def parse_extras(extras):
    if not extras: return None
    extras = extras.split(' ')
    extras_dict = {}
    for extra in extras:
        for key, value in extra.split('='):
            extras_dict[key] = value
    return extras_dict


def interactive_mode():
    print('Frida Hooker Utility')
    print('1. Express mode')
    print('2. Setup Frida')
    print('3. Start process and hook')
    print('0. Exit')
    choice = int(input('Enter a choice: '))

    server, scripts, package = '', '', ''

    must_setup_frida = choice == 1 or choice == 2
    must_hook = choice == 1 or choice == 3
    must_install_app = choice == 1

    if must_setup_frida: 
        server = input(f'Enter server version {os.listdir(os.path.join(SCRIPT_PATH, "servers"))}: ')
    if must_hook:
        scripts = input(f'Enter JS scripts separated with whitespace {os.listdir(os.path.join(SCRIPT_PATH, "javascript"))}: ').split(' ')
        export_js = input('Do you wish to export the script? [y/N]: ').lower() == 'n'
        package = input('Enter package name of the app: ')
        extras = parse_extras(input('Extras: '))
    if must_install_app:
        filename = input('APK filename: ')
        

    match choice:
        case 1:
            setup_wrapper(server)
            time.sleep(1)
            install(filename)
            hook(scripts, export_js, package, extras)
        case 2:
            setup_wrapper(server)
        case 3:
            hook(scripts, export_js, package, extras)
        case 0:
            sys.exit(0)
        case _:
            print('Invalid choice')

if __name__ == '__main__':
    args = get_arguments()

    if args.action == 'interactive':
        interactive_mode()
    elif args.action == 'setup':
        setup_wrapper(args.server)
    elif args.action == 'hook':
        hook(args.js, args.exportjs, args.pkg, args.extras)
    else:
        setup_wrapper(args.server)
        time.sleep(1)
        install(args.filename)
        hook(args.js, args.exportjs, args.pkg, args.extras)

   


    