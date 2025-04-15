import { View, Text, Pressable } from "react-native";
import React from "react";
import { SettingsIcon, RocketIcon } from "lucide-react-native";
import { router } from "expo-router";
import { useStore } from "@/hooks/useStore";
const index = () => {
  const accounts = useStore(({ accounts }) => accounts);

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RocketIcon size={30} stroke="black" />
          <Text style={{ fontSize: 34, fontWeight: "bold" }}>JetBud</Text>
        </View>
        <View style={{ flex: 1 }} />
        <Pressable onPress={() => router.push("/settings")}>
          <SettingsIcon size={34} stroke="black" />
        </Pressable>
      </View>
      {accounts.map((account) => (
        <Text key={account.id}>{account.name}</Text>
      ))}
    </View>
  );
};

export default index;
