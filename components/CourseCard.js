import Image from "next/image"
import { useRouter } from "next/router"

const CourseCard = ({ course }) => {
  const { thumbnail, name, description, _id } = course

  const router = useRouter()

  const handleClick = () => {
    router.push(`/courses/${_id}`)
    localStorage.setItem(_id, JSON.stringify(course))
  }

  return (
    <>
      <div className="df jcsb cursorp card-container" onClick={handleClick}>
        <div
          style={{
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            marginRight: "1rem",
            width: `${150 * 1.77}px`,
          }}
        >
          <Image
            src={thumbnail}
            alt="Picture of the author"
            width={150 * 1.77}
            height={150}
          />
        </div>
        <div className="df fdc card-body">
          <h3 className="cblack mv5">{name}</h3>
          <p className="cgrey m0">{description}</p>
        </div>
      </div>

      <style jsx>
        {`
          .card-container {
            background-color: white;
            padding: 0.75rem;
            border-radius: 0.5rem;
            max-width: 40rem;
            transition: transform 0.2s ease;
          }

          .card-container:hover {
            transform: scale(1.03);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
          }

          .card-body {
            width: 60%;
          }

          @media (max-width: 800px) {
            .card-container {
              flex-direction: column;
              width: ${150 * 2 + "px"};
              margin: 0 auto;
            }

            .card-body {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default CourseCard
