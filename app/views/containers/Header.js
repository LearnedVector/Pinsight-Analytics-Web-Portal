import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';

import HeaderTabs from '../components/HeaderTabs'

class Header extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={css(styles.container)}>
        <div className={css(styles.topContainer)}>
          <div className="ten columns">
            <img src="./images/Logo.png" className={css(styles.logo)} />
          </div>
          {/*<div className="two columns">
            <div className={css(styles.logo)}>
            This is where the app selector goes
            </div>
          </div>*/}
        </div>
        <div className={css(styles.tabContainer)}>
          <HeaderTabs  />
        </div>
        <div className={css(styles.line)}></div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: .001,
    flexDirection: 'column',
    // border: '2px solid blue'
  },
  topContainer: {
    flex:6
  },
  logo: {
    marginLeft:20,
    marginTop: 10,
    height: 30,
    marginBottom: 10
  },
  tabContainer: {
    flex:1,
    marginLeft: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#D8D8D8',
    marginLeft: 15,
    marginRight: 15
  }
})

export default Header;
