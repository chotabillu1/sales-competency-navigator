import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AssessmentQuestion } from '@/types/assessment';
import { ArrowLeft, ArrowRight, Brain, CheckCircle, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { intelligenceQuestions } from '@/data/intelligenceQuestions';

const TOTAL_TIME = 15 * 60; // 15 minutes in seconds

// Define correct answers for each question
const correctAnswers: Record<string, string> = {
  'iq1': '$150', // 25% of $120 is $30, so $120 + $30 = $150
  'iq2': '50%', // ($750,000 - $500,000) / $500,000 * 100 = 50%
  'iq3': '25 calls', // 200 calls / 8 people = 25 calls per person
  'iq4': '4% decrease', // 20% decrease then 20% increase: 100 * 0.8 * 1.2 = 96
  'iq5': '25%', // ($1,000,000 - $750,000) / $1,000,000 * 100 = 25%
  'lq1': 'John must attend training',
  'lq2': '32', // Each number is multiplied by 2
  'lq3': 'Sarah might be a successful salesperson',
  'lq4': 'Customer Service', // Others are sales metrics/tools
  'lq5': 'Performance might improve',
  'sq1': 'Market research and analysis',
  'sq2': '4, 1, 3, 2', // Research first, then prospecting, follow-up, closing
  'sq3': 'Building strong customer relationships',
  'sq4': 'Analyze the root cause',
  'sq5': 'Differentiate your value proposition',
  'pq1': 'Analyze the issues to identify root causes',
  'pq2': 'Analyze individual and team performance metrics',
  'pq3': 'Differentiate your value proposition and focus on unique benefits',
  'pq4': 'Break down the process into smaller, manageable steps',
  'pq5': 'Implement a systematic troubleshooting and support process'
};

interface Scores {
  numericalReasoning: number;
  logicalReasoning: number;
  strategicThinking: number;
  problemSolving: number;
}

interface AssessmentResponse {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
  timestamp: number;
}

export const IntelligenceAssessment: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<AssessmentResponse[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState<number>(TOTAL_TIME);
  const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
  const [shuffledQuestions, setShuffledQuestions] = useState<AssessmentQuestion[]>([]);
  const { toast } = useToast();

  // Shuffle questions when component mounts
  useEffect(() => {
    const shuffled = [...intelligenceQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    if (timeRemaining > 0 && !isTimeUp) {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            setIsTimeUp(true);
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && !isTimeUp) {
      setIsTimeUp(true);
      handleSubmit();
    }
  }, [timeRemaining, isTimeUp]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    if (!selectedOption) return;

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      const question = shuffledQuestions[currentQuestionIndex];
      const isCorrect = selectedOption === correctAnswers[question.id];
      
      setResponses([
        ...responses,
        { 
          questionId: question.id, 
          selectedOption: selectedOption, 
          isCorrect: isCorrect, 
          timestamp: Date.now() 
        },
      ]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const finalResponses = [
      ...responses,
      { 
        questionId: shuffledQuestions[currentQuestionIndex].id, 
        selectedOption: selectedOption, 
        isCorrect: selectedOption === correctAnswers[shuffledQuestions[currentQuestionIndex].id],
        timestamp: Date.now() 
      },
    ];

    // Calculate scores for each category
    const scores: Scores = {
      numericalReasoning: 0,
      logicalReasoning: 0,
      strategicThinking: 0,
      problemSolving: 0,
    };

    // Calculate scores for each category
    finalResponses.forEach(response => {
      const question = shuffledQuestions.find(q => q.id === response.questionId);
      if (question) {
        let category: keyof typeof scores;
        if (question.id.startsWith('iq')) {
          category = 'numericalReasoning';
        } else if (question.id.startsWith('lq')) {
          category = 'logicalReasoning';
        } else if (question.id.startsWith('sq')) {
          category = 'strategicThinking';
        } else {
          category = 'problemSolving';
        }
        
        if (response.isCorrect) {
          scores[category] += 1;
        }
      }
    });

    // Store scores in localStorage
    localStorage.setItem('intelligenceAssessmentScores', JSON.stringify(scores));
    
    toast({
      title: "Assessment Completed",
      description: "Your intelligence assessment has been submitted successfully.",
    });
    navigate('/intelligence-assessment/results');
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(responses[currentQuestionIndex - 1].selectedOption || '');
    }
  };

  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;

  if (shuffledQuestions.length === 0) {
    return <div>Loading questions...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6">
        <Button 
          className="bg-blue-600 text-white hover:bg-blue-700 mb-4" 
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
        </Button>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          <Brain className="mr-2 h-6 w-6 text-primary" />
          Intelligence Assessment
        </h1>
        <p className="text-gray-500 mt-1">
          Measure your critical thinking, reasoning, and problem-solving abilities.
        </p>
      </div>

      <div className="mb-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className={timeRemaining < 60 ? 'text-red-500 font-bold' : ''}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {isTimeUp ? (
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <h2 className="text-xl font-semibold mb-4">Time's Up!</h2>
          <p className="text-gray-600 mb-4">Your assessment has been automatically submitted.</p>
          <Button
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigate('/assessments')}
          >
            Return to Assessments
          </Button>
        </div>
      ) : (
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 h-9 w-9 p-0"
                onClick={() => {}}
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
            </div>
            <CardDescription>
              Type: {shuffledQuestions[currentQuestionIndex].type}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  {shuffledQuestions[currentQuestionIndex].text}
                </h3>
                <div className="space-y-4">
                  {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedOption === option
                          ? 'border-primary bg-primary/5'
                          : 'border-gray-200 hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedOption(option)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{option}</span>
                        {selectedOption === option && (
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
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              onClick={handleNext}
              disabled={!selectedOption}
            >
              {currentQuestionIndex === shuffledQuestions.length - 1 ? (
                <>
                  Submit
                  <CheckCircle className="ml-2 h-4 w-4" />
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default IntelligenceAssessment;
