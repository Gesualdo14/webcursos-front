const CourseSectionVideo = ({
  index,
  video,
  setSelectedVideo,
  isAuthenticated,
  hasBoughtTheCourse,
  isSelected,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || video.free

  console.log({ isSelected })

  return (
    <div className="df aic p5 cursorp" onClick={() => setSelectedVideo(video)}>
      {couldWatch && (
        <i
          className={
            "fa-solid fa-circle-play mh5 " +
            (isSelected ? " cgreen" : " cviolet")
          }
        />
      )}
      {!couldWatch && <i className="fa-solid fa-lock cred mh5" />}
      <span style={{ fontSize: "0.9rem" }}>{video.title}</span>
    </div>
  )
}

export default CourseSectionVideo
