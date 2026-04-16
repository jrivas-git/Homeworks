import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProveedorAuth } from "./Context/AuthContext"
import Login from "./Paginas/Login"
import Inicio from "./Paginas/Inicio"
import "./App.css"

function App() {
  return (
    <ProveedorAuth>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </ProveedorAuth>
  )
}

export default App