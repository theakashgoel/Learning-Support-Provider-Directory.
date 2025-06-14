import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProviderById } from '../api/fakeProviderApi';
import './ProviderPage.css';

const ProviderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProviderById(id)
      .then(data => {
        setProvider(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading provider details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="provider-detail-container">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back to List
      </button>
      <h1>{provider.name}</h1>
      <p><strong>Location:</strong> {provider.location}</p>
      <p><strong>Rating:</strong> ⭐ {provider.rating}</p>
      <p><strong>Specializations:</strong> {provider.services.join(', ')}</p>
      <p><strong>About:</strong> {provider.longDescription}</p>
      <p><strong>Contact Email:</strong> <a href={`mailto:${provider.contactEmail}`}>{provider.contactEmail}</a></p>
      <p><strong>Phone Number:</strong> <a href={`tel:${provider.phoneNumber}`}>{provider.phoneNumber}</a></p>
    </div>
  );
};

export default ProviderPage;
