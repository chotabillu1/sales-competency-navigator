export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'admin' | 'manager' | 'user';
          created_at: string;
          updated_at: string;
          company?: string;
          department?: string;
          position?: string;
        };
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['users']['Insert']>;
      };
      assessments: {
        Row: {
          id: string;
          user_id: string;
          type: 'personality' | 'intelligence' | 'competency' | 'behavioral';
          started_at: string;
          completed_at?: string;
          status: 'in_progress' | 'completed';
          scores: {
            communication?: { value: number; percentage: number; rank?: string };
            resilience?: { value: number; percentage: number; rank?: string };
            relationship_building?: { value: number; percentage: number; rank?: string };
            closing_ability?: { value: number; percentage: number; rank?: string };
            adaptability?: { value: number; percentage: number; rank?: string };
            competitiveness?: { value: number; percentage: number; rank?: string };
            numerical_reasoning?: { value: number; percentage: number; rank?: string };
            logical_reasoning?: { value: number; percentage: number; rank?: string };
            strategic_thinking?: { value: number; percentage: number; rank?: string };
            problem_solving?: { value: number; percentage: number; rank?: string };
            overall: number;
            percentile?: number;
          };
          responses: {
            question_id: string;
            selected_option: string;
            is_correct?: boolean;
            timestamp: number;
          }[];
        };
        Insert: Omit<Database['public']['Tables']['assessments']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['assessments']['Insert']>;
      };
      teams: {
        Row: {
          id: string;
          name: string;
          manager_id: string;
          members: string[];
          department: string;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['teams']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['teams']['Insert']>;
      };
      reports: {
        Row: {
          id: string;
          user_id: string;
          assessment_id: string;
          type: 'individual' | 'team' | 'department';
          generated_at: string;
          metrics: {
            scores: Database['public']['Tables']['assessments']['Row']['scores'];
            trends: { period: string; value: number }[];
            comparisons: { category: string; value: number; benchmark: number }[];
          };
          recommendations: string[];
          insights: string[];
        };
        Insert: Omit<Database['public']['Tables']['reports']['Row'], 'id' | 'generated_at'>;
        Update: Partial<Database['public']['Tables']['reports']['Insert']>;
      };
    };
  };
} 