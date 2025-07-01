import React, { useState } from 'react';
import { Users, Calculator, ArrowRight, Star, TrendingUp, Crown } from 'lucide-react';
import CreateSquad from '../components/CreateSquad';
import Transfers from '../components/Transfers';
import ChipStrategies from '../components/ChipStrategies';

const Squad = () => {
  const [activeTab, setActiveTab] = useState('squad');

  const tabs = [
    { id: 'squad', name: 'Squad Management', icon: Users },
    { id: 'transfers', name: 'Transfers', icon: ArrowRight },
    { id: 'chips', name: 'Chip Strategies', icon: Crown },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Squad Management</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Build your perfect Fantasy Premier League team with our AI-powered suggestions, transfer recommendations, and strategic chip guidance
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

          <div className="p-6">
            {activeTab === 'squad' && <CreateSquad />}
            {activeTab === 'transfers' && <Transfers />}
            {activeTab === 'chips' && <ChipStrategies />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squad;