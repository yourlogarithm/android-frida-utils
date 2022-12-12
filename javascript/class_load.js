const ClassLoader = Java.use('java.lang.ClassLoader');
const loadClass = ClassLoader.loadClass;
const target_class_name = '__class_load_target_name__';
if (target_class_name) {
    loadClass.overload('java.lang.String').implementation = function (name) {
        const loadedClass = this.loadClass(name);
        console.log(name);
        if (name === target_class_name) {
            console.log('Found target class:' + name);
            console.log('Fields:');
            const fields = loadedClass.getDeclaredFields();
            for (let i = 0; i < fields.length; i++) {
                console.log('\t' + fields[i].toString());
            }
            const methods = loadedClass.getDeclaredMethods();
            console.log('Methods:');
            for (let i = 0; i < methods.length; i++) {
                console.log('\t' + methods[i].toString());
            }
        }
        return loadedClass;
    };
} else {
    loadClass.overload('java.lang.String').implementation = function (name) {
        console.log('loadClass: ' + name);
        return this.loadClass(name);
    };
}