//import DB from '../db';
import Sessions from '../testdata/sessions';
import Events from '../testdata/events';
import Devices from '../testdata/devices';
import { Event, Session, Device, UserData, SessionData } from './types'

import { userTestData, sessionTestData } from '../testdata/usableTestData';
//import EventsFunctions from './QueryFunctions/eventsQuery'

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query Object',
  fields: () => ({
    events: {
      type: new GraphQLList(Event),
      args: {
        id:{
          type: GraphQLInt
        }
      },
      //DB.models.events.findAll({where: args})
      resolve: (_, args) => Events
    },
    devices: {
      type: new GraphQLList(Device),
      args: {},
      resolve: (_,args) => Devices
    },
    sessions: {
      type: new GraphQLList(Session),
      args: {},
      resolve: (_,args) => Sessions
    },
    UserData: {
      type: UserData,
      resolve: (_,args) => userTestData
    },
    SessionData: {
      type: SessionData,
      resolve: (_,args) => sessionTestData
    }
  })
})

const Schema = new GraphQLSchema({
  query: RootQuery
});

export default Schema;

// EventsData.findAll({
//   where: { id: 11}
// })
// .then(function(events) {
//   console.log(events.forEach((events)=> events.id))
// })
//DB.models.events.findAll().then((events) => events.forEach((inst) => console.log(inst.get())))

// DB.models.events.findAll()
// .then(function(events){
//   return console.log([...events])
// })

// DB.models.events.findById(11)
// .then((event)=> console.log(event))
