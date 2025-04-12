import { AssessmentQuestion } from '@/types/assessment';

export const scenarioQuestions: AssessmentQuestion[] = [
  {
    id: 'sq1',
    type: 'multiple-choice',
    text: 'A potential client has shown interest in your product but is concerned about the implementation timeline. How would you handle this situation?',
    options: [
      'Create a detailed implementation plan with clear milestones',
      'Offer a phased implementation approach',
      'Provide case studies of similar successful implementations',
      'Suggest a pilot program to demonstrate value'
    ],
    required: true
  },
  {
    id: 'sq2',
    type: 'multiple-choice',
    text: 'During a sales presentation, a key stakeholder keeps interrupting with objections. What is your best approach?',
    options: [
      'Acknowledge their concerns and address them systematically',
      'Pause the presentation and have a separate discussion',
      'Continue with the presentation and address concerns at the end',
      'Reschedule the meeting for a more appropriate time'
    ],
    required: true
  },
  {
    id: 'sq3',
    type: 'multiple-choice',
    text: 'A long-term client is considering switching to a competitor. How would you respond?',
    options: [
      'Schedule a meeting to understand their concerns and needs',
      'Offer immediate discounts or incentives to retain them',
      'Highlight your product\'s unique value proposition',
      'Propose a new solution that addresses their evolving needs'
    ],
    required: true
  }
]; 