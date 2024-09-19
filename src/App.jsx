import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import AdminPage from './pages/AdminPage'
import AllRecipesPage from './pages/AllRecipesPage'
import OneRecipePage from './pages/OneRecipePage'
import { useState } from 'react'

const recipesData = [
  { id: '1', name: 'Pizza', instructions: 'Cook it and eat it' },
  { id: '2', name: 'Tacos', instructions: 'Buy it and eat it' },
  { id: '3', name: 'Tiramisu', instructions: 'Just eat it' },
]

function App() {
  const [recipes] = useState(recipesData)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/recipes' element={<AllRecipesPage recipes={recipes} />} />
        <Route path='/recipes/:recipeId' element={<OneRecipePage recipes={recipes} />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </>
  )
}

export default App
