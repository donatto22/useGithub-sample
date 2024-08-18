import { useEffect, useState } from "react"
import useGithub from "../hooks/useGithub"

const Home = () => {
  const [profile, setProfile] = useState()
  const { getProfile } = useGithub()

  useEffect(() => {
    (async () => {
      const { perfil } = await getProfile('donatto22')
      setProfile(perfil)
    })()
  }, [])

  return (
    <div>Home
      {
        console.log(profile)
      }
    </div>
  )
}

export default Home