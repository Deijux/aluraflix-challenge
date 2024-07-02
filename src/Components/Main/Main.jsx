import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Style from './Main.module.css'

function Main() {
  return (
    <main className={Style.main}>
      <Banner />
      <Category title='FRONT END' />
      <Category title='BACK END' />
      <Category title='INNOVACIÓN Y GESTIÓN' />
    </main>
  )
}

export default Main
