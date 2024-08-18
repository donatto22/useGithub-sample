import { Route, Routes } from "react-router-dom"
import AppOutlet from "./AppOutlet"

import Home from '../pages/Home'
import Nosotros from '../pages/Nosotros'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={ <AppOutlet /> } >
            <Route index element={ <Home /> } />
            <Route path="nosotros" element={ <Nosotros /> } />
        </Route>
    </Routes>
  )
}

export default AppRouter