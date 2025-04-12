import { AssessmentQuestion } from '@/types/assessment';

export const intelligenceQuestions: AssessmentQuestion[] = [
  // Numerical Reasoning Questions (iq1-iq5)
  {
    id: 'iq1',
    type: 'numerical-reasoning',
    text: 'If a product costs $120 and its price is increased by 25%, what is the new price?',
    options: [
      '$130',
      '$140',
      '$150',
      '$160'
    ],
    required: true
  },
  {
    id: 'iq2',
    type: 'numerical-reasoning',
    text: 'A company\'s revenue increased from $500,000 to $750,000. What is the percentage increase?',
    options: [
      '25%',
      '40%',
      '50%',
      '60%'
    ],
    required: true
  },
  {
    id: 'iq3',
    type: 'numerical-reasoning',
    text: 'If a sales team of 8 people needs to make 200 calls per day, how many calls should each person make?',
    options: [
      '20 calls',
      '25 calls',
      '30 calls',
      '35 calls'
    ],
    required: true
  },
  {
    id: 'iq4',
    type: 'numerical-reasoning',
    text: 'A product\'s price was reduced by 20% and then increased by 20%. What is the net change in price?',
    options: [
      'No change',
      '4% decrease',
      '4% increase',
      '20% decrease'
    ],
    required: true
  },
  {
    id: 'iq5',
    type: 'numerical-reasoning',
    text: 'If a sales target is $1,000,000 and you\'ve achieved $750,000, what percentage of the target remains?',
    options: [
      '15%',
      '20%',
      '25%',
      '30%'
    ],
    required: true
  },

  // Logical Reasoning Questions (lq1-lq5)
  {
    id: 'lq1',
    type: 'logical-reasoning',
    text: 'If all sales representatives are required to attend training, and John is a sales representative, what must be true?',
    options: [
      'John must attend training',
      'John may attend training',
      'John is exempt from training',
      'John is not a sales representative'
    ],
    required: true
  },
  {
    id: 'lq2',
    type: 'logical-reasoning',
    text: 'Which pattern comes next in the sequence: 2, 4, 8, 16, ___?',
    options: [
      '24',
      '32',
      '36',
      '40'
    ],
    required: true
  },
  {
    id: 'lq3',
    type: 'logical-reasoning',
    text: 'If all successful salespeople are good listeners, and Sarah is a good listener, what can we conclude?',
    options: [
      'Sarah is a successful salesperson',
      'Sarah might be a successful salesperson',
      'Sarah is not a successful salesperson',
      'No conclusion can be drawn'
    ],
    required: true
  },
  {
    id: 'lq4',
    type: 'logical-reasoning',
    text: 'Which of these does not belong with the others: CRM, Sales Pipeline, Customer Service, Revenue Forecast?',
    options: [
      'CRM',
      'Sales Pipeline',
      'Customer Service',
      'Revenue Forecast'
    ],
    required: true
  },
  {
    id: 'lq5',
    type: 'logical-reasoning',
    text: 'If a sales team\'s performance improves when they receive training, and training is provided, what should happen?',
    options: [
      'Performance will definitely improve',
      'Performance might improve',
      'Performance will not change',
      'Performance will decrease'
    ],
    required: true
  },

  // Strategic Thinking Questions (sq1-sq5)
  {
    id: 'sq1',
    type: 'strategic-thinking',
    text: 'When entering a new market, what should be your first strategic consideration?',
    options: [
      'Market research and analysis',
      'Product pricing',
      'Sales team hiring',
      'Marketing budget'
    ],
    required: true
  },
  {
    id: 'sq2',
    type: 'strategic-thinking',
    text: 'How would you prioritize these sales activities: 1) Prospecting 2) Closing deals 3) Following up 4) Market research?',
    options: [
      '1, 2, 3, 4',
      '2, 1, 3, 4',
      '4, 1, 3, 2',
      '3, 2, 1, 4'
    ],
    required: true
  },
  {
    id: 'sq3',
    type: 'strategic-thinking',
    text: 'What is the most important factor in long-term sales success?',
    options: [
      'Building strong customer relationships',
      'Closing deals quickly',
      'Having the lowest prices',
      'Making the most sales calls'
    ],
    required: true
  },
  {
    id: 'sq4',
    type: 'strategic-thinking',
    text: 'When facing declining sales, what should be your first strategic action?',
    options: [
      'Analyze the root cause',
      'Increase marketing spend',
      'Lower prices',
      'Hire more salespeople'
    ],
    required: true
  },
  {
    id: 'sq5',
    type: 'strategic-thinking',
    text: 'What is the best approach to handling a major competitor entering your market?',
    options: [
      'Differentiate your value proposition',
      'Lower your prices',
      'Increase marketing spend',
      'Expand to new markets'
    ],
    required: true
  },

  // Problem Solving Questions (pq1-pq5)
  {
    id: 'pq1',
    type: 'problem-solving',
    text: 'A client is unhappy with your product\'s performance. They\'ve provided a detailed list of issues. What is your first step?',
    options: [
      'Analyze the issues to identify root causes',
      'Apologize and offer immediate solutions',
      'Request more information about their usage',
      'Schedule a meeting to discuss their concerns'
    ],
    required: true
  },
  {
    id: 'pq2',
    type: 'problem-solving',
    text: 'Your sales team is consistently missing targets. What is the most effective approach to identify the problem?',
    options: [
      'Analyze individual and team performance metrics',
      'Conduct one-on-one meetings with team members',
      'Review the sales process and methodology',
      'Compare current performance with historical data'
    ],
    required: true
  },
  {
    id: 'pq3',
    type: 'problem-solving',
    text: 'A new competitor is offering similar products at lower prices. How would you address this challenge?',
    options: [
      'Differentiate your value proposition and focus on unique benefits',
      'Match their prices to maintain market share',
      'Increase marketing spend to highlight your brand',
      'Develop new features to justify your pricing'
    ],
    required: true
  },
  {
    id: 'pq4',
    type: 'problem-solving',
    text: 'Your team is struggling with a complex sales process. What is the best way to simplify it?',
    options: [
      'Break down the process into smaller, manageable steps',
      'Provide additional training on the current process',
      'Automate parts of the process with technology',
      'Assign more experienced team members to guide others'
    ],
    required: true
  },
  {
    id: 'pq5',
    type: 'problem-solving',
    text: 'A key client is experiencing frequent technical issues. How would you resolve this situation?',
    options: [
      'Implement a systematic troubleshooting and support process',
      'Assign a dedicated support team to the client',
      'Provide additional training to the client\'s team',
      'Offer a temporary discount to compensate for the issues'
    ],
    required: true
  }
]; 