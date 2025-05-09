import { View, Text, Pressable } from "react-native";
import React from "react";
import { Account } from "@/types";
import { accountCardMargin, accountCardWidth } from "@/global/constants";
import { Link, router } from "expo-router";

interface AccountCardProps {
  account: Account;
}

const AccountCard = ({ account }: AccountCardProps) => {
  return (
    <Link
      href={{
        pathname: "/accounts/[accountId]",
        params: { accountId: account.id },
      }}
      asChild
    >
      <Pressable
        style={{
          width: accountCardWidth,
          height: 190,
          backgroundColor: "rgb(156, 254, 156)",
          padding: 10,
          borderRadius: 10,
          marginHorizontal: accountCardMargin,
        }}
      >
        <Text>{account.name}</Text>
      </Pressable>
    </Link>
  );
};

export default AccountCard;
