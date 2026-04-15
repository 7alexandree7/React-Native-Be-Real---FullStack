import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {

  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  let isAuth = false;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (!isAuth) {
      router.replace("/(auth)/login");
    } else {
      router.replace("/(tabs)");
    }
  }, [isMounted]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(auth)" />
    </Stack>
  );
}