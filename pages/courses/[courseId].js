import { useRouter } from "next/router"
import CourseCard from "../../components/CourseCard"
import Header from "../../components/Header"

const CoursePage = () => {
  const router = useRouter()
  const {courseId} = router.query

  const course = JSON.parse(localStorage.getItem(courseId))
    
  return <div>
    <Header />
    <div className="mt20">

    <CourseCard course={course}/>
    </div>
    
    </div>
}

export default CoursePage
