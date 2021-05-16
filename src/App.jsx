import React from 'react'
import 'antd/dist/antd.css'; 
import { Affix,Button } from 'antd';


function App() {
  return (
    <div className="App">
      <Affix offsetTop={10}>
        <Button type="primary">
          Affix top
        </Button>
      </Affix>
    </div>
  );
}

export default App;
