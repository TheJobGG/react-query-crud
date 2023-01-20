import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts, deleteProduct, updateProduct } from '../productsApi.js'

function Products() {

  const queryClient = useQueryClient();

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    select: products => products.sort((a, b) => b.id - a.id)
  })

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => queryClient.invalidateQueries('products')
  })


  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => queryClient.invalidateQueries('products')
  })

  if (isLoading) return <div>Is Loading...</div>

  else if (isError) return <div>Error: {error.message}</div>


  return data.map(product => (
    <div key={product.id} className="bg-slate-700 w-[300px] py-5 px-5 rounded-md flex flex-col items-stretch hover:shadow-[0_5px_60px_-15px_rgba(150,150,150,0.3)] transition-shadow">
      <div className="min-h-full relative mb-12">
        <h3 className="text-center text-xl pb-3 break-words">{product.name}</h3>
        <p className="pb-3">{product.description}</p>
        <p>Price: ${product.price}</p>
        <div className="flex gap-2 items-center">
          In stock: <span>{product.stock}</span>
        </div>
        <div>Category: <span>{product.category}</span></div>
        <hr className="my-2 mb-3" />
        <div className="flex flex-wrap gap-2 my-2">
          {product.tags.map((tag, index) =>
          (
            <span key={index} className="bg-teal-600 rounded-md px-2">{tag}</span>
          )
          )}
        </div>
        <div className="flex flex-col justify-between">

          <button
            className="bg-red-800 px-5 py-2 w-full absolute bottom-0 hover:opacity-75 transition-opacity"
            onClick={() => deleteProductMutation.mutate(product.id)}>Delete</button>
        </div>
      </div>
    </div>
  ))
}

export default Products