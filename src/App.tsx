import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { PersonalityAssessmentResults } from './pages/PersonalityAssessmentResults';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
