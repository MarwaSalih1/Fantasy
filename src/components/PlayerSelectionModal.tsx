import React, { useState } from 'react';
import { X, Search, Star, TrendingUp } from 'lucide-react';

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  price: number;
  points?: number;
  form?: number;
}

interface PlayerSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (player: Player) => void;
  position: string;
  availablePlayers: Player[];
  budget: number;
}

const PlayerSelectionModal: React.FC<PlayerSelectionModalProps> = ({
  isOpen,
  onClose,
  onSelect,
  position,
  availablePlayers,
  budget
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('points');

  if (!isOpen) return null;

  const filteredPlayers = availablePlayers
    .filter(player => 
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.team.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(player => player.price <= budget)
    .sort((a, b) => {
      if (sortBy === 'points') return (b.points || 0) - (a.points || 0);
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'form') return (b.form || 0) - (a.form || 0);
      return a.name.localeCompare(b.name);
    });

  const getPositionColor = (pos: string) => {
    switch (pos) {
      case 'Forward': return 'bg-red-100 text-red-800';
      case 'Midfielder': return 'bg-green-100 text-green-800';
      case 'Defender': return 'bg-blue-100 text-blue-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Select {position}</h2>
              <p className="text-blue-100">Budget remaining: £{budget.toFixed(1)}m</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search players or teams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="points">Sort by Points</option>
              <option value="price">Sort by Price</option>
              <option value="form">Sort by Form</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Players List */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-3">
            {filteredPlayers.map((player) => (
              <div
                key={player.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                onClick={() => onSelect(player)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-gray-700">
                      {player.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{player.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">{player.team}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPositionColor(player.position)}`}>
                        {player.position}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-semibold text-gray-900">{player.points || 0}</span>
                    </div>
                    <span className="text-xs text-gray-600">Points</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="font-semibold text-green-600">{player.form || 0}</span>
                    </div>
                    <span className="text-xs text-gray-600">Form</span>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg text-blue-600">£{player.price}m</div>
                    <span className="text-xs text-gray-600">Price</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {filteredPlayers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No players found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerSelectionModal;