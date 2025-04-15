import { useStore } from "@/hooks/useStore";
import { View, Text } from "react-native";

const accounts = () => {
  const accounts = useStore(({ accounts }) => accounts);

  return (
    <View>
      <Text>accounts</Text>
      {accounts.map((account) => (
        <Text key={account.id}>{account.name}</Text>
      ))}
    </View>
  );
};

export default accounts;
