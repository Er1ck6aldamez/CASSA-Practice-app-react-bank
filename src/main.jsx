import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './pages/MainPage'
import { Dashboard } from './pages/Dashboard'
import { GraphicLine } from './hooks/GraphicLine'
import { CustomCollapse2 } from './pages/CustomCollapse2'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
