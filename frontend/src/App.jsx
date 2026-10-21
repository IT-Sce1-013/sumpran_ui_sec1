import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nevber from './component/nevber.jsx'
import NewsCard from './component/NewCards.jsx'
import QuickServices from './component/QuickServices.jsx'
import AnnouncementsSection from './component/AnnouncementsSection.jsx'
import FooterSection from './component/FooterSection.jsx'
import ComplaintPage from './pages/ComplaintPage.jsx'
import GeneralInfoPage from './pages/GeneralInfoPage.jsx'

function HomePage() {
  return (
    <>
      <Nevber />
      <NewsCard />
      <QuickServices />
      <AnnouncementsSection />
      <FooterSection />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/general-info" element={<GeneralInfoPage />} />
      </Routes>
    </Router>
  )
}

export default App
