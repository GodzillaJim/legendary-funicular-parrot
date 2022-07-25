import { KafkaConsumer } from './kafka';
import config from '../../common/config';
import { cat } from 'shelljs';
import logger from '../../common/logger';
import { IContactForm } from './mailer/types';
import { Mailer } from './mailer';

const TOPIC = config.kafka.topic;
const run = async () => {
  try {
    const kafka = new KafkaConsumer();
    const consumer = kafka.getConsumer();
    await consumer.connect();
    await consumer.subscribe({
      topic: TOPIC,
    });
    await consumer.run({
      eachMessage: async ({ message }) => {
        if (message && message.value) {
          const value = message.value.toString();
          const form: IContactForm = JSON.parse(value);
          await Mailer.sendMail({ ...form });
        }
      },
    });
  } catch (e) {
    logger.error(e);
  }
};

export default run;
