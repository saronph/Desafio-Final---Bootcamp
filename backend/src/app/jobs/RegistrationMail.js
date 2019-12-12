import { format, parseISO } from 'date-fns';
import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { registrationComplete } = data;

    await Mail.sendMail({
      to: `${registrationComplete.student.name} <${registrationComplete.student.email}>`,
      subject: 'Registration completed successfully!',
      template: 'registration',
      context: {
        student: registrationComplete.student.name,
        plan: registrationComplete.plan.title,
        price: Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(registrationComplete.price),
        date: format(
          parseISO(registrationComplete.start_date),
          "MMMM dd'th', yyyy'"
        ),
        endDate: format(
          parseISO(registrationComplete.end_date),
          "MMMM dd'th', yyyy'"
        ),
      },
    });
  }
}

export default new RegistrationMail();
