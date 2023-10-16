import React from 'react'
import Header from './component/Header';
import Body from './component/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const App = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header/>
      <Body/>
    </div>
    </Provider>
  )
}

export default App