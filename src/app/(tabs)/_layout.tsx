import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "coral" }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color} />
            }} />
            <Tabs.Screen name="about" options={{
                title: "About",
                tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "information-circle" : "information-circle-outline"} size={size} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({ color, size, focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color} />
            }} />
        </Tabs>
    )
}
1