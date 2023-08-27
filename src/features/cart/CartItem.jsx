/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utilities/helpers';
import UpdateItemQuantity from './updateItemQuantity';

import DeleteItem from './DeleteItem';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentItemQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="items-center justify-between py-3 sm:flex ">
      <p className="mt-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentItemQuantity={currentItemQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
