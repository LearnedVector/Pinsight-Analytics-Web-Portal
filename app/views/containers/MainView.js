import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoadingScreen from '../components/LoadingScreen';
import UserView from '../components/UserView';
import SessionView from '../components/SessionView';

import { fetchFromGraphQL } from '../../actions/FetchAction'
import { testUserQueries, testSessionQueries } from '../../testGraphQLQuries';
import {
  STARTING_REQUEST_USER,
  FINISHED_REQUEST_USER,
  STARTING_REQUEST_SESSION,
  FINISHED_REQUEST_SESSION
} from '../../actions/actionTypes';

class MainView extends Component {
  constructor(props){
    super(props)

    this.renderCharts = this.renderCharts.bind(this)
    this.renderLoadingScreen = this.renderLoadingScreen.bind(this)
  }

  componentWillMount(){
    this.props.fetchFromGraphQL(testUserQueries, STARTING_REQUEST_USER, FINISHED_REQUEST_USER)
    this.props.fetchFromGraphQL(testSessionQueries, STARTING_REQUEST_SESSION, FINISHED_REQUEST_SESSION)
  }

  componentDidUpdate(){
  }

  componentWillReceiveProps(){
    // console.log('willreceive', this.props.location.pathname)
  }

  render(){
    if(this.props.UserData.isFetching == true)
      return (this.renderLoadingScreen())
    else
      return (this.renderCharts())
  }

  renderCharts(){
    const pathName = this.props.location.pathname;
    if (pathName === "/" )
      return(<UserView chartOption={{width: 450}} data={this.props.UserData.data.data.UserData} />)
    else if (pathName === "/sessions")
      return(<SessionView chartOption={{width: 900}} data={this.props.SessionData.data.data.SessionData}/>)
  }

  renderLoadingScreen(){
    return(
      <div>
        <LoadingScreen />
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    UserData: state.UserData,
    SessionData: state.SessionData
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFromGraphQL }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
