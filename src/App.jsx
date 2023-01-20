import Products from './components/Products'
import ProductForm from './components/ProductForm'

function App() {
  return (
    <div className="px-10 pb-10">
      <ProductForm />
      <hr className='max-w-[975px] mx-auto' />
      <div className='flex flex-col items-center justify-center gap-x-5 gap-y-5 sm:flex-row lg:ml-10'>
        <h2 className='text-center text-2xl py-5'>Added Products</h2>
        <div className='flex gap-x-2 items-center sm-max:-translate-y-5'>
          <span className='flex w-5 h-5 bg-slate-700 border'></span>
          <span>In stock</span></div>
        <div className='flex gap-x-2 items-center sm-max:-translate-y-5 '>
          <span className='flex w-5 h-5 bg-[#2E0219] border'></span>
          <span>Out of stock</span></div>
      </div>

      <div className='flex flex-wrap gap-10 justify-center'>
        <Products />
      </div>
    </div>
  )
}

export default App
