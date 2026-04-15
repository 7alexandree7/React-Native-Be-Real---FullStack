import { ENV_VARIABLES } from "@/src/config/env"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {createClient} from "@supabase/supabase-js"

const supaBaseUrl = ENV_VARIABLES.EXPO_PUBLIC_SUPABASE_URL!
const supaBaseAnonKey = ENV_VARIABLES.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supaBaseUrl, supaBaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false
    }
})