import { useEffect, useState } from 'react';
import { fetchProviders } from '../api/fakeProviderApi';
import ProviderCard from '../components/ProviderCard';
import './Home.css';

const Home = () => {
  const [providers, setProviders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProviders().then(data => {
      setProviders(data);
      setFiltered(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const lower = query.toLowerCase();
    setFiltered(
      providers.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        p.services.some(s => s.toLowerCase().includes(lower))
      )
    );
  }, [query, providers]);

  if (loading) return <p>Loading providers...</p>;

  return (
    <div className="container">
      <h1>Learning Support Provider Directory</h1>
      <input
        type="text"
        placeholder="Search by name or specialization..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="search-input"
      />
      <div className="provider-grid">
        {filtered.map(provider => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
      </div>
    </div>
  );
};

export default Home;
