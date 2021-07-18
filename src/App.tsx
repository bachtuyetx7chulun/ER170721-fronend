import React from 'react'
import './App.css'
import { useTranslation } from 'react-i18next'
import Temp from './components/Temp'
import './locales/i18n'
import Demo from './components/Demo'

function App() {
  const { i18n } = useTranslation()
  return (
    <div className="app">
      <button onClick={() => i18n.changeLanguage('en')} type="button">
        Change to english
      </button>
      <button onClick={() => i18n.changeLanguage('vi')} type="button">
        Chuyển sang tiếng việt
      </button>
      <Temp />
      <Demo />
    </div>
  )
}

export default App
