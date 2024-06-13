
import './App.css'
//import Pokedex from "./components/Pokedex/Pokedex"
import CustomRoute from "./routes/CustomRoute"
//import Search from "./components/Search/Search"
import { Link } from 'react-router-dom'
function App() {
  

  return (
   <>
   <h1>Pokemon Details</h1>
   <h1 id="pokedex-heading">
<Link to="/">Pokemon</Link>

   </h1>
  <CustomRoute/>
   </>
  )
}

export default App

