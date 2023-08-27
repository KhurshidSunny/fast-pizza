/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../UI/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
