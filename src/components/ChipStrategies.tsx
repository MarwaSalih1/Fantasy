import React, { useState } from 'react';
import { Crown, Users, Zap, RefreshCw, Calendar, TrendingUp, AlertTriangle, CheckCircle, Star } from 'lucide-react';

interface ChipStrategiesProps {
  currentSquad?: any;
  gameweek?: number;
}

const ChipStrategies: React.FC<ChipStrategiesProps> = ({ currentSquad, gameweek = 15 }) => {
  const [activeChip, setActiveChip] = useState<string | null>(null);

  // Mock data for upcoming fixtures and double gameweeks
  const upcomingFixtures = {
    doubleGameweeks: [16, 19, 25],
    currentGameweek: gameweek,
    nextGameweek: gameweek + 1,
    fixtures: {
      16: [
        { team: 'Man City', opponent: 'vs Arsenal (H), vs Newcastle (A)', difficulty: 4 },
        { team: 'Liverpool', opponent: 'vs Chelsea (H), vs Brighton (A)', difficulty: 3 },
        { team: 'Arsenal', opponent: 'vs Man City (A), vs West Ham (H)', difficulty: 4 },
      ],
      17: [
        { team: 'Man City', opponent: 'vs Everton (H)', difficulty: 2 },
        { team: 'Liverpool', opponent: 'vs Fulham (A)', difficulty: 3 },
        { team: 'Arsenal', opponent: 'vs Crystal Palace (H)', difficulty: 2 },
      ]
    }
  };

  // Triple Captain recommendations
  const tripleCaptainRecommendations = [
    {
      player: 'Erling Haaland',
      team: 'Man City',
      reason: 'Double gameweek 16 with favorable fixtures',
      expectedPoints: 24,
      confidence: 95,
      fixtures: 'vs Arsenal (H), vs Newcastle (A)',
      form: 'Excellent - 5 goals in last 3 games'
    },
    {
      player: 'Mohamed Salah',
      team: 'Liverpool',
      reason: 'Consistent performer with penalty duties',
      expectedPoints: 21,
      confidence: 88,
      fixtures: 'vs Chelsea (H), vs Brighton (A)',
      form: 'Good - 3 goals, 2 assists in last 4'
    }
  ];

  // Bench Boost analysis
  const benchBoostAnalysis = {
    currentBenchPoints: 18.5,
    recommended: true,
    bestGameweek: 19,
    reasoning: 'Your bench players have strong fixtures in GW19 with expected 18+ points'
  };

  // Free Hit recommendations
  const freeHitRecommendations = {
    bestGameweek: 18,
    reason: 'Blank gameweek with limited fixtures - perfect for Free Hit',
    suggestedPlayers: [
      { name: 'Haaland', team: 'Man City', expectedPoints: 12 },
      { name: 'Salah', team: 'Liverpool', expectedPoints: 10 },
      { name: 'De Bruyne', team: 'Man City', expectedPoints: 9 }
    ]
  };

  // Wildcard strategy
  const wildcardStrategy = {
    recommended: false,
    bestTiming: 'After GW20',
    reason: 'Wait for winter transfers and injury updates',
    keyTargets: ['New signings', 'Returning from injury', 'Form players']
  };

  const chipCards = [
    {
      id: 'triple-captain',
      title: 'Triple Captain',
      icon: Crown,
      color: 'from-yellow-500 to-orange-500',
      description: 'Your captain scores triple points for one gameweek',
      status: 'recommended',
      priority: 'high'
    },
    {
      id: 'bench-boost',
      title: 'Bench Boost',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      description: 'All 15 players score points for one gameweek',
      status: benchBoostAnalysis.recommended ? 'recommended' : 'wait',
      priority: 'medium'
    },
    {
      id: 'free-hit',
      title: 'Free Hit',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      description: 'Make unlimited transfers for one gameweek only',
      status: 'wait',
      priority: 'low'
    },
    {
      id: 'wildcard',
      title: 'Wildcard',
      icon: RefreshCw,
      color: 'from-purple-500 to-pink-500',
      description: 'Make unlimited permanent transfers',
      status: wildcardStrategy.recommended ? 'recommended' : 'wait',
      priority: 'low'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'recommended': return 'bg-green-100 text-green-800 border-green-200';
      case 'wait': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'used': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'medium': return <TrendingUp className="h-4 w-4 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Triple Captain Banner */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Crown className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Triple Captain Alert!</h2>
              <p className="text-yellow-100">Gameweek {upcomingFixtures.nextGameweek} is perfect for your Triple Captain chip</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">3x</div>
            <div className="text-sm text-yellow-100">Points Multiplier</div>
          </div>
        </div>
        
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {tripleCaptainRecommendations.map((rec, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg">{rec.player}</h3>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-300" />
                  <span className="font-bold">{rec.expectedPoints} pts</span>
                </div>
              </div>
              <p className="text-sm text-yellow-100 mb-2">{rec.fixtures}</p>
              <p className="text-xs text-yellow-200">{rec.reason}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-yellow-200">{rec.form}</span>
                <div className="bg-white/20 px-2 py-1 rounded text-xs">
                  {rec.confidence}% confidence
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chip Strategy Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {chipCards.map((chip) => (
          <div
            key={chip.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-200 hover:scale-105 ${
              activeChip === chip.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => setActiveChip(activeChip === chip.id ? null : chip.id)}
          >
            <div className={`bg-gradient-to-r ${chip.color} p-4 text-white`}>
              <div className="flex items-center justify-between mb-2">
                <chip.icon className="h-8 w-8" />
                {getPriorityIcon(chip.priority)}
              </div>
              <h3 className="font-bold text-lg">{chip.title}</h3>
            </div>
            
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-3">{chip.description}</p>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(chip.status)}`}>
                {chip.status === 'recommended' ? 'Recommended' : 
                 chip.status === 'wait' ? 'Wait' : 'Used'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Chip Analysis */}
      {activeChip && (
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          {activeChip === 'triple-captain' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Crown className="h-6 w-6 text-yellow-500" />
                Triple Captain Strategy
              </h3>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">Best Timing: Gameweek {upcomingFixtures.nextGameweek}</h4>
                  <p className="text-yellow-800 text-sm">Double gameweek with favorable fixtures for premium players</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {tripleCaptainRecommendations.map((rec, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-900">{rec.player} ({rec.team})</h5>
                      <p className="text-sm text-gray-600 mt-1">{rec.reason}</p>
                      <div className="mt-2 flex justify-between text-sm">
                        <span>Expected: {rec.expectedPoints} points</span>
                        <span className="text-green-600">{rec.confidence}% confidence</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeChip === 'bench-boost' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-green-500" />
                Bench Boost Analysis
              </h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${
                  benchBoostAnalysis.recommended 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Current Bench Strength</h4>
                    <span className="text-2xl font-bold text-green-600">
                      {benchBoostAnalysis.currentBenchPoints} pts
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{benchBoostAnalysis.reasoning}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Recommendation</h4>
                  <p className="text-blue-800 text-sm">
                    {benchBoostAnalysis.recommended 
                      ? `Use in Gameweek ${benchBoostAnalysis.bestGameweek} when your bench has the strongest fixtures`
                      : 'Wait until you have stronger bench players with good fixtures'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeChip === 'free-hit' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="h-6 w-6 text-blue-500" />
                Free Hit Strategy
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Best Timing: Gameweek {freeHitRecommendations.bestGameweek}</h4>
                  <p className="text-blue-800 text-sm">{freeHitRecommendations.reason}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Suggested Free Hit Team</h4>
                  <div className="space-y-2">
                    {freeHitRecommendations.suggestedPlayers.map((player, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <span className="font-medium">{player.name}</span>
                          <span className="text-sm text-gray-600 ml-2">({player.team})</span>
                        </div>
                        <span className="font-semibold text-blue-600">{player.expectedPoints} pts</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeChip === 'wildcard' && (
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-purple-500" />
                Wildcard Strategy
              </h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg border ${
                  wildcardStrategy.recommended 
                    ? 'bg-green-50 border-green-200' 
                    : 'bg-yellow-50 border-yellow-200'
                }`}>
                  <h4 className="font-semibold mb-2">
                    {wildcardStrategy.recommended ? 'Use Now' : `Wait Until ${wildcardStrategy.bestTiming}`}
                  </h4>
                  <p className="text-sm text-gray-600">{wildcardStrategy.reason}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Targets for Wildcard</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    {wildcardStrategy.keyTargets.map((target, index) => (
                      <div key={index} className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                        <span className="text-sm font-medium text-purple-800">{target}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Upcoming Fixtures Overview */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="h-6 w-6 text-blue-500" />
          Upcoming Fixtures Analysis
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Double Gameweeks</h4>
            <div className="space-y-2">
              {upcomingFixtures.doubleGameweeks.map((gw) => (
                <div key={gw} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <span className="font-medium">Gameweek {gw}</span>
                  <span className="text-sm text-green-600">Double fixtures</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Next Gameweek Preview</h4>
            <div className="space-y-2">
              {upcomingFixtures.fixtures[upcomingFixtures.nextGameweek]?.map((fixture, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{fixture.team}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">Difficulty:</span>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full mr-1 ${
                              i < fixture.difficulty ? 'bg-red-500' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{fixture.opponent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChipStrategies;