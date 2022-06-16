import React from 'react'
import { Button } from 'antd'

//styles
import './Upload.css'

export default function Upload() {
  const handleChange = () => {
    console.log('handleChange')
  }
  return (
    <div className="upload">
      <input type="text" />
      <input type="file" onChange={handleChange} />
      <Button type="primary">Upload</Button>
    </div>
  )
}
