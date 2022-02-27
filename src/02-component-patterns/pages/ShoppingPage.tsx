import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import '../styles/custom-styles.css';
// import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';

const product = products[0];
export const ShoppingPage = () => {
  // const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        className='bg-dark text-white'
        key={product.id}
        initialValues={{
          count: 2,
          maxCount: 10,
        }}>
        {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
