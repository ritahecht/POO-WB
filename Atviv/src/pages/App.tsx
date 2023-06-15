import './App.css';
import { Header, TabblesComp, InsertUserComp } from "../components"
import { RowsContextProps } from '../resources/context/RowsContext';
import { useState } from 'react';
import { RowsContext } from '../resources/context/RowsContext';

const App = () => {

  const [rowsData, setRowsData] = useState([])

  return (
    <div className='wrapperBody'>

      <div className='header'>
        <Header
          title='Header'
        />
      </div>

      <RowsContextProps.Provider value={[rowsData, setRowsData] as any}>
        <RowsContext.Provider value={rowsData}>

          <div className='wrapperButton'>
            <InsertUserComp />
          </div>

          <div className="appBody">
            <TabblesComp />
          </div>

        </RowsContext.Provider>
      </RowsContextProps.Provider>

    </div>
  );
}

export default App;
