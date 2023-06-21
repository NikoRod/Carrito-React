import { useState } from 'react';

export const Header = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}) => {
	const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.quantity);
		setCountProducts(countProducts - product.quantity);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

	return (

		<header className='flex justify-between pt-[30px] pb-[40px] bg-slate-300'>

			<h1 className='text-[28px] ml-3 uppercase font-bold'><span className='ml-3 text-red-600 uppercase font-bold'>game</span>shop</h1>

			<div className='relative'>

				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill='none'
						viewBox='0 0 16 16'
						width="16"
						height="16"
						strokeWidth='1.5'
						stroke='currentColor'
						className=' w-20 h-10 stroke-black hover:cursor-pointer'
					>
						<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
					</svg>

					<div className='absolute top-2/4 right-0 bg-black text-white w-[25px] h-[25px] flex justify-center items-center rounded-full'>

						<span id='contador-productos' className='text-xs hover:cursor-pointer'>{countProducts}</span>

					</div>

				</div>

				<div
					className={`absolute top-14 right-2 bg-white w-[400px] z-[1] shadow-[10px_10px_20px_20px_rgba(0,0,0,0.25)] rounded-xl max-[500px]:w-[250px] ${
						active ? '' : 'hidden'
					}`}
				>

					{allProducts.length ? (
						<>

							<div className='row-product'>

								{allProducts.map(product => (

									<div className='flex items-center justify-between p-[30px] border-b-[1px] border-solid border-black' key={product.id}>

										<div className='flex justify-between flex-[0.8]'>

											<span className='font-normal text-[20px] pr-2'>
												{product.quantity}
											</span>
											<p className='text-[20px]'>
												{product.nameProduct}
											</p>
											<span className='text-[20px] font-semibold ml-2.5'>
												${product.price}
											</span>

										</div>

										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='w-[25px] h-[25px] cursor-pointer transition-all hover:text-red-600'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>

									</div>
								))}

							</div>

							<div className='flex justify-center items-center py-5 gap-5'>

								<h3>Total:</h3>
								<span className='text-[20px] font-bold'>${total}</span>

							</div>

							<button className=' border-none bg-black text-white py-4 block w-full mt-3 rounded-md font-sans cursor-pointer text-[16px] duration-300
												hover:bg-red-600 transition-all' 
												onClick={onCleanCart}
							>
								Vaciar Carrito
							</button>
							
						</>
					) : (
						<p className='p-5 text-center'>El carrito está vacío.</p>
					)}

				</div>

			</div>

		</header>

	);
};