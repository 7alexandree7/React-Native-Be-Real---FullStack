interface EnvVariables {
    EXPO_PUBLIC_SUPABASE_URL: string | undefined
    EXPO_PUBLIC_SUPABASE_ANON_KEY: string | undefined
}


export const ENV_VARIABLES: EnvVariables = {
    EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
}