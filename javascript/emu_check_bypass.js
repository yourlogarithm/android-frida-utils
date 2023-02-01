var config_dict = {
    "ro.secure": 1,
    "ro.allow.mock.location": 0,
    "ro.debuggable": 0,
    "ro.setupwizard.mode": "DISABLED",
    "ro.baseband": "msm",
    "ro.board.platform": "msm8992",
    "ro.boot.baseband": "msm",
    "ro.boot.bootloader": "HHZ12d",
    "ro.boot.emmc": true,
    "ro.boot.hardware": "batwing",
    "ro.boot.serialno": "092b66c20de7cf01",
    "ro.bootloader": "BHZ32c",
    "ro.hardware": "batwing",
    "ro.serialno": "092b66c20de7cf01",
    "net.bt.name": "Sectoid",
    "net.hostname": "sectoid-666",
    "ro.product.board": "bullhead",
    "ro.product.brand": "google",
    "ro.product.device": "bullhead",
    "ro.product.locale.language": "en",
    "ro.product.locale.region": "US",
    "ro.product.manufacturer": "LGE",
    "ro.product.model": "Nexus 5X",
    "ro.product.name": "bullhead",
    "ro.build.characteristics": "nosdcard",
    "ro.build.product": "bullhead",
    "ro.build.type": "user",
    "ro.build.id": "OSM1.180201.031",
    "ro.build.display.id": "OSM1.180201.031",
    "ro.build.version.incremental": 5455776,
    "ro.build.tags": "release-keys",
    "ro.build.description": "bullhead-user 8.1.0 OSM1.180201.031 5455776",
    "ro.build.fingerprint": "google/bullhead/bullhead:8.1.0/OSM1.180201.031/5455776:user/release-keys",
    "ro.build.version.all_codenames": "REL",
    "ro.build.version.codename": "REL",
    "gsm.version.ril-impl": "gsm.version.ril-impl",
    "gsm.version.baseband": "M8974A-2.0.50.2.22",
    "gsm.operator.alpha": "Vodafone RO",
    "gsm.operator.iso-country": "ro",
    "gsm.operator.numeric": 22601,
    "gsm.sim.operator.alpha": "Vodafone RO",
    "gsm.sim.operator.iso-country": "ro",
    "gsm.sim.operator.numeric": 22601,
    "init.svc.qemud": "1",
    "init.svc.qemu-props": "1",
    "qemu.hw.mainkeys": "1",
    "qemu.sf.fake_camera": "1",
    "qemu.sf.lcd_density": "1",
    "ro.bootmode": "verigud",
    "ro.kernel.android.qemud": "1",
    "ro.kernel.qemu.gles": "1",
    "ro.kernel.qemu": "1",
    "ro.build.version.release":"10"
}

var native_methods = [
    "unlink",
    "unlinkat",
    "open",
    "read",
    "openat",
    "creat",
    "creat64",
    "access",
    "stat",
    "lstat",
    "execve",
    "__system_property_find",
    "__system_property_read",
    "__system_property_foreach",
    "fork",
    "nanosleep",
    "clock_nanosleep"
]

var files_to_hide = [
    "/system/framework/XposedBridge.jar",
    "/system/xposed.prop",
    "/system/lib/libxposed_art.so",
    "/system/lib64/libxposed_art.so",
    "/system/bin/app_process32_original",
    "/system/bin/app_process32_xposed",
    "/system/bin/app_process64_original",
    "/system/bin/app_process64_xposed",
    "/data/app/de.robv.android.xposed.installer-1/base.apk",
    "/data/app/de.robv.android.xposed.installer-2/base.apk",
    "/magisk",
    "/sbin/magisk",
    "/sbin/su",
    "/system/bin/su",
    "/system/sbin/su",
    "/system/xbin/su",
    "/vendor/bin/su",
    "/sbin/busybox",
    "/system/bin/busybox",
    "/system/sbin/busybox",
    "/system/xbin/busybox",
    "/vendor/bin/busybox",
    "/sbin/strace",
    "/system/bin/strace",
    "/system/sbin/strace",
    "/system/xbin/strace",
    "/vendor/bin/strace",
    "/dev/com.koushikdutta.superuser.daemon/",
    "/system/app/Superuser.apk",
    "/system/bin/.ext/.su",
    "/system/etc/.has_su_daemon",
    "/system/etc/.installed_su_daemon",
    "/system/etc/init.d/99SuperSUDaemon",
    "/system/xbin/daemonsu",
    "/system/bin/qemud",
    "/system/bin/qemu-props",
    "/system/lib/libc_malloc_debug_qemu.so",
    "/dev/qemu_pipe",
    "/dev/android_pipe",
    "/dev/goldfish_pipe",
    "/dev/ranchu_pipe",
    "/dev/socket/baseband_genyd",
    "/dev/socket/genyd",
    "/dev/socket/qemud",
    "/sys/qemu_trace",
    "/sys/bus/platform/devices/qemu_pipe",
    "/sys/bus/platform/drivers/qemu_pipe",
    "/sys/bus/platform/drivers/qemu_pipe/qemu_pipe",
    "/sys/class/misc/qemu_pipe",
    "/sys/devices/platform/qemu_pipe",
    "/sys/devices/virtual/misc/qemu_pipe",
    "/dev/block/platform/goldfish_mmc.0",
    "/fstab.goldfish",
    "/fstab.ranchu",
    "fstab.nox",
    "fstab.andy",
    "/init.goldfish.rc",
    "/init.ranchu.rc",
    "/proc/irq/10/goldfish_tty",
    "/proc/irq/11/goldfish_fb",
    "/proc/irq/14/goldfish_audio",
    "/proc/irq/3/goldfish-events-keypad",
    "/proc/irq/4/goldfish_pdev_bus",
    "/proc/irq/5/goldfish-battery",
    "/proc/irq/6/goldfish_pipe",
    "/proc/irq/7/goldfish_mmc",
    "/proc/irq/9/goldfish_tty",
    "/sys/bus/platform/devices/goldfish-battery.0",
    "/sys/bus/platform/devices/goldfish_audio.0",
    "/sys/bus/platform/devices/goldfish_device_bus",
    "/sys/bus/platform/devices/goldfish_events.0",
    "/sys/bus/platform/devices/goldfish_fb.0",
    "/sys/bus/platform/devices/goldfish_mmc.0",
    "/sys/bus/platform/devices/goldfish_nand.0",
    "/sys/bus/platform/devices/goldfish_pdev_bus",
    "/sys/bus/platform/devices/goldfish_tty.0",
    "/sys/bus/platform/devices/goldfish_tty.1",
    "/sys/bus/platform/drivers/goldfish-battery",
    "/sys/bus/platform/drivers/goldfish-battery/goldfish-battery.0",
    "/sys/bus/platform/drivers/goldfish_audio",
    "/sys/bus/platform/drivers/goldfish_audio/goldfish_audio.0",
    "/sys/bus/platform/drivers/goldfish_events",
    "/sys/bus/platform/drivers/goldfish_events/goldfish_events.0",
    "/sys/bus/platform/drivers/goldfish_fb",
    "/sys/bus/platform/drivers/goldfish_fb/goldfish_fb.0",
    "/sys/bus/platform/drivers/goldfish_mmc",
    "/sys/bus/platform/drivers/goldfish_mmc/goldfish_mmc.0",
    "/sys/bus/platform/drivers/goldfish_nand",
    "/sys/bus/platform/drivers/goldfish_nand/goldfish_nand.0",
    "/sys/bus/platform/drivers/goldfish_pdev_bus",
    "/sys/bus/platform/drivers/goldfish_pdev_bus/goldfish_pdev_bus",
    "/sys/bus/platform/drivers/goldfish_tty",
    "/sys/bus/platform/drivers/goldfish_tty/goldfish_tty.0",
    "/sys/bus/platform/drivers/goldfish_tty/goldfish_tty.1",
    "/sys/devices/platform/goldfish-battery.0",
    "/sys/devices/platform/goldfish_audio.0",
    "/sys/devices/platform/goldfish_device_bus",
    "/sys/devices/platform/goldfish_events.0",
    "/sys/devices/platform/goldfish_fb.0",
    "/sys/devices/platform/goldfish_mmc.0",
    "/sys/devices/platform/goldfish_nand.0",
    "/sys/devices/platform/goldfish_pdev_bus",
    "/sys/devices/platform/goldfish_tty.0",
    "/sys/devices/platform/goldfish_tty.1",
    "/sys/module/goldfish_audio",
    "/system/etc/init.goldfish.sh",
    "/system/lib/hw/audio.primary.goldfish.so",
    "/system/lib/hw/camera.goldfish.jpeg.so",
    "/system/lib/hw/camera.goldfish.so",
    "/system/lib/hw/camera.ranchu.jpeg.so",
    "/system/lib/hw/camera.ranchu.so",
    "/system/lib/hw/gps.goldfish.so",
    "/system/lib/hw/gps.ranchu.so",
    "/system/lib/hw/gralloc.goldfish.so",
    "/system/lib/hw/gralloc.ranchu.so",
    "/system/lib/hw/lights.goldfish.so",
    "/system/lib/hw/power.goldfish.so",
    "/system/lib/hw/sensors.goldfish.so",
    "/system/lib/hw/sensors.ranchu.so",
    "/system/lib/hw/vibrator.goldfish.so",
    "/ueventd.goldfish.rc",
    "/ueventd.ranchu.rc",
    "ueventd.nox.rc",
    "ueventd.andy.rc",
    "init.nox.rc",
    "ueventd.android_x86.rc",
    "x86.prop",
    "ueventd.ttVM_x86.rc",
    "init.ttVM_x86.rc",
    "fstab.ttVM_x86",
    "fstab.vbox86",
    "init.vbox86.rc",
    "ueventd.vbox86.rc",
    "qemu_pipe"
]

const SystemProperties = Java.use("android.os.SystemProperties")
SystemProperties.get.overload("java.lang.String").implementation = function (str) {
    if (str in config_dict) {
        var msg = {
            "id": "{REPLACE_THIS}",
            "m": "SystemProperties.get() called with arg:" + str,
            "t": Date.now()
        }
        msg = JSON.stringify(msg, null, 4)
        send({ level: "AntiEmu:", message: msg })
        return config_dict[str]
    }
    else { return SystemProperties.get.call(this, str) }
}

// Manually modifying Build.* parameters
const Build = Java.use("android.os.Build")
Build.ID.value = "OSM1.180201.031"
Build.DISPLAY.value = "OSM1.180201.031"
Build.PRODUCT.vaule = "bullhead"
Build.DEVICE.value = "bullhead"
Build.BOARD.value = "bullhead"
Build.MANUFACTURER.value = "LGE"
Build.BRAND.value = "google"
Build.MODEL.value = "Nexus 5X"
Build.BOOTLOADER.value = "BHZ32c"
Build.RADIO.value = "M8974A-2.0.50.2.22"
Build.HARDWARE.value = "batwing"
Build.SERIAL.value = "092b66c20de7cf01"
Build.TYPE.value = "user"
Build.TAGS.value = "release-keys"
Build.FINGERPRINT.value = "google/bullhead/bullhead:8.1.0/OSM1.180201.031/5455776:user/release-keys"


// Hooking isUserAMonkey to always return false
const ActivityManager = Java.use("android.app.ActivityManager")
ActivityManager.isUserAMonkey.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "isUserAMonkey()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return false
}

ActivityManager.isRunningInTestHarness.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "isRunningInTestHarness()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return false
}

const Debug = Java.use("android.os.Debug")
Debug.isDebuggerConnected.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "isDebuggerConnected()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return false
}

const TelephonyManager = Java.use("android.telephony.TelephonyManager")
TelephonyManager.getDeviceId.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "getDeviceId()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })

    var retval = TelephonyManager.getLine1Number.apply(this, arguments)
    return "release-key"
}

TelephonyManager.getNetworkOperatorName.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "getNetworkOperatorName()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return "asdasdasdasdasdasda"
}

TelephonyManager.getSimOperator.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "getSimOperator()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return "asdasdasdasdasdasda"
}

TelephonyManager.getLine1Number.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "getLine1Number()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return "+40712345678"
}

TelephonyManager.getSubscriberId.overload().implementation = function () {
    var msg = {
        "id": "{REPLACE_THIS}",
        "m": "getLine1Number()",
        "t": Date.now()
    }
    msg = JSON.stringify(msg, null, 4)
    send({ level: "AntiEmu", message: msg })
    return "1212121212"
}

const file = Java.use("java.io.File")
file.exists.overload().implementation = function () {
    var name = file.getName.call(this)
    if (files_to_hide.includes(name)) {
        var msg = {
            "id": "{REPLACE_THIS}",
            "m": "exists() called on: " + name,
            "t": Date.now()
        }
        msg = JSON.stringify(msg, null, 4)
        send({ level: "AntiEmu", message: msg })
        return false
    }
    return this.exists.call(this)
}

// Dodging checks for actual file
native_methods.forEach(fnc => {
    Interceptor.attach(Module.findExportByName(null, fnc), {
        onEnter: function (args) {
            var str
            var flag = true
            try {
                str = Memory.readUtf8String(args[0])
            }
            catch (e) {
                str = ""
                flag = false
            }

            if (flag == true) {
                if (str.includes("frida") | files_to_hide.includes(str)) {
                    var msg = {
                        "id": "{REPLACE_THIS}",
                        "m": "hidden " + str,
                        "t": Date.now()
                    }
                    msg = JSON.stringify(msg, null, 4)
                    send({ level: "AntiEmu", message: msg })

                    try {
                        var buf = Memory.allocUtf8String("/a/b/c")
                        this.buf = buf
                        args[0] = buf
                    }
                    catch (e) {
                        send({ level: "error", message: "could not override arguments when hooking read/write funcitons" })
                    }
                }
            }
        },
        onLeave: function (args) {
        }
    })
})