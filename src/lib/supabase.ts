import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Auth helper functions
export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Database helper functions
export const getUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();
  return { data, error };
};

export const updateUser = async (userId: string, updates: Partial<Database['public']['Tables']['users']['Update']>) => {
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', userId);
  return { data, error };
};

export const createAssessment = async (assessment: Omit<Database['public']['Tables']['assessments']['Insert'], 'id'>) => {
  const { data, error } = await supabase
    .from('assessments')
    .insert(assessment)
    .select()
    .single();
  return { data, error };
};

export const updateAssessment = async (
  assessmentId: string,
  updates: Partial<Database['public']['Tables']['assessments']['Update']>
) => {
  const { data, error } = await supabase
    .from('assessments')
    .update(updates)
    .eq('id', assessmentId)
    .select()
    .single();
  return { data, error };
};

export const getUserAssessments = async (userId: string) => {
  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .eq('user_id', userId);
  return { data, error };
}; 