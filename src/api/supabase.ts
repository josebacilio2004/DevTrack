import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials missing. Neural link established in OFFLINE mode.');
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

// Types
export interface Project {
  id: string;
  title: string;
  description?: string;
  tech_stack?: string[];
  progress?: number;
  status: 'STABLE' | 'DEGRADED' | 'OPTIMAL' | string;
  created_at?: string;
  user_id?: string;
}

export interface Task {
  id: string;
  project_id: string;
  title: string;
  status: 'BACKLOG' | 'DEVELOPMENT' | 'TESTING' | 'DEPLOYED' | string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' | string;
  due_date?: string;
  created_at?: string;
}
