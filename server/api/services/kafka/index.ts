import dotenv from 'dotenv';
import { Kafka } from 'kafkajs';
import config from '../../../common/config';

dotenv.config();
const { clientId, bootstrapServerHost } = config.kafka;
export class KafkaConsumer {
  consumerId: string;
  kafka: Kafka;
  constructor() {
    this.consumerId = clientId || 'p@rrot';
    this.kafka = new Kafka({
      clientId: this.consumerId,
      brokers: [bootstrapServerHost],
    });
  }

  public getConsumer() {
    return this.kafka.consumer({ groupId: this.consumerId });
  }
}
