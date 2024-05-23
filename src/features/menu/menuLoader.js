import { getMenu } from '../../services/apiRestaurant';

export async function loader() {
  const menu = await getMenu();
  return menu;
}
