import { View, Text } from "react-native";
import React from "react";
import { Account } from "@/types";

interface AccountListItemProps {
  account: Account;
}

const AccountListItem = ({ account }: AccountListItemProps) => {
  return (
    <View>
      <Text>{account.name}</Text>
    </View>
  );
};

export default AccountListItem;
