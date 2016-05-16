import Sequelize from 'sequelize';
import _ from 'lodash';

var connection = new Sequelize('pinsightmysql', 'bea949de0775fd', 'be094179', {
  dialect: 'mysql',
  host: 'us-cdbr-azure-central-a.cloudapp.net'
})

//check connection
connection.authenticate()
    .then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log(err);
    })
    .done();

const Event = connection.define('events',
{
  id: {
    type: Sequelize.BIGINT,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  viewName: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  advertisingID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  appID: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  campaignID: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  publisherID: {
    type: Sequelize.STRING,
    allowNULL: false
  },
  categoryName: {
    type: Sequelize.TEXT,
    allowNULL: false
  },
  actionName: {
    type: Sequelize.TEXT,
    allowNULL: false
  },
  labelName:  {
    type: Sequelize.STRING,
    allowNULL: false
  },
  value: {
    type: Sequelize.STRING,
    allowNULL: false
  }
}, {
  timestamps: false
})

export default connection;

// let log = function(inst){
//   console.dir(inst.get())
//   //eventsData.assign(inst.get())
// }
//Events.findAll().then((events) => events.forEach((inst) => console.log(inst.get())))

//connecting to the azure MySQL database
/*
const connection = mysql.createConnection({
  host: 'us-cdbr-azure-central-a.cloudapp.net',
  user: 'bea949de0775fd',
  password: 'be094179'
})

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.end()
*/

//connect to Azure databse using sequelize
