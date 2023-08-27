import LinkButton from '../../UI/LinkButton';
import Button from '../../UI/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from '../cart/EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const username = useSelector((state) => state.user.username);

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="px-3 py-3">
      <LinkButton to="/menu">&larr; go back</LinkButton>
      <h2 className="mt-7 text-xl font-semibold ">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((pizza) => (
          <CartItem item={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button onClick={() => dispatch(clearCart())} type="secondary">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
