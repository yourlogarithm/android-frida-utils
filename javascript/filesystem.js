const File = Java.use("java.io.File");
File.$init.overload('java.lang.String').implementation = function (path) {
    console.log("File created: " + path);
    return this.$init(path);
};
File.$init.overload('java.lang.String', 'java.lang.String').implementation = function (path, name) {
    console.log("File created: " + path + "/" + name);
    return this.$init(path, name);
};
File.$init.overload('java.io.File', 'java.lang.String').implementation = function (parent, name) {
    console.log("File created: " + parent + "/" + name);
    return this.$init(parent, name);
};
File.$init.overload('java.net.URI').implementation = function (uri) {
    console.log("File created: " + uri);
    return this.$init(uri);
};


const OutputStream = Java.use("java.io.OutputStream");
OutputStream.write.overload('[B').implementation = function (bytes) {
    console.log("Written to file: " + bytes);
    console.log(bytes);
    return this.write(bytes);
};
OutputStream.write.overload('[B', 'int', 'int').implementation = function (bytes, offset, length) {
    console.log("Written to file: " + bytes);
    console.log(bytes);
    return this.write(bytes, offset, length);
};
OutputStream.write.overload('int').implementation = function (byte) {
    console.log("Written to file: " + byte);
    console.log(byte);
    return this.write(byte);
};