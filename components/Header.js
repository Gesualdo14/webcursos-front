import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()

  const handleLogin = () => {
    fetch(`http://localhost:4000/auth/google`)
      .then((res) => {
        console.log({ res })
      })
      .catch((err) => console.log({ err }))
  }

  return (
    <div
      className="df aic jcsb w100p p5"
      style={{
        backgroundColor: "var(--blackDark)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      <h1 className="cursorp" onClick={() => router.back()}>
        🧠
      </h1>
      <button onClick={handleLogin}>Iniciar sessión</button>
    </div>
  )
}

export default Header
