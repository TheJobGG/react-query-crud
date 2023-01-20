import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createProduct } from '../productsApi.js'

function ProductForm() {

  const queryClient = useQueryClient()

  // Maneja el comportamiento para añadir un nuevo producto al archivo:
  // 
  // Cuando agregamos un producto nuevo se encarga de registrarlo en el .json y actualizar
  // el componente para mostrar el nuevo producto en pantalla
  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => queryClient.invalidateQueries('products')
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    const tags = splitTags(product.tags)
    product.tags = tags
    console.log(tags);

    addProductMutation.mutate({
      ...product, inStock: true
    })
    // e.target.reset();
  }

  const splitTags = (tags) => tags.split(',').map(tag => tag.trim()).filter(tag => tag != "")

  return (
    <div className="py-10 px-5">
      <h1 className='text-center text-2xl pb-5'>Add a new product</h1>
      <form onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-y-5 gap-x-12 lg-max:max-w-[500px] m-auto lg:flex-row lg:max-w-none"
      >
        <div className='flex flex-col gap-5'>

          {/* Input: Name */}
          <div className='flex flex-col'>
            <label htmlFor="name">Name</label>
            <input placeholder='Headphones' className='rounded-md text-black px-3 py-1' required type="text" name="name" id="name" />
          </div>


          {/* Price and Stock */}
          <div className='flex gap-5 lg-max:flex-col'>
            
            {/* Input: Price */}
            <div className='flex flex-col relative'>
              <label htmlFor="price">Price</label>
              <span className=' text-black absolute bottom-1 left-3'>$ </span>
              <input
                required
                className='rounded-md text-black px-6 py-1 '
                placeholder='200'
                type="number"
                name="price"
                id="price"
              />
            </div>

            {/* Input: inStock */}
            <div className='flex flex-col'>
              <label htmlFor="stock">In stock</label>
              <input
                required
                className='rounded-md text-black px-3 py-1'
                placeholder='200'
                type="number"
                name="stock"
                id="stock"
              />
            </div>
          </div>


          {/* Input: Tags */}
          <div className='flex flex-col'>
            <label htmlFor="tags">Tags</label>
            <input placeholder='Divide, Tags, By Commas' className='rounded-md text-black px-3 py-1' required type="text" name="tags" id="tags" />
          </div>
          <button className="bg-teal-600 border border-white py-1 rounded-md lg-max:hidden hover:opacity-75 transition-opacity" type='submit'>Add product</button>
        </div>

        <div className='flex flex-col gap-x-11 gap-y-5'>
          {/* Input: Category */}
          <div className='flex flex-col'>
            <label htmlFor="category">Category</label>
            <input placeholder='Electronics' className='rounded-md text-black px-3 py-1' required type="text" name="category" id="category" />
          </div>
          {/* Input: Description */}
          <div className='flex flex-col'>
            <label htmlFor="description">Description</label>
            <textarea placeholder={`Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears.\n\n - Wikipedia`} className='rounded-md text-black px-3 py-1' required cols={40} rows={5} name="description" id="description" />
            <span className='my-5 text-left opacity-30 md:text-center'>Tip: Make sure you add a good description</span>
            <button className="bg-teal-900 border border-white py-1 rounded-md md:hidden" type='submit'>Add product</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ProductForm