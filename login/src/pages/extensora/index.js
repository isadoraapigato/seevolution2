import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import extensora from "../../assets/extensora.jpg";

export default function Extensora({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Treino")}
          style={styles.backButton}
        >
          <Icon
            name="angle-left"
            size={30}
            color="#AE001B"
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textoContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Treino")}
          style={{
            alignItems: "center",
            marginTop: -80,
            fontSize: 40,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#AE001B", fontSize: 18, marginLeft: -200 }}>
            Treino
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#000",
            fontSize: 28,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 80,
          }}
        >
         EXTENSORA
        </Text>

        <Image source={extensora} style={styles.imagem}></Image>
       <Text style={{textAlign:'center', fontSize: 16, paddingRight: 25, paddingLeft:25}}>Na máquina extensora, ajuste o banco para que a parte superior das costas e os ombros estejam bem apoiados. Ajuste o peso de acordo com sua capacidade. Sentado, posicione os joelhos atrás do rolo acolchoado e coloque os pés planos no chão. Agarre as alças ou apoie as mãos nas barras laterais. Estenda as pernas para fora, mantendo um leve alongamento nos joelhos, e contraia os quadríceps. Retorne lentamente à posição inicial. Mantenha a coluna neutra e evite arquear as costas. Realize o exercício de forma controlada, respirando normalmente. Consulte um profissional de fitness para ajustar a máquina corretamente e obter orientação personalizada.






</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F0F0",
    textAlign: "center",
    marginTop: 40,
  },
  itemContainer: {
    color: "#fff",
    marginLeft: 40,
    marginTop: 40,
  },
  item: {
    color: "#000",
    fontSize: 15,
    textAlign: "center",
    marginTop: 7,
    paddingLeft: 40,
    paddingRight: 40,
  },
  imagem: {
    width: 270,
    height: 170,
    marginTop: 50,
    alignSelf: "center",
    marginBottom: 40,
    marginLeft: 1,
    borderRadius:5
  },
  textoContainer: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20,
    width: 340,
    alignItems: "center",
    marginLeft: 40,
    height: 770,
    paddingBottom: 10,
    paddingTop: -20,
    marginTop: 50,
    marginBottom: 30,
  },
});
