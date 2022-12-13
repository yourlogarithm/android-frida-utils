import frida, sys, time, argparse, re, os
from utils import on_message

class keyvalue(argparse.Action):
    # Constructor calling
    def __call__( self , parser, namespace, values, option_string = None):
        setattr(namespace, self.dest, dict())
          
        for value in values:
            # split it into key and value
            key, value = value.split('=')
            # assign into dictionary
            getattr(namespace, self.dest)[key] = value

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('pkg', type=str, help='Package name / activity to hook')
    parser.add_argument('js', help='JS file(s) to hook', nargs='+')
    parser.add_argument('-e', '--extras', help='Extra arguments to pass to the hooker', nargs='*', action=keyvalue)
    args = parser.parse_args()

    jscode = 'Java.perform(function () {\n'
    for js in args.js:
        with open(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'javascript', js), 'r') as f:
            code = f.read()
            if args.extras:
                for k, v in args.extras.items():
                    code = code.replace(f'__{k}__', v)
            code = re.sub(r'\'__([a-z0-9]*_)*_\'', '\'\'', code)
            jscode += code
    jscode += '});'
    
    print(jscode)

    device = frida.get_usb_device()

    try:
        pid = frida.get_usb_device().spawn([args.pkg])
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