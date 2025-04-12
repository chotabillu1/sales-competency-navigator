import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from './components/Layout/MainLayout';
import { Home } from './pages/Home';
import { InstantEvaluation } from './pages/Assessments';
import { PersonalityAssessment } from './pages/PersonalityAssessment';
import { IntelligenceAssessment } from './pages/IntelligenceAssessment';
import { PersonalityAssessmentResults } from './pages/PersonalityAssessmentResults';
import { IntelligenceAssessmentResults } from './pages/IntelligenceAssessmentResults';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'instant-evaluation',
        element: <InstantEvaluation />,
      },
      {
        path: 'personality-assessment',
        element: <PersonalityAssessment />,
      },
      {
        path: 'intelligence-assessment',
        element: <IntelligenceAssessment />,
      },
      {
        path: 'personality-assessment/results',
        element: <PersonalityAssessmentResults />,
      },
      {
        path: 'intelligence-assessment/results',
        element: <IntelligenceAssessmentResults />,
      },
    ],
  },
]); 