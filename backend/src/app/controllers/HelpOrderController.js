import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

class HelpOrderController {
  async index(req, res) {
    const { id } = req.params;

    const helpOrder = await HelpOrder.findAll({
      where: { student_id: id },
    });

    return res.json(helpOrder);
  }

  async post(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number().required(),
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, question } = req.body;

    const validStudent = await Student.findByPk(student_id);

    if (!validStudent)
      return res.status(401).json({ error: "This student doesn't exist!" });

    const addHelp = await HelpOrder.create({
      student_id,
      question,
    });

    return res.json(addHelp);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      student_id: Yup.number(),
      help_orders_id: Yup.number(),
      answer: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { student_id, help_order_id } = req.params;
    const { help_orders_id, answer } = req.body;

    if (!help_order_id) {
      return res.status(400).json({ error: 'Id invalid' });
    }

    const student = await Student.findByPk(student_id);

    const help_order = await HelpOrder.findByPk(help_order_id);

    const helpAnswer = new Date();

    const setAnswer = await help_order.update({
      student,
      help_order: help_orders_id,
      answer,
      answer_at: helpAnswer,
    });

    /*
    await Queue.add(RegistrationMail.key, {
      registrationComplete,
    }); */

    return res.json(setAnswer);
  }
}

export default new HelpOrderController();
