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
          {userCover !== null && userCover !== '' ? (
            <Avatar size="large" src={userCover} />
          ) : (
            // <Avatar size="large" icon={<UserOutlined />} />
            <Avatar size="large">{username[0].toUpperCase()}</Avatar>
          )}
        </a>
        <p>{username}</p>
      </div>
    </div>
  )
}
