import React from 'react'
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

export default (props) => {
  return (
    <tr>
      <td className={css(styles.TableRowPadding)}>
        <Link className={css(styles.Link)} to={{ pathname: `events/${props.id}`}} >
          {props.data.eventName}
        </Link>
      </td>
      <td className={css(styles.AlignCenter)} >{props.data.total}</td>
      <td className={css(styles.AlignCenter)} >{props.data.avgEventsDay}</td>
      <td className={css(styles.AlignCenter)} >{props.data.avgEventsSesh}</td>
    </tr>
  )
}

const styles = StyleSheet.create({
  TableRowPadding: {
    padding: 10,
  },
  AlignCenter: {
    textAlign: 'center'
  },
  Link: {
    cursor: 'pointer',
    textDecoration: 'none'
  }
})
