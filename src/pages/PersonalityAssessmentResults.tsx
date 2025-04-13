import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart2, ArrowLeft, Lightbulb, Target, Users, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Score {
  value: number;
  percentage: number;
}

interface Scores {
  communication: Score;
  resilience: Score;
  relationshipBuilding: Score;
  closingAbility: Score;
  adaptability: Score;
  competitiveness: Score;
}

const categoryDescriptions = {
  communication: {
    title: 'Communication Skills',
    description: 'Your ability to effectively communicate and adapt your style to different audiences',
    icon: Users,
    recommendations: {
      high: 'Excellent communication skills! Focus on mentoring others and taking on leadership roles.',
      medium: 'Good communication foundation. Consider practicing active listening and public speaking.',
      low: 'Work on improving communication through practice and feedback. Consider communication training.'
    }
  },
  resilience: {
    title: 'Resilience',
    description: 'Your ability to handle pressure, rejection, and maintain motivation',
    icon: Zap,
    recommendations: {
      high: 'Strong resilience! You handle challenges well. Focus on helping others develop this skill.',
      medium: 'Good resilience foundation. Practice stress management and positive thinking.',
      low: 'Build resilience through small challenges and positive self-talk. Consider stress management training.'
    }
  },
  relationshipBuilding: {
    title: 'Relationship Building',
    description: 'Your ability to build and maintain professional relationships',
    icon: Users,
    recommendations: {
      high: 'Excellent relationship building skills! Focus on expanding your network and mentoring others.',
      medium: 'Good relationship foundation. Work on active listening and follow-up skills.',
      low: 'Focus on building rapport and maintaining regular contact with clients.'
    }
  },
  closingAbility: {
    title: 'Closing Ability',
    description: 'Your comfort and effectiveness in closing deals and negotiations',
    icon: Target,
    recommendations: {
      high: 'Strong closing skills! Focus on complex negotiations and mentoring others.',
      medium: 'Good closing foundation. Practice objection handling and value proposition delivery.',
      low: 'Work on understanding client needs and developing confidence in asking for commitments.'
    }
  },
  adaptability: {
    title: 'Adaptability',
    description: 'Your ability to handle multiple tasks and learn new things quickly',
    icon: TrendingUp,
    recommendations: {
      high: 'Excellent adaptability! Take on new challenges and help others develop this skill.',
      medium: 'Good adaptability foundation. Practice time management and continuous learning.',
      low: 'Focus on developing organizational skills and embracing change.'
    }
  },
  competitiveness: {
    title: 'Competitiveness',
    description: 'Your comfort with competitive situations and risk-taking',
    icon: Target,
    recommendations: {
      high: 'Strong competitive drive! Focus on channeling this energy positively.',
      medium: 'Good competitive foundation. Work on balancing competition with collaboration.',
      low: 'Develop comfort with competition through small challenges and goal setting.'
    }
  }
};

export const PersonalityAssessmentResults: React.FC = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState<Scores | null>(null);

  useEffect(() => {
    const storedScores = localStorage.getItem('personalityAssessmentScores');
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    } else {
      navigate('/assessments');
    }
  }, [navigate]);

  const getRecommendation = (percentage: number, category: keyof typeof categoryDescriptions) => {
    if (percentage >= 80) return categoryDescriptions[category].recommendations.high;
    if (percentage >= 50) return categoryDescriptions[category].recommendations.medium;
    return categoryDescriptions[category].recommendations.low;
  };

  const getScoreLabel = (percentage: number) => {
    if (percentage >= 80) return { label: 'Excellent', color: 'bg-green-100 text-green-800' };
    if (percentage >= 65) return { label: 'Good', color: 'bg-blue-100 text-blue-800' };
    if (percentage >= 50) return { label: 'Average', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Needs Improvement', color: 'bg-red-100 text-red-800' };
  };

  if (!scores) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Button 
          className="bg-blue-600 text-white hover:bg-blue-700 mb-4"
          onClick={() => navigate('/instant-evaluation')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Assessments
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <BarChart2 className="mr-2 h-6 w-6 text-primary" />
          Personality Assessment Results
        </h1>
        <p className="text-gray-500 mt-1">
          Your detailed personality assessment results and recommendations
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {Object.entries(scores).map(([category, score]) => {
          const Icon = categoryDescriptions[category as keyof typeof categoryDescriptions].icon;
          return (
            <Card key={category} className="shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">
                    {categoryDescriptions[category as keyof typeof categoryDescriptions].title}
                  </CardTitle>
                </div>
                <CardDescription>
                  {categoryDescriptions[category as keyof typeof categoryDescriptions].description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Score</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{score.percentage}%</span>
                      <span className={`text-sm px-2 py-1 rounded ${getScoreLabel(score.percentage).color}`}>
                        {getScoreLabel(score.percentage).label}
                      </span>
                    </div>
                  </div>
                  <Progress value={score.percentage} className="h-2" />
                  <div className="flex items-start space-x-2 mt-4">
                    <Lightbulb className="h-5 w-5 text-yellow-500 mt-1" />
                    <p className="text-sm text-gray-600">
                      {getRecommendation(score.percentage, category as keyof typeof categoryDescriptions)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
            Overall Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Overall Score */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500">Overall Score</span>
                <div className="flex items-center gap-2">
                  {(() => {
                    const avgScore = Math.round(
                      Object.values(scores).reduce((sum, score) => sum + score.percentage, 0) / 
                      Object.keys(scores).length
                    );
                    return (
                      <>
                        <span className="font-semibold">{avgScore}%</span>
                        <span className={`text-sm px-2 py-1 rounded ${getScoreLabel(avgScore).color}`}>
                          {getScoreLabel(avgScore).label}
                        </span>
                      </>
                    );
                  })()}
                </div>
              </div>
              <Progress 
                value={
                  Object.values(scores).reduce((sum, score) => sum + score.percentage, 0) / 
                  Object.keys(scores).length
                } 
                className="h-2" 
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-gray-900">Key Strengths</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {Object.entries(scores)
                  .sort(([, a], [, b]) => b.percentage - a.percentage)
                  .slice(0, 2)
                  .map(([category, score]) => (
                    <li key={category} className="flex items-center justify-between">
                      <span>{categoryDescriptions[category as keyof typeof categoryDescriptions].title}</span>
                      <span className="font-medium">{score.percentage}%</span>
                    </li>
                  ))}
              </ul>

              <h3 className="font-medium text-gray-900 mt-4">Areas for Improvement</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {Object.entries(scores)
                  .sort(([, a], [, b]) => a.percentage - b.percentage)
                  .slice(0, 2)
                  .map(([category, score]) => (
                    <li key={category} className="flex items-center justify-between">
                      <span>{categoryDescriptions[category as keyof typeof categoryDescriptions].title}</span>
                      <span className="font-medium">{score.percentage}%</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="mt-6">
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

export default PersonalityAssessmentResults; 