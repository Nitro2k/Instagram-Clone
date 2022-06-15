import { Avatar, Modal } from 'antd'
import { useState } from 'react'

//styles
import './Post.css'

export default function Post({ feed }) {
  const { username, userCover, image, comments } = feed

  //Modal
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <div className="post">
      <div className="post_header">
        <Avatar className="post_avater" alt="avatar" src={userCover} />
        <h3>{username}</h3>
      </div>

      <img className="post_image" src={image.url} alt="IG post" />
      <h4 className="post_text">
        <strong>{username}</strong>
        {image.caption}
        <div className="modal" onClick={showModal}>
          {comments.length !== 0 ? (
            <p>View all {comments.length} comments</p>
          ) : null}
        </div>
      </h4>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div className="post">
          <div className="post_header">
            <Avatar className="post_avater" alt="Yoi" src={userCover} />
            <h3>{username}</h3>
          </div>

          <img className="post_image" src={image.url} alt="IG post" />
          <h4 className="post_text modal">
            <strong>{username}</strong>
            {image.caption}
          </h4>
          {comments.map((comment, index) => (
            <div className="post_header" key={index}>
              <Avatar
                className="post_avater"
                alt="avatar"
                src={comment.userCover}
              />
              <h4 className="modal_uname">{comment.username}</h4>
              <h4>{comment.commentText}</h4>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  )
}
