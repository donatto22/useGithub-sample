import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

const AppOutlet = () => {
  return (
    <>
    <Header />
    {/* aside */}

    <Outlet />
    {/* /inicio /nosotros /perfil */}

    <div>Footer</div>
    </>
  )
}

export default AppOutlet