import Homepage from "./components/Homepage"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Search from "./components/Search"
import MovieDetails from "./components/MovieDetails"



function App() {


  return (
 <>
<Router>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/details/:id' element={<MovieDetails/>}/>

</Routes>
</Router>
 </>
   
  )
}

export default App