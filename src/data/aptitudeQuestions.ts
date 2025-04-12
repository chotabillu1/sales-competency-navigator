import { AssessmentQuestion } from '@/types/assessment';

export const aptitudeQuestions: AssessmentQuestion[] = [
  {
    id: 'aq1',
    type: 'multiple-choice',
    text: 'How do you approach learning new sales techniques?',
    options: [
      'I prefer hands-on practice and real-world application',
      'I like to study theoretical frameworks first',
      'I learn best through observation and role-playing',
      'I combine multiple learning methods'
    ],
    required: true
  },
  {
    id: 'aq2',
    type: 'multiple-choice',
    text: 'What is your preferred method for handling multiple tasks?',
    options: [
      'I prioritize and tackle them one at a time',
      'I create a detailed schedule and stick to it',
      'I delegate when possible and focus on high-priority items',
      'I work on multiple tasks simultaneously'
    ],
    required: true
  },
  {
    id: 'aq3',
    type: 'multiple-choice',
    text: 'How do you adapt to changes in sales targets or strategies?',
    options: [
      'I quickly adjust my approach and set new goals',
      'I analyze the changes and develop a new plan',
      'I seek guidance and support from colleagues',
      'I maintain my existing methods while gradually incorporating changes'
    ],
    required: true
  }
]; 