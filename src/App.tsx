
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Modal from './components/Modal';
import { productList } from './data';
const App = () => {

  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const renderProduct = productList.map(product => (<Card product={product}  />))


  return (
    <main className='container mx-auto'>
      <Button width='w-full' className="  bg-green-500 " onClick={openModal}>Add</Button>

      <section className=' grid p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3'>
        {renderProduct}

      </section>

      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h3>hi</h3>
          
      </Modal>
    </main>
  )
}

export default App
