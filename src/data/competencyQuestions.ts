import { AssessmentQuestion } from '@/types/assessment';

export const competencyQuestions: AssessmentQuestion[] = [
  {
    id: 'cq1',
    type: 'multiple-choice',
    text: 'How do you typically handle customer objections?',
    options: [
      'I listen carefully and address their concerns directly',
      'I use pre-prepared responses based on common objections',
      'I try to understand the underlying reason for their objection',
      'I redirect the conversation to focus on product benefits'
    ],
    required: true
  },
  {
    id: 'cq2',
    type: 'multiple-choice',
    text: 'What is your approach to building relationships with potential clients?',
    options: [
      'I focus on understanding their business needs first',
      'I establish trust through regular communication',
      'I demonstrate product value early in the conversation',
      'I leverage existing customer success stories'
    ],
    required: true
  },
  {
    id: 'cq3',
    type: 'multiple-choice',
    text: 'How do you prepare for a sales presentation?',
    options: [
      'I research the client thoroughly and customize the presentation',
      'I practice my delivery and anticipate questions',
      'I focus on key product features and benefits',
      'I prepare visual aids and demonstration materials'
    ],
    required: true
  }
]; 