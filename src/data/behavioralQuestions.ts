import { AssessmentQuestion } from '@/types/assessment';

export const behavioralQuestions: AssessmentQuestion[] = [
  {
    id: 'bq1',
    type: 'multiple-choice',
    text: 'How do you typically handle rejection in sales?',
    options: [
      'Analyze the situation and learn from the experience',
      'Move on quickly to the next opportunity',
      'Follow up later with additional information',
      'Seek feedback to improve future approaches'
    ],
    required: true
  },
  {
    id: 'bq2',
    type: 'multiple-choice',
    text: 'What is your approach to building long-term client relationships?',
    options: [
      'Regular check-ins and value-added conversations',
      'Focus on solving their business challenges',
      'Maintain professional but friendly communication',
      'Provide ongoing support and resources'
    ],
    required: true
  },
  {
    id: 'bq3',
    type: 'multiple-choice',
    text: 'How do you prioritize your sales activities?',
    options: [
      'Based on potential revenue and closing probability',
      'Focus on building pipeline and new opportunities',
      'Balance between new and existing clients',
      'Follow a structured daily routine'
    ],
    required: true
  }
]; 