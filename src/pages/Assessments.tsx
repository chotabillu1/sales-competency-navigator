import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Brain, User } from 'lucide-react';

export const InstantEvaluation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Instant Evaluation</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get immediate insights into your personality and intelligence traits
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/personality-assessment">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personality Assessment
              </CardTitle>
              <CardDescription>
                Evaluate your leadership style, communication skills, and adaptability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Take a quick assessment to understand your personality traits and how they influence your sales approach.
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link to="/intelligence-assessment">
          <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Intelligence Assessment
              </CardTitle>
              <CardDescription>
                Measure your analytical and problem-solving capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Assess your cognitive abilities including numerical reasoning, logical thinking, and problem-solving skills.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default InstantEvaluation; 