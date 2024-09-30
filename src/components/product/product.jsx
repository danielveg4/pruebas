const Product = ({ img, category, name, price, product, handleAddToCart }) => {
	return (
		<>
			<img src={product.image.desktop}></img>
			<button onClick={() => handleAddToCart(product)}>Add to Cart</button>
			<h3>{product.category}</h3>
			<p>{product.name}</p>
			<p>{product.price}</p>
		</>
	);
};

export default Product;
