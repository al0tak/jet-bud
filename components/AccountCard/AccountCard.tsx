import { View, Text } from "react-native";
import React from "react";
import { Account } from "@/types";
import { accountCardMargin, accountCardWidth } from "@/global/constants";

interface AccountCardProps {
  account: Account;
}

const AccountCard = ({ account }: AccountCardProps) => {
  return (
    <View
      style={{
        width: accountCardWidth,
        height: 190,
        backgroundColor: "rgb(156, 254, 156)",
        padding: 10,
        borderRadius: 10,
        margin: accountCardMargin,
      }}
    >
      <Text>{account.name}</Text>
    </View>
  );
};

export default AccountCard;
