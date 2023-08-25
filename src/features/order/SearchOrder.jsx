import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search Order #"
        onChange={(e) => setQuery(e.target.value)}
        className="duration-1200 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all placeholder:text-stone-400 focus:ring sm:w-64 sm:focus:w-72  sm:focus:outline-none sm:focus:ring-yellow-500 sm:focus:ring-opacity-5 sm:focus:ring-offset-2"
      />
    </form>
  );
}

export default SearchOrder;
