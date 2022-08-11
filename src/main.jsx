import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { firebaseConections } from './components/firebase/config'
import './index.scss'

firebaseConections()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
