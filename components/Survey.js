import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../pages/_app"
import Swal from "sweetalert2"
import router from "next/router"
import { config } from "../constants/config"

const Survey = ({ survey }) => {
  const {
    state: { isAuthenticated, token },
  } = useContext(AuthContext)
  const [answer, setAnswer] = useState("")

  const handleAnswer = async (answerText) => {
    if (!isAuthenticated) {
      const { isConfirmed } = await Swal.fire({
        title: "UPS",
        html: "Para votar, primero debes iniciar sesión",
        confirmButtonText: "Iniciar sesión",
        showCancelButton: true,
        cancelButtonText: "No quiero",
        icon: "info",
      })
      if (isConfirmed) {
        router.push("/login")
      }
      return
    }

    const res = await fetch(
      `${config.BASE_BACKEND_URL}/surveys/${survey._id}/answer`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ text: answerText }),
      }
    )

    const { ok } = await res.json()
    if (ok) {
      setAnswer(answerText)
    }
  }

  useEffect(() => {
    fetch(`${config.BASE_BACKEND_URL}/surveys/${survey._id}/answer`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log({ data })
        setAnswer(data)
      })
  }, [])

  return (
    <>
      <div className="survey-container">
        <h2 className="m0 tac mb10">{survey.title}</h2>
        {survey.possibleAnswers.map((pa) => (
          <div
            className={`possible-answer ${
              answer === pa.text ? "selected" : ""
            }`}
            onClick={() => handleAnswer(pa.text)}
            key={pa._id}
          >
            <p className="fs12 m0">{pa.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .survey-container {
          display: flex;
          flex-direction: column;
          border-radius: 1rem;
          background-color: white;
          color: var(--black);
          padding: 1rem;
          width: 20rem;
          margin-bottom: 2rem;
        }

        .possible-answer {
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 0.3rem;
          margin-bottom: 0.75rem;
          cursor: pointer;
        }

        .possible-answer:hover {
          color: white;
          background-color: var(--blue);
        }

        .selected {
          color: white;
          background-color: var(--blue);
        }
      `}</style>
    </>
  )
}

export default Survey
