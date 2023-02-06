import { Twilio } from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const recieverNumber = process.env.RECIEVER_NUMBER;

const client = new Twilio(accountSid, authToken);
type product = {
  name: string;
  
};

export default async function sendSMS(checkProductStock: product[]): Promise<boolean> {
  const productNames: string[] = [];
  checkProductStock.forEach(function (obj) {
    productNames.push(obj.name);
  });
  const smsBody = productNames.toString();
  if (accountSid && authToken && recieverNumber && twilioNumber) {
    await client.messages
      .create({
        from: twilioNumber,
        to: recieverNumber,
        body: "The following products need restocking: " + smsBody,
      })
      .then((message) => console.log(message.sid));
      return true;
  } else {
    console.error("Missing one argument");
    return false;
  }
}
