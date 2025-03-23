import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";
import RecipeCreateScreen from "../screens/RecipeCreateScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import CameraScreen from "../screens/CameraScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "レシピ一覧" }} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: "レシピ詳細" }} />
        <Stack.Screen name="RecipeCreate" component={RecipeCreateScreen} options={{ title: "レシピ作成" }} />
        <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: "お気に入り" }} />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ title: "カメラ" }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "ログイン" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
