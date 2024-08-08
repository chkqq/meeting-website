import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainPage from './pages/main'
import SignInPage from './pages/signIn'
import SignUpPage from './pages/signUp'
import ProfileEditorPage from './pages/profileEditor'
import PeopleChoisePage from './pages/peopleChoise'
import MessengerPage from './pages/messenger'
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/my-profile" element={<ProfileEditorPage />} />
        <Route path="/people-choice" element={<PeopleChoisePage />} />
        <Route path="/messenger" element={<MessengerPage />} />
      </Routes>
    </Router>
  )
}

export default App
