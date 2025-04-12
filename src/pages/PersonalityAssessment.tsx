import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentQuestion, AssessmentResponse } from '../types/assessment';
import { ArrowLeft, ArrowRight, User, CheckCircle, HelpCircle, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Define scoring categories and their associated question IDs
const scoringCategories = {
  communication: [1, 2, 12], // Questions about communication skills
  resilience: [3, 4, 7, 15], // Questions about handling pressure and rejection
  relationshipBuilding: [5, 8], // Questions about building relationships
  closingAbility: [6, 13], // Questions about closing deals
  adaptability: [9, 11], // Questions about handling multiple tasks and learning
  competitiveness: [10, 14], // Questions about competitive nature
};

const personalityQuestions: AssessmentQuestion[] = [
  {
    id: '1',
    type: 'likert',
    text: 'I enjoy meeting and interacting with new people',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '2',
    type: 'likert',
    text: 'I can easily adapt my communication style to different people',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '3',
    type: 'likert',
    text: 'I remain calm and composed under pressure',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '4',
    type: 'likert',
    text: 'I am comfortable with handling rejection',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '5',
    type: 'likert',
    text: 'I am naturally curious about other people\'s needs and problems',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '6',
    type: 'likert',
    text: 'I am comfortable asking for commitments and closing deals',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '7',
    type: 'likert',
    text: 'I can maintain enthusiasm and motivation even after facing setbacks',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '8',
    type: 'likert',
    text: 'I am good at building and maintaining long-term relationships',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '9',
    type: 'likert',
    text: 'I can effectively handle multiple tasks and priorities',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '10',
    type: 'likert',
    text: 'I am comfortable with competitive situations',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '11',
    type: 'likert',
    text: 'I can quickly understand and adapt to new products or services',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '12',
    type: 'likert',
    text: 'I am comfortable with public speaking and presentations',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '13',
    type: 'likert',
    text: 'I can effectively negotiate to reach mutually beneficial agreements',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '14',
    type: 'likert',
    text: 'I am comfortable with taking calculated risks',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
  {
    id: '15',
    type: 'likert',
    text: 'I can maintain a positive attitude in challenging situations',
    required: true,
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']
  },
];

export const PersonalityAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [responses, setResponses] = React.useState<AssessmentResponse[]>([]);
  const [currentResponse, setCurrentResponse] = React.useState<string>('');
  const { toast } = useToast();

  const handleSubmit = () => {
    const finalResponses = [
      ...responses,
      { questionId: personalityQuestions[currentQuestionIndex].id, selectedOption: currentResponse, timestamp: Date.now() },
    ];

    // Initialize scores for each category
    const scores = {
      communication: 0,
      resilience: 0,
      relationshipBuilding: 0,
      closingAbility: 0,
      adaptability: 0,
      competitiveness: 0,
    };

    // Map Likert scale responses to numerical values
    const responseValues: Record<string, number> = {
      'Strongly Disagree': 1,
      'Disagree': 2,
      'Neutral': 3,
      'Agree': 4,
      'Strongly Agree': 5
    };

    // Calculate scores for each category
    finalResponses.forEach(response => {
      const questionId = parseInt(response.questionId);
      const responseValue = responseValues[response.selectedOption];

      // Add score to appropriate categories (a question can contribute to multiple categories)
      Object.entries(scoringCategories).forEach(([category, questions]) => {
        if (questions.includes(questionId)) {
          scores[category as keyof typeof scores] += responseValue;
        }
      });
    });

    // Calculate average scores for each category
    const maxScorePerQuestion = 5; // Since we use a 5-point Likert scale
    const averageScores = Object.entries(scores).reduce((acc, [category, totalScore]) => {
      const numQuestions = scoringCategories[category as keyof typeof scoringCategories].length;
      const maxPossibleScore = numQuestions * maxScorePerQuestion;
      return {
        ...acc,
        [category]: {
          value: totalScore,
          percentage: Math.round((totalScore / maxPossibleScore) * 100)
        }
      };
    }, {} as Record<keyof typeof scores, { value: number; percentage: number }>);

    // Store scores in localStorage
    localStorage.setItem('personalityAssessmentScores', JSON.stringify(averageScores));
    
    toast({
      title: "Assessment Completed",
      description: "Your personality assessment has been submitted successfully.",
    });
    navigate('/personality-assessment/results');
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setCurrentResponse(responses[currentQuestionIndex - 1].selectedOption);
    }
  };

  const handleNext = () => {
    if (!currentResponse) return;

    if (currentQuestionIndex < personalityQuestions.length - 1) {
      setResponses([
        ...responses,
        { 
          questionId: personalityQuestions[currentQuestionIndex].id, 
          selectedOption: currentResponse,
          timestamp: Date.now()
        },
      ]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentResponse('');
    } else {
      handleSubmit();
    }
  };

  const progress = Math.round(((currentQuestionIndex + 1) / personalityQuestions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 hover:text-white mb-4" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <User className="mr-2 h-6 w-6 text-primary" />
          Personality Assessment
        </h1>
        <p className="text-gray-500 mt-1">
          Evaluate your sales-oriented personality traits and behavioral tendencies.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Question {currentQuestionIndex + 1} of {personalityQuestions.length}</span>
          <span>{progress}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
            <Button className="bg-blue-600 text-white hover:bg-blue-700 h-9 w-9 p-0" onClick={() => {}}>
              <HelpCircle className="h-5 w-5" />
            </Button>
          </div>
          <CardDescription>
            Trait: {personalityQuestions[currentQuestionIndex].text}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">
                {personalityQuestions[currentQuestionIndex].text}
              </h3>
              <div className="space-y-4">
                {personalityQuestions[currentQuestionIndex].options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                      currentResponse === option
                        ? 'border-primary bg-primary/5'
                        : 'border-gray-200 hover:border-primary/50'
                    }`}
                    onClick={() => setCurrentResponse(option)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{option}</span>
                      {currentResponse === option && (
                        <CheckCircle className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={handleNext}>
            {currentQuestionIndex === personalityQuestions.length - 1 ? 'Submit' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PersonalityAssessment;
