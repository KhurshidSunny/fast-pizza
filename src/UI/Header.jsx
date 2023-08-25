import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from './Username';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 sm:px-6">
      <Link to="/" className="uppercase tracking-widest">
        Fast Pizza Co.
      </Link>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
