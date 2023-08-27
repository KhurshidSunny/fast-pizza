/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentItemQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentItemQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
