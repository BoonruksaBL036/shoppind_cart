import React from 'react'
import Navbar from './components/Navbar'
import Page from './pages/Page'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>  
  )
}

export default App