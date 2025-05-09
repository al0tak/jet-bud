import { View, Text } from "react-native";
import React from "react";
import { Account } from "@/types";
import AccountListItem from "../AccountListItem/AccountListItem";

interface AccountListProps {
  accounts: Account[];
}

const AccountList = ({ accounts }: AccountListProps) => {
  return (
    <View>
      {accounts.map((account) => (
        <AccountListItem account={account} />
      ))}
    </View>
  );
};

export default AccountList;
