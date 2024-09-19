import Homepage from "./components/Homepage"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Search from "./components/Search"



function App() {


  return (
 <>
<Router>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/search' element={<Search/>}/>

</Routes>
</Router>
 </>
   
  )
}

export default App