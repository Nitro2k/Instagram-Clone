import React from 'react'
import { Avatar } from 'antd'

//styles
import './Story.css'

export default function Story({ story }) {
  const { username, userCover, storyUrl } = story
  return (
    <div className="story">
      <div className="story_avatar">
        <a rel="noreferrer" target="_blank" href={storyUrl}>
          <Avatar size="large" src={userCover} />
        </a>
        <p>{username}</p>
      </div>
    </div>
  )
}
