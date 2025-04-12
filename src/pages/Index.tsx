import { useState } from "react";
import { BarChart2, Brain, CheckCircle, LineChart, PieChart, User, Users } from "lucide-react";
import { Navbar } from "@/components/Layout/Navbar";
import { Footer } from "@/components/Layout/Footer";
import AssessmentCard from "@/components/Dashboard/AssessmentCard";
import StatCard from "@/components/Dashboard/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">SalesPulse</h1>
              <p className="text-gray-500 mt-1">
                Comprehensive evaluation tools to assess sales professionals
              </p>
            </div>
          </div>

          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:w-auto md:inline-flex">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  title="Total Assessments"
                  value="24"
                  description="Across all types"
                  icon={BarChart2}
                  trend={{ value: 12, isPositive: true }}
                />
                <StatCard
                  title="Completed"
                  value="18"
                  description="75% completion rate"
                  icon={CheckCircle}
                  trend={{ value: 8, isPositive: true }}
                />
                <StatCard
                  title="Active Users"
                  value="84"
                  description="8 new this week"
                  icon={Users}
                  trend={{ value: 15, isPositive: true }}
                />
                <StatCard
                  title="Avg. Score"
                  value="72/100"
                  description="Across all assessments"
                  icon={LineChart}
                  trend={{ value: 3, isPositive: false }}
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    <PieChart className="h-8 w-8 mr-3 opacity-50" />
                    <span>Chart visualization will appear here</span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Top Personality Traits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center">
                        <span>Extraversion</span>
                        <span className="font-medium">92%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Resilience</span>
                        <span className="font-medium">88%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Adaptability</span>
                        <span className="font-medium">78%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Top Intelligence Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center">
                        <span>Problem Solving</span>
                        <span className="font-medium">85%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Verbal Reasoning</span>
                        <span className="font-medium">83%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Strategic Thinking</span>
                        <span className="font-medium">76%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Improvement Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center">
                        <span>Numerical Reasoning</span>
                        <span className="font-medium">64%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Stress Management</span>
                        <span className="font-medium">68%</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span>Industry Knowledge</span>
                        <span className="font-medium">72%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="assessments" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AssessmentCard
                  title="Personality Assessment"
                  description="Evaluate sales-oriented personality traits and behavioral tendencies."
                  icon={User}
                  link="/personality"
                  estimatedTime="20-30 minutes"
                  status="in-progress"
                  completed={65}
                />
                <AssessmentCard
                  title="Intelligence Assessment"
                  description="Measure critical thinking, reasoning, and problem-solving abilities."
                  icon={Brain}
                  link="/intelligence"
                  estimatedTime="30-45 minutes"
                  status="not-started"
                />
                <AssessmentCard
                  title="Communication Style"
                  description="Analyze communication patterns and relationship-building aptitude."
                  icon={Users}
                  link="/"
                  estimatedTime="15-20 minutes"
                  status="completed"
                  completed={100}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
