
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, LucideIcon } from "lucide-react";

interface AssessmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  estimatedTime: string;
  completed?: number;
  status?: "not-started" | "in-progress" | "completed";
}

const AssessmentCard = ({
  title,
  description,
  icon: Icon,
  link,
  estimatedTime,
  completed = 0,
  status = "not-started",
}: AssessmentCardProps) => {
  const statusColors = {
    "not-started": "bg-gray-100 text-gray-800",
    "in-progress": "bg-blue-100 text-blue-800",
    "completed": "bg-green-100 text-green-800",
  };

  const statusLabels = {
    "not-started": "Not Started",
    "in-progress": "In Progress",
    "completed": "Completed",
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-all">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <Badge className={statusColors[status]}>{statusLabels[status]}</Badge>
        </div>
        <CardTitle className="mt-4">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span>{estimatedTime}</span>
        </div>
        {status !== "not-started" && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{completed}%</span>
            </div>
            <Progress value={completed} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={link}>
            {status === "not-started" 
              ? "Start Assessment" 
              : status === "in-progress" 
                ? "Continue" 
                : "View Results"}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AssessmentCard;
