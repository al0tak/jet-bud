import { useStore } from "@/hooks/useStore";
import migrateDbIfNeeded from "@/queries/migrateDbIfNeeded";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  const initStore = useStore(({ initStore }) => initStore);
  useEffect(() => {
    migrateDbIfNeeded();
    initStore();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
