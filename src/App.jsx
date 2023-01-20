import Products from './components/Products'
import ProductForm from './components/ProductForm'

function App() {
  return (
    <div className="px-10 pb-10">
      <ProductForm />
      <hr className='max-w-[975px] mx-auto' />
      <h2 className='text-center text-2xl py-5'>Added Products</h2>

      <div className='flex flex-wrap gap-10 justify-center'>
        <Products />
      </div>
    </div>
  )
}

export default App
