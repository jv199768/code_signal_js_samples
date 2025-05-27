import { useParams } from 'react-router-dom';

function UserPage() {
  let { id } = useParams();
  return <p>User ID: {id}</p>;
}
