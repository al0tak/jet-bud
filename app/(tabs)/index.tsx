import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useAccounts } from "@/hooks/accounts/useAccounts";

const index = () => {
  const { data: accounts, isLoading, error } = useAccounts();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error || !accounts) {
    return <Text>Error: {error?.message}</Text>;
  }

  return (
    <View>
      <Text>Accounts</Text>
      {accounts.map((account, index) => (
        <Text key={index}>{account.name}</Text>
      ))}
    </View>
  );
};

export default index;
