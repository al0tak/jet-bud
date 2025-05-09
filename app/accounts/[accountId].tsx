import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { useStore } from "@/hooks/useStore";
import { ArrowLeftIcon } from "lucide-react-native";

const Account = () => {
  const localParams = useLocalSearchParams();
  const accountId = localParams.accountId as string;
  const getAccountById = useStore(({ getAccountById }) => getAccountById);
  const account = getAccountById(accountId);

  if (!account) {
    return <Text>Account not found</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable onPress={() => router.back()} style={{ padding: 10 }}>
          <ArrowLeftIcon size={34} stroke="black" />
        </Pressable>
        <Text style={{ fontSize: 34, fontWeight: "bold" }}>{account.name}</Text>
      </View>
    </View>
  );
};

export default Account;
