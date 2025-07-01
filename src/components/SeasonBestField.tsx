import React from 'react';
import { User, Crown, Star, Trophy } from 'lucide-react';

interface Player {
  name: string;
  team: string;
  position: string;
  points: number;
  price: number;
  gamesPlayed: number;
  pointsPerGame: number;
}

interface SeasonBestFieldProps {
  title: string;
  subtitle: string;
  team: {
    goalkeepers: Player[];
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
  };
}

const SeasonBestField: React.FC<SeasonBestFieldProps> = ({ title, subtitle, team }) => {
  const renderPlayer = (player: Player, rank: number) => {
    const getRankColor = (rank: number) => {
      if (rank === 1) return "border-yellow-500 bg-yellow-50 text-yellow-700";
      if (rank <= 3) return "border-orange-500 bg-orange-50 text-orange-700";
      return "border-blue-500 bg-blue-50 text-blue-700";
    };

    const getRankIcon = (rank: number) => {
      if (rank === 1) return <Crown className="h-3 w-3 text-yellow-600" />;
      if (rank <= 3) return <Trophy className="h-3 w-3 text-orange-600" />;
      return <Star className="h-3 w-3 text-blue-600" />;
    };

    return (
      <div className="relative group">
        <div className={`w-16 h-20 rounded-lg border-2 flex flex-col items-center justify-center text-xs font-medium transition-all duration-200 ${getRankColor(rank)} hover:scale-105`}>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-1 shadow-sm">
            <User className="h-4 w-4" />
          </div>
          <span className="text-center leading-tight px-1">
            {player.name.split(' ').slice(-1)[0]}
          </span>
          <span className="text-xs font-bold">{player.points}pts</span>
          <span className="text-xs text-gray-600">£{player.price}m</span>
        </div>
        
        {/* Rank Badge */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-gray-700">#{rank}</span>
        </div>
        
        {/* Position Icon */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
          {getRankIcon(rank)}
        </div>
        
        {/* Hover Tooltip */}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <div className="bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap">
            <div className="font-semibold">{player.name}</div>
            <div>{player.team}</div>
            <div>{player.pointsPerGame} pts/game</div>
            <div>{player.gamesPlayed} games</div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-purple-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
      
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Football Field Background */}
        <div className="relative bg-gradient-to-b from-green-400 to-green-500 rounded-xl p-8 shadow-xl">
          {/* Field Lines */}
          <div className="absolute inset-4 border-2 border-white/50 rounded"></div>
          <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-white/50 transform -translate-x-0.5"></div>
          <div className="absolute left-1/2 top-1/2 w-20 h-20 border-2 border-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          
          {/* Goal Areas */}
          <div className="absolute left-1/2 top-4 w-24 h-16 border-2 border-white/50 transform -translate-x-1/2"></div>
          <div className="absolute left-1/2 bottom-4 w-24 h-16 border-2 border-white/50 transform -translate-x-1/2"></div>
          
          {/* Player Positions */}
          <div className="relative h-96 flex flex-col justify-between py-8">
            {/* Forwards */}
            <div className="flex justify-center gap-8">
              {team.forwards.slice(0, 3).map((player, i) => (
                <div key={i}>
                  {renderPlayer(player, i + 1)}
                </div>
              ))}
            </div>
            
            {/* Midfielders */}
            <div className="flex justify-center gap-6">
              {team.midfielders.slice(0, 5).map((player, i) => (
                <div key={i}>
                  {renderPlayer(player, i + 1)}
                </div>
              ))}
            </div>
            
            {/* Defenders */}
            <div className="flex justify-center gap-4">
              {team.defenders.slice(0, 5).map((player, i) => (
                <div key={i}>
                  {renderPlayer(player, i + 1)}
                </div>
              ))}
            </div>
            
            {/* Goalkeepers */}
            <div className="flex justify-center gap-8">
              {team.goalkeepers.slice(0, 2).map((player, i) => (
                <div key={i}>
                  {renderPlayer(player, i + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mt-8 flex items-center justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-100 border-2 border-yellow-500 rounded-lg flex items-center justify-center">
            <Crown className="h-3 w-3 text-yellow-600" />
          </div>
          <span>Top Performer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-100 border-2 border-orange-500 rounded-lg flex items-center justify-center">
            <Trophy className="h-3 w-3 text-orange-600" />
          </div>
          <span>Elite Player</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 border-2 border-blue-500 rounded-lg flex items-center justify-center">
            <Star className="h-3 w-3 text-blue-600" />
          </div>
          <span>Quality Pick</span>
        </div>
      </div>
      
      {/* Stats Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-purple-600">
            {team.forwards[0]?.points || 0}
          </div>
          <div className="text-sm text-gray-600">Top Forward</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-green-600">
            {team.midfielders[0]?.points || 0}
          </div>
          <div className="text-sm text-gray-600">Top Midfielder</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-blue-600">
            {team.defenders[0]?.points || 0}
          </div>
          <div className="text-sm text-gray-600">Top Defender</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">
            {team.goalkeepers[0]?.points || 0}
          </div>
          <div className="text-sm text-gray-600">Top Goalkeeper</div>
        </div>
      </div>
    </div>
  );
};

export default SeasonBestField;