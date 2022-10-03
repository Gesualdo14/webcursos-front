import { useContext, useEffect } from "react"
import { useRouter } from "next/router"
import { AuthContext } from "./_app"

const profile = () => {
  const { state, dispatch } = useContext(AuthContext)

  const router = useRouter()

  useEffect(() => {
    if (router.query.login_info) {
      const login_info = JSON.parse(router.query.login_info)

      dispatch({
        type: "LOGIN",
        payload: login_info,
      })
      router.replace("/profile")
    }
  }, [router.query?.login_info])

  return <div>profile</div>
}

export default profile
