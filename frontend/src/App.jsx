import React, { useContext } from 'react'
import { AppContext } from './context/context'

import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  const {user } = useContext(AppContext)
  console.log(user)
  return (
    <div>
   <BrowserRouter>
   <AppRoutes/>
   </BrowserRouter>
    </div>
  )
}

export default App
