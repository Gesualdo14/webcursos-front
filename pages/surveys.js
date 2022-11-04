import { useEffect, useState } from "react"
import Header from "../components/Header"
import Survey from "../components/Survey"
import { Container } from "../components/ui/Container"
import { config } from "../constants/config"

const SurveysPage = () => {
  const [surveys, setSurveys] = useState([])

  useEffect(() => {
    fetch(`${config.BASE_BACKEND_URL}/surveys`)
      .then((res) => res.json())
      .then(({ data }) => {
        setSurveys(data)
      })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="df fdc aic jcc w100p mt20">
          <h1 className="mb20">Preguntas</h1>
          {surveys.map((s) => (
            <Survey survey={s} key={s._id} />
          ))}
        </div>
      </Container>
    </>
  )
}

export default SurveysPage
