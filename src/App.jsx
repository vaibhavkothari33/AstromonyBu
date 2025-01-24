import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
// import Navbar from './Navbar'
function App() {
  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App