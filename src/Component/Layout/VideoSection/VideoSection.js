import React from 'react'
import './VideoSection.css'
import Videocard from '../../Cards/VideoCard/Videocard'
import video from '../../Assest/video/production_id_4057917 (2160p).mp4'
function VideoSection() {
  const data=[
    {video:video},
    {video:video},
    {video:video},
    {video:video},
    {video:video},
  ]
  return (
    <div className='videosection'>
        <div className="videosection_heading">
            <h3>Videos</h3>
        </div>
        <div className="videosection_video">
          {data?.map((item)=>(<Videocard videoUrl={item?.video}/>))}
            

        </div>
    </div>
  )
}

export default VideoSection