export interface AssessmentQuestion {
  id: string;
  type: string;
  text: string;
  options: string[];
  required: boolean;
}

export interface AssessmentResponse {
  questionId: string;
  selectedOption: string;
  timestamp: number;
} 