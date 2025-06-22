import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export interface Testimonial {
  id: number
  name: string
  title: string
  quote: string
  image_url?: string | null
  approved: boolean
  created_at: string
  rating?: number
  industry?: string
}

export interface NewTestimonial {
  name: string
  title: string
  quote: string
  image_url: string
  rating?: number
  industry?: string
}

export interface Post {
  id: number;
  created_at: string;
  title: string;
  content: string;
  slug: string;
  excerpt: string;
  author: string;
  is_published: boolean;
  image_url?: string;
} 