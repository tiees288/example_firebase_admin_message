const services = require('./service.js');

// Replace 'DEVICE_TOKEN', 'Notification Title', and 'Notification Body' with appropriate values
const deviceToken = "DEVICE_TOKEN";
// String or ""
const title = "";
const body = "";
const payloadData = {
  name: "John Doe",
};

services.sendFCMMessage(deviceToken, title, body, payloadData);