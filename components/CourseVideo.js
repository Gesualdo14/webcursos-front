import { useRouter } from "next/router"
import PayPalButtons from "./ui/PayPalButtons"
import { isPast } from "date-fns"

const CourseVideo = ({
  videoUrl,
  isAuthenticated,
  hasBoughtTheCourse,
  isFree,
  courseId,
  coursePrice,
  setCourse,
  howManySectionsFinished,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || isFree

  const router = useRouter()

  let price = Math.min(coursePrice, 12 + 1 * howManySectionsFinished)
  const offerExpirationDate = new Date(2022, 10, 14, 14, 4)

  if (isPast(offerExpirationDate)) {
    price = coursePrice
  }

  return (
    <div
      className="df aic jcc br5"
      style={{
        overflow: "hidden",
        width: "100%",
        height: "auto",
        boxShadow: "0 2px 10px rgba(255,255,255,0.2)",
      }}
    >
      {couldWatch && (
        <video
          id={courseId}
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
        <div className="df aic fdc" style={{ width: "90%" }}>
          <p>Para visualizar este video primero deberías adquirir el curso</p>

          <PayPalButtons
            coursePrice={coursePrice}
            price={price}
            courseId={courseId}
            setCourse={setCourse}
          />
        </div>
      )}
    </div>
  )
}

export default CourseVideo
