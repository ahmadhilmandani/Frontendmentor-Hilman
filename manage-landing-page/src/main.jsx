import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navbar, Footer } from "./UIComponents";
import {Landing, ManageDifferences, Feedback} from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('nav')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('landing')).render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('manage-differences')).render(
  <React.StrictMode>
    <ManageDifferences />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('feedback')).render(
  <React.StrictMode>
    <Feedback />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)