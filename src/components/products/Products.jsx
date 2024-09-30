import Product from '../product/product';
import { CARRITO_DATA } from '../../constants/shop-data';
import { v4 } from 'uuid';
import { render } from 'react-dom';

let boughtProducts = {};

const Products = () => {
	return (
		<>
			<h1>Desserts</h1>
			<div>
				{CARRITO_DATA.map(product => (
					<Product
						key={v4()}
						product={product}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
		</>
	);
};

const handleAddToCart = product => {
	if (boughtProducts[product.name]) {
		boughtProducts[product.name].quantity += 1;
	} else {
		boughtProducts[product.name] = {
			name: product.name,
			price: product.price,
			quantity: 1
		};
	}
	console.log(boughtProducts);

	console.log('Producto añadido:', product.name, 'Precio:', product.price);

	renderCart();
};

const renderCart = () => {
	console.log('renderizado');
};

export default Products;
