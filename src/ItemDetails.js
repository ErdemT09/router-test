import logo from './logo.svg';
import './App.css';
import { useNavigate, useParams } from 'react-router';
import { Button } from 'react-bootstrap';

function ItemDetails(props) {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleNav = () => {
    window.location.href = "/home";
  }
  const handleNav2 = () => {
    navigate("/home");
  }
  return (
    <div>
      <h2>{`Item with id: ${id}`}</h2>
      <Button onClick={handleNav}>Click to return Home (This will reload the page)</Button>
      <hr/>
      <Button onClick={handleNav2}>Click to navigate Home using react-router-dom (This will not reload the page)</Button>
    </div>
  );
}

export default ItemDetails;
