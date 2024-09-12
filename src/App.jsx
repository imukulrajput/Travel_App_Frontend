import './App.css'
import { Home,SingleHotel,SearchResult} from './pages'
import {Route,Routes} from "react-router-dom"
import { Filter } from './components'

function App() {
  

  return (
    <Routes>
       <Route path="/" element={<Home></Home>}/>
       <Route path="/hotels/:name/:address/:id/reserve" element={<SingleHotel></SingleHotel>}></Route>
       <Route path="/hotels/:address" element={<SearchResult></SearchResult>}></Route>

    </Routes>
  )
}

export default App
