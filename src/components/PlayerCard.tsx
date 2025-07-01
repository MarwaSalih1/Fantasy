import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  points: number;
  price: number;
  image: string;
}

interface PlayerCardProps {
  player: Player;
  rank: number;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, rank }) => {
  const getPositionColor = (position: string) => {
    switch (position) {
      case 'Forward':
        return 'bg-red-100 text-red-800';
      case 'Midfielder':
        return 'bg-green-100 text-green-800';
      case 'Defender':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className="relative">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 font-bold text-lg px-3 py-1 rounded-full">
          #{rank}
        </div>
        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${getPositionColor(player.position)}`}>
          {player.position}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-1">{player.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{player.team}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-semibold text-gray-900">{player.points} pts</span>
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="font-semibold text-green-600">£{player.price}m</span>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200">
          Add to Squad
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;