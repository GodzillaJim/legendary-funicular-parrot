import { IContactForm } from './types';
import nodemailer from 'nodemailer';
import config from '../../../common/config';
import getEmailTemplate from './html';
import logger from '../../../common/logger';

export class Mailer {
  public static async sendMail({
    subject,
    email,
    message,
    name,
  }: IContactForm) {
    const transporter = nodemailer.createTransport({
      ...config.mailer,
    });
    const mailerOptions = {
      from: 'Collabor@te <no-reply@collaborate.com>',
      to: 'jacksalazar100@gmail.com',
      subject,
      html: getEmailTemplate({ name, email, message, subject }),
    };

    try {
      await transporter.sendMail(mailerOptions);
    } catch (e) {
      logger.info(e);
    }
  }
}
