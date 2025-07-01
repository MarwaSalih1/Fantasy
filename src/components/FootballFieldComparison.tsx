import React from 'react';
import { User, Crown, Star } from 'lucide-react';

interface Player {
  name: string;
  team: string;
  position: string;
  price?: number;
  isAISuggested?: boolean;
  isCaptain?: boolean;
}

interface FootballFieldComparisonProps {
  title: string;
  leftTitle: string;
  rightTitle: string;
  leftTeam: {
    goalkeepers: Player[];
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
  };
  rightTeam: {
    goalkeepers: Player[];
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
  };
  showComparison?: boolean;
}

const FootballFieldComparison: React.FC<FootballFieldComparisonProps> = ({
  title,
  leftTitle,
  rightTitle,
  leftTeam,
  rightTeam,
  showComparison = false
}) => {
  const renderPlayer = (player: Player, side: 'left' | 'right') => {
    const baseClasses = "w-16 h-20 rounded-lg border-2 flex flex-col items-center justify-center text-xs font-medium transition-all duration-200";
    
    let colorClasses = "";
    if (showComparison) {
      if (player.isAISuggested) {
        colorClasses = "border-green-500 bg-green-50 text-green-700";
      } else {
        colorClasses = "border-red-500 bg-red-50 text-red-700";
      }
    } else {
      colorClasses = side === 'left' 
        ? "border-blue-500 bg-blue-50 text-blue-700" 
        : "border-purple-500 bg-purple-50 text-purple-700";
    }

    return (
      <div className="relative">
        <div className={`${baseClasses} ${colorClasses}`}>
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-1 shadow-sm">
            <User className="h-4 w-4" />
          </div>
          <span className="text-center leading-tight px-1">
            {player.name.split(' ').slice(-1)[0]}
          </span>
          {player.price && (
            <span className="text-xs text-gray-600">£{player.price}m</span>
          )}
        </div>
        {player.isCaptain && (
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <Crown className="h-3 w-3 text-white" />
          </div>
        )}
        {showComparison && player.isAISuggested && (
          <div className="absolute -top-1 -left-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <Star className="h-2 w-2 text-white" />
          </div>
        )}
      </div>
    );
  };

  const renderFormation = (team: any, side: 'left' | 'right') => (
    <div className="relative w-full max-w-md mx-auto">
      {/* Football Field Background */}
      <div className="relative bg-gradient-to-b from-green-400 to-green-500 rounded-lg p-6 shadow-lg">
        {/* Field Lines */}
        <div className="absolute inset-3 border-2 border-white/50 rounded"></div>
        <div className="absolute left-1/2 top-3 bottom-3 w-0.5 bg-white/50 transform -translate-x-0.5"></div>
        <div className="absolute left-1/2 top-1/2 w-16 h-16 border-2 border-white/50 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Goal Areas */}
        <div className="absolute left-1/2 top-3 w-20 h-12 border-2 border-white/50 transform -translate-x-1/2"></div>
        <div className="absolute left-1/2 bottom-3 w-20 h-12 border-2 border-white/50 transform -translate-x-1/2"></div>
        
        {/* Player Positions */}
        <div className="relative h-80 flex flex-col justify-between py-6">
          {/* Forwards */}
          <div className="flex justify-center gap-6">
            {team.forwards.slice(0, 3).map((player: Player, i: number) => (
              <div key={i}>
                {renderPlayer(player, side)}
              </div>
            ))}
          </div>
          
          {/* Midfielders */}
          <div className="flex justify-center gap-4">
            {team.midfielders.slice(0, 4).map((player: Player, i: number) => (
              <div key={i}>
                {renderPlayer(player, side)}
              </div>
            ))}
          </div>
          
          {/* Defenders */}
          <div className="flex justify-center gap-3">
            {team.defenders.slice(0, 4).map((player: Player, i: number) => (
              <div key={i}>
                {renderPlayer(player, side)}
              </div>
            ))}
          </div>
          
          {/* Goalkeeper */}
          <div className="flex justify-center">
            {renderPlayer(team.goalkeepers[0], side)}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{title}</h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Team */}
        <div>
          <h4 className="text-lg font-semibold text-center mb-4 text-blue-900">{leftTitle}</h4>
          {renderFormation(leftTeam, 'left')}
        </div>
        
        {/* Right Team */}
        <div>
          <h4 className="text-lg font-semibold text-center mb-4 text-purple-900">{rightTitle}</h4>
          {renderFormation(rightTeam, 'right')}
        </div>
      </div>
      
      {showComparison && (
        <div className="mt-8 flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <Star className="h-2 w-2 text-white" />
            </div>
            <span>AI Suggested</span>
          </div>
          <div className="flex items-center gap-2">
            <Crown className="h-4 w-4 text-yellow-500" />
            <span>Captain</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Not Suggested</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FootballFieldComparison;