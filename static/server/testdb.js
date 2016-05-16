import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const Conn = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})

Conn.authenticate()
    .then(() => console.log('CONNECTED!'))
    .catch((err) => console.log(err))
    .done()
    //
    // var User = Conn.define('user', {
    //   firstName: {
    //     type: Sequelize.STRING,
    //     field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
    //   },
    //   lastName: {
    //     type: Sequelize.STRING
    //   }
    // }, {
    //   freezeTableName: true // Model tableName will be the same as the model name
    // });
    //
    // User.sync({force: true}).then(function () {
    //   // Table created
    //   return User.create({
    //     firstName: 'John',
    //     lastName: 'Hancock'
    //   });
    // });


export default Conn;
