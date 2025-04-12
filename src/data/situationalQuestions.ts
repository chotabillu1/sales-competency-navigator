import { AssessmentQuestion } from '@/types/assessment';

export const situationalQuestions: AssessmentQuestion[] = [
  {
    id: 'sq1',
    type: 'multiple-choice',
    text: 'A potential client is interested in your product but says they need to wait for next quarter\'s budget. What do you do?',
    options: [
      'Offer a pilot program or phased implementation',
      'Wait for their next budget cycle',
      'Reduce the price to fit current budget',
      'Look for other decision makers'
    ],
    required: true
  },
  {
    id: 'sq2',
    type: 'multiple-choice',
    text: 'A long-term client is considering switching to a competitor. How do you respond?',
    options: [
      'Schedule a meeting to understand their concerns',
      'Offer a discount to retain them',
      'Highlight your product\'s unique features',
      'Propose a new solution package'
    ],
    required: true
  },
  {
    id: 'sq3',
    type: 'multiple-choice',
    text: 'You have multiple deals in the pipeline but limited time. How do you prioritize?',
    options: [
      'Focus on deals closest to closing',
      'Work on the largest potential deals',
      'Balance time across all opportunities',
      'Focus on deals with highest probability'
    ],
    required: true
  }
]; 