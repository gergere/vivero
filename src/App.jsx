import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './layout/navBar'
import Footer from './layout/footer'
import CardCatContainer from './components/CardCatContainer'
import CardContainer from './components/cardContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<CardCatContainer />} />
          <Route path='/productos/:cat' element={<CardContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
