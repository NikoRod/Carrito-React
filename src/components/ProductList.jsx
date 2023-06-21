import { data } from '../data';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (

		<div className='grid grid-cols-3 gap-5 mx-6 mb-8 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1'>

			{data.map(product => (
				<div className='rounded-xl shadow-[10px_10px_15px_15px_rgba(0,0,0,0.2)]' key={product.id}>

					<figure className='truncate'>
						<img src={product.img} alt={product.nameProduct}
						className='w-full h-[300px] object-cover rounded-[10px 10px 0 0] transition-all hover:scale-[1.2]'
						/>
					</figure>

					<div className='p-[15px 30px] flex flex-col gap-3 border-solid border-t-[1px] border-black'>

						<h2 className='px-1.5 text-[22px]'>{product.nameProduct}</h2>
						<p className='text-[26px] font-bold px-2'>${product.price}</p>

						<button onClick={() => onAddProduct(product)}
						className='border-none bg-black text-white text-[24px] py-[10px] px-[20px] duration-300 hover:bg-red-600 transition-all'
						>
							Añadir al carrito
						</button>

					</div>

				</div>
			))}

		</div>
	);
};
