import Image from "next/image"
import { useEffect, useState } from "react"
import CourseCard from "../components/CourseCard"
import Header from "../components/Header"
import PayPalButtons from "../components/ui/PayPalButtons"
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
            &ldquo;<span className="main-word">Vive</span> como si fueras a
            morir mañana, <br /> <span className="main-word">aprende</span> como
            si fueras a vivir por siempre.&rdquo;
          </h1>
          <div className="df aic asfe" style={{ marginRight: "5rem" }}>
            <span className="mr5">- Mahatma Gandhi</span>
            <div
              className="posr oh cursorp ml5"
              style={{
                width: "1.75rem",
                height: "1.75rem",
                borderRadius: "1.75rem",
              }}
            >
              <Image src={"/gandhi.jpg"} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        <h2 className="mt20 tdu" style={{ marginTop: "5rem" }}>
          CURSOS
        </h2>
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

        .main-word {
          background: linear-gradient(rgb(58, 255, 65), rgb(15, 120, 2));
          -webkit-background-clip: text;
          color: transparent;
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
