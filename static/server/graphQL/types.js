import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

//below is how the database is structure
export const Event = new GraphQLObjectType({
  name: 'Event',
  description: 'app users events',
  fields: ()=> ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (events)=> events.id
    },
    viewName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.viewName
    },
    advertisingID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.advertisingID
    },
    appID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.appID
    },
    campaignID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.campaignID
    },
    publisherID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.publisherID
    },
    categoryName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.categoryName
    },
    actionName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.actionName
    },
    labelName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.labelName
    },
    value: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (events) => events.value
    }
  })
})

export const Device = new GraphQLObjectType({
  name: 'Device',
  description: 'Device from users',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (devices)=> devices.id
    },
    advertisingID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (devices) => devices.advertisingID
    },
    osVersion: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (devices) => devices.osVersion
    },
    model: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (devices) => devices.model
    },
    product: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (devices) => devices.product
    },
    manufacturer: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (devices) => devices.manufacturer
    },
    serviceProvider: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (devices) => devices.serviceProvider
    }
  })
})

export const Session = new GraphQLObjectType({
  name: 'Session',
  description: 'user sessions',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      resolve: (sessions)=> sessions.id
    },
    screenName: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (sessions) => sessions.screenName
    },
    sessionStart: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (sessions) => sessions.sessionStart
    },
    sessionEnd: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (sessions) => sessions.sessionEnd
    },
    advertisingID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (sessions) => sessions.advertisingID
    },
    appID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (sessions) => sessions.appID
    },
    publisherID: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (sessions) => sessions.publisherID
    }
  })
})

//Everything down is for testing purposes only
export const UserData = new GraphQLObjectType({
  name:'UserData',
  description: 'test data for development',
  fields: ()=> ({
    TotalUser: {
      type: new GraphQLNonNull(TotalUserData),
      resolve: (userTestData) => userTestData.TotalUserData
    },
    NewUserData: {
      type: new GraphQLNonNull(NewUserData),
      resolve: (userTestData) => userTestData.NewUserData
    },
    ActiveUserData: {
      type: new GraphQLNonNull(ActiveUserData),
      resolve: (userTestData) => userTestData.ActiveUserData
    }
  })
})

const TotalUserData = new GraphQLObjectType({
  name: 'TotalUserData',
  description: 'test data fro development',
  fields: ()=> ({
    title: {
      type: GraphQLString,
      resolve: (TotalUserData) => TotalUserData.title
    },
    total: {
      type: GraphQLInt,
      resolve: (TotalUserData) => TotalUserData.total
    },
    Chart: {
      type: Chart,
      resolve: (TotalUserData) => TotalUserData.ChartData
    }
  })
})

const NewUserData = new GraphQLObjectType({
  name:'NewUserData',
  description: 'test data for development',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: (NewUserData) => NewUserData.title
    },
    total: {
      type: GraphQLInt,
      resolve: (NewUserData) => NewUserData.total
    },
    Chart: {
      type: Chart,
      resolve: (NewUserData) => NewUserData.ChartData
    }
  })
})

const ActiveUserData = new GraphQLObjectType({
  name:'ActiveUserData',
  description: 'test data for development',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: (ActiveUserData) => ActiveUserData.title
    },
    total: {
      type: GraphQLInt,
      resolve: (ActiveUserData) => ActiveUserData.total
    },
    Chart: {
      type: Chart,
      resolve: (ActiveUserData) => ActiveUserData.ChartData
    }
  })
})

export const SessionData = new GraphQLObjectType({
  name: 'SessionData',
  description: 'test data for Sessions',
  fields: () => ({
    TotalSession: {
      type: TotalSession,
      resolve: (sessiontestData) => sessiontestData.TotalSession
    },
    SessionLength: {
      type: SessionLength,
      resolve: (sessiontestData) => sessiontestData.SessionLength
    }
  })
})

const TotalSession = new GraphQLObjectType({
  name: 'TotalSession',
  description: 'test data for development',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: (TotalSession) => TotalSession.title
    },
    total: {
      type: GraphQLInt,
      resolve: (TotalSession) => TotalSession.total
    },
    Chart: {
      type: Chart,
      resolve: (TotalSession) => TotalSession.ChartData
    }
  })
})

const SessionLength = new GraphQLObjectType({
  name: 'SessionLength',
  description: 'test data for development',
  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: (SessionLength) => SessionLength.title
    },
    total: {
      type: GraphQLInt,
      resolve: (SessionLength) => SessionLength.total
    },
    Chart: {
      type: Chart,
      resolve: (SessionLength) => SessionLength.ChartData
    }
  })
})

const Chart = new GraphQLObjectType({
  name: 'ChartData',
  description: 'test data for development',
  fields: () => ({
    labels: {
      type: new GraphQLList(GraphQLString),
      resolve: (ChartData) => ChartData.labels
    },
    series: {
      type: new GraphQLList(GraphQLInt),
      resolve: (ChartData) => ChartData.series[0]
    }
  })
})
