import React from 'react';
import Record from './Record'
import Loading from '../Loading/Loading'

export default function StatsTable({ records, loading }) {

    const displayTable = () => {
      if (loading) {
        return <Loading />
      } else if (records.length > 0) {
        return (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Label</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {records.map( record => <Record timestamp={record.timestamp} label={record.label} timeInMinutes={record.timeInMinutes} key={record.timestamp} /> ) }
            </tbody>
          </table>
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