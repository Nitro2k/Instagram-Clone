import { useState } from 'react'
import { Button } from 'antd'

//styles
import './Upload.css'

export default function Upload() {
  const [caption, setCaption] = useState('')

  const handleChange = () => {
    console.log('handleChange')
  }
  const handleUpload = () => {
    console.log('handleUpload')
  }
  return (
    <div className="upload">
      <input className="upload_fie" type="file" onChange={handleChange} />
      <input
        className="upload_caption"
        type="text"
        placeholder="Enter a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <Button type="primary" onClick={handleUpload}>
        Upload
      </Button>
    </div>
  )
}
