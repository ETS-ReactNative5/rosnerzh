import React from 'react'

// Video steteless component;
function Video({src}) {

  return (
    <video
      autoPlay
      loop
      playsInline
      muted
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video
