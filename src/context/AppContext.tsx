import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { User, Assessment, Report, Team, Analytics } from '../types/schema';

interface AppState {
  user: User | null;
  assessments: Assessment[];
  reports: Report[];
  teams: Team[];
  analytics: Analytics[];
  isLoading: boolean;
  error: string | null;
}

type Action =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_ASSESSMENTS'; payload: Assessment[] }
  | { type: 'ADD_ASSESSMENT'; payload: Assessment }
  | { type: 'UPDATE_ASSESSMENT'; payload: Assessment }
  | { type: 'SET_REPORTS'; payload: Report[] }
  | { type: 'SET_TEAMS'; payload: Team[] }
  | { type: 'SET_ANALYTICS'; payload: Analytics[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

const initialState: AppState = {
  user: null,
  assessments: [],
  reports: [],
  teams: [],
  analytics: [],
  isLoading: false,
  error: null,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_ASSESSMENTS':
      return { ...state, assessments: action.payload };
    case 'ADD_ASSESSMENT':
      return { ...state, assessments: [...state.assessments, action.payload] };
    case 'UPDATE_ASSESSMENT':
      return {
        ...state,
        assessments: state.assessments.map(assessment =>
          assessment.id === action.payload.id ? action.payload : assessment
        ),
      };
    case 'SET_REPORTS':
      return { ...state, reports: action.payload };
    case 'SET_TEAMS':
      return { ...state, teams: action.payload };
    case 'SET_ANALYTICS':
      return { ...state, analytics: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        
        // Load user data from localStorage or API
        const userData = localStorage.getItem('user');
        if (userData) {
          dispatch({ type: 'SET_USER', payload: JSON.parse(userData) });
        }

        // Load assessments
        const assessmentsData = localStorage.getItem('assessments');
        if (assessmentsData) {
          dispatch({ type: 'SET_ASSESSMENTS', payload: JSON.parse(assessmentsData) });
        }

        dispatch({ type: 'SET_LOADING', payload: false });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load initial data' });
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadInitialData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hooks for using the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const useUser = () => {
  const { state } = useApp();
  return state.user;
};

export const useAssessments = () => {
  const { state } = useApp();
  return state.assessments;
};

export const useReports = () => {
  const { state } = useApp();
  return state.reports;
};

export const useTeams = () => {
  const { state } = useApp();
  return state.teams;
};

export const useAnalytics = () => {
  const { state } = useApp();
  return state.analytics;
}; 