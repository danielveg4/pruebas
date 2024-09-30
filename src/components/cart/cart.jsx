import styles from './cart.module.css';

const Cart = () => {
	return (
		<div className={styles.div}>
			<h1 className={styles.title}>Your Cart</h1>
			<div>Producto</div>
			<h2>Order total:</h2>
			<button>Confirm Order</button>
		</div>
	);
};

export default Cart;
