import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className=" items-cen flex justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 sm:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="text-stone-200">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
