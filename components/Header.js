import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "../pages/_app"
import Button from "./ui/Button"

const Header = ({ isLoginPage }) => {
  const {
    state: { isAuthenticated },
    dispatch,
  } = useContext(AuthContext)

  const router = useRouter()

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" })
  }

  console.log({ isLoginPage })

  return (
    <>
      <div
        className="df aic jcsb w100p p5"
        style={{
          backgroundColor: "var(--blackDark)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        <h1 className="cursorp" onClick={() => router.push("/")}>
          🧠 Feed Him Well
        </h1>
        {!isAuthenticated && !isLoginPage && (
          <Button
            text="Iniciar sesión"
            onClick={() => router.push("/login")}
            color="violet"
          />
        )}
        {isAuthenticated && (
          <Button text="Cerrar sesión" onClick={handleLogout} color="violet" />
        )}
      </div>
    </>
  )
}

export default Header
