import React, { useState } from 'react';
import { Calculator, Users, DollarSign, Target, Download } from 'lucide-react';
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

const CreateSquad = () => {
  const [squadType, setSquadType] = useState('create');
  const [budget, setBudget] = useState(100.0);
  const [managerId, setManagerId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<{ position: string; index: number } | null>(null);
  
  const [squadPlayers, setSquadPlayers] = useState({
    goalkeepers: [] as (Player | null)[],
    defenders: [] as (Player | null)[],
    midfielders: [] as (Player | null)[],
    forwards: [] as (Player | null)[]
  });

  // Mock player data with more comprehensive information
  const mockPlayers: { [key: string]: Player[] } = {
    goalkeepers: [
      { id: 1, name: 'Alisson Becker', team: 'Liverpool', position: 'Goalkeeper', price: 5.5, points: 89, form: 4.2 },
      { id: 2, name: 'Ederson', team: 'Man City', position: 'Goalkeeper', price: 5.3, points: 85, form: 4.0 },
      { id: 3, name: 'Aaron Ramsdale', team: 'Arsenal', position: 'Goalkeeper', price: 5.0, points: 78, form: 3.8 },
      { id: 4, name: 'Nick Pope', team: 'Newcastle', position: 'Goalkeeper', price: 4.8, points: 82, form: 4.1 },
    ],
    defenders: [
      { id: 5, name: 'Trent Alexander-Arnold', team: 'Liverpool', position: 'Defender', price: 7.8, points: 124, form: 5.2 },
      { id: 6, name: 'Virgil van Dijk', team: 'Liverpool', position: 'Defender', price: 6.2, points: 106, form: 4.8 },
      { id: 7, name: 'Joao Cancelo', team: 'Man City', position: 'Defender', price: 7.2, points: 118, form: 5.0 },
      { id: 8, name: 'Ruben Dias', team: 'Man City', position: 'Defender', price: 6.3, points: 98, form: 4.5 },
      { id: 9, name: 'Ben White', team: 'Arsenal', position: 'Defender', price: 4.8, points: 89, form: 4.2 },
      { id: 10, name: 'Gabriel', team: 'Arsenal', position: 'Defender', price: 5.2, points: 92, form: 4.3 },
      { id: 11, name: 'Kieran Trippier', team: 'Newcastle', position: 'Defender', price: 6.1, points: 115, form: 4.9 },
      { id: 12, name: 'Luke Shaw', team: 'Man United', position: 'Defender', price: 5.4, points: 78, form: 3.8 },
    ],
    midfielders: [
      { id: 13, name: 'Kevin De Bruyne', team: 'Man City', position: 'Midfielder', price: 12.1, points: 124, form: 6.2 },
      { id: 14, name: 'Bruno Fernandes', team: 'Man United', position: 'Midfielder', price: 11.5, points: 118, form: 5.8 },
      { id: 15, name: 'Martin Odegaard', team: 'Arsenal', position: 'Midfielder', price: 8.4, points: 102, form: 5.1 },
      { id: 16, name: 'Bukayo Saka', team: 'Arsenal', position: 'Midfielder', price: 8.8, points: 108, form: 5.4 },
      { id: 17, name: 'Mohamed Salah', team: 'Liverpool', position: 'Midfielder', price: 12.8, points: 142, form: 6.8 },
      { id: 18, name: 'Son Heung-min', team: 'Tottenham', position: 'Midfielder', price: 11.2, points: 96, form: 4.8 },
      { id: 19, name: 'Jack Grealish', team: 'Man City', position: 'Midfielder', price: 7.1, points: 78, form: 4.2 },
      { id: 20, name: 'Mason Mount', team: 'Chelsea', position: 'Midfielder', price: 7.8, points: 82, form: 4.1 },
    ],
    forwards: [
      { id: 21, name: 'Erling Haaland', team: 'Man City', position: 'Forward', price: 14.2, points: 138, form: 7.2 },
      { id: 22, name: 'Harry Kane', team: 'Tottenham', position: 'Forward', price: 11.8, points: 112, form: 5.6 },
      { id: 23, name: 'Gabriel Jesus', team: 'Arsenal', position: 'Forward', price: 8.2, points: 89, form: 4.5 },
      { id: 24, name: 'Darwin Nunez', team: 'Liverpool', position: 'Forward', price: 9.1, points: 78, form: 4.2 },
      { id: 25, name: 'Ivan Toney', team: 'Brentford', position: 'Forward', price: 7.4, points: 92, form: 4.8 },
      { id: 26, name: 'Callum Wilson', team: 'Newcastle', position: 'Forward', price: 7.8, points: 86, form: 4.3 },
    ]
  };

  // Suggested starting XI for new squads
  const suggestedSquad = {
    goalkeepers: [mockPlayers.goalkeepers[0], null],
    defenders: [
      mockPlayers.defenders[0], // Trent
      mockPlayers.defenders[1], // Van Dijk
      mockPlayers.defenders[2], // Cancelo
      mockPlayers.defenders[6], // Trippier
      mockPlayers.defenders[4], // Ben White
    ],
    midfielders: [
      mockPlayers.midfielders[0], // De Bruyne
      mockPlayers.midfielders[4], // Salah
      mockPlayers.midfielders[3], // Saka
      mockPlayers.midfielders[2], // Odegaard
      mockPlayers.midfielders[6], // Grealish
    ],
    forwards: [
      mockPlayers.forwards[0], // Haaland
      mockPlayers.forwards[1], // Kane
      mockPlayers.forwards[2], // Jesus
    ]
  };

  const handleSquadTypeChange = (type: string) => {
    setSquadType(type);
    if (type === 'create') {
      // Auto-populate with suggested players
      setSquadPlayers(suggestedSquad);
      setBudget(calculateRemainingBudget(suggestedSquad));
    } else {
      // Clear squad for import
      setSquadPlayers({
        goalkeepers: [null, null],
        defenders: [null, null, null, null, null],
        midfielders: [null, null, null, null, null],
        forwards: [null, null, null]
      });
      setBudget(100.0);
    }
  };

  const calculateRemainingBudget = (players: typeof squadPlayers) => {
    let totalSpent = 0;
    Object.values(players).forEach(positionPlayers => {
      positionPlayers.forEach(player => {
        if (player) totalSpent += player.price;
      });
    });
    return 100.0 - totalSpent;
  };

  const calculateExpectedPoints = (players: typeof squadPlayers) => {
    let totalPoints = 0;
    Object.values(players).forEach(positionPlayers => {
      positionPlayers.forEach(player => {
        if (player) totalPoints += (player.points || 0) * 0.1; // Expected points for next gameweek
      });
    });
    return totalPoints;
  };

  const getTotalPlayers = (players: typeof squadPlayers) => {
    let count = 0;
    Object.values(players).forEach(positionPlayers => {
      positionPlayers.forEach(player => {
        if (player) count++;
      });
    });
    return count;
  };

  const handlePlayerSelect = (position: string, index: number) => {
    setSelectedPosition({ position, index });
    setIsModalOpen(true);
  };

  const handlePlayerSelection = (player: Player) => {
    if (!selectedPosition) return;

    const { position, index } = selectedPosition;
    const newSquadPlayers = { ...squadPlayers };
    
    // Remove cost of previous player if exists
    const previousPlayer = newSquadPlayers[position as keyof typeof squadPlayers][index];
    let newBudget = budget;
    if (previousPlayer) {
      newBudget += previousPlayer.price;
    }
    
    // Check if we can afford the new player
    if (player.price > newBudget) {
      alert('Insufficient budget for this player!');
      return;
    }

    // Add new player
    newSquadPlayers[position as keyof typeof squadPlayers][index] = player;
    newBudget -= player.price;

    setSquadPlayers(newSquadPlayers);
    setBudget(newBudget);
    setIsModalOpen(false);
    setSelectedPosition(null);
  };

  const handlePlayerRemove = (position: string, index: number) => {
    const newSquadPlayers = { ...squadPlayers };
    const player = newSquadPlayers[position as keyof typeof squadPlayers][index];
    
    if (player) {
      newSquadPlayers[position as keyof typeof squadPlayers][index] = null;
      setBudget(budget + player.price);
      setSquadPlayers(newSquadPlayers);
    }
  };

  const handleImportTeam = () => {
    if (!managerId) {
      alert('Please enter your Manager ID');
      return;
    }
    
    // Simulate importing team data
    alert('Team imported successfully! (This is a demo)');
    // In real implementation, this would fetch data from FPL API
  };

  const getAvailablePlayersForPosition = (position: string) => {
    const positionKey = position.toLowerCase() as keyof typeof mockPlayers;
    return mockPlayers[positionKey] || [];
  };

  return (
    <div className="space-y-8">
      {/* Squad Type Selection */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Approach</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => handleSquadTypeChange('create')}
            className={`p-6 rounded-lg border-2 transition-all duration-200 ${
              squadType === 'create'
                ? 'border-blue-500 bg-blue-50 text-blue-900'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <Users className="h-8 w-8 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Create New Squad</h3>
            <p className="text-sm">Start with AI-suggested players (£100.0m budget)</p>
          </button>
          <button
            onClick={() => handleSquadTypeChange('import')}
            className={`p-6 rounded-lg border-2 transition-all duration-200 ${
              squadType === 'import'
                ? 'border-blue-500 bg-blue-50 text-blue-900'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
            }`}
          >
            <Download className="h-8 w-8 mb-3 mx-auto" />
            <h3 className="font-semibold mb-2">Import Current Team</h3>
            <p className="text-sm">Enter your team ID to import existing squad</p>
          </button>
        </div>
      </div>

      {/* Import Team Section */}
      {squadType === 'import' && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Import Your Team</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="managerId" className="block text-sm font-medium text-gray-700 mb-2">
                Manager ID
              </label>
              <input
                type="text"
                id="managerId"
                value={managerId}
                onChange={(e) => setManagerId(e.target.value)}
                placeholder="Enter your FPL Manager ID (e.g., 123456)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button 
              onClick={handleImportTeam}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              Import Team
            </button>
          </div>
        </div>
      )}

      {/* Budget and Stats Display */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">Budget Remaining</h3>
          <p className="text-2xl font-bold text-green-600">£{budget.toFixed(1)}m</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">Expected Points</h3>
          <p className="text-2xl font-bold text-blue-600">{calculateExpectedPoints(squadPlayers).toFixed(1)}</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
          <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
          <h3 className="font-semibold text-gray-900 mb-1">Players Selected</h3>
          <p className="text-2xl font-bold text-purple-600">{getTotalPlayers(squadPlayers)}/15</p>
        </div>
      </div>

      {/* Football Field */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
          {squadType === 'create' ? 'Your Squad Formation' : 'Click positions to select players'}
        </h3>
        <FootballField
          players={squadPlayers}
          onPlayerSelect={handlePlayerSelect}
          onPlayerRemove={handlePlayerRemove}
          mode={squadType}
        />
      </div>

      {/* Player Selection Modal */}
      <PlayerSelectionModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPosition(null);
        }}
        onSelect={handlePlayerSelection}
        position={selectedPosition?.position || ''}
        availablePlayers={selectedPosition ? getAvailablePlayersForPosition(selectedPosition.position) : []}
        budget={budget}
      />

      {/* Save Button */}
      <div className="text-center">
        <button 
          disabled={getTotalPlayers(squadPlayers) < 15}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 mx-auto"
        >
          <Users className="h-5 w-5" />
          Save Squad ({getTotalPlayers(squadPlayers)}/15)
        </button>
      </div>
    </div>
  );
};

export default CreateSquad;