const System = Java.use('java.lang.System');
const load = System.load;
const target_class_name = '__class_load_target_name__';
if (target_class_name) {
    load.overload('java.lang.String').implementation = function (name) {
        console.log(name);
        if (name === target_class_name) {
            console.log('Found target: ' + name);
        }
        return this.load(name);
    };
} else {
    load.overload('java.lang.String').implementation = function (name) {
        return this.load(name);
        console.log('loaded: ' + name);
    };
}