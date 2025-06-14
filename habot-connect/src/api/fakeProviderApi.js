import providers from '../data/providers.json';

export function fetchProviders() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(providers), 1000);
  });
}

export function fetchProviderById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const provider = providers.find(p => p.id === id);
      if (provider) resolve(provider);
      else reject('Provider not found');
    }, 1000);
  });
}
