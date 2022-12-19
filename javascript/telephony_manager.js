const TelephonyManager = Java.use("android.telephony.TelephonyManager");
TelephonyManager.getDeviceId.overload().implementation = function () {
    console.log("getDeviceId called");
    return this.getDeviceId();
}
TelephonyManager.getDeviceId.overload('int').implementation = function (slotIndex) {
    console.log("getDeviceId called");
    return this.getDeviceId(slotIndex);
}
TelephonyManager.getImei.overload().implementation = function () {
    console.log("getImei called");
    return this.getImei();
}
TelephonyManager.getImei.overload('int').implementation = function (slotIndex) {
    console.log("getImei called");
    return this.getImei(slotIndex);
}
TelephonyManager.getMeid.overload().implementation = function () {
    console.log("getMeid called");
    return this.getMeid();
}
TelephonyManager.getMeid.overload('int').implementation = function (slotIndex) {
    console.log("getMeid called");
    return this.getMeid(slotIndex);
}
TelephonyManager.getSubscriberId.overload().implementation = function () {
    console.log("getSubscriberId called");
    return this.getSubscriberId();
}
TelephonyManager.getSubscriberId.overload('int').implementation = function (slotIndex) {
    console.log("getSubscriberId called");
    return this.getSubscriberId(slotIndex);
}
TelephonyManager.getLine1Number.overload().implementation = function () {
    console.log("getLine1Number called");
    return this.getLine1Number();
}
TelephonyManager.getLine1Number.overload('int').implementation = function (slotIndex) {
    console.log("getLine1Number called");
    return this.getLine1Number(slotIndex);
}
TelephonyManager.getSimSerialNumber.overload().implementation = function () {
    console.log("getSimSerialNumber called");
    return this.getSimSerialNumber();
}
TelephonyManager.getSimSerialNumber.overload('int').implementation = function (slotIndex) {
    console.log("getSimSerialNumber called");
    return this.getSimSerialNumber(slotIndex);
}
TelephonyManager.getSimOperatorName.overload().implementation = function () {
    console.log("getSimOperatorName called");
    return this.getSimOperatorName();
}
TelephonyManager.getSimOperatorName.overload('int').implementation = function (slotIndex) {
    console.log("getSimOperatorName called");
    return this.getSimOperatorName(slotIndex);
}
TelephonyManager.getSimCountryIso.overload().implementation = function () {
    console.log("getSimCountryIso called");
    return this.getSimCountryIso();
}
TelephonyManager.getSimCountryIso.overload('int').implementation = function (slotIndex) {
    console.log("getSimCountryIso called");
    return this.getSimCountryIso(slotIndex);
}
TelephonyManager.getSimOperator.overload().implementation = function () {
    console.log("getSimOperator called");
    return this.getSimOperator();
}
TelephonyManager.getSimOperator.overload('int').implementation = function (slotIndex) {
    console.log("getSimOperator called");
    return this.getSimOperator(slotIndex);
}
TelephonyManager.getSimState.overload().implementation = function () {
    console.log("getSimState called");
    return this.getSimState();
}
TelephonyManager.getSimState.overload('int').implementation = function (slotIndex) {
    console.log("getSimState called");
    return this.getSimState(slotIndex);
}
TelephonyManager.getNetworkOperatorName.overload().implementation = function () {
    console.log("getNetworkOperatorName called");
    return this.getNetworkOperatorName();
}
TelephonyManager.getNetworkOperatorName.overload('int').implementation = function (slotIndex) {
    console.log("getNetworkOperatorName called");
    return this.getNetworkOperatorName(slotIndex);
}
TelephonyManager.getNetworkCountryIso.overload().implementation = function () {
    console.log("getNetworkCountryIso called");
    return this.getNetworkCountryIso();
}