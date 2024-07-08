import { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import Modal from '../../components/Modal/Modal'
import { useData } from '../../contexts/DataContext'
import Style from './Home.module.css'

function Home() {
  const { videos = [], categories = [], banner = [], deleteVideo } = useData()
  const [modalOpen, setModalOpen] = useState(false)

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleCardEdit = () => {
    setModalOpen(true)
  }

  const handleDelete = id => {
    deleteVideo(id)
  }

  return (
    <>
      <main className={Style.main}>
        <Banner data={banner} />
        {categories.map(category => (
          <Category
            key={category.id}
            datos={category}
            cards={videos.filter(video => video?.category === category.name)}
            onCardEdit={handleCardEdit}
            OnCardDelete={handleDelete}
          />
        ))}
      </main>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </>
  )
}

export default Home
