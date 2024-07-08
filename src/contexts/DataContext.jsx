import { createContext, useState, useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}

const URL_VIDEOS_API = 'http://localhost:3000/videos'
const URL_CATEGORIES_API = 'http://localhost:3000/categorias'
const URL_BANNER_API = 'http://localhost:3000/banner'

function DataProvider({ children }) {
  const [videos, setVideos] = useState([])
  const [categories, setCategories] = useState([])
  const [banner, setBanner] = useState([])

  const fetchVideos = async () => {
    try {
      const res = await fetch(URL_VIDEOS_API)
      const data = await res.json()
      setVideos(data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchCategories = async () => {
    try {
      const res = await fetch(URL_CATEGORIES_API)
      const data = await res.json()
      setCategories(data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchBanner = async () => {
    try {
      const res = await fetch(URL_BANNER_API)
      const data = await res.json()
      setBanner(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchCategories()
    fetchBanner()
  }, [])

  useEffect(() => {
    fetchVideos()
  }, [videos])

  const postVideo = async video => {
    try {
      const res = await fetch(URL_VIDEOS_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(video),
      })
      const data = await res.json()
      setVideos([...videos, setVideos(data)])
    } catch (error) {
      console.error(error)
    }
  }

  const deleteVideo = async id => {
    try {
      await fetch(`${URL_VIDEOS_API}/${id}`, {
        method: 'DELETE',
      })
      setVideos(videos.filter(video => video.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <DataContext.Provider
      value={{ videos, categories, banner, postVideo, deleteVideo }}
    >
      {children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DataProvider
