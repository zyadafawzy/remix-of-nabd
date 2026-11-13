export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      alerts: {
        Row: {
          acknowledged: boolean | null
          actions: Json | null
          created_at: string | null
          crew_id: string | null
          escalated: boolean | null
          explanation: string
          hazard_tags: string[] | null
          id: string
          level: string
          measurement_id: string | null
          organ_zone: string
          title: string
        }
        Insert: {
          acknowledged?: boolean | null
          actions?: Json | null
          created_at?: string | null
          crew_id?: string | null
          escalated?: boolean | null
          explanation: string
          hazard_tags?: string[] | null
          id?: string
          level: string
          measurement_id?: string | null
          organ_zone: string
          title: string
        }
        Update: {
          acknowledged?: boolean | null
          actions?: Json | null
          created_at?: string | null
          crew_id?: string | null
          escalated?: boolean | null
          explanation?: string
          hazard_tags?: string[] | null
          id?: string
          level?: string
          measurement_id?: string | null
          organ_zone?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "alerts_crew_id_fkey"
            columns: ["crew_id"]
            isOneToOne: false
            referencedRelation: "crew_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "alerts_measurement_id_fkey"
            columns: ["measurement_id"]
            isOneToOne: false
            referencedRelation: "measurements"
            referencedColumns: ["id"]
          },
        ]
      }
      crew_members: {
        Row: {
          age: number
          baseline_dia: number | null
          baseline_glucose: number | null
          baseline_hr: number | null
          baseline_reaction_ms: number | null
          baseline_sleep_h: number | null
          baseline_sys: number | null
          baseline_temp: number | null
          baseline_weight_kg: number | null
          created_at: string | null
          id: string
          mission_id: string | null
          name: string
          role: string
          sex: string | null
        }
        Insert: {
          age?: number
          baseline_dia?: number | null
          baseline_glucose?: number | null
          baseline_hr?: number | null
          baseline_reaction_ms?: number | null
          baseline_sleep_h?: number | null
          baseline_sys?: number | null
          baseline_temp?: number | null
          baseline_weight_kg?: number | null
          created_at?: string | null
          id?: string
          mission_id?: string | null
          name: string
          role: string
          sex?: string | null
        }
        Update: {
          age?: number
          baseline_dia?: number | null
          baseline_glucose?: number | null
          baseline_hr?: number | null
          baseline_reaction_ms?: number | null
          baseline_sleep_h?: number | null
          baseline_sys?: number | null
          baseline_temp?: number | null
          baseline_weight_kg?: number | null
          created_at?: string | null
          id?: string
          mission_id?: string | null
          name?: string
          role?: string
          sex?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "crew_members_mission_id_fkey"
            columns: ["mission_id"]
            isOneToOne: false
            referencedRelation: "missions"
            referencedColumns: ["id"]
          },
        ]
      }
      journal_entries: {
        Row: {
          crew_id: string | null
          date: string | null
          id: string
          sentiment_score: number | null
          tags: string[] | null
          text: string
        }
        Insert: {
          crew_id?: string | null
          date?: string | null
          id?: string
          sentiment_score?: number | null
          tags?: string[] | null
          text: string
        }
        Update: {
          crew_id?: string | null
          date?: string | null
          id?: string
          sentiment_score?: number | null
          tags?: string[] | null
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "journal_entries_crew_id_fkey"
            columns: ["crew_id"]
            isOneToOne: false
            referencedRelation: "crew_members"
            referencedColumns: ["id"]
          },
        ]
      }
      measurements: {
        Row: {
          calories: number | null
          co2_ppm: number | null
          cognitive_score: number | null
          created_at: string | null
          crew_id: string | null
          date: string | null
          dia: number | null
          exercise_aerobic_min: number | null
          exercise_resistive_min: number | null
          glucose_mgdl: number | null
          hr: number | null
          hr_confidence: number | null
          hr_source: string | null
          hydration_cups: number | null
          id: string
          mission_day: number
          mood: number | null
          notes: string | null
          protein_g: number | null
          radiation_msv_day: number | null
          reaction_lapses: number | null
          reaction_ms: number | null
          sleep_h: number | null
          sleep_quality: number | null
          stress: number | null
          sys: number | null
          temp_c: number | null
          weight_kg: number | null
        }
        Insert: {
          calories?: number | null
          co2_ppm?: number | null
          cognitive_score?: number | null
          created_at?: string | null
          crew_id?: string | null
          date?: string | null
          dia?: number | null
          exercise_aerobic_min?: number | null
          exercise_resistive_min?: number | null
          glucose_mgdl?: number | null
          hr?: number | null
          hr_confidence?: number | null
          hr_source?: string | null
          hydration_cups?: number | null
          id?: string
          mission_day?: number
          mood?: number | null
          notes?: string | null
          protein_g?: number | null
          radiation_msv_day?: number | null
          reaction_lapses?: number | null
          reaction_ms?: number | null
          sleep_h?: number | null
          sleep_quality?: number | null
          stress?: number | null
          sys?: number | null
          temp_c?: number | null
          weight_kg?: number | null
        }
        Update: {
          calories?: number | null
          co2_ppm?: number | null
          cognitive_score?: number | null
          created_at?: string | null
          crew_id?: string | null
          date?: string | null
          dia?: number | null
          exercise_aerobic_min?: number | null
          exercise_resistive_min?: number | null
          glucose_mgdl?: number | null
          hr?: number | null
          hr_confidence?: number | null
          hr_source?: string | null
          hydration_cups?: number | null
          id?: string
          mission_day?: number
          mood?: number | null
          notes?: string | null
          protein_g?: number | null
          radiation_msv_day?: number | null
          reaction_lapses?: number | null
          reaction_ms?: number | null
          sleep_h?: number | null
          sleep_quality?: number | null
          stress?: number | null
          sys?: number | null
          temp_c?: number | null
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "measurements_crew_id_fkey"
            columns: ["crew_id"]
            isOneToOne: false
            referencedRelation: "crew_members"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string
          crew_id: string | null
          deliver_at: string | null
          delivered: boolean | null
          direction: string | null
          id: string
          report_json: Json | null
          sent_at: string | null
        }
        Insert: {
          body: string
          crew_id?: string | null
          deliver_at?: string | null
          delivered?: boolean | null
          direction?: string | null
          id?: string
          report_json?: Json | null
          sent_at?: string | null
        }
        Update: {
          body?: string
          crew_id?: string | null
          deliver_at?: string | null
          delivered?: boolean | null
          direction?: string | null
          id?: string
          report_json?: Json | null
          sent_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_crew_id_fkey"
            columns: ["crew_id"]
            isOneToOne: false
            referencedRelation: "crew_members"
            referencedColumns: ["id"]
          },
        ]
      }
      missions: {
        Row: {
          comm_delay_seconds: number
          current_day: number
          id: string
          mode: string
          name: string
          radiation_budget_msv: number
          start_date: string
        }
        Insert: {
          comm_delay_seconds?: number
          current_day?: number
          id?: string
          mode?: string
          name: string
          radiation_budget_msv?: number
          start_date?: string
        }
        Update: {
          comm_delay_seconds?: number
          current_day?: number
          id?: string
          mode?: string
          name?: string
          radiation_budget_msv?: number
          start_date?: string
        }
        Relationships: []
      }
      points_ledger: {
        Row: {
          created_at: string | null
          crew_id: string | null
          delta: number
          id: string
          reason: string
        }
        Insert: {
          created_at?: string | null
          crew_id?: string | null
          delta: number
          id?: string
          reason: string
        }
        Update: {
          created_at?: string | null
          crew_id?: string | null
          delta?: number
          id?: string
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "points_ledger_crew_id_fkey"
            columns: ["crew_id"]
            isOneToOne: false
            referencedRelation: "crew_members"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          crew_id: string | null
          date: string | null
          done: boolean | null
          due_at: string | null
          id: string
          points: number | null
          title: string
          type: string | null
        }
        Insert: {
          crew_id?: string | null
          date?: string | null
          done?: boolean | null
          due_at?: string | null
          id?: string
          points?: number | null
          title: string
          type?: string | null
        }
        Update: {
          crew_id?: string | null
          date?: string | null
          done?: boolean | null
          due_at?: string | null
          id?: string
          points?: number | null
          title?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_crew_id_fkey"
            columns: ["crew_id"]
            isOneToOne: false
            referencedRelation: "crew_members"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
