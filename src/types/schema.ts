export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'user';
  createdAt: Date;
  updatedAt: Date;
  company?: string;
  department?: string;
  position?: string;
}

export interface Assessment {
  id: string;
  userId: string;
  type: 'personality' | 'intelligence' | 'competency' | 'behavioral';
  startedAt: Date;
  completedAt?: Date;
  status: 'in_progress' | 'completed';
  scores: AssessmentScores;
  responses: AssessmentResponse[];
}

export interface AssessmentScores {
  // Personality Assessment Scores
  communication?: Score;
  resilience?: Score;
  relationshipBuilding?: Score;
  closingAbility?: Score;
  adaptability?: Score;
  competitiveness?: Score;

  // Intelligence Assessment Scores
  numericalReasoning?: Score;
  logicalReasoning?: Score;
  strategicThinking?: Score;
  problemSolving?: Score;

  // Competency Assessment Scores
  productKnowledge?: Score;
  negotiationSkills?: Score;
  timeManagement?: Score;
  customerService?: Score;

  // Overall Scores
  overall: number;
  percentile?: number;
}

export interface Score {
  value: number;
  percentage: number;
  rank?: 'excellent' | 'good' | 'average' | 'needs_improvement';
}

export interface AssessmentResponse {
  questionId: string;
  selectedOption: string;
  isCorrect?: boolean;
  timestamp: number;
}

export interface Question {
  id: string;
  type: 'personality' | 'intelligence' | 'competency' | 'behavioral';
  subType: string;
  text: string;
  options: string[];
  correctAnswer?: string;
  required: boolean;
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface Report {
  id: string;
  userId: string;
  assessmentId: string;
  type: 'individual' | 'team' | 'department';
  generatedAt: Date;
  metrics: ReportMetrics;
  recommendations: string[];
  insights: string[];
}

export interface ReportMetrics {
  scores: AssessmentScores;
  trends: {
    period: string;
    value: number;
  }[];
  comparisons: {
    category: string;
    value: number;
    benchmark: number;
  }[];
}

export interface Team {
  id: string;
  name: string;
  managerId: string;
  members: string[]; // User IDs
  department: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Analytics {
  id: string;
  type: 'user' | 'team' | 'department' | 'company';
  referenceId: string;
  period: string;
  metrics: {
    assessmentCompletion: number;
    averageScores: AssessmentScores;
    improvement: number;
    strengths: string[];
    weaknesses: string[];
  };
  timestamp: Date;
} 