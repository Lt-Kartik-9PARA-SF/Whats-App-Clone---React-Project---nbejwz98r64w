import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import LeftSection from './Components/LeftSection';
import RightSection from './Components/RightSection';
import { createContext } from 'react';
import data from './Components/data';
export const UserContext = createContext();
function App() {

  const [appData, setAppData] = useState(data);

  //useEffect(() => {
  //  setAppData(data)
  //npm }, [appData]);


  return (
    <UserContext.Provider value={appData}>
      <div className='page'>
        <RightSection setAppData={setAppData} />
      </div>
    </UserContext.Provider>

  );
}

export default App;

