import "../styles/globals.css"
import { useReducer, createContext, useEffect } from "react"

export const AuthContext = createContext()

const initialState = {
  isAuthenticated: false,
  user: null,
  jwt: null,
}

const reducer = (state, action) => {
  console.log({ action })
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("jwt", action.payload.jwt)
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
      }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    case "SET_LOGGED_USER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        jwt: action.payload.jwt,
      }

    default:
      return state
  }
}

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const user = localStorage.getItem("user")
    const jwt = localStorage.getItem("jwt")
    console.log({ jwt })
    if (!!jwt || !!user) {
      dispatch({ type: "SET_LOGGED_USER", payload: { user, jwt } })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
