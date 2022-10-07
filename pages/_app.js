import "../styles/globals.css"
import { useReducer, createContext, useEffect } from "react"

export const AuthContext = createContext()

const initialState = {
  alreadyChecked: false,
  isAuthenticated: false,
  user: null,
  jwt: null,
}

const reducer = (state, action) => {
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
      window.location = "/"
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    case "SET_LOGGED_USER":
      return {
        ...state,
        alreadyChecked: action.payload.alreadyChecked,
        isAuthenticated: action.payload.isAuthenticated,
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
    const user = JSON.parse(localStorage.getItem("user"))
    const jwt = localStorage.getItem("jwt")

    if (!!jwt || !!user) {
      dispatch({
        type: "SET_LOGGED_USER",
        payload: { user, jwt, isAuthenticated: true, alreadyChecked: true },
      })
    } else {
      dispatch({
        type: "SET_LOGGED_USER",
        payload: {
          user: null,
          jwt: null,
          isAuthenticated: false,
          alreadyChecked: true,
        },
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default MyApp
