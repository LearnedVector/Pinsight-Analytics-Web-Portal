import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

class HeaderTabs extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={css(styles.container)}>
        <Link to="/" className={css(styles.nonActive)} activeClassName={css(styles.active)} onlyActiveOnIndex={true} >
          Users
        </Link>
        <Link to="/sessions" className={css(styles.nonActive)}  activeClassName={css(styles.active)} >
          Sessions
        </Link>
        <Link to="/events" className={css(styles.nonActive)} activeClassName={css(styles.active)} >
          Events
        </Link>
      </div>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:200
  },
  active: {
    padding: '0 0 0',
    border: 0,
    color: '#000000',
    borderBottomStyle: 'solid',
    borderColor: '#30AFEF',
    borderRadius: 0,
    borderBottomWidth: 5,
    textDecoration: 'none'
  },
  nonActive: {
    border:0,
    padding: '0 0 0',
    color: '#7B7B7B',
    textDecoration: 'none'
  }
})

export default HeaderTabs;
