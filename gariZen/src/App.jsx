import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Sell from './pages/Sell'
import Spares from './pages/Spares'
import Navbar from './components/Navbar'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import About from './pages/About'
import Signin from './pages/Signin'
import WishList from './pages/WishList'
import Navmain from './components/Navmain'
import AppContextProvider from './context/AppContext'
import { QueryClient, QueryClientProvider} from 'react-query'
import CarDescription from './pages/CarDescription'

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={new QueryClient()}>
    <AppContextProvider>
      <div className='text-base bg-white w-full h-screen'>
        <Navbar />
        <Navmain />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/cars' element={ <Cars /> } />
          <Route path='/sell' element={<Sell />} />
          <Route path='/spares' element={ <Spares /> } />
          <Route path='/faqs' element={ <FAQ /> } />
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/signin' element={ <Signin /> } />
          <Route path='/wishlist' element={ <WishList /> } />
          <Route path='/description' element={ <CarDescription /> } />
        </Routes>
      </div>
    </AppContextProvider>
    </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App