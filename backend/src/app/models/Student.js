import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.NUMERIC,
        height: Sequelize.NUMERIC,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
