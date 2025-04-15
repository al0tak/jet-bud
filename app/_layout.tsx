import { queryClient } from "@/context/QueryClient";
import migrateDbIfNeeded from "@/queries/migrateDbIfNeeded";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    migrateDbIfNeeded();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
