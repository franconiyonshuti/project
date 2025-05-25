import Register from "./register"
import Login from "./login"
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./home"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/register" element={<Register/>}/>
    </Routes>

    </>
      
  )
}

export default App
