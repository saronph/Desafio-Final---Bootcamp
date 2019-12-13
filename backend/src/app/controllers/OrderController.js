// import * as Yup from 'yup';
import HelpOrder from '../models/HelpOrder';
// import Student from '../models/Student';

class OrderController {
  async index(req, res) {
    const { id } = req.params;

    const student_id = await HelpOrder.findAll({
      where: { student_id: id, answer: null },
    });

    return res.json(student_id);
  }

  async post(req, res) {
    const { answer, question } = req.body;
    const { order_id } = req.params;

    const helpAnswer = new Date();

    const answerCreate = await HelpOrder.create({
      question,
      order_id,
      answer,
      answer_at: helpAnswer,
    });

    return res.json({ answerCreate });
  }
}

export default new OrderController();
