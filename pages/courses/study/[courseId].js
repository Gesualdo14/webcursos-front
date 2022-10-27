import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import CourseSectionVideo from "../../../components/CourseSectionVideo"
import CourseVideo from "../../../components/CourseVideo"
import Header from "../../../components/Header"
import Button from "../../../components/ui/Button"
import { Container } from "../../../components/ui/Container"
import { config } from "../../../constants/config"
import { AuthContext } from "../../_app"

const StudyPage = () => {
  const {
    state: { isAuthenticated, user, alreadyChecked, token },
  } = useContext(AuthContext)
  const router = useRouter()
  const { courseId } = router.query

  const [course, setCourse] = useState()
  const [selectedVideo, setSelectedVideo] = useState()
  const [refunding, setRefunding] = useState(false)
  const [openedSection, setOpenedSection] = useState(0)

  const handleRefund = async () => {
    setRefunding(true)
    const url = `${config.BASE_BACKEND_URL}/paypal/captures/${course.capture_id}/refund`
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
    const data = await res.json()
    setRefunding(false)
    if (data.ok) {
      setCourse((prevData) => ({ ...prevData, hasBoughtTheCourse: false }))
      Swal.fire("Listo", data.message, "success")
    } else {
      Swal.fire("UPS", data.message, "error")
    }
  }

  useEffect(() => {
    if (!!courseId && alreadyChecked) {
      const queryParams = !!user ? `?user_id=${user.sub}` : ""
      fetch(`${config.BASE_BACKEND_URL}/courses/${courseId}${queryParams}`)
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

  return (
    <>
      <Header />
      <Container>
        <div className="df sections-and-video-container">
          <div
            className="df fdc sections-container"
            style={{
              height: "100vh",
              backgroundColor: "var(--black)",
              width: "95%",
              margin: "0 auto",
            }}
          >
            <div className="df fdc" style={{ width: "100%" }}>
              {course?.sections?.map((section, index) => (
                <div
                  className="df fdc cursorp"
                  key={section.name}
                  onClick={() =>
                    setOpenedSection(openedSection === index ? 1000 : index)
                  }
                >
                  <div
                    className="df aic jcsb p10 mb5"
                    style={{
                      backgroundColor: "var(--blackDark)",
                      width: "100%",
                    }}
                  >
                    <div className="df aic">
                      <span className="mr5">{section.recordedAt}</span>
                      <span className="mr5">{section.name}</span>
                    </div>
                    <div className="df fdc aife">
                      <span
                        className=" fs8 cgrey tar"
                        title="Día real de grabación"
                      >
                        {section.recordingDay}
                      </span>
                      <span className=" fs8 cgrey tar" title="Duración">
                        {section?.realDuration?.text}
                      </span>
                    </div>
                  </div>
                  {openedSection === index && (
                    <div className="mb5">
                      {section.videos.map((video, index) => (
                        <CourseSectionVideo
                          key={video.title}
                          index={index}
                          video={video}
                          setSelectedVideo={setSelectedVideo}
                          isAuthenticated={isAuthenticated}
                          hasBoughtTheCourse={course.hasBoughtTheCourse}
                          isSelected={selectedVideo.title === video.title}
                        />
                      ))}
                      {section.videos.length === 0 && (
                        <p style={{ padding: "0 1rem" }}>
                          🔨 Sección en edición ...
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {!!selectedVideo && (
            <div
              className="video-section-container"
              style={{ minWidth: "100%" }}
            >
              <div className="df aic jcsb">
                <h3>{selectedVideo?.title}</h3>
                {!!course.capture_id && course.hasBoughtTheCourse && (
                  <Button color="red" onClick={handleRefund}>
                    {!refunding ? "Obtener reembolso" : "Reembolsando..."}
                  </Button>
                )}
              </div>
              <CourseVideo
                videoUrl={selectedVideo.videoUrl}
                isAuthenticated={isAuthenticated}
                isFree={!!selectedVideo.free}
                hasBoughtTheCourse={course.hasBoughtTheCourse}
                setCourse={setCourse}
                howManySales={course.howManySales}
                courseId={course._id}
                coursePrice={course.price}
                howManySectionsFinished={
                  course.sections.filter((s) => s.finished).length
                }
              />
            </div>
          )}
        </div>
      </Container>
      <style jsx>
        {`
          .video-section-container {
            padding: 0 1rem 0 2rem;
            width: 100%;
          }

          .sections-and-video-container {
            width: 70%;
          }
          .sections-container {
            min-width: 15rem;
          }
          @media screen (min-width: 800px) {
            .sections-container {
              min-width: 20rem;
            }
          }
          @media screen (max-width: 800px) {
            .sections-and-video-container {
              flex-direction: column-reverse;
              width: 100%;
            }

            .video-section-container {
              padding: 0 1rem 2rem 1rem;
            }
          }
        `}
      </style>
    </>
  )
}

export default StudyPage
