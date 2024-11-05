import React from 'react';

const Controls = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="controls">
      <button onClick={() => setGroupBy('Status')}>Group by Status</button>
      <button onClick={() => setGroupBy('User')}>Group by User</button>
      <button onClick={() => setGroupBy('Priority')}>Group by Priority</button>
      <button onClick={() => setSortBy('Priority')}>Sort by Priority</button>
      <button onClick={() => setSortBy('Title')}>Sort by Title</button>
    </div>
  );
};

export default Controls;
