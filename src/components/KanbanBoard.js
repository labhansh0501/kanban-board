import React from 'react';
import TicketCard from './TicketCard';

const KanbanBoard = ({ tickets, groupBy, sortBy }) => {
  const groupTickets = () => {
    const groups = {};
    tickets.forEach(ticket => {
      const key = ticket[groupBy.toLowerCase()];
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
    });
    return groups;
  };

  const sortedTickets = tickets => {
    return [...tickets].sort((a, b) => {
      if (sortBy === 'Priority') return b.priority - a.priority;
      if (sortBy === 'Title') return a.title.localeCompare(b.title);
      return 0;
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div className="kanban-column" key={group}>
          <h2>{group}</h2>
          {sortedTickets(groupedTickets[group]).map(ticket => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
