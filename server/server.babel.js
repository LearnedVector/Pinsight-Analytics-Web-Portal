import express from 'express';
import GraphHTTP from 'express-graphql';
import graphQLSchema from './graphQL/graphQLSchema'
// import WebpackDevServer from 'webpack-dev-server'
// import config from '../webpack.config'
// import webpack from 'webpack'

// //saad testing section
// import { testFunction, anotherFunction} from './testdata/testQueries'; // test functions
//
// testFunction();
// anotherFunction();

// Config
const GraphQLServer_PORT = 8080;
const APP_PORT = 3000;

const app = express();
app
.use('/', express.static('static'))
.use('/graphql', GraphHTTP({
  schema: graphQLSchema,
  pretty: true,
  graphiql: true
}));
app.listen(process.env.PORT || APP_PORT, ()=>{
  console.log(`app is running on ${APP_PORT}`);
  });


// // GraphQL server set up
// const graphQLServer = express();
// graphQLServer.use('/graphql', GraphHTTP({
//   schema: graphQLSchema,
//   pretty: true,
//   graphiql: true
// }));
// graphQLServer.listen(GraphQLServer_PORT, ()=> {
//   console.log(`graphQLServer is running on ${GraphQLServer_PORT}`);
// });

// //Set up webpack some other time
// const app = new WebpackDevServer(webpack(config),{
//  proxy: {"/graphql": `http://localhost:${8080}`},
//  publicPath: "../static/",
//  stats: {colors: true}
// });
// app.use("/", express.static("static"));
// app.listen(APP_PORT);
