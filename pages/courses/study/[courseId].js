import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CourseVideo from "../../../components/CourseVideo"
import Header from "../../../components/Header"
import { config } from "../../../constants/config"

const StudyPage = () => {
  const router = useRouter()
  const { courseId } = router.query

  const [course, setCourse] = useState()
  const [selectedVideo, setSelectedVideo] = useState()

  useEffect(() => {
    if (!!courseId) {
      fetch(`${config.BASE_BACKEND_URL}/courses/${courseId}`)
        .then((res) => res.json())
        .then(({ ok, data }) => {
          if (ok) {
            setCourse(data)
            setSelectedVideo(data.sections[0].videos[0])
          }
        })
        .catch((err) => {
          console.log({ err })
        })
    }
  }, [courseId])

  console.log({ course })

  return (
    <>
      <Header />
      <div className="df aic">
        <div
          className="df fdc"
          style={{ height: "100vh", backgroundColor: "var(--blackDark)" }}
        >
          <h3 className="p10">SECCIONES del CURSO</h3>
          <div className="df fdc">
            {course?.sections?.map((section) => (
              <div className="df fdc">
                <div
                  className="p10 mb5"
                  style={{ backgroundColor: "var(--black)" }}
                >
                  <span>{section.name}</span>
                </div>
                <div className="mb5">
                  {section.videos.map((video) => (
                    <div
                      className="df aic p5 cursorp"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <span style={{ fontSize: "0.9rem" }}>{video.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p10" style={{ height: "100vh" }}>
          <h3>{selectedVideo?.title}</h3>
          <CourseVideo videoUrl={selectedVideo?.videoUrl} />
        </div>
      </div>
    </>
  )
}

export default StudyPage
