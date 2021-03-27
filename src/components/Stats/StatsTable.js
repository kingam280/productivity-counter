import React, { useReducer } from 'react';
import Record from './Record'
import Loading from '../Loading/Loading'

const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      console.log(state.stop, action.length)
      if(state.stop >= action.length - 1) return state
      return {start: state.start + 5, stop: state.stop + 5};
    case 'prev':
      if (state.start === 0) return state
      return {start: state.start - 5, stop: state.stop - 5};
    default:
      throw new Error();
  }
}

export default function StatsTable({ records, loading }) {
  const [state, dispatch] = useReducer(reducer, {
    start: 0,
    stop: 4
  });

  const displayTable = () => {
    if (loading) {
      return <Loading />
    } else if (records.length > 0) {
      return (
        <>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Label</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {records.map( (record, index) => {
              if (index >= state.start && index <= state.stop) return <Record timestamp={record.timestamp} label={record.label} timeInMinutes={record.timeInMinutes} key={record.timestamp} />
              else return null 
            }) }
          </tbody>
        </table>
        <button className="go-to" onClick={() => dispatch({type: 'prev'}) }>{`<`}</button>
        <button className="go-to" onClick={() => dispatch({type: 'next', length: records.length}) }>{`>`}</button>
        </>
      )
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Label</th>
              <th>Time</th>
            </tr>
          </thead>
        </table>
      )
    }
  }

  return (
    <div className="latest-sessions">
      <h3>Latest sessions</h3>
      {displayTable()}
      
    </div>
  );
}