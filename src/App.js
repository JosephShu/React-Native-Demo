import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import {NavigationContainer} from '@react-navigation/native';
import AppMenu from './navigator/AppMenu';

export const ReactContext = React.createContext();

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.warn(err.message);
      });
  }, []);

  return (
    <NavigationContainer>
      <ReactContext.Provider value={data}>
        <AppMenu />
      </ReactContext.Provider>
    </NavigationContainer>
  );
};

export default App;
