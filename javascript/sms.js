const SmsMangaer = Java.use('android.telephony.SmsManager');

function logSmsSent(destination, body) {
    console.log('SmsSent:\n')
    console.log('\tdestination: ' + destination);
    console.log('\tbody: ' + body);
};

// SmsManager.sendDataMessage.overload(
//     'java.lang.String', 
//     'java.lang.String', 
//     'short', 
//     'byte[]', 
//     'android.app.PendingIntent', 
//     'android.app.PendingIntent'
// ).implementation = function (destinationAddress, scAddressm, destinationPort, data, sentIntent, deliveryIntent) {
//     logSmsSent(destinationAddress, data);
//     return this.sendDataMessage(destinationAddress, scAddressm, destinationPort, data, sentIntent, deliveryIntent);
// };

// SmsManager.sendMultimediaMessage.overload(
//     'android.content.Context',
//     'android.net.Uri',
//     'java.lang.String',
//     'android.os.Bundle',
//     'android.app.PendingIntent'
// ).implementation = function (context, contentUri, locationUrl, configOverrides, sentIntent) {
//     logSmsSent(locationUrl, contentUri);
//     return this.sendMultimediaMessage(context, contentUri, locationUrl, configOverrides, sentIntent);
// };

// SmsManager.sendMultipartTextMessage.overload(
//     'java.lang.String',
//     'java.lang.String',
//     'java.util.List<java.lang.String>',
//     'java.util.List<PendingIntent>',
//     'java.util.List<PendingIntent>',
//     'long'
// ).implementation = function (destinationAddress, scAddress, parts, sentIntents, deliveryIntents, messageId) {
//     logSmsSent(destinationAddress, parts);
//     return sendMultipartTextMessage(destinationAddress, scAddress, parts, sentIntents, deliveryIntents, messageId);
// };

// SmsManager.sendMultipartTextMessage.overload(
//     'java.lang.String',
//     'java.lang.String',
//     'java.util.List<java.lang.String>',
//     'java.util.List<PendingIntent>',
//     'java.util.List<PendingIntent>',
// ).implementation = function (destinationAddress, scAddress, parts, sentIntents, deliveryIntents) {
//     logSmsSent(destinationAddress, parts);
//     return sendMultipartTextMessage(destinationAddress, scAddress, parts, sentIntents, deliveryIntents);
// };

// SmsManager.sendMultipartTextMessage.overload(
//     'java.lang.String',
//     'java.lang.String',
//     'java.util.List<java.lang.String>',
//     'java.lang.String',
//     'java.lang.String',
// ).implementation = function (destinationAddress, scAddress, parts, sentIntents, deliveryIntents, packageName, attributionTag) {
//     logSmsSent(destinationAddress, parts);
//     return sendMultipartTextMessage(destinationAddress, scAddress, parts, sentIntents, deliveryIntents, packageName, attributionTag);
// };

SmsManager.sendTextMessage.overload(
    'java.lang.String',
    'java.lang.String',
    'java.lang.String',
    'android.app.PendingIntent',
    'android.app.PendingIntent',
    'long'
).implementation = function (destinationAddress, scAddress, text, sentIntent, deliveryIntent, messageId) {
    logSmsSent(destinationAddress, text);
    return this.sendTextMessage(destinationAddress, scAddress, text, sentIntent, deliveryIntent, messageId);
};

SmsManager.sendTextMessage.overload(
    'java.lang.String',
    'java.lang.String',
    'java.lang.String',
    'android.app.PendingIntent',
    'android.app.PendingIntent'
).implementation = function (destinationAddress, scAddress, text, sentIntent, deliveryIntent) {
    logSmsSent(destinationAddress, text);
    return this.sendTextMessage(destinationAddress, scAddress, text, sentIntent, deliveryIntent);
};

const BroadcastReceiver = Java.use('android.content.BroadcastReceiver');

BroadcastReceiver.onReceive.overload('android.content.Context', 'android.content.Intent').implementation = function (context, intent) {
    console.log('Sms receieved by app');
    return this.onReceive(context, intent);
}
