import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/courses`)
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
  console.log({ courses })
  return (
    <div className="df fdc aic jcc mt20 cursorp">
      <h1>🧠 Mi web de CURSOS - MERGE</h1>
      {courses.map((c) => (
        <div className="df fdc" style={{ width: "50rem" }} key={c._id}>
          <div
            className="df jcsb"
            style={{
              width: "50rem",
              backgroundColor: "white",
              padding: "0.75rem",
              borderRadius: "0.5rem",
            }}
          >
            <div
              style={{
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                marginRight: "1rem",
              }}
            >
              <Image
                src={c.thumbnail}
                alt="Picture of the author"
                width={150 * 1.77}
                height={150}
              />
            </div>
            <div className="df fdc" style={{ width: "60%" }}>
              <h3 className="cblack mv5">{c.name}</h3>
              <p className="cgrey m0">
                Este curso es ideal para aquellos que quieran ver un proceso
                REAL sobre el desarrollo de una aplicación, desde el momento
                CERO hasta que la misma se encuentra en producción 🚀.
              </p>
            </div>
          </div>
          <div
            className="mt20 br5"
            style={{
              overflow: "hidden",
              height: "28rem",
              boxShadow: "0 2px 10px rgba(255,255,255,0.2)",
            }}
          >
            <video
              src={c.videos[0].videoUrl}
              style={{ width: "100%", height: "100%" }}
              autoPlay
              controls
            ></video>
          </div>
        </div>
      ))}
    </div>
  )
}
