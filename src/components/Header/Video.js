import React from 'react'

// Video steteless component;
function Video(props) {
  const videoSrc = {
    full: 'video/header-full.mp4',
    mob: 'video/header-mob.mp4',
  }

  return (
    <video
      autoPlay
      loop
      playsInline
      muted
    >
      <source src={videoSrc.full} type="video/mp4" />
    </video>
  )
}

export default Video
