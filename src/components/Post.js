import { Avatar, Modal } from 'antd'
import { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'

//styles
import './Post.css'

export default function Post({ feed }) {
  const { username, userCover, image, comments } = feed
  const [tcomments, setTComments] = useState([])
  const [tcomment, setTComment] = useState('')

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

  //comments
  const postComment = (e) => {
    e.preventDefault()
    if (tcomment.length > 0) {
      setTComments([...tcomments, tcomment])
    }
    setTComment('')
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
              <h4 className="modal_uname">
                <strong>{comment.username}</strong>
              </h4>
              <h4>{comment.commentText}</h4>
            </div>
          ))}

          {tcomments &&
            tcomments.map((comment, index) => (
              <div className="post_header" key={index}>
                <Avatar
                  className="post_avater"
                  alt="avatar"
                  icon={<UserOutlined />}
                />
                <h4 className="modal_uname">
                  <strong>Username</strong>
                </h4>
                <h4>{comment}</h4>
              </div>
            ))}

          <form className="comment_box">
            <input
              className="modal_input"
              type="text"
              placeholder="Add a comment..."
              onChange={(e) => setTComment(e.target.value)}
              value={tcomment}
            />
            <button
              disabled={!tcomment}
              className="modal_button"
              type="submit"
              onClick={(e) => postComment(e)}
            >
              post
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}
