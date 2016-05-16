import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const OverviewSessions = (props) => {
  return (
    <div className={`${css(styles.OverviewSessionContainer)} container`}>
      <div className={css(styles.alignCenter)}><h5>Sessions</h5></div>
      <div className="twelve columns">
        <h6 className="six columns"><strong>Total Sesions</strong></h6>
        <h6 className={`six columns ${css(styles.alignRight)}`} ><strong>{props.data.TotalSessions.toLocaleString()}</strong></h6>
      </div>
      <div className="twelve columns">
        <h6 className="six columns"> <strong>This Week</strong></h6>
        <h6 className={`six columns ${css(styles.alignRight)}`}>
          <strong className={ props.data.isThisWeeksSessesionMoreThenLastWeek ? css(styles.colorGreen) : css(styles.colorRed)} >
            {props.data.ThisWeeksSession.toLocaleString() } 	&nbsp;
            ({props.data.isThisWeeksSessesionMoreThenLastWeek ?  '+' : '-'}{props.data.ThisWeeksSessesionPercentLastWeekDifference}%)
          </strong>
        </h6>
      </div>
      <div className="twelve columns">
        <h6 className="six columns"><strong> Most Sessions On </strong></h6>
        <h6 className={`six columns ${css(styles.alignRight)}`}><strong>{props.data.MostSessionOn}</strong></h6>
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

export default OverviewSessions;

const styles = StyleSheet.create({
  OverviewSessionContainer: {
    flex: 3,
    // border: '1px solid black'
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
