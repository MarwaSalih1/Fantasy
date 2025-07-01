import React from 'react';
import { User, Plus, X } from 'lucide-react';

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  price: number;
  points?: number;
}

interface FootballFieldProps {
  players: {
    goalkeepers: Player[];
    defenders: Player[];
    midfielders: Player[];
    forwards: Player[];
  };
  onPlayerSelect: (position: string, index: number) => void;
  onPlayerRemove: (position: string, index: number) => void;
  mode: 'create' | 'import' | 'transfer';
  selectedForTransfer?: { position: string; index: number } | null;
}

const FootballField: React.FC<FootballFieldProps> = ({
  players,
  onPlayerSelect,
  onPlayerRemove,
  mode,
  selectedForTransfer
}) => {
  const renderPlayerSlot = (
    player: Player | null,
    position: string,
    index: number,
    positionClass: string
  ) => {
    const isSelected = selectedForTransfer?.position === position && selectedForTransfer?.index === index;
    const isEmpty = !player;

    return (
      <div
        key={`${position}-${index}`}
        className={`relative group cursor-pointer transition-all duration-200 ${positionClass}`}
        onClick={() => onPlayerSelect(position, index)}
      >
        <div
          className={`w-16 h-20 rounded-lg border-2 flex flex-col items-center justify-center text-xs font-medium transition-all duration-200 ${
            isEmpty
              ? 'border-dashed border-gray-400 bg-white/80 hover:bg-blue-50 hover:border-blue-400'
              : isSelected
              ? 'border-red-500 bg-red-50 text-red-700'
              : 'border-green-500 bg-green-50 text-green-700 hover:bg-green-100'
          }`}
        >
          {isEmpty ? (
            <Plus className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          ) : (
            <>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-1 shadow-sm">
                <User className="h-4 w-4" />
              </div>
              <span className="text-center leading-tight px-1">
                {player.name.split(' ').slice(-1)[0]}
              </span>
              <span className="text-xs text-gray-600">£{player.price}m</span>
            </>
          )}
        </div>
        
        {!isEmpty && mode === 'transfer' && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPlayerRemove(position, index);
            }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <X className="h-3 w-3" />
          </button>
        )}
        
        {isSelected && (
          <div className="absolute -top-1 -left-1 w-18 h-22 border-2 border-red-500 rounded-lg animate-pulse"></div>
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Football Field Background */}
      <div className="relative bg-gradient-to-b from-green-400 to-green-500 rounded-lg p-8 shadow-lg">
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
            {Array.from({ length: 3 }, (_, i) => 
              renderPlayerSlot(
                players.forwards[i] || null,
                'forwards',
                i,
                'forward-position'
              )
            )}
          </div>
          
          {/* Midfielders */}
          <div className="flex justify-center gap-6">
            {Array.from({ length: 5 }, (_, i) => 
              renderPlayerSlot(
                players.midfielders[i] || null,
                'midfielders',
                i,
                'midfielder-position'
              )
            )}
          </div>
          
          {/* Defenders */}
          <div className="flex justify-center gap-4">
            {Array.from({ length: 5 }, (_, i) => 
              renderPlayerSlot(
                players.defenders[i] || null,
                'defenders',
                i,
                'defender-position'
              )
            )}
          </div>
          
          {/* Goalkeepers */}
          <div className="flex justify-center gap-8">
            {Array.from({ length: 2 }, (_, i) => 
              renderPlayerSlot(
                players.goalkeepers[i] || null,
                'goalkeepers',
                i,
                'goalkeeper-position'
              )
            )}
          </div>
        </div>
      </div>
      
      {/* Formation Display */}
      <div className="mt-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border">
          <span className="text-sm font-medium text-gray-700">Formation:</span>
          <span className="font-bold text-blue-600">
            {players.defenders.filter(p => p).length}-
            {players.midfielders.filter(p => p).length}-
            {players.forwards.filter(p => p).length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FootballField;