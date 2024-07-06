import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header/Header.jsx'
import Home from '../pages/Home/Home.jsx'
import NewVideo from '../pages/NewVideo/NewVideo.jsx'
import Footer from '../Components/Footer/Footer.jsx'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='newvideo' element={<NewVideo />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
