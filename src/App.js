import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Spin } from 'antd'

//styles
import './App.css'

//components
import Navbar from './components/Navbar'
import Post from './components/Post'

function App() {
  const [isPending, setIsPending] = useState(false)
  const [data, setData] = useState({ feeds: [] })
  const getData = async () => {
    setIsPending(true)
    const { data } = await axios.get(
      `https://run.mocky.io/v3/a210a8f1-530c-42f1-b46f-25bd65d558fa`
    )
    setData(data)
    setIsPending(false)
  }

  useEffect(() => {
    getData()
  }, [])
  const { feeds } = data
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <p>Hello</p>
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
