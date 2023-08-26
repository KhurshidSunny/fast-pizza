import { useSelector } from 'react-redux';

function Username() {
  const { username } = useSelector((state) => state.user);
  if (!username) return null;

  return (
    <div className=" hidden text-sm font-semibold uppercase md:block">
      {username}
    </div>
  );
}

export default Username;
