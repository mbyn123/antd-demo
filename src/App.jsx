import React from 'react'
import Dayjs from 'dayjs';
import DatePicker from './components/DatePicker'


const dateFormat = 'YYYY/MM/DD';
function App() {
  return (
    <div className="App">
     
      <DatePicker defaultValue={Dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    </div>
  );
}

export default App;
