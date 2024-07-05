import { useEffect, useState } from 'react'
import Banner from '../../Components/Banner/Banner'
import Category from '../../Components/Category/Category'
import Modal from '../../Components/Modal/Modal'
import categoryData from '../../data/CategoryData'
import Style from './Home.module.css'

function Home() {
  const [categories, setCategories] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleCardEdit = () => {
    setModalOpen(true)
  }

  useEffect(() => {
    setCategories(categoryData)
  }, [])

  return (
    <>
      <main className={Style.main}>
        <Banner />
        {categories.map(category => (
          <Category
            key={category.id}
            datos={category}
            onCardEdit={handleCardEdit}
          />
        ))}
      </main>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </>
  )
}

export default Home
