/* eslint-disable react/prop-types */
import { useFetcher } from 'react-router-dom';
import Button from '../../UI/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      {/* can also add more input fields to add for update  */}
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
