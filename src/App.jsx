import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ScrollToTop from './components/ScrollToTop'
// import Navbar from './Navbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop/>
      <Navbar/>
      <Outlet/>
    </QueryClientProvider>
  )
}

export default App