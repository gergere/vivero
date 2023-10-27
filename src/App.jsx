import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import'./normalize.css'
import NavBar from './layout/navBar'
import Footer from './layout/footer'
import CardCatContainer from './components/CardCatContainer'
import CardContainer from './components/cardContainer'
import FormPlanta from './components/Form/FormPlanta'
import FormCarga from './components/Form/FormCarga'
import FormProducto from './components/Form/FormProducto'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<CardCatContainer />} />
          <Route path='/productos/:cat' element={<CardContainer />} />
          <Route path='/formCarga' element={<FormCarga/>} />
          <Route path='/formCarga/planta' element={ <FormPlanta/> } />
          <Route path='/formCarga/producto' element={ <FormProducto/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
