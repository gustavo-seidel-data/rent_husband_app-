import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Animated } from "react-native";


// Importando imagens dos serviços
import PedreiroImage from "../assets/pedreiro.jpg";
import EletricaImage from "../assets/eletrica.jpg";
import HidraulicaImage from "../assets/hidraulica.jpg";
import CarpintariaImage from "../assets/carpintaria.jpg";
import SerralheriaImage from "../assets/serralheria.jpg";
import ReformasImage from "../assets/reformas.jpg";
import CacaVazamentosImage from "../assets/caca_vazamentos.jpg";
import MaquinaImage from "../assets/maquina.jpg";

const servicos = [
  { nome: "Pedreiro", descricao: "O reboco está soltando, o piso rachou, precisa levantar um muro ou dar uma nova vida àquela parede desgastada.", imagem: PedreiroImage },
  { nome: "Elétrica", descricao: "A tomada parou de funcionar, o chuveiro queimou, precisa instalar novos pontos de energia ou substituir fiações antigas.", imagem: EletricaImage },
  { nome: "Hidráulica", descricao: "O encanamento está vazando, a torneira está pingando, o ralo entupiu ou a descarga não está funcionando direito.", imagem: HidraulicaImage },
  { nome: "Carpintaria", descricao: "A porta não fecha direito, o armário está bambo, precisa de uma nova prateleira ou aquele móvel antigo precisa de um reparo.", imagem: CarpintariaImage },
  { nome: "Serralheria", descricao: " portão está enferrujado ou emperrado, precisa reforçar grades, consertar estruturas metálicas ou instalar novas fechaduras.", imagem: SerralheriaImage },
  { nome: "Reformas", descricao: "Quer dar uma cara nova para sua casa, trocar revestimentos, ampliar um espaço ou renovar aquele ambiente antigo.", imagem: ReformasImage },
  { nome: "Caça Vazamentos", descricao: "A conta de água está muito alta, tem infiltração nas paredes, o cano parece estar vazando, mas você não sabe onde.", imagem: CacaVazamentosImage },
  { nome: "Máquinas de Lavar", descricao: "A máquina de lavar parou de funcionar, está fazendo barulho estranho, não está batendo a roupa direito ou vazando água.", imagem: MaquinaImage },
];


const HomeScreen = () => {
  const openWhatsApp = () => {
    const phoneNumber = "5511987654321"; // Substitua pelo número da conta comercial
    const message = "Olá, gostaria de mais informações!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    Linking.openURL(url).catch(err => console.error("Erro ao abrir o WhatsApp:", err));
  };

  return (
    <LinearGradient colors={["#00416A", "#E4E5E6"]} style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.title}>Crisão</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre Nós</Text>
          <Text style={styles.sectionText}>
            Somos uma empresa comprometida com a excelência e qualidade dos serviços prestados.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossos Serviços</Text>
          {servicos.map((servico, index) => (
            <View key={index} style={styles.servicoContainer}>
              <Image source={servico.imagem} style={styles.image} />
              <Text style={styles.servicoTitle}>{servico.nome}</Text>
              <Text style={styles.servicoText}>{servico.descricao}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nossos Princípios</Text>
          <Text style={styles.sectionText}>
            Trabalhamos com ética, transparência e inovação para garantir a satisfação dos nossos clientes.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Entre em Contato Conosco</Text>
          <Text style={styles.sectionText}>
            Fale conosco pelo e-mail contato@empresa.com ou pelo telefone (11) 9999-9999.
          </Text>

          {/* Botão do WhatsApp */}
          <TouchableOpacity onPress={openWhatsApp} style={styles.whatsappButton}>
            <Image source={require("../assets/whatsapp-logo.png")} style={styles.whatsappLogo} />
            <Text style={styles.whatsappText}>Fale Conosco</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.badge}>
      <Text style={styles.badgeText}>3</Text>
      </View>
      <TouchableOpacity
        onPress={openWhatsApp}
        style={styles.floatingWhatsAppButton}
        activeOpacity={0.8}
      >
        <Image
          source={require("../assets/whatsapp-logo.png")}
          style={styles.floatingWhatsAppLogo}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  section: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6, // Para Android
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#00416A",
  },
  sectionText: {
    fontSize: 16,
    color: "#333",
  },
  servicoContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4, // Para Android
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Imagem arredondada
    marginBottom: 10,
  },
  servicoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00416A",
  },
  servicoText: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
  },
  whatsappButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#25D366",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  whatsappLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  whatsappText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  floatingWhatsAppButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 999, // Ensures it stays on top
  },
  floatingWhatsAppLogo: {
    width: 35,
    height: 35,
  },
  badge: {
    position: 'absolute',
    bottom: 13,
    right: 13,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default HomeScreen;