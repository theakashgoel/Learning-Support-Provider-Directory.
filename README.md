# Learning-Support-Provider-Directory.


A React-based web application designed to help parents easily browse and find learning support providers for children with learning difficulties. This app is a focused module of the Habot Connect platform, offering a simplified directory with detailed provider profiles, search functionality, and responsive design.

---

## Features

- **Provider Listing**: View a list of learning support providers with their name, specialization, location, and rating.
- **Search & Filter**: Dynamic search filtering by provider name or specialization.
- **Provider Details**: Click on a provider to view comprehensive details including contact info, services, and descriptions.
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
- **Simulated Async Data Fetching**: Mimics real API calls with asynchronous fetch simulation.
- **Routing**: Uses React Router for navigation between the list and detailed provider pages.


## Technologies Used
- React 18

- React Router DOM v6

- Vite (build tool)

- CSS for styling

## Future Improvements
- Integrate with a real backend API

- Add user authentication for providers to update profiles

- Pagination or infinite scroll for large provider lists

- Advanced filtering by location, rating, and services

- Dark mode toggle for UI

- Unit and integration tests

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repo

```bash
git clone https://github.com/yourusername/habot-connect.git
cd habot-connect

install dependencies
npm install

Run the development server
npm run dev

Open your browser and navigate to
http://localhost:5173


### Project Structure
habot-connect/
├── src/
│   ├── api/
│   │   └── fakeProviderApi.js      # Simulated async data fetching
│   ├── components/
│   │   └── ProviderCard.jsx        # Provider card component
│   ├── data/
│   │   └── providers.json          # Sample provider data
│   ├── pages/
│   │   ├── Home.jsx                # Main listing with search/filter
│   │   └── ProviderPage.jsx        # Detailed provider page
│   ├── App.jsx                    # React router setup
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles
│   └── ...                       # Other styling files
└── package.json                  # Project dependencies & scripts

