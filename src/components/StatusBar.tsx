import React from 'react';
import { Users, Clock, Trophy, Target } from 'lucide-react';

const StatusBar = () => {
  const stats = [
    { icon: Users, label: 'Active Managers', value: '9.2M+', color: 'text-blue-600' },
    { icon: Clock, label: 'Hours to Deadline', value: '4d 12h', color: 'text-green-600' },
    { icon: Trophy, label: 'Current Winner', value: 'Sarah M.', color: 'text-yellow-600' },
    { icon: Target, label: 'Average Score', value: '62 pts', color: 'text-purple-600' },
  ];

  return (
    <section className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:bg-gray-50 rounded-lg p-4 transition-colors duration-200">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-white mb-3 transition-colors duration-200`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="font-bold text-2xl text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusBar;