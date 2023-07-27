const admin = require("firebase-admin");
// dotenv
require("dotenv").config();

// Replace the following with your Firebase admin SDK configuration
const serviceAccount = require(process.env.FIREBASE_ADMIN_SDK_CONFIG_PATH);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Function to send an FCM message with payload data
async function sendFCMMessage(deviceToken, title, body, payloadData) {
  let message = {
    data: payloadData, // Add the payload data here
    token: deviceToken,
  };

  if (title != "" && body != "") {
    message.notification = {
      title: title,
      body: body,
    };
  }

  try {
    const response = await admin.messaging().send(message);
    console.log("Successfully sent FCM message:", response);
    return response;
  } catch (error) {
    console.error("Error sending FCM message:", error.message);
    // throw error;
  }
}

module.exports = {
  sendFCMMessage,
};