import React from "react";
import { View, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";

const WhatsAppButton = () => {
  const phoneNumber = "5511987654321"; // Substitua pelo número da conta comercial
  const message = "Olá, gostaria de mais informações!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const scaleValue = new Animated.Value(1);

  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };


  const openWhatsApp = () => {
    Linking.openURL(url).catch(err => console.error("Erro ao abrir o WhatsApp:", err));
  };

  return (
    <Animated.View style={[styles.floatingWhatsAppButton, { transform: [{ scale: scaleValue }] }]}>
      <TouchableOpacity
        onPress={openWhatsApp}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        activeOpacity={1}
      >
        <Image
          source={require("../assets/whatsapp-logo.png")}
          style={styles.floatingWhatsAppLogo}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default WhatsAppButton;
