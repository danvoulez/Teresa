import React from 'react';
import { Link } from 'react-router-dom';
export default function LeftMenu() {
  return (
    <nav className="w-16 bg-gray-800 text-white flex flex-col items-center py-4">
      <Link to="/logline" className="mb-4">📜</Link>
      <Link to="/chat" className="mb-4">💬</Link>
      <Link to="/new">📝</Link>
    </nav>
  );
}
