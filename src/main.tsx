import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

// Document Object Model (DOM) - representação do HTML através do JavaScript

// sempre que o typescript disser que um elemento pode não existir e você quiser provar que ele vai sim existir, coloca-se um ponto de exclamação (!)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
