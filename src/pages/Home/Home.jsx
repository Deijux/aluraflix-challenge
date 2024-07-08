import { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Category from '../../components/Category/Category'
import Modal from '../../components/Modal/Modal'
import { useData } from '../../contexts/DataContext'
import Style from './Home.module.css'

function Home() {
  const {
    videos = [],
    categories = [],
    banner = [],
    editVideo,
    deleteVideo,
  } = useData()
  const [modalOpen, setModalOpen] = useState(false)
  const [cardOpen, setCardOpen] = useState(null)

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleCardEdit = video => {
    setCardOpen(video)
    setModalOpen(true)
  }

  const handleDelete = id => {
    deleteVideo(id)
  }

  const handleUpdate = cardUpdated => {
    editVideo(cardUpdated.id, cardUpdated)
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
      <Modal
        cardActive={cardOpen}
        isOpen={modalOpen}
        onClose={handleModalClose}
        onUpdate={handleUpdate}
        categories={categories}
      />
    </>
  )
}

export default Home
