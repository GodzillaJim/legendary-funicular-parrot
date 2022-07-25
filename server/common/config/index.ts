import dotenv from 'dotenv';

dotenv.config();

export default {
  mailer: {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || '465', 10),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  },
  kafka: {
    bootstrapServerHost: process.env.KAFKA_BOOTSTRAP_SERVER || 'localhost:9092',
    port: process.env.KAFKA_PORT || 9092,
    clientId: process.env.KAFKA_CLIENT_ID,
    topic: process.env.TOPIC || 'collaborate_contact_form_messages',
  },
};
