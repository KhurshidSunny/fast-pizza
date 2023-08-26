/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utilities/helpers';
import Button from '../../UI/Button';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId);
  return (
    <li className="items-center justify-between py-3 sm:flex ">
      <p className="mt-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
