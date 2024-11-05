import React from 'react';

const TicketCard = ({ ticket }) => {
  const priorityMap = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
      <p>Priority: {priorityMap[ticket.priority]}</p>
    </div>
  );
};

export default TicketCard;
