import { Link } from 'react-router-dom';

const ProviderCard = ({ provider }) => (
  <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
    <h2>{provider.name}</h2>
    <p>{provider.location}</p>
    <Link to={`/provider/${provider.id}`}>View Details</Link>
  </div>
);

export default ProviderCard;
