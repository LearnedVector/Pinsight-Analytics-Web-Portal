import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const OverviewUser = (props) => {
  return (
      <div className={`container ${css(styles.OverviewUserContainer)}`}>
        <div className={`${css(styles.alignCenter)}`}><h5>Users</h5></div>
        <div className="twelve columns">
          <h6 className="six columns"><strong>Total Users</strong></h6>
          <h6 className={`six columns ${css(styles.alignRight)}`} ><strong>{props.data.TotalUsers.toLocaleString()}</strong></h6>
        </div>
        <div className="twelve columns">
          <h6 className="six columns"> <strong>New Users</strong></h6>
          <h6 className={`six columns ${css(styles.alignRight)}`}>
            <strong className={ props.data.isNewUsersMoreThenLastWeek ? css(styles.colorGreen) : css(styles.colorRed)}>
              {props.data.NewUsers.toLocaleString() } 	&nbsp;
              ({props.data.isNewUsersMoreThenLastWeek ?  '+' : '-'}{props.data.NewUsersPercentLastWeekDifference}%)
            </strong>
          </h6>
        </div>
        <div className="twelve columns">
          <h6 className="six columns"><strong> Active Users </strong></h6>
          <h6 className={`six columns ${css(styles.alignRight)}`}>
            <strong className={ props.data.isActiveUsersMoreThenLastWeek ? css(styles.colorGreen) : css(styles.colorRed)}>
              {props.data.ActiveUsers.toLocaleString() } 	&nbsp;
              ({props.data.isActiveUsersMoreThenLastWeek ?  '+' : '-'}{props.data.ActiveUsersPercentLastWeekDifference}%)
            </strong>
          </h6>
        </div>
        <div className={css(styles.alignCenter)}>
          <h6 className="six columns"><strong> Past 5 weeks </strong></h6>
          <Sparklines data={props.data.Sparklines}>
            <SparklinesLine color="#FFA000" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>
      </div>
  );
}

export default OverviewUser;

const styles = StyleSheet.create({

  OverviewUserContainer: {
    flex: 3,
    borderBottom: '1px solid #D8D8D8',
  },
  alignCenter: {
    textAlign: 'center'
  },
  alignRight: {
    textAlign: 'right'
  },
  colorRed: {
    color: '#D32F2F'
  },
  colorGreen: {
    color: '#4CAF50'
  }
})
