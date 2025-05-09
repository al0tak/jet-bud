import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { ArrowLeftIcon } from "lucide-react-native";
import AccountList from "@/components/AccountList/AccountList";
import { useStore } from "@/hooks/useStore";

const accounts = () => {
  const accounts = useStore(({ accounts }) => accounts);
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
          <ArrowLeftIcon size={34} stroke="black" />
        </Pressable>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>My accounts</Text>
      </View>

      <AccountList accounts={accounts} />
    </View>
  );
};

export default accounts;
