import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./welcome.style";
import { COLORS, SIZES } from "@/constants";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>
          Welcome
        </Text>
        <Text style={styles.welcomeText(COLORS.primary, 0)}>INZU</Text>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value=""
            onPress={() => navigation.navigate("Search")}
            placeholder="Search..."
            placeholderTextColor={"gray"}
            style={styles.searchInput}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
