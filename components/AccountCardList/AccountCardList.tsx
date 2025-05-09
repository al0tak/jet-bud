import { View, Text, FlatList } from "react-native";
import React from "react";
import { Account } from "@/types";
import AccountCard from "../AccountCard/AccountCard";
import { accountCardMargin, accountCardWidth } from "@/global/constants";

interface AccountCardListProps {
  accounts: Account[];
}

const AccountCardList = ({ accounts }: AccountCardListProps) => {
  const snapWidth = accountCardWidth + accountCardMargin * 2;

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={snapWidth}
      data={accounts}
      renderItem={({ item }) => <AccountCard account={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default AccountCardList;
