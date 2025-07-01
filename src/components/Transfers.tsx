import React, { useState } from 'react';
import { ArrowRight, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import FootballField from './FootballField';
import PlayerSelectionModal from './PlayerSelectionModal';

interface Player {
  id: number;
  name: string;
  team: string;
  position: string;
  price: number;
  points?: number;
  form?: number;
}

const Transfers = () => {
  const [freeTransfers, setFreeTransfers] = useState(1);
  const [selectedForTransfer, setSelectedForTransfer] = useState<{ position: string; index: number } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budget, setBudget] = useState(2.3);

  // Current squad (mock data)
  const [currentSquad, setCurrentSquad] = useState({
    goalkeepers: [
      { id: 1, name: 'Alisson Becker', team: 'Liverpool', position: 'Goalkeeper', price: 5.5, points: 89, form: 4.2 },
      null
    ] as (Player | null)[],
    defenders: [
      { id: 5, name: 'Trent Alexander-Arnold', team: 'Liverpool', position: 'Defender', price: 7.8, points: 124, form: 5.2 },
      { id: 6, name: 'Virgil van Dijk', team: 'Liverpool', position: 'Defender', price: 6.2, points: 106, form: 4.8 },
      { id: 7, name: 'Joao Cancelo', team: 'Man City', position: 'Defender', price: 7.2, points: 118, form: 5.0 },
      { id: 11, name: 'Kieran Trippier', team: 'Newcastle', position: 'Defender', price: 6.1, points: 115, form: 4.9 },
      { id: 9, name: 'Ben White', team: 'Arsenal', position: 'Defender', price: 4.8, points: 89, form: 4.2 }
    ] as (Player | null)[],
    midfielders: [
      { id: 13, name: 'Kevin De Bruyne', team: 'Man City', position: 'Midfielder', price: 12.1, points: 124, form: 6.2 },
      { id: 17, name: 'Mohamed Salah', team: 'Liverpool', position: 'Midfielder', price: 12.8, points: 142, form: 6.8 },
      { id: 16, name: 'Bukayo Saka', team: 'Arsenal', position: 'Midfielder', price: 8.8, points: 108, form: 5.4 },
      { id: 15, name: 'Martin Odegaard', team: 'Arsenal', position: 'Midfielder', price: 8.4, points: 102, form: 5.1 },
      { id: 19, name: 'Jack Grealish', team: 'Man City', position: 'Midfielder', price: 7.1, points: 78, form: 4.2 }
    ] as (Player | null)[],
    forwards: [
      { id: 21, name: 'Erling Haaland', team: 'Man City', position: 'Forward', price: 14.2, points: 138, form: 7.2 },
      { id: 22, name: 'Harry Kane', team: 'Tottenham', position: 'Forward', price: 11.8, points: 112, form: 5.6 },
      { id: 23, name: 'Gabriel Jesus', team: 'Arsenal', position: 'Forward', price: 8.2, points: 89, form: 4.5 }
    ] as (Player | null)[]
  });

  // Available players for transfers (mock data)
  const availablePlayers: { [key: string]: Player[] } = {
    goalkeepers: [
      { id: 2, name: 'Ederson', team: 'Man City', position: 'Goalkeeper', price: 5.3, points: 85, form: 4.0 },
      { id: 3, name: 'Aaron Ramsdale', team: 'Arsenal', position: 'Goalkeeper', price: 5.0, points: 78, form: 3.8 },
      { id: 4, name: 'Nick Pope', team: 'Newcastle', position: 'Goalkeeper', price: 4.8, points: 82, form: 4.1 },
    ],
    defenders: [
      { id: 8, name: 'Ruben Dias', team: 'Man City', position: 'Defender', price: 6.3, points: 98, form: 4.5 },
      { id: 10, name: 'Gabriel', team: 'Arsenal', position: 'Defender', price: 5.2, points: 92, form: 4.3 },
      { id: 12, name: 'Luke Shaw', team: 'Man United', position: 'Defender', price: 5.4, points: 78, form: 3.8 },
      { id: 30, name: 'Reece James', team: 'Chelsea', position: 'Defender', price: 6.8, points: 95, form: 4.6 },
    ],
    midfielders: [
      { id: 14, name: 'Bruno Fernandes', team: 'Man United', position: 'Midfielder', price: 11.5, points: 118, form: 5.8 },
      { id: 18, name: 'Son Heung-min', team: 'Tottenham', position: 'Midfielder', price: 11.2, points: 96, form: 4.8 },
      { id: 20, name: 'Mason Mount', team: 'Chelsea', position: 'Midfielder', price: 7.8, points: 82, form: 4.1 },
      { id: 31, name: 'James Maddison', team: 'Leicester', position: 'Midfielder', price: 8.1, points: 88, form: 4.4 },
    ],
    forwards: [
      { id: 24, name: 'Darwin Nunez', team: 'Liverpool', position: 'Forward', price: 9.1, points: 78, form: 4.2 },
      { id: 25, name: 'Ivan Toney', team: 'Brentford', position: 'Forward', price: 7.4, points: 92, form: 4.8 },
      { id: 26, name: 'Callum Wilson', team: 'Newcastle', position: 'Forward', price: 7.8, points: 86, form: 4.3 },
      { id: 32, name: 'Ollie Watkins', team: 'Aston Villa', position: 'Forward', price: 7.6, points: 84, form: 4.2 },
    ]
  };

  const suggestions = [
    {
      out: { name: 'Jack Grealish', position: 'midfielders', index: 4 },
      in: { id: 14, name: 'Bruno Fernandes', team: 'Man United', position: 'Midfielder', price: 11.5, points: 118, form: 5.8 },
      reason: 'Better fixtures and penalty duties',
      pointsIncrease: '+2.4',
      cost: 4.4,
    },
    {
      out: { name: 'Ben White', position: 'defenders', index: 4 },
      in: { id: 8, name: 'Ruben Dias', team: 'Man City', position: 'Defender', price: 6.3, points: 98, form: 4.5 },
      reason: 'More clean sheet potential',
      pointsIncrease: '+1.8',
      cost: 1.5,
    },
    {
      out: { name: 'Gabriel Jesus', position: 'forwards', index: 2 },
      in: { id: 25, name: 'Ivan Toney', team: 'Brentford', position: 'Forward', price: 7.4, points: 92, form: 4.8 },
      reason: 'Better form and fixtures',
      pointsIncrease: '+1.6',
      cost: -0.8,
    },
  ];

  const calculateTeamValue = () => {
    let totalValue = 0;
    Object.values(currentSquad).forEach(positionPlayers => {
      positionPlayers.forEach(player => {
        if (player) totalValue += player.price;
      });
    });
    return totalValue;
  };

  const handlePlayerSelect = (position: string, index: number) => {
    setSelectedForTransfer({ position, index });
  };

  const handleTransferOut = () => {
    if (!selectedForTransfer) return;
    
    setIsModalOpen(true);
  };

  const handlePlayerSelection = (newPlayer: Player) => {
    if (!selectedForTransfer) return;

    const { position, index } = selectedForTransfer;
    const currentPlayer = currentSquad[position as keyof typeof currentSquad][index];
    
    if (!currentPlayer) return;

    const costDifference = newPlayer.price - currentPlayer.price;
    
    // Check if we can afford the transfer
    if (costDifference > budget) {
      alert('Insufficient budget for this transfer!');
      return;
    }

    // Update squad
    const newSquad = { ...currentSquad };
    newSquad[position as keyof typeof currentSquad][index] = newPlayer;
    setCurrentSquad(newSquad);
    
    // Update budget
    setBudget(budget - costDifference);
    
    // Use free transfer or deduct points
    if (freeTransfers > 0) {
      setFreeTransfers(freeTransfers - 1);
    } else {
      // In real app, this would deduct 4 points
      alert('Transfer completed! 4 points deducted.');
    }

    setIsModalOpen(false);
    setSelectedForTransfer(null);
  };

  const handlePlayerRemove = (position: string, index: number) => {
    // For transfers, we don't remove players, we select them for transfer
    setSelectedForTransfer({ position, index });
  };

  const applySuggestion = (suggestion: any) => {
    const { out, in: inPlayer } = suggestion;
    
    // Find the player to transfer out
    const currentPlayer = currentSquad[out.position as keyof typeof currentSquad][out.index];
    if (!currentPlayer) return;

    const costDifference = inPlayer.price - currentPlayer.price;
    
    if (costDifference > budget) {
      alert('Insufficient budget for this transfer!');
      return;
    }

    // Apply the transfer
    const newSquad = { ...currentSquad };
    newSquad[out.position as keyof typeof currentSquad][out.index] = inPlayer;
    setCurrentSquad(newSquad);
    setBudget(budget - costDifference);
    
    if (freeTransfers > 0) {
      setFreeTransfers(freeTransfers - 1);
    } else {
      alert('Transfer completed! 4 points deducted.');
    }
  };

  const getAvailablePlayersForPosition = (position: string) => {
    const positionKey = position.toLowerCase() as keyof typeof availablePlayers;
    return availablePlayers[positionKey] || [];
  };

  return (
    <div className="space-y-8">
      {/* Transfer Information */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-green-50 rounded-lg p-6 text-center border border-green-200">
          <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-green-900 mb-1">Free Transfers</h3>
          <div className="flex items-center justify-center gap-2">
            <input
              type="number"
              value={freeTransfers}
              onChange={(e) => setFreeTransfers(parseInt(e.target.value))}
              min="0"
              max="2"
              className="w-16 text-center text-xl font-bold text-green-600 bg-transparent border-none focus:outline-none"
            />
            <span className="text-green-600">remaining</span>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 text-center border border-blue-200">
          <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-blue-900 mb-1">Team Value</h3>
          <p className="text-2xl font-bold text-blue-600">£{calculateTeamValue().toFixed(1)}m</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-6 text-center border border-yellow-200">
          <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
          <h3 className="font-semibold text-yellow-900 mb-1">Bank</h3>
          <p className="text-2xl font-bold text-yellow-600">£{budget.toFixed(1)}m</p>
        </div>
      </div>

      {/* Football Field for Transfer Selection */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
          Select Player to Transfer Out
          {selectedForTransfer && (
            <span className="block text-sm text-blue-600 mt-1">
              Click on another position or use the button below to proceed
            </span>
          )}
        </h3>
        <FootballField
          players={currentSquad}
          onPlayerSelect={handlePlayerSelect}
          onPlayerRemove={handlePlayerRemove}
          mode="transfer"
          selectedForTransfer={selectedForTransfer}
        />
        
        {selectedForTransfer && (
          <div className="mt-6 text-center">
            <button
              onClick={handleTransferOut}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Choose Replacement Player
            </button>
          </div>
        )}
      </div>

      {/* AI Suggestions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Transfer Suggestions</h3>
        <div className="space-y-4">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{suggestion.out.name}</p>
                    <p className="text-sm text-red-600">OUT</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{suggestion.in.name}</p>
                    <p className="text-sm text-green-600">IN</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{suggestion.pointsIncrease} pts</p>
                  <p className="text-sm text-gray-600">
                    Cost: {suggestion.cost > 0 ? '+' : ''}£{suggestion.cost}m
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-3">{suggestion.reason}</p>
              <button 
                onClick={() => applySuggestion(suggestion)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                Apply Transfer
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Player Selection Modal */}
      <PlayerSelectionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedForTransfer(null);
        }}
        onSelect={handlePlayerSelection}
        position={selectedForTransfer?.position || ''}
        availablePlayers={selectedForTransfer ? getAvailablePlayersForPosition(selectedForTransfer.position) : []}
        budget={budget + (selectedForTransfer ? (currentSquad[selectedForTransfer.position as keyof typeof currentSquad][selectedForTransfer.index]?.price || 0) : 0)}
      />
    </div>
  );
};

export default Transfers;