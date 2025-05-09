import { View, Text, Pressable } from "react-native";
import React from "react";
import { SettingsIcon, RocketIcon } from "lucide-react-native";
import { router } from "expo-router";
import { useStore } from "@/hooks/useStore";
import AccountCardList from "@/components/AccountCardList/AccountCardList";
const index = () => {
  const accounts = useStore(({ accounts }) => accounts);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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

      <View>
        <AccountCardList accounts={accounts} />
        <Pressable
          style={{ padding: 10 }}
          onPress={() => router.push("/accounts/accounts")}
        >
          <Text>See all accounts...</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default index;
