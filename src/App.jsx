import Homepage from "./components/Homepage"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Search from "./components/Search"
import MovieDetails from "./components/MovieDetails"
import MovieTrailer from "./components/MovieTrailer"
import ByDecade from "./components/ByDecade"




function App() {


  return (
 <>
<Router>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/details/:id' element={<MovieDetails/>}/>
<Route path='/trailer/:id' element={<MovieTrailer/>}/>
<Route path='/decades/:year' element={<ByDecade/>} />


</Routes>
</Router>
 </>
   
  )
}

export default App