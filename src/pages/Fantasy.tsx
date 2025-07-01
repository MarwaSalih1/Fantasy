import React, { useState } from 'react';
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  AlertTriangle, 
  DollarSign,
  Calendar,
  TrendingUp,
  Shield,
  Lightbulb,
  ExternalLink,
  Download,
  RefreshCw,
  Crown,
  Zap
} from 'lucide-react';

const Fantasy = () => {
  const [activeTab, setActiveTab] = useState('rules');

  const tabs = [
    { id: 'rules', name: 'Rules & Regulations', icon: BookOpen },
    { id: 'guide', name: 'How to Use Our AI', icon: Target },
    { id: 'tips', name: 'Beginner Tips', icon: Lightbulb },
  ];

  const rules = [
    {
      title: 'Squad Selection',
      icon: Users,
      rules: [
        'Select 15 players within a £100.0m budget',
        '2 Goalkeepers, 5 Defenders, 5 Midfielders, 3 Forwards',
        'Maximum 3 players from any single Premier League team',
        'Must field 11 players each gameweek (1 GK, 3-5 DEF, 3-5 MID, 1-3 FWD)'
      ]
    },
    {
      title: 'Scoring System',
      icon: Trophy,
      rules: [
        'Playing 60+ minutes: 2 points (1 point for GK/DEF)',
        'Goal: 6 points (FWD), 5 points (MID), 6 points (DEF/GK)',
        'Assist: 3 points for all positions',
        'Clean sheet: 4 points (GK/DEF), 1 point (MID)',
        'Penalty save: 5 points (GK only)',
        'Yellow card: -1 point, Red card: -3 points',
        'Own goal: -2 points, Penalty miss: -2 points'
      ]
    },
    {
      title: 'Transfers & Captain',
      icon: RefreshCw,
      rules: [
        '1 free transfer per gameweek (can bank up to 2)',
        'Additional transfers cost 4 points each',
        'Captain scores double points, Vice-captain if captain doesn\'t play',
        'Deadline: Usually Friday 11:30 AM GMT (varies for midweek games)',
        'No transfers allowed after deadline until next gameweek'
      ]
    },
    {
      title: 'Special Chips',
      icon: Crown,
      rules: [
        'Wildcard: Unlimited free transfers (2 per season)',
        'Free Hit: Unlimited transfers for one gameweek only',
        'Bench Boost: All 15 players score points for one gameweek',
        'Triple Captain: Captain scores triple points for one gameweek',
        'Each chip can only be used once per season'
      ]
    },
    {
      title: 'Price Changes',
      icon: DollarSign,
      rules: [
        'Player prices change based on ownership and performance',
        'Price rises when many managers buy a player',
        'Price falls when many managers sell a player',
        'You receive half the profit when selling a player',
        'Price changes happen overnight around 1:30 AM GMT'
      ]
    },
    {
      title: 'Gameweeks & Fixtures',
      icon: Calendar,
      rules: [
        '38 gameweeks in a Premier League season',
        'Some gameweeks have blank fixtures (FA Cup, European competitions)',
        'Double gameweeks: Teams play twice in one gameweek',
        'Fixture difficulty rated 1-5 (1 = easiest, 5 = hardest)',
        'International breaks affect player availability'
      ]
    }
  ];

  const aiGuideSteps = [
    {
      step: 1,
      title: 'Get Your Team ID',
      icon: Download,
      description: 'Find your FPL Team ID from the official Fantasy Premier League website',
      details: [
        'Log into your FPL account at fantasy.premierleague.com',
        'Go to "Points" or "My Team" section',
        'Your Team ID is in the URL (e.g., /entry/123456/event/15)',
        'The number after "entry/" is your Team ID',
        'Write down this 6-7 digit number'
      ],
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 2,
      title: 'Import Your Squad',
      icon: Users,
      description: 'Use our Squad Management tool to import your current team',
      details: [
        'Navigate to our "Squad" section',
        'Click "Import Current Team"',
        'Enter your Team ID in the input field',
        'Click "Import Team" to fetch your current squad',
        'Your players, budget, and team value will be loaded automatically'
      ],
      image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 3,
      title: 'Analyze AI Recommendations',
      icon: Target,
      description: 'Review our AI-powered transfer suggestions and captain picks',
      details: [
        'Check the "Transfers" tab for player recommendations',
        'Review expected points for each suggested player',
        'Analyze fixture difficulty and form data',
        'Consider our captain and vice-captain suggestions',
        'Review chip strategy recommendations'
      ],
      image: 'https://images.pexels.com/photos/2834914/pexels-photo-2834914.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 4,
      title: 'Apply Changes on FPL',
      icon: ExternalLink,
      description: 'Implement our suggestions on the official FPL website',
      details: [
        'Open fantasy.premierleague.com in a new tab',
        'Go to "Transfers" to make player changes',
        'Use our price and fixture information to make decisions',
        'Set your captain and vice-captain based on our recommendations',
        'Consider using chips when we suggest optimal timing'
      ],
      image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      step: 5,
      title: 'Track Performance',
      icon: TrendingUp,
      description: 'Monitor your team\'s performance and our prediction accuracy',
      details: [
        'Check your points after each gameweek',
        'Compare actual results with our predictions',
        'Review our weekly performance analysis',
        'Use insights to improve future decisions',
        'Share your success stories with our community'
      ],
      image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const beginnerTips = [
    {
      category: 'Squad Building',
      icon: Users,
      color: 'blue',
      tips: [
        {
          title: 'Start with Premium Players',
          description: 'Invest in 2-3 expensive players (£10m+) who consistently score points',
          importance: 'high'
        },
        {
          title: 'Balance Your Squad',
          description: 'Don\'t spend all budget on forwards - defenders and midfielders can be great value',
          importance: 'high'
        },
        {
          title: 'Avoid Rotation Risk',
          description: 'Choose players who start regularly, not squad rotation players',
          importance: 'medium'
        },
        {
          title: 'Consider Fixtures',
          description: 'Look at upcoming fixtures when selecting players - easier games = more points',
          importance: 'medium'
        }
      ]
    },
    {
      category: 'Captain Strategy',
      icon: Crown,
      color: 'yellow',
      tips: [
        {
          title: 'Captain Premium Attackers',
          description: 'Usually captain your most expensive midfielder or forward',
          importance: 'high'
        },
        {
          title: 'Check Fixtures',
          description: 'Captain players with easy home fixtures or good recent form',
          importance: 'high'
        },
        {
          title: 'Avoid Rotation Risk',
          description: 'Don\'t captain players who might be rested or rotated',
          importance: 'medium'
        },
        {
          title: 'Follow the Crowd (Sometimes)',
          description: 'Popular captains are popular for a reason - but differentials can gain rank',
          importance: 'low'
        }
      ]
    },
    {
      category: 'Transfer Strategy',
      icon: RefreshCw,
      color: 'green',
      tips: [
        {
          title: 'Don\'t Waste Free Transfers',
          description: 'Use your free transfer each week or bank it (max 2)',
          importance: 'high'
        },
        {
          title: 'Plan Ahead',
          description: 'Look at fixtures 3-4 gameweeks ahead when making transfers',
          importance: 'high'
        },
        {
          title: 'Avoid Point Hits',
          description: 'Only take -4 point hits for transfers if you\'re confident of 4+ extra points',
          importance: 'medium'
        },
        {
          title: 'Monitor Price Changes',
          description: 'Make transfers early in the week to avoid price rises',
          importance: 'medium'
        }
      ]
    },
    {
      category: 'Chip Usage',
      icon: Zap,
      color: 'purple',
      tips: [
        {
          title: 'Save Chips for Double Gameweeks',
          description: 'Triple Captain and Bench Boost work best when players have 2 games',
          importance: 'high'
        },
        {
          title: 'Use Wildcard Wisely',
          description: 'Use first wildcard before GW9, second after GW20 for best results',
          importance: 'high'
        },
        {
          title: 'Free Hit for Blank Gameweeks',
          description: 'Use Free Hit when many teams don\'t play (usually GW28-33)',
          importance: 'medium'
        },
        {
          title: 'Don\'t Rush Chip Usage',
          description: 'Better to save chips for optimal moments than use them early',
          importance: 'medium'
        }
      ]
    },
    {
      category: 'Mental Game',
      icon: Star,
      color: 'red',
      tips: [
        {
          title: 'Stay Patient',
          description: 'FPL is a marathon, not a sprint - bad gameweeks happen to everyone',
          importance: 'high'
        },
        {
          title: 'Don\'t Chase Last Week\'s Points',
          description: 'Avoid knee-jerk transfers based on one bad gameweek',
          importance: 'high'
        },
        {
          title: 'Learn from Mistakes',
          description: 'Analyze what went wrong and adjust strategy for next time',
          importance: 'medium'
        },
        {
          title: 'Enjoy the Process',
          description: 'FPL should be fun - don\'t let bad weeks ruin your enjoyment',
          importance: 'low'
        }
      ]
    }
  ];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      case 'medium': return <Star className="h-4 w-4" />;
      case 'low': return <CheckCircle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      yellow: 'from-yellow-500 to-yellow-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fantasy Premier League Guide</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Fantasy Premier League rules, how to use our AI recommendations, 
            and expert tips for beginners
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-center border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <tab.icon className="h-5 w-5" />
                    {tab.name}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {/* Rules & Regulations Tab */}
            {activeTab === 'rules' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Fantasy Premier League Rules & Regulations</h2>
                  <p className="text-lg text-gray-600">
                    Master the official rules to build winning strategies
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {rules.map((section, index) => (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border border-gray-200">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <section.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                      </div>
                      <ul className="space-y-3">
                        {section.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Quick Reference Card */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Quick Reference</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <DollarSign className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Budget</h4>
                      <p className="text-blue-100">£100.0m to build your squad</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <Users className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Squad Size</h4>
                      <p className="text-blue-100">15 players total, 11 play each week</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <RefreshCw className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Transfers</h4>
                      <p className="text-blue-100">1 free per week, -4 points for extra</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* How to Use Our AI Tab */}
            {activeTab === 'guide' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use Our AI Recommendations</h2>
                  <p className="text-lg text-gray-600">
                    Step-by-step guide to implementing our AI suggestions on the official FPL website
                  </p>
                </div>

                <div className="space-y-8">
                  {aiGuideSteps.map((step, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-100 p-3 rounded-full">
                              <step.icon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                              <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-2">
                                Step {step.step}
                              </div>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <ArrowRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Integration Tips */}
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pro Integration Tips</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Bookmark Both Sites</h4>
                          <p className="text-gray-600 text-sm">Keep our platform and FPL official site open in separate tabs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Check Before Deadline</h4>
                          <p className="text-gray-600 text-sm">Review our latest recommendations 1-2 hours before deadline</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Use Mobile Apps</h4>
                          <p className="text-gray-600 text-sm">Both our site and FPL work great on mobile for quick changes</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Trust the Process</h4>
                          <p className="text-gray-600 text-sm">Our AI analyzes thousands of data points - trust the recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Track Your Progress</h4>
                          <p className="text-gray-600 text-sm">Monitor how our suggestions perform to build confidence</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Join Our Community</h4>
                          <p className="text-gray-600 text-sm">Share experiences and learn from other successful managers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Beginner Tips Tab */}
            {activeTab === 'tips' && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential Tips for FPL Beginners</h2>
                  <p className="text-lg text-gray-600">
                    Master these fundamentals to build a strong foundation for FPL success
                  </p>
                </div>

                <div className="space-y-8">
                  {beginnerTips.map((category, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                      <div className={`bg-gradient-to-r ${getCategoryColor(category.color)} p-6 text-white`}>
                        <div className="flex items-center gap-3">
                          <category.icon className="h-8 w-8" />
                          <h3 className="text-2xl font-bold">{category.category}</h3>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          {category.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="font-semibold text-gray-900 flex-1">{tip.title}</h4>
                                <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getImportanceColor(tip.importance)}`}>
                                  {getImportanceIcon(tip.importance)}
                                  <span className="ml-1 capitalize">{tip.importance}</span>
                                </div>
                              </div>
                              <p className="text-gray-600 text-sm">{tip.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Success Metrics */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">What Success Looks Like</h3>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <Trophy className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Season Rank</h4>
                      <p className="text-purple-100">Top 1M in your first season</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <Target className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Weekly Average</h4>
                      <p className="text-purple-100">55+ points per gameweek</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <TrendingUp className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Green Arrows</h4>
                      <p className="text-purple-100">60%+ of gameweeks improving rank</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/20 rounded-lg p-4 mb-3">
                        <Star className="h-8 w-8 mx-auto" />
                      </div>
                      <h4 className="font-semibold mb-2">Mini-League</h4>
                      <p className="text-purple-100">Top 3 in your friends league</p>
                    </div>
                  </div>
                </div>

                {/* Common Mistakes to Avoid */}
                <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                  <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">Common Beginner Mistakes to Avoid</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-900">Chasing Last Week's Points</h4>
                          <p className="text-red-700 text-sm">Don't transfer in players just because they scored well last week</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-900">Ignoring Fixtures</h4>
                          <p className="text-red-700 text-sm">Always check upcoming fixtures before making transfers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-900">Too Many Transfers</h4>
                          <p className="text-red-700 text-sm">Avoid taking multiple -4 point hits in the same gameweek</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-900">Captaining Defenders</h4>
                          <p className="text-red-700 text-sm">Defenders rarely score enough to justify captaincy</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-900">Wasting Chips Early</h4>
                          <p className="text-red-700 text-sm">Save chips for optimal moments, not panic situations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                        <div>
                          <h4 className="font-semibold text-red-900">Emotional Decisions</h4>
                          <p className="text-red-700 text-sm">Don't let team loyalty affect your FPL decisions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your FPL Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Use our AI-powered insights to gain an edge over millions of other managers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 justify-center">
              <Users className="h-5 w-5" />
              Build Your Squad
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View AI Recommendations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fantasy;