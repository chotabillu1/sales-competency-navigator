import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft } from 'lucide-react';

interface Scores {
  numericalReasoning: number;
  logicalReasoning: number;
  strategicThinking: number;
  problemSolving: number;
}

const categoryDescriptions = {
  numericalReasoning: {
    title: 'Numerical Reasoning',
    description: 'Your ability to work with numbers, perform calculations, and interpret numerical data',
    icon: '🧮',
    recommendations: {
      high: 'Excellent numerical skills! Consider taking on more complex financial analysis tasks.',
      medium: 'Good numerical foundation. Practice with more complex calculations and data interpretation.',
      low: 'Focus on improving basic numerical skills and data interpretation. Consider numerical reasoning training.'
    }
  },
  logicalReasoning: {
    title: 'Logical Reasoning',
    description: 'Your ability to analyze patterns, draw conclusions, and solve logical problems',
    icon: '🧠',
    recommendations: {
      high: 'Strong logical reasoning! You excel at pattern recognition and problem-solving.',
      medium: 'Good logical foundation. Practice with more complex patterns and scenarios.',
      low: 'Work on developing logical thinking through practice and structured problem-solving.'
    }
  },
  strategicThinking: {
    title: 'Strategic Thinking',
    description: 'Your ability to plan ahead, consider multiple factors, and make strategic decisions',
    icon: '🎯',
    recommendations: {
      high: 'Excellent strategic thinking! Consider taking on more complex planning and decision-making roles.',
      medium: 'Good strategic foundation. Practice with scenario planning and decision analysis.',
      low: 'Focus on developing strategic thinking through structured planning exercises.'
    }
  },
  problemSolving: {
    title: 'Problem Solving',
    description: 'Your ability to identify problems, analyze options, and implement solutions',
    icon: '💡',
    recommendations: {
      high: 'Strong problem-solving skills! You excel at finding creative solutions to complex problems.',
      medium: 'Good problem-solving foundation. Practice with more complex scenarios and constraints.',
      low: 'Focus on developing systematic problem-solving approaches and analytical thinking.'
    }
  }
};

export const IntelligenceAssessmentResults: React.FC = () => {
  const navigate = useNavigate();
  const [scores, setScores] = React.useState<Scores | null>(null);

  React.useEffect(() => {
    const storedScores = localStorage.getItem('intelligenceAssessmentScores');
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    } else {
      navigate('/assessments');
    }
  }, [navigate]);

  const getRecommendation = (score: number, category: keyof typeof categoryDescriptions) => {
    const percentage = (score / 5) * 100; // 5 questions per category
    if (percentage >= 80) return categoryDescriptions[category].recommendations.high;
    if (percentage >= 50) return categoryDescriptions[category].recommendations.medium;
    return categoryDescriptions[category].recommendations.low;
  };

  if (!scores) return null;

  const calculatePercentage = (score: number) => {
    const percentage = (score / 5) * 100; // 5 questions per category
    return Math.min(100, Math.max(0, percentage)); // Ensure percentage is between 0 and 100
  };

  const getScoreLabel = (percentage: number) => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Average';
    return 'Needs Improvement';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Button 
          className="bg-blue-600 text-white hover:bg-blue-700 mb-4"
          onClick={() => navigate('/instant-evaluation')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Assessments
        </Button>
        <h1 className="text-2xl font-bold text-gray-900">Intelligence Assessment Results</h1>
        <p className="text-gray-500 mt-1">Your detailed intelligence assessment results and recommendations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.entries(scores).map(([category, score]) => {
          const categoryKey = category as keyof typeof categoryDescriptions;
          const percentage = calculatePercentage(score);
          const scoreLabel = getScoreLabel(percentage);
          return (
            <Card key={category} className="shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{categoryDescriptions[categoryKey].icon}</span>
                  <CardTitle className="text-lg">
                    {categoryDescriptions[categoryKey].title}
                  </CardTitle>
                </div>
                <CardDescription>
                  {categoryDescriptions[categoryKey].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Score</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{Math.round(percentage)}%</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        percentage >= 80 ? 'bg-green-100 text-green-800' :
                        percentage >= 60 ? 'bg-blue-100 text-blue-800' :
                        percentage >= 40 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {scoreLabel}
                      </span>
                    </div>
                  </div>
                  <Progress value={percentage} className="h-2" />
                  <div className="flex items-start space-x-2 mt-4">
                    <span className="text-2xl">💡</span>
                    <p className="text-sm text-gray-600">
                      {getRecommendation(score, categoryKey)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span className="text-2xl mr-2">🎯</span>
            Overall Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Overall Score</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">
                  {Math.round(
                    (Object.values(scores).reduce((sum, score) => sum + calculatePercentage(score), 0) /
                      Object.keys(scores).length)
                  )}%
                </span>
                <span className={`text-sm px-2 py-1 rounded ${
                  Object.values(scores).reduce((sum, score) => sum + calculatePercentage(score), 0) / Object.keys(scores).length >= 80 ? 'bg-green-100 text-green-800' :
                  Object.values(scores).reduce((sum, score) => sum + calculatePercentage(score), 0) / Object.keys(scores).length >= 60 ? 'bg-blue-100 text-blue-800' :
                  Object.values(scores).reduce((sum, score) => sum + calculatePercentage(score), 0) / Object.keys(scores).length >= 40 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {getScoreLabel(Object.values(scores).reduce((sum, score) => sum + calculatePercentage(score), 0) / Object.keys(scores).length)}
                </span>
              </div>
            </div>
            <Progress 
              value={
                Object.values(scores).reduce((sum, score) => sum + calculatePercentage(score), 0) /
                Object.keys(scores).length
              } 
              className="h-2" 
            />
            <p className="text-gray-600 mt-4">
              Based on your assessment results, here are your key strengths and areas for improvement:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              {Object.entries(scores)
                .sort(([, a], [, b]) => calculatePercentage(b) - calculatePercentage(a))
                .slice(0, 2)
                .map(([category]) => (
                  <li key={category}>
                    <span className="font-medium">Strength: </span>
                    {categoryDescriptions[category as keyof typeof categoryDescriptions].title}
                  </li>
                ))}
              {Object.entries(scores)
                .sort(([, a], [, b]) => calculatePercentage(a) - calculatePercentage(b))
                .slice(0, 2)
                .map(([category]) => (
                  <li key={category}>
                    <span className="font-medium">Area for Improvement: </span>
                    {categoryDescriptions[category as keyof typeof categoryDescriptions].title}
                  </li>
                ))}
            </ul>
            <div className="mt-4">
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => navigate('/instant-evaluation')}
              >
                Return to Assessments
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntelligenceAssessmentResults; 