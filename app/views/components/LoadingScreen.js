import React, { Component } from 'react';
import Spinner from 'react-spinkit';
import { StyleSheet, css } from 'aphrodite';

export default () => {
  return (
    <div className={css(styles.Loadercontainer)}>
      <Spinner spinnerName='three-bounce' noFadeIn/>
    </div>
  )
}

const styles = StyleSheet.create({
  Loadercontainer: {
    marginTop: 350,
    color: 'blue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  }
})
