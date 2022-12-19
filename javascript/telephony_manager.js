const TelephonyManager = Java.use("android.telephony.TelephonyManager");
TelephonyManager.getDeviceId.overload().implementation = function () {
    console.log("getDeviceId called");
    return this.getDeviceId();
};
TelephonyManager.getDeviceId.overload('int').implementation = function (slotIndex) {
    console.log("getDeviceId called");
    return this.getDeviceId(slotIndex);
};
TelephonyManager.getImei.overload().implementation = function () {
    console.log("getImei called");
    return this.getImei();
};
TelephonyManager.getSubscriberId.overload().implementation = function () {
    console.log("getSubscriberId called");
    return this.getSubscriberId();
};
TelephonyManager.getLine1Number.overload().implementation = function () {
    console.log("getLine1Number called");
    return this.getLine1Number();
};
TelephonyManager.getSimSerialNumber.overload().implementation = function () {
    console.log("getSimSerialNumber called");
    return this.getSimSerialNumber();
};
TelephonyManager.getSimOperatorName.overload().implementation = function () {
    console.log("getSimOperatorName called");
    return this.getSimOperatorName();
};
TelephonyManager.getSimCountryIso.overload().implementation = function () {
    console.log("getSimCountryIso called");
    return this.getSimCountryIso();
};
TelephonyManager.getSimOperator.overload().implementation = function () {
    console.log("getSimOperator called");
    return this.getSimOperator();
};
TelephonyManager.getSimState.overload().implementation = function () {
    console.log("getSimState called");
    return this.getSimState();
};
TelephonyManager.getNetworkOperatorName.overload().implementation = function () {
    console.log("getNetworkOperatorName called");
    return this.getNetworkOperatorName();
};
TelephonyManager.getNetworkCountryIso.overload().implementation = function () {
    console.log("getNetworkCountryIso called");
    return this.getNetworkCountryIso();
};