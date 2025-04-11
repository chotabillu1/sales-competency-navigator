
import { useState } from "react";
import { ArrowLeft, ArrowRight, Brain, CheckCircle, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { useToast } from "@/hooks/use-toast";

const intelligenceQuestions = [
  {
    id: 1,
    question: "A salesperson increased their monthly sales by 15%, from $40,000 to what amount?",
    options: ["$44,000", "$46,000", "$48,000", "$50,000"],
    correctAnswer: 1,
    type: "Numerical Reasoning",
  },
  {
    id: 2,
    question: "Which approach would be most effective for a customer concerned about implementation time?",
    options: [
      "Emphasize the product's superior features",
      "Offer a significant discount",
      "Show case studies of quick implementations",
      "Suggest they consider a competitor's product"
    ],
    correctAnswer: 2,
    type: "Critical Thinking",
  },
  {
    id: 3,
    question: "If all premium clients receive dedicated support, and Sarah receives dedicated support, what can you conclude?",
    options: [
      "Sarah is not a premium client",
      "Sarah is a premium client",
      "Sarah might be a premium client",
      "There is not enough information to determine"
    ],
    correctAnswer: 3,
    type: "Logical Reasoning",
  },
  {
    id: 4,
    question: "What is the best way to handle a prospect who suddenly goes silent after several positive meetings?",
    options: [
      "Assume they are no longer interested and move on",
      "Send them a contract to sign immediately",
      "Reach out with a specific, value-driven reason to reconnect",
      "Contact their supervisor to express concern"
    ],
    correctAnswer: 2,
    type: "Strategic Thinking",
  },
  {
    id: 5,
    question: "A company has 5 sales territories. How many different ways can 3 salespeople be assigned if each must be in a different territory?",
    options: ["10", "20", "60", "125"],
    correctAnswer: 2,
    type: "Numerical Reasoning",
  },
];

const IntelligenceAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [timer, setTimer] = useState<number>(300); // 5 minutes in seconds
  const { toast } = useToast();

  // In a real app, you would use useEffect to implement the timer
  // and decrement it every second

  const handleNextQuestion = () => {
    if (!selectedValue) {
      toast({
        title: "Selection Required",
        description: "Please select an answer before proceeding.",
        variant: "destructive",
      });
      return;
    }

    const updatedAnswers = {
      ...answers,
      [intelligenceQuestions[currentQuestion].id]: parseInt(selectedValue),
    };
    setAnswers(updatedAnswers);

    if (currentQuestion < intelligenceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedValue(null);
    } else {
      // Submit assessment
      toast({
        title: "Assessment Completed",
        description: "Your intelligence assessment has been submitted successfully.",
      });
      // In a real app, you would send the answers to the server here
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedValue(
        answers[intelligenceQuestions[currentQuestion - 1].id]?.toString() || null
      );
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const progress = Math.round(
    ((currentQuestion + (selectedValue ? 1 : 0)) / intelligenceQuestions.length) * 100
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-background py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button variant="ghost" onClick={() => window.history.back()} className="mb-4">
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
              <span>Question {currentQuestion + 1} of {intelligenceQuestions.length}</span>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                <span className={timer < 60 ? 'text-red-500 font-bold' : ''}>
                  {formatTime(timer)}
                </span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card className="shadow-md">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>Question {currentQuestion + 1}</CardTitle>
                <Button variant="ghost" size="icon" onClick={() => {}}>
                  <HelpCircle className="h-5 w-5" />
                </Button>
              </div>
              <CardDescription>
                Type: {intelligenceQuestions[currentQuestion].type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    {intelligenceQuestions[currentQuestion].question}
                  </h3>
                  <RadioGroup 
                    value={selectedValue || ""}
                    onValueChange={setSelectedValue}
                    className="space-y-3"
                  >
                    {intelligenceQuestions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-muted">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem value={index.toString()} id={`option${index}`} />
                          <Label htmlFor={`option${index}`}>{option}</Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button onClick={handleNextQuestion}>
                {currentQuestion < intelligenceQuestions.length - 1 ? (
                  <>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Complete <CheckCircle className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IntelligenceAssessment;
