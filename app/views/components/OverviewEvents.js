import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Sparklines, SparklinesLine,SparklinesReferenceLine } from 'react-sparklines';

const OverViewEvents = (props) => {
  return (
    <div className={`container ${css(styles.OverviewEventsContainer)}`}>
      <div className={css(styles.alignCenter)}><h5>Events</h5></div>
      <div className="twelve columns">
        <h6 className="six columns"><strong>Total Events</strong></h6>
        <h6 className={`six columns ${css(styles.alignRight)}`} ><strong>{props.data.TotalEvents.toLocaleString()}</strong></h6>
      </div>
      <div className="twelve columns">
        <h6 className="six columns"> <strong>This Week</strong></h6>
        <h6 className={`six columns ${css(styles.alignRight)}`}>
          <strong className={ props.data.isThisWeekEventsMoreThenLastWeek ? css(styles.colorGreen) : css(styles.colorRed)} >
            {props.data.ThisWeekEvents.toLocaleString() } 	&nbsp;
            ({props.data.isThisWeekEventsMoreThenLastWeek ?  '+' : '-'}{props.data.ThisWeekEventsPercentLastWeekDifference}%)
          </strong>
        </h6>
      </div>
      <div className="twelve columns">
        <h6 className="six columns"><strong> Most Popular Event </strong></h6>
        <h6 className={`six columns ${css(styles.alignRight)}`}><strong>{props.data.MostPopularEvent}</strong></h6>
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

export default OverViewEvents;

const styles = StyleSheet.create({
  OverviewEventsContainer: {
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
