import { useEffect, useState } from "react"
import CourseCard from "../components/CourseCard"
import Header from "../components/Header"
import { config } from "../constants/config"

export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`${config.BASE_BACKEND_URL}/courses`)
      .then((res) => res.json())
      .then(({ ok, data }) => {
        if (ok) {
          setCourses(data)
        }
      })
      .catch((err) => {
        console.log({ err })
      })
  }, [])

  return (
    <>
      <div className="df fdc aic jcc">
        <Header />

        <div className="df fdc p5 tac mb5">
          <h1 className="main-title">
            &ldquo;Vive como si fueras a morir mañana, <br /> aprende como si
            fueras a vivir por siempre.&rdquo;
          </h1>
          <span className="asfe" style={{ marginRight: "4rem" }}>
            - Mahatma Gandhi
          </span>
        </div>

        <h2 className="mt20 tdu">CURSOS</h2>
        <div className="mt10">
          {courses.map((c) => (
            <CourseCard course={c} key={c._id} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .main-title {
          line-height: 3rem;
          font-size: 3rem;
          max-width: 60vw;
          font-weight: 400;
          font-family: cubano, sans-serif;
        }

        @media (max-width: 700px) {
          .main-title {
            max-width: 95vw;
          }
        }
      `}</style>
    </>
  )
}
