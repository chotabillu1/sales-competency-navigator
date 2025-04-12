import { AssessmentQuestion } from '@/types/assessment';

export const technicalQuestions: AssessmentQuestion[] = [
  {
    id: 'tq1',
    type: 'multiple-choice',
    text: 'What is the most important factor in a successful sales pipeline?',
    options: [
      'Quality of leads and opportunities',
      'Number of active deals',
      'Average deal size',
      'Sales cycle length'
    ],
    required: true
  },
  {
    id: 'tq2',
    type: 'multiple-choice',
    text: 'Which sales methodology focuses on identifying customer pain points?',
    options: [
      'Solution Selling',
      'SPIN Selling',
      'Challenger Sale',
      'Value Selling'
    ],
    required: true
  },
  {
    id: 'tq3',
    type: 'multiple-choice',
    text: 'What is the key to effective sales forecasting?',
    options: [
      'Accurate opportunity qualification',
      'Historical conversion rates',
      'Pipeline coverage ratio',
      'Deal stage progression'
    ],
    required: true
  }
]; 