import React from 'react'
import { Outlet } from 'react-router-dom'
import './App.css' // Por si tienes estilos globales aquí

function App() {
  return (
    <div className="app-container">
      {/* Si en el futuro quieres un Footer o Navbar global para TODAS las páginas, iría aquí */}
      <Outlet /> 
    </div>
  )
}

export default App;