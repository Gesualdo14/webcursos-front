import { useRouter } from "next/router"
import { config } from "../constants/config"
import PayPalButtons from "./ui/PayPalButtons"
import { isPast } from "date-fns"

const CourseVideo = ({
  videoUrl,
  isAuthenticated,
  hasBoughtTheCourse,
  howManySales,
  isFree,
  courseId,
  coursePrice,
  setCourse,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || isFree

  const router = useRouter()

  let price =
    howManySales < 25
      ? (coursePrice * 0.385).toFixed(0)
      : (coursePrice * 0.55).toFixed(0)
  const offerExpirationDate = new Date(2022, 10, 14, 14, 4)

  if (isPast(offerExpirationDate)) {
    price = coursePrice
  }

  return (
    <div
      className="df aic jcc mt20 br5"
      style={{
        overflow: "hidden",
        height: "28rem",
        boxShadow: "0 2px 10px rgba(255,255,255,0.2)",
      }}
    >
      {couldWatch && (
        <video
          src={videoUrl}
          style={{ width: "100%", height: "100%" }}
          controls
        ></video>
      )}

      {!couldWatch && !isAuthenticated && (
        <p>
          Para visualizar el curso primero deberías{" "}
          <u className="cursorp" onClick={() => router.push("/login")}>
            inciar sesión
          </u>
        </p>
      )}
      {!couldWatch && isAuthenticated && (
        <div className="df aic fdc">
          <p>Para visualizar este video primero deberías adquirir el curso</p>

          <PayPalButtons price={2} courseId={courseId} setCourse={setCourse} />
        </div>
      )}
    </div>
  )
}

export default CourseVideo
