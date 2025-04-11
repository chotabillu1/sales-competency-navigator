
import { BarChart, Brain, ChevronDown, DownloadIcon, FileText, LineChart, PieChart, User } from "lucide-react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Results = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Assessment Results</h1>
              <p className="text-gray-500 mt-1">
                Detailed results and insights from your completed assessments
              </p>
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Export Results
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <DownloadIcon className="mr-2 h-4 w-4" /> PDF Report
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <DownloadIcon className="mr-2 h-4 w-4" /> CSV Data
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button>Share Results</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <User className="mr-2 h-5 w-5 text-primary" />
                  Personality Score
                </CardTitle>
                <CardDescription>Based on behavioral assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">82</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                </div>
                <p className="text-sm text-muted-foreground my-2">Top 15% of all candidates</p>
                <Progress value={82} className="h-2 my-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <Brain className="mr-2 h-5 w-5 text-primary" />
                  Intelligence Score
                </CardTitle>
                <CardDescription>Based on cognitive assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">74</span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
                </div>
                <p className="text-sm text-muted-foreground my-2">Top 30% of all candidates</p>
                <Progress value={74} className="h-2 my-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-primary" />
                  Overall Rating
                </CardTitle>
                <CardDescription>Combined score assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">78</span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Good</Badge>
                </div>
                <p className="text-sm text-muted-foreground my-2">Top 25% of all candidates</p>
                <Progress value={78} className="h-2 my-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="detailed" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
              <TabsTrigger value="detailed">Detailed Results</TabsTrigger>
              <TabsTrigger value="competencies">Core Competencies</TabsTrigger>
            </TabsList>

            <TabsContent value="detailed" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    Personality Traits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Extraversion</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You excel at engaging with customers and building rapport quickly.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Resilience</span>
                        <span>88%</span>
                      </div>
                      <Progress value={88} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You handle rejection well and maintain a positive attitude under pressure.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Achievement Drive</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You set ambitious goals and consistently work to achieve them.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Adaptability</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You adjust your approach based on different customer needs.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Stress Management</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You manage stress adequately but could develop better coping mechanisms.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Brain className="mr-2 h-5 w-5 text-primary" />
                    Cognitive Abilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Problem Solving</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You excel at analyzing complex problems and finding effective solutions.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Verbal Reasoning</span>
                        <span>83%</span>
                      </div>
                      <Progress value={83} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You communicate clearly and understand complex written information.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Strategic Thinking</span>
                        <span>76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You think ahead and anticipate obstacles in the sales process.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Learning Agility</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        You adapt quickly to new information and sales methodologies.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Numerical Reasoning</span>
                        <span>64%</span>
                      </div>
                      <Progress value={64} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        Your ability to work with numbers is moderate and could be improved.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competencies" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Sales Competencies</CardTitle>
                  <CardDescription>Evaluation of essential sales skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    <PieChart className="h-8 w-8 mr-3 opacity-50" />
                    <span>Competency radar chart visualization will appear here</span>
                  </div>

                  <div className="grid gap-4 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Relationship Building</h3>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Effectiveness</span>
                          <span className="text-sm font-medium">Very High</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Negotiation Skills</h3>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Effectiveness</span>
                          <span className="text-sm font-medium">High</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Product Knowledge</h3>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Effectiveness</span>
                          <span className="text-sm font-medium">Medium</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                      <div className="border rounded-lg p-4">
                        <h3 className="font-medium mb-2">Closing Ability</h3>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">Effectiveness</span>
                          <span className="text-sm font-medium">High</span>
                        </div>
                        <Progress value={85} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Development Recommendations</CardTitle>
                  <CardDescription>Personalized improvement suggestions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <Brain className="h-5 w-5 mr-2 text-primary" />
                        Improve Numerical Reasoning
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Consider taking a specialized course in financial calculations and ROI analysis to strengthen your ability to present value propositions with confidence.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <User className="h-5 w-5 mr-2 text-primary" />
                        Enhance Stress Management
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Develop resilience techniques through mindfulness training and time management strategies to maintain performance under high-pressure situations.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-medium flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-primary" />
                        Deepen Industry Knowledge
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Follow industry publications and attend webinars to strengthen your understanding of market trends and competitive positioning.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
