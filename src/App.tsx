
import Card from './components/Card';
import { productList } from './data';
const App = () => {
  return (
    <main className='container mx-auto'>
      <section className=' grid p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3'>
    {
      productList.map(product=>(
        <Card product={product}/>

      ))
    }

      </section>
    </main>
  )
}

export default App
