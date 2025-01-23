import ReactDOM from 'react-dom/client'
import React from 'react'
import { createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import HeroSection from './components/HeroSection/HeroSection'
import './index.css'
import GalleryGrid from './components/GalleryGrid/GalleryGrid'
import TeamSection from './components/Team/TeamSection'
import Events from './components/Events/Events'
import News from './components/News/News'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path ='' element={<HeroSection/>}/>
      <Route path ='team' element={<TeamSection/>}/>
      <Route path ='events' element={<Events/>}/>
      <Route path ='gallery' element={<GalleryGrid/>}/>
      <Route path ='news' element={<News/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
