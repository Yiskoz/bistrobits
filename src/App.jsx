import MainScreen from './components/MainScreen';
import HomePage from './components/HomePage';
import { useState } from 'react';

function App() {
  const [homepageState, setHomepageState] = useState(false);

  return (
    <>
        <MainScreen setHomepageState={setHomepageState}/>
        <HomePage homepageState={homepageState}/>
    </>
      
  )
}

export default App
