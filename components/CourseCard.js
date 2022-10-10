import Image from "next/image"
import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "../pages/_app"
import Swal from "sweetalert2"

const CourseCard = ({ course }) => {
  const { thumbnail, name, description, _id } = course

  const router = useRouter()

  const handleClick = () => {
    router.push(`/courses/study/${_id}`)
    localStorage.setItem(_id, JSON.stringify(course))
  }

  return (
    <>
      <div
        className="df jcsb cursorp card-container posr"
        onClick={handleClick}
      >
        <div
          style={{
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            width: `${15 * 1.77}rem`,
            height: `15rem`,
            overflow: "hidden",
          }}
        >
          <Image
            src={thumbnail}
            alt="Picture of the author"
            width={`${15 * 1.77}rem`}
            height={`15rem`}
            layout="responsive"
          />
        </div>
        <div className="df fdc card-body">
          <h3 className="cwhite mv5">{name}</h3>
          <p className="cgrey m0">{description}</p>
        </div>
      </div>

      <style jsx>
        {`
          .card-container {
            flex-direction: column;
            background-color: var(--black);
            width: ${15 * 1.77 + "rem"};
            border-radius: 0.5rem;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
            transition: transform 0.2s ease;
            margin: 0 auto;
          }

          .card-body {
            width: 100%;
            padding: 0.75rem;
            background-color: var(--black);
          }

          .card-container:hover {
            transform: scale(1.03);
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
          }
        `}
      </style>
    </>
  )
}

export default CourseCard
