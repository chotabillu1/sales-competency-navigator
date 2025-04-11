
import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle, HelpCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { useToast } from "@/hooks/use-toast";

const personalityQuestions = [
  {
    id: 1,
    question: "I enjoy being the center of attention in social situations.",
    trait: "Extraversion",
  },
  {
    id: 2,
    question: "I remain calm under pressure and can handle rejection well.",
    trait: "Resilience",
  },
  {
    id: 3,
    question: "I set ambitious goals for myself and consistently work to achieve them.",
    trait: "Achievement Drive",
  },
  {
    id: 4,
    question: "I can easily adapt my approach based on the customer's needs.",
    trait: "Adaptability",
  },
  {
    id: 5,
    question: "I'm comfortable reaching out to potential clients I've never spoken with before.",
    trait: "Proactivity",
  },
];

const PersonalityAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const { toast } = useToast();

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
      [personalityQuestions[currentQuestion].id]: parseInt(selectedValue),
    };
    setAnswers(updatedAnswers);

    if (currentQuestion < personalityQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedValue(null);
    } else {
      // Submit assessment
      toast({
        title: "Assessment Completed",
        description: "Your personality assessment has been submitted successfully.",
      });
      // In a real app, you would send the answers to the server here
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedValue(
        answers[personalityQuestions[currentQuestion - 1].id]?.toString() || null
      );
    }
  };

  const progress = Math.round(
    ((currentQuestion + (selectedValue ? 1 : 0)) / personalityQuestions.length) * 100
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
              <User className="mr-2 h-6 w-6 text-primary" />
              Personality Assessment
            </h1>
            <p className="text-gray-500 mt-1">
              Evaluate your sales-oriented personality traits and behavioral tendencies.
            </p>
          </div>

          <div className="mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span>Question {currentQuestion + 1} of {personalityQuestions.length}</span>
              <span>{progress}% Complete</span>
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
                Trait: {personalityQuestions[currentQuestion].trait}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    {personalityQuestions[currentQuestion].question}
                  </h3>
                  <RadioGroup 
                    value={selectedValue || ""}
                    onValueChange={setSelectedValue}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="1" id="option1" />
                        <Label htmlFor="option1">Strongly Disagree</Label>
                      </div>
                      <span className="text-sm text-muted-foreground">1</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="2" id="option2" />
                        <Label htmlFor="option2">Disagree</Label>
                      </div>
                      <span className="text-sm text-muted-foreground">2</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="3" id="option3" />
                        <Label htmlFor="option3">Neutral</Label>
                      </div>
                      <span className="text-sm text-muted-foreground">3</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="4" id="option4" />
                        <Label htmlFor="option4">Agree</Label>
                      </div>
                      <span className="text-sm text-muted-foreground">4</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-md hover:bg-muted">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="5" id="option5" />
                        <Label htmlFor="option5">Strongly Agree</Label>
                      </div>
                      <span className="text-sm text-muted-foreground">5</span>
                    </div>
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
                {currentQuestion < personalityQuestions.length - 1 ? (
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

export default PersonalityAssessment;
