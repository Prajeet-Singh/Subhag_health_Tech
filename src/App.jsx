import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
       
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App