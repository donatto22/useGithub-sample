const useGithub = () => {
    const API = 'https://api.github.com/users'

    async function getProfile(username) {
        const datos = await fetch(`${API}/${username}`)
        const perfil = await datos.json()

        return {
            perfil
        }
    }

    return {
        getProfile
    }
}

export default useGithub