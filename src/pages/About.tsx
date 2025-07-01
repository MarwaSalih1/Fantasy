import React from 'react';
import { Target, Brain, Trophy, Users, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning algorithms analyze player performance, fixtures, and form to provide data-driven recommendations.',
    },
    {
      icon: Target,
      title: 'Expected Points Calculator',
      description: 'Precise calculations based on historical data, fixture difficulty, and current form to predict player returns.',
    },
    {
      icon: Trophy,
      title: 'Transfer Optimizer',
      description: 'Smart transfer suggestions that maximize your team\'s potential while considering budget constraints.',
    },
    {
      icon: Users,
      title: 'Squad Builder',
      description: 'Intuitive tools to create and manage your Fantasy Premier League team with real-time budget tracking.',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      location: 'Dubai, UAE',
      rating: 5,
      text: 'This platform completely transformed my FPL experience. I went from struggling in my mini-league to winning it! The AI suggestions are incredibly accurate.',
      rank: 'Rank: 15,432',
      improvement: '+2.1M positions',
    },
    {
      name: 'Sarah Johnson',
      location: 'London, UK',
      rating: 5,
      text: 'The transfer suggestions helped me make crucial decisions during double gameweeks. My captain picks have been spot on thanks to the expected points calculator.',
      rank: 'Rank: 8,921',
      improvement: '+850K positions',
    },
    {
      name: 'Khalid Hassan',
      location: 'Cairo, Egypt',
      rating: 5,
      text: 'As someone new to FPL, this platform made everything so much easier. The squad builder is intuitive and the insights are beginner-friendly yet sophisticated.',
      rank: 'Rank: 45,123',
      improvement: 'First season success',
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Fantasy Premier League Pro</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about helping Fantasy Premier League managers make smarter decisions through 
            cutting-edge technology and data science. Our platform combines years of statistical analysis 
            with advanced AI to give you the competitive edge you need.
          </p>
        </div>

        {/* What is Fantasy Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">What is Fantasy Premier League?</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4 text-blue-100">
                  Fantasy Premier League is the official fantasy football game of the Premier League. 
                  Millions of managers worldwide compete to build the best squad of real players and 
                  score points based on their actual performances.
                </p>
                <p className="text-lg text-blue-100">
                  Success requires strategic thinking, statistical analysis, and staying updated with 
                  team news, injuries, and fixture schedules. That's where we come in.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Key Game Elements</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>£100m budget to build your squad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>15 players: 2 GK, 5 DEF, 5 MID, 3 FWD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Weekly transfers and captain choices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span>Points based on real match performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive tools and insights to help you dominate your Fantasy Premier League competitions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Advanced Analytics</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Fixture Analysis</h3>
                <p className="text-sm text-gray-600">Deep dive into upcoming fixtures with difficulty ratings and historical performance data</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Form Prediction</h3>
                <p className="text-sm text-gray-600">AI models predict player form trends based on recent performances and team dynamics</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Captain Analytics</h3>
                <p className="text-sm text-gray-600">Statistical analysis to identify the best captaincy options for maximum points</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied managers who have transformed their Fantasy Premier League experience
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-blue-600">{testimonial.rank}</p>
                      <p className="text-xs text-green-600">{testimonial.improvement}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Your League?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of managers who trust our platform to make winning decisions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Start Building Your Squad
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              View Pricing
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;