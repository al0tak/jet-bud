import {
  View,
  Text,
  ScrollView,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import { Href, Slot, usePathname, useRouter } from "expo-router";

import {
  Banknote,
  ChartArea,
  Home,
  LucideIcon,
  Search,
  Settings,
} from "lucide-react-native";
import { useEffect, useRef } from "react";

type TabBarItemInfo = {
  title: string;
  pathname: Href;
  icon: LucideIcon;
};

function TabBar() {
  const tabBarItemInfos: TabBarItemInfo[] = [
    {
      title: "Accounts",
      pathname: "/",
      icon: Banknote,
    },
    {
      title: "Stats",
      pathname: "/stats",
      icon: ChartArea,
    },
    {
      title: "Settings",
      pathname: "/settings",
      icon: Settings,
    },
  ];

  const router = useRouter();
  const currentPath = usePathname();

  return (
    <View
      style={{
        height: 60,
        flexDirection: "row",
        backgroundColor: "rgb(224, 224, 224)",
        overflow: "hidden",
        borderRadius: 15,
        boxShadow: [
          {
            offsetX: 0,
            offsetY: 0,
            color: "rgba(255, 255, 255, 1)",
            spreadDistance: 1,
            blurRadius: 1,
          },
          {
            offsetX: 0,
            offsetY: 10,
            color: "rgba(0, 0, 0, 0.218)",
            spreadDistance: 5,
            blurRadius: 20,
          },
        ],
      }}
    >
      {tabBarItemInfos.map(({ pathname, icon }, index) => (
        <TabBarItem
          isFocused={currentPath === pathname}
          onPress={() => router.push(pathname)}
          Icon={icon}
          key={index}
        />
      ))}
    </View>
  );
}

interface TabBarItemProps {
  onPress: () => void;
  Icon: LucideIcon;
  isFocused: boolean;
}

function TabBarItem({ onPress, Icon, isFocused }: TabBarItemProps) {
  const iconSize = 24;
  const iconStrokeColor = isFocused ? "white" : "black";

  const animation = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFocused ? 1 : 0,
      easing: Easing.inOut(Easing.ease),
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isFocused]);

  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["transparent", "rgb(66, 66, 66)"],
          }),
        }}
      >
        <Icon style={{ position: "absolute" }} stroke="black" size={iconSize} />
        <Animated.View
          style={{
            position: "absolute",
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          }}
        >
          <Icon stroke="white" size={iconSize} />
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
}

export default function TabLayout() {
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, marginBottom: 90 }}>
          <Slot />
        </View>
      </ScrollView>
      <View
        style={{
          zIndex: 1000,
          position: "absolute",
          backgroundColor: "transparent",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: 15,
        }}
      >
        <TabBar />
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          zIndex: 10,
          boxShadow: [
            {
              offsetX: 0,
              offsetY: 0,
              color: "#ffffff",
              spreadDistance: 70,
              blurRadius: 40,
            },
          ],
        }}
      ></View>
    </View>
  );
}
