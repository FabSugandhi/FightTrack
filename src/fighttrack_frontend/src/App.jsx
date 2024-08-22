import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import CategorySelection from './CategorySelection'
import NewEntry from './NewEntry'
import NavBar from './NavBar'

const App = () => {
  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategorySelection />} />
          <Route path="/entry">
              <Route path = "new/:cat_id" element={<NewEntry />} />
          </Route>
          <Route path="*" element={<h3>Page not found!</h3>} />
        </Routes>
      {/* <Home />
      <CategorySelection />
      <NewEntry /> */}
    </>
  )
}

export default App