import { Link } from 'react-router-dom';
import './ProviderCard.css';

const ProviderCard = ({ provider }) => (
  <Link to={`/providers/${provider.id}`} className="provider-card">
    <div className="card">
      <h2>{provider.name}</h2>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Specializations:</strong> {provider.services.join(', ')}</p>
      <p><strong>Rating:</strong> ⭐ {provider.rating}</p>
    </div>
  </Link>
);

export default ProviderCard;
