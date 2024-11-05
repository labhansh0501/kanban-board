import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard.js';
import Controls from './components/Controls.js';
// import FeatureCard from './components/featureCard.js';
import './style/style.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'Status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'Priority');

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets || []);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  return (
    <div className="app">
      <Controls groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
};

export default App;
