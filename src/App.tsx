import React from 'react'
import './App.css'
import './locales/i18n'
import Title from './layouts/Title/Title'
import HomePage from './pages/common/HomePage/HomePage'

function App() {
  return (
    <div className="app">
      <Title />
      <HomePage />
    </div>
  )
}

export default App
