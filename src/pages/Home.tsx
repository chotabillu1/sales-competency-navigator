import * as React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">SalesPulse</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Sales Talent Intelligence Assessment
          </p>
        </div>
        <div className="space-x-4">
          <Link
            to="/instant-evaluation"
            className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Start Evaluation
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Personality Evaluation</h3>
          <p className="text-gray-600">
            Evaluate your leadership style, communication skills, and adaptability to understand your sales approach.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Intelligence Evaluation</h3>
          <p className="text-gray-600">
            Measure your analytical abilities, numerical reasoning, and problem-solving capabilities.
          </p>
        </div>
      </section>
    </div>
  );
}; 