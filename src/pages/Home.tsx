import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  TrendingDown, 
  Star, 
  Shield, 
  Users, 
  Target,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowUp,
  ArrowDown,
  AlertTriangle,
  Clock
} from 'lucide-react';
import FootballFieldComparison from '../components/FootballFieldComparison';
import SeasonBestField from '../components/SeasonBestField';

const Home = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    // Set deadline to next Friday 11:30 AM (typical FPL deadline)
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + (5 - deadline.getDay() + 7) % 7); // Next Friday
    deadline.setHours(11, 30, 0, 0); // 11:30 AM

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = deadline.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // AI vs Actual Performance Teams (without points displayed)
  const aiSuggestedTeam = {
    goalkeepers: [
      { name: 'Alisson Becker', team: 'Liverpool', position: 'Goalkeeper', isAISuggested: true }
    ],
    defenders: [
      { name: 'Trent Alexander-Arnold', team: 'Liverpool', position: 'Defender', isAISuggested: true },
      { name: 'Virgil van Dijk', team: 'Liverpool', position: 'Defender', isAISuggested: true },
      { name: 'Joao Cancelo', team: 'Man City', position: 'Defender', isAISuggested: true },
      { name: 'Ben White', team: 'Arsenal', position: 'Defender', isAISuggested: false }
    ],
    midfielders: [
      { name: 'Kevin De Bruyne', team: 'Man City', position: 'Midfielder', isAISuggested: true },
      { name: 'Bukayo Saka', team: 'Arsenal', position: 'Midfielder', isAISuggested: true },
      { name: 'Martin Odegaard', team: 'Arsenal', position: 'Midfielder', isAISuggested: true },
      { name: 'Jack Grealish', team: 'Man City', position: 'Midfielder', isAISuggested: false }
    ],
    forwards: [
      { name: 'Erling Haaland', team: 'Man City', position: 'Forward', isAISuggested: true, isCaptain: true },
      { name: 'Gabriel Jesus', team: 'Arsenal', position: 'Forward', isAISuggested: false },
      { name: 'Ivan Toney', team: 'Brentford', position: 'Forward', isAISuggested: true }
    ]
  };

  const actualBestTeam = {
    goalkeepers: [
      { name: 'Nick Pope', team: 'Newcastle', position: 'Goalkeeper', isAISuggested: false }
    ],
    defenders: [
      { name: 'Kieran Trippier', team: 'Newcastle', position: 'Defender', isAISuggested: true },
      { name: 'Reece James', team: 'Chelsea', position: 'Defender', isAISuggested: false },
      { name: 'Luke Shaw', team: 'Man United', position: 'Defender', isAISuggested: false },
      { name: 'Trent Alexander-Arnold', team: 'Liverpool', position: 'Defender', isAISuggested: true }
    ],
    midfielders: [
      { name: 'Mohamed Salah', team: 'Liverpool', position: 'Midfielder', isAISuggested: false, isCaptain: true },
      { name: 'Bruno Fernandes', team: 'Man United', position: 'Midfielder', isAISuggested: false },
      { name: 'Kevin De Bruyne', team: 'Man City', position: 'Midfielder', isAISuggested: true },
      { name: 'Bukayo Saka', team: 'Arsenal', position: 'Midfielder', isAISuggested: true }
    ],
    forwards: [
      { name: 'Harry Kane', team: 'Tottenham', position: 'Forward', isAISuggested: false },
      { name: 'Callum Wilson', team: 'Newcastle', position: 'Forward', isAISuggested: false },
      { name: 'Erling Haaland', team: 'Man City', position: 'Forward', isAISuggested: true }
    ]
  };

  // Season Best Team
  const seasonBestTeam = {
    goalkeepers: [
      { name: 'Alisson Becker', team: 'Liverpool', position: 'Goalkeeper', points: 156, price: 5.5, gamesPlayed: 28, pointsPerGame: 5.6 },
      { name: 'Nick Pope', team: 'Newcastle', position: 'Goalkeeper', points: 142, price: 4.8, gamesPlayed: 26, pointsPerGame: 5.5 }
    ],
    defenders: [
      { name: 'Trent Alexander-Arnold', team: 'Liverpool', position: 'Defender', points: 178, price: 7.8, gamesPlayed: 29, pointsPerGame: 6.1 },
      { name: 'Kieran Trippier', team: 'Newcastle', position: 'Defender', points: 165, price: 6.1, gamesPlayed: 28, pointsPerGame: 5.9 },
      { name: 'Joao Cancelo', team: 'Man City', position: 'Defender', points: 158, price: 7.2, gamesPlayed: 27, pointsPerGame: 5.9 },
      { name: 'Virgil van Dijk', team: 'Liverpool', position: 'Defender', points: 148, price: 6.2, gamesPlayed: 29, pointsPerGame: 5.1 },
      { name: 'Reece James', team: 'Chelsea', position: 'Defender', points: 135, price: 6.8, gamesPlayed: 24, pointsPerGame: 5.6 }
    ],
    midfielders: [
      { name: 'Mohamed Salah', team: 'Liverpool', position: 'Midfielder', points: 196, price: 12.8, gamesPlayed: 29, pointsPerGame: 6.8 },
      { name: 'Kevin De Bruyne', team: 'Man City', position: 'Midfielder', points: 178, price: 12.1, gamesPlayed: 26, pointsPerGame: 6.8 },
      { name: 'Bruno Fernandes', team: 'Man United', position: 'Midfielder', points: 165, price: 11.5, gamesPlayed: 28, pointsPerGame: 5.9 },
      { name: 'Bukayo Saka', team: 'Arsenal', position: 'Midfielder', points: 158, price: 8.8, gamesPlayed: 27, pointsPerGame: 5.9 },
      { name: 'Son Heung-min', team: 'Tottenham', position: 'Midfielder', points: 142, price: 11.2, gamesPlayed: 25, pointsPerGame: 5.7 }
    ],
    forwards: [
      { name: 'Erling Haaland', team: 'Man City', position: 'Forward', points: 208, price: 14.2, gamesPlayed: 27, pointsPerGame: 7.7 },
      { name: 'Harry Kane', team: 'Tottenham', position: 'Forward', points: 168, price: 11.8, gamesPlayed: 28, pointsPerGame: 6.0 },
      { name: 'Ivan Toney', team: 'Brentford', position: 'Forward', points: 145, price: 7.4, gamesPlayed: 24, pointsPerGame: 6.0 }
    ]
  };

  // Enhanced previous week performance with detailed comparison
  const previousWeekPerformance = {
    ourSuggestion: {
      captain: 'Erling Haaland',
      points: 24,
      result: 'success',
      team: 'Man City',
      fixture: 'vs Everton (H)',
      reasoning: 'Home fixture against weak defense'
    },
    actualBest: {
      captain: 'Mohamed Salah',
      points: 26,
      result: 'missed',
      team: 'Liverpool',
      fixture: 'vs Brighton (H)',
      reasoning: 'Hat-trick performance'
    },
    accuracy: 85,
    totalPoints: 68,
    comparison: {
      difference: -2,
      percentage: 92.3,
      rank: '2nd best option'
    },
    otherSuggestions: [
      { player: 'Kevin De Bruyne', suggested: true, actual: 18, expected: 16 },
      { player: 'Bukayo Saka', suggested: true, actual: 14, expected: 12 },
      { player: 'Trent Alexander-Arnold', suggested: true, actual: 12, expected: 10 },
      { player: 'Gabriel Jesus', suggested: false, actual: 2, expected: 8 }
    ]
  };

  // Best players for next week by position
  const nextWeekBest = {
    goalkeepers: [
      { name: 'Alisson', team: 'Liverpool', expectedPoints: 6.2, fixture: 'vs Brighton (H)', difficulty: 2 },
      { name: 'Ederson', team: 'Man City', expectedPoints: 5.8, fixture: 'vs Everton (H)', difficulty: 2 },
      { name: 'Ramsdale', team: 'Arsenal', expectedPoints: 5.5, fixture: 'vs Palace (H)', difficulty: 2 },
      { name: 'Pope', team: 'Newcastle', expectedPoints: 5.2, fixture: 'vs Fulham (A)', difficulty: 3 },
      { name: 'Pickford', team: 'Everton', expectedPoints: 4.8, fixture: 'vs Man City (A)', difficulty: 5 }
    ],
    defenders: [
      { name: 'Trent Alexander-Arnold', team: 'Liverpool', expectedPoints: 8.5, fixture: 'vs Brighton (H)', difficulty: 2 },
      { name: 'Cancelo', team: 'Man City', expectedPoints: 7.8, fixture: 'vs Everton (H)', difficulty: 2 },
      { name: 'Trippier', team: 'Newcastle', expectedPoints: 7.2, fixture: 'vs Fulham (A)', difficulty: 3 },
      { name: 'Ben White', team: 'Arsenal', expectedPoints: 6.8, fixture: 'vs Palace (H)', difficulty: 2 },
      { name: 'Van Dijk', team: 'Liverpool', expectedPoints: 6.5, fixture: 'vs Brighton (H)', difficulty: 2 }
    ],
    midfielders: [
      { name: 'Mohamed Salah', team: 'Liverpool', expectedPoints: 12.8, fixture: 'vs Brighton (H)', difficulty: 2 },
      { name: 'Kevin De Bruyne', team: 'Man City', expectedPoints: 11.5, fixture: 'vs Everton (H)', difficulty: 2 },
      { name: 'Bukayo Saka', team: 'Arsenal', expectedPoints: 9.2, fixture: 'vs Palace (H)', difficulty: 2 },
      { name: 'Bruno Fernandes', team: 'Man United', expectedPoints: 8.8, fixture: 'vs Wolves (H)', difficulty: 3 },
      { name: 'Odegaard', team: 'Arsenal', expectedPoints: 8.5, fixture: 'vs Palace (H)', difficulty: 2 }
    ],
    forwards: [
      { name: 'Erling Haaland', team: 'Man City', expectedPoints: 14.2, fixture: 'vs Everton (H)', difficulty: 2 },
      { name: 'Harry Kane', team: 'Tottenham', expectedPoints: 10.5, fixture: 'vs Brentford (H)', difficulty: 3 },
      { name: 'Gabriel Jesus', team: 'Arsenal', expectedPoints: 9.8, fixture: 'vs Palace (H)', difficulty: 2 },
      { name: 'Darwin Nunez', team: 'Liverpool', expectedPoints: 8.5, fixture: 'vs Brighton (H)', difficulty: 2 },
      { name: 'Ivan Toney', team: 'Brentford', expectedPoints: 7.8, fixture: 'vs Tottenham (A)', difficulty: 4 }
    ]
  };

  // Price changes data
  const priceChanges = {
    increases: [
      { name: 'Erling Haaland', team: 'Man City', oldPrice: 14.1, newPrice: 14.2, change: +0.1 },
      { name: 'Mohamed Salah', team: 'Liverpool', oldPrice: 12.7, newPrice: 12.8, change: +0.1 },
      { name: 'Bukayo Saka', team: 'Arsenal', oldPrice: 8.7, newPrice: 8.8, change: +0.1 },
      { name: 'Trent Alexander-Arnold', team: 'Liverpool', oldPrice: 7.7, newPrice: 7.8, change: +0.1 },
      { name: 'Gabriel Jesus', team: 'Arsenal', oldPrice: 8.1, newPrice: 8.2, change: +0.1 }
    ],
    decreases: [
      { name: 'Raheem Sterling', team: 'Chelsea', oldPrice: 10.1, newPrice: 10.0, change: -0.1 },
      { name: 'Mason Mount', team: 'Chelsea', oldPrice: 7.9, newPrice: 7.8, change: -0.1 },
      { name: 'Jadon Sancho', team: 'Man United', oldPrice: 7.3, newPrice: 7.2, change: -0.1 },
      { name: 'Richarlison', team: 'Tottenham', oldPrice: 7.1, newPrice: 7.0, change: -0.1 },
      { name: 'Conor Gallagher', team: 'Chelsea', oldPrice: 5.6, newPrice: 5.5, change: -0.1 }
    ]
  };

  // Fixture difficulty for next 5 gameweeks
  const fixtureDifficulty = [
    {
      gameweek: 16,
      teams: [
        { name: 'Man City', difficulty: 2, fixtures: 'EVE(H)' },
        { name: 'Liverpool', difficulty: 2, fixtures: 'BHA(H)' },
        { name: 'Arsenal', difficulty: 2, fixtures: 'CRY(H)' },
        { name: 'Newcastle', difficulty: 3, fixtures: 'FUL(A)' },
        { name: 'Tottenham', difficulty: 3, fixtures: 'BRE(H)' },
        { name: 'Chelsea', difficulty: 4, fixtures: 'MUN(A)' }
      ]
    },
    {
      gameweek: 17,
      teams: [
        { name: 'Arsenal', difficulty: 2, fixtures: 'BHA(A)' },
        { name: 'Liverpool', difficulty: 3, fixtures: 'AVL(A)' },
        { name: 'Man City', difficulty: 3, fixtures: 'SHU(A)' },
        { name: 'Newcastle', difficulty: 3, fixtures: 'WHU(H)' },
        { name: 'Tottenham', difficulty: 4, fixtures: 'LIV(A)' },
        { name: 'Chelsea', difficulty: 4, fixtures: 'ARS(H)' }
      ]
    },
    {
      gameweek: 18,
      teams: [
        { name: 'Man City', difficulty: 2, fixtures: 'BUR(H)' },
        { name: 'Arsenal', difficulty: 3, fixtures: 'NEW(A)' },
        { name: 'Liverpool', difficulty: 3, fixtures: 'TOT(H)' },
        { name: 'Newcastle', difficulty: 4, fixtures: 'ARS(H)' },
        { name: 'Chelsea', difficulty: 4, fixtures: 'MCI(A)' },
        { name: 'Tottenham', difficulty: 5, fixtures: 'LIV(A)' }
      ]
    },
    {
      gameweek: 19,
      teams: [
        { name: 'Liverpool', difficulty: 2, fixtures: 'BUR(A)' },
        { name: 'Arsenal', difficulty: 2, fixtures: 'LUT(H)' },
        { name: 'Man City', difficulty: 3, fixtures: 'WHU(A)' },
        { name: 'Newcastle', difficulty: 3, fixtures: 'NOT(H)' },
        { name: 'Tottenham', difficulty: 4, fixtures: 'CHE(H)' },
        { name: 'Chelsea', difficulty: 4, fixtures: 'TOT(A)' }
      ]
    },
    {
      gameweek: 20,
      teams: [
        { name: 'Arsenal', difficulty: 2, fixtures: 'SHU(A)' },
        { name: 'Man City', difficulty: 2, fixtures: 'BRE(H)' },
        { name: 'Liverpool', difficulty: 3, fixtures: 'FUL(H)' },
        { name: 'Newcastle', difficulty: 3, fixtures: 'BHA(A)' },
        { name: 'Chelsea', difficulty: 4, fixtures: 'AVL(H)' },
        { name: 'Tottenham', difficulty: 4, fixtures: 'MUN(H)' }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'bg-green-100 text-green-800';
    if (difficulty === 3) return 'bg-yellow-100 text-yellow-800';
    if (difficulty === 4) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getDifficultyIcon = (difficulty: number) => {
    if (difficulty <= 2) return <CheckCircle className="h-4 w-4" />;
    if (difficulty === 3) return <AlertTriangle className="h-4 w-4" />;
    return <XCircle className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner with Countdown */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80"></div>
        
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Trophy className="h-20 w-20 text-yellow-400 mx-auto mb-6" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dominate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400">
                Fantasy League
              </span>
            </h1>
            <p className="text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              AI-Powered insights that turn data into victories. Join 50,000+ managers winning with our predictions.
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-6 w-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Gameweek 16 Deadline</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-400">{timeLeft.days}</div>
                    <div className="text-sm text-blue-200">Days</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-400">{timeLeft.hours}</div>
                    <div className="text-sm text-blue-200">Hours</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                    <div className="text-sm text-blue-200">Minutes</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                    <div className="text-sm text-blue-200">Seconds</div>
                  </div>
                </div>
              </div>
              <p className="text-blue-200 mt-4">Don't miss the deadline! Set your team now.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Winning Today
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Previous Week Performance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Last Week's AI Performance Analysis</h2>
            <p className="text-xl text-gray-600">Detailed comparison between our AI suggestions and actual best outcomes</p>
          </div>
          
          {/* Main Performance Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-green-900">Our AI Captain Pick</h3>
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-green-700 mb-2">{previousWeekPerformance.ourSuggestion.captain}</p>
              <p className="text-green-600 mb-1">{previousWeekPerformance.ourSuggestion.points} points scored</p>
              <p className="text-sm text-green-600">{previousWeekPerformance.ourSuggestion.fixture}</p>
              <p className="text-xs text-green-700 mt-2">{previousWeekPerformance.ourSuggestion.reasoning}</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-blue-900">Actual Best Captain</h3>
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-blue-700 mb-2">{previousWeekPerformance.actualBest.captain}</p>
              <p className="text-blue-600 mb-1">{previousWeekPerformance.actualBest.points} points scored</p>
              <p className="text-sm text-blue-600">{previousWeekPerformance.actualBest.fixture}</p>
              <p className="text-xs text-blue-700 mt-2">{previousWeekPerformance.actualBest.reasoning}</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-purple-900">AI Accuracy</h3>
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-purple-700 mb-2">{previousWeekPerformance.comparison.percentage}%</p>
              <p className="text-purple-600 mb-1">of best possible</p>
              <p className="text-sm text-purple-600">{previousWeekPerformance.comparison.rank}</p>
              <p className="text-xs text-purple-700 mt-2">Only {Math.abs(previousWeekPerformance.comparison.difference)} points behind</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-yellow-900">User Average</h3>
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-yellow-700 mb-2">{previousWeekPerformance.totalPoints}</p>
              <p className="text-yellow-600 mb-1">points scored</p>
              <p className="text-sm text-yellow-600">Following our tips</p>
              <p className="text-xs text-yellow-700 mt-2">+15% above average</p>
            </div>
          </div>

          {/* Football Field Comparison */}
          <div className="mb-12">
            <FootballFieldComparison
              title="AI Suggested Team vs Actual Best Performers"
              leftTitle="Our AI Suggestions (GW15)"
              rightTitle="Actual Best Team (GW15)"
              leftTeam={aiSuggestedTeam}
              rightTeam={actualBestTeam}
              showComparison={true}
            />
          </div>
        </div>
      </section>

      {/* Best Players for Next Week */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top 5 Players by Position - Next Week</h2>
            <p className="text-xl text-gray-600">AI-predicted best performers for Gameweek 16</p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Goalkeepers */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Goalkeepers</h3>
              </div>
              <div className="space-y-4">
                {nextWeekBest.goalkeepers.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.team}</p>
                      <p className="text-xs text-gray-500">{player.fixture}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{player.expectedPoints}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getDifficultyColor(player.difficulty)}`}>
                        {getDifficultyIcon(player.difficulty)}
                        <span className="ml-1">{player.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Defenders */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Defenders</h3>
              </div>
              <div className="space-y-4">
                {nextWeekBest.defenders.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.team}</p>
                      <p className="text-xs text-gray-500">{player.fixture}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{player.expectedPoints}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getDifficultyColor(player.difficulty)}`}>
                        {getDifficultyIcon(player.difficulty)}
                        <span className="ml-1">{player.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Midfielders */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Midfielders</h3>
              </div>
              <div className="space-y-4">
                {nextWeekBest.midfielders.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.team}</p>
                      <p className="text-xs text-gray-500">{player.fixture}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{player.expectedPoints}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getDifficultyColor(player.difficulty)}`}>
                        {getDifficultyIcon(player.difficulty)}
                        <span className="ml-1">{player.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forwards */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Forwards</h3>
              </div>
              <div className="space-y-4">
                {nextWeekBest.forwards.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.team}</p>
                      <p className="text-xs text-gray-500">{player.fixture}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-green-600">{player.expectedPoints}</p>
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getDifficultyColor(player.difficulty)}`}>
                        {getDifficultyIcon(player.difficulty)}
                        <span className="ml-1">{player.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Changes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Top 10 Price Changes</h2>
            <p className="text-xl text-gray-600">Latest player price movements you need to know</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Price Increases */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-500 p-3 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-900">Price Increases</h3>
              </div>
              <div className="space-y-4">
                {priceChanges.increases.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.team}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">£{player.oldPrice}m</span>
                        <ArrowUp className="h-4 w-4 text-green-500" />
                        <span className="font-bold text-green-600">£{player.newPrice}m</span>
                      </div>
                      <p className="text-sm text-green-600 font-semibold">+£{player.change}m</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Decreases */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-red-500 p-3 rounded-lg">
                  <TrendingDown className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-900">Price Decreases</h3>
              </div>
              <div className="space-y-4">
                {priceChanges.decreases.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <p className="font-semibold text-gray-900">{player.name}</p>
                      <p className="text-sm text-gray-600">{player.team}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">£{player.oldPrice}m</span>
                        <ArrowDown className="h-4 w-4 text-red-500" />
                        <span className="font-bold text-red-600">£{player.newPrice}m</span>
                      </div>
                      <p className="text-sm text-red-600 font-semibold">{player.change}m</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Season Best Team Football Field */}
          <SeasonBestField
            title="Best Season Performers"
            subtitle="Top players by position based on total season points"
            team={seasonBestTeam}
          />
        </div>
      </section>

      {/* Fixture Difficulty */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fixture Difficulty - Next 5 Gameweeks</h2>
            <p className="text-xl text-gray-600">Plan your transfers with our fixture difficulty analysis</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Team</th>
                    {fixtureDifficulty.map((gw) => (
                      <th key={gw.gameweek} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        GW {gw.gameweek}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {['Man City', 'Liverpool', 'Arsenal', 'Newcastle', 'Tottenham', 'Chelsea'].map((teamName) => (
                    <tr key={teamName} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-900">{teamName}</td>
                      {fixtureDifficulty.map((gw) => {
                        const team = gw.teams.find(t => t.name === teamName);
                        return (
                          <td key={gw.gameweek} className="px-6 py-4 text-center">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(team?.difficulty || 3)}`}>
                              {getDifficultyIcon(team?.difficulty || 3)}
                              <span className="ml-1">{team?.fixtures}</span>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <div className="flex items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Easy (1-2)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Medium (3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>Hard (4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Very Hard (5)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Winning?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50,000+ managers using our AI to dominate their Fantasy Premier League
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Build Your Squad Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              View All Features
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;