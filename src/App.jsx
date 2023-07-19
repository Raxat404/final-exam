import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Products from "./components/Products/Products"
import Meal from "./components/Meal/Meal"
import Favourites from "./components/Favourites/Favpurites"
import Search from "./components/Search/Search"
import FilterArea from "./components/FilterArea/FilterArea"
import Footer from "./components/Footer/Footer"
import LoadingPage from "./components/LoadingPage/LoadingPage"
import {useEffect, useState} from "react"
function App() {
  const [isLoading, setLoading] = useState(true)
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(!isLoading)
  //   }, 4000)
  // }, [Home])
  
  // if(isLoading){
  //   return <LoadingPage />
  // }
  
  
  
  return (
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:name" element={<Products />} />
              <Route path="/meal/:id" element={<Meal />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path='/search' element={<Search />} />
              <Route path='/filterArea/:area' element={<FilterArea />} />
            </Routes>
            <Footer />
          </div>
        </Router>
  )
}

export default App
