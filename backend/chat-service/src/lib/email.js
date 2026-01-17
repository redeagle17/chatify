import { publishToQueue } from "./rabbitmq.js";

export const sendOtpEmail = async (email, otp) => {
  try {
    const message = {
      to: email,
      subject: "OTP for Chatify Login",
      otp: otp,
    };

    await publishToQueue("send-otp", message);
  } catch (error) {
    console.error("Error publishing OTP email to queue:", error);
    throw new Error("Failed to publish OTP email to queue");
  }
};

export const sendWelcomeEmail = async (email, fullName) => {
  try {
    const message = {
      to: email,
      name: fullName
    };

    await publishToQueue("send-welcome-email", message);
  } catch (error) {
    console.error("Error publishing welcome email to queue:", error);
    throw new Error("Failed to publish welcome email to queue");
  }
};
