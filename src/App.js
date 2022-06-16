import { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'
import axios from 'axios'

//styles
import './App.css'

//components
import Navbar from './components/Navbar'
import Post from './components/Post'
import Story from './components/Story'
import Upload from './components/Upload'

function App() {
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState({ feeds: [] })
  const [stories, setStories] = useState({ story: [] })

  const getData = async () => {
    setIsPending(true)

    const { data } = await axios.get(
      `https://run.mocky.io/v3/a210a8f1-530c-42f1-b46f-25bd65d558fa`
    )
    const data2 = await axios.get(
      'https://run.mocky.io/v3/f48649bf-2bfd-48db-9a64-5c8ad0646186'
    )

    setData(data)
    setStories(data2.data)

    setIsPending(false)
  }

  useEffect(() => {
    getData()
  }, [])

  const { feeds } = data
  const { story } = stories

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="story_header">
          {story && story.map((story, index) => <Story story={story} />)}
        </div>
        <Switch>
          <Route exact path="/">
            {isPending && (
              <Spin className="loading" tip="Loading" size="large" />
            )}
            {feeds &&
              feeds.map((feed, index) => (
                <Post feed={feed} key={feed.username + index} />
              ))}
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </Switch>
        <div className="phantom" />
        <div className="style">
          <button>+</button>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
