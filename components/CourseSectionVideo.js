const CourseSectionVideo = ({
  video,
  setSelectedVideo,
  isAuthenticated,
  hasBoughtTheCourse,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || video.free

  console.log({ couldWatch })

  return (
    <div className="df aic p5 cursorp" onClick={() => setSelectedVideo(video)}>
      {couldWatch && <i className="fa-solid cviolet fa-circle-play mh5" />}
      {!couldWatch && <i className="fa-solid fa-lock cred mh5" />}
      <span style={{ fontSize: "0.9rem" }}>{video.title}</span>
    </div>
  )
}

export default CourseSectionVideo
