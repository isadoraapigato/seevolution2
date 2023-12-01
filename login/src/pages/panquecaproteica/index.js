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
import panquecaperiferica from "../../assets/panquecaperiferica.png";

export default function Panquecaproteica({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Receitas")}
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
          onPress={() => navigation.navigate("Receitas")}
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
            Receitas
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: "#000",
            fontSize: 23,
            textAlign: "center",
            fontWeight: "bold",
            marginTop: 80,
          }}
        >
          PANQUECA PROTEICA
        </Text>

        <Image source={panquecaperiferica} style={styles.imagem}></Image>
        <Text
          style={{
            color: "#000",
            fontSize: 20,
            textAlign: "center",
            marginTop: -10,
            fontStyle: "italic",
          }}
        >
          Ingredientes
        </Text>
        <Text
          style={{
            color: "#000",
            fontSize: 15,
            textAlign: "center",
            marginTop: 20,
            paddingLeft: 40,
            paddingRight: 40,
          }}
        >
          {" "}
          • 1 xícara de farinha de trigo integral
        </Text>
        <Text style={styles.item}> • 1/2 xícara de farinha de aveia</Text>
        <Text style={styles.item}>
          {" "}
          • 2 colheres de sopa de proteína em pó da sua preferência
        </Text>
        <Text style={styles.item}> • 1 colher de chá de fermento em pó</Text>
        <Text style={styles.item}> • 1/4 colher de chá de sal</Text>
        <Text style={styles.item}>
          {" "}
          • 1 colher de sopa de adoçante (opcional), como xarope de bordo ou
          açúcar de coco
        </Text>
        <Text style={styles.item}>
          {" "}
          • 1 xícara de leite, podendo ele ser vegetal (amêndoa, soja, aveia,
          etc.)
        </Text>
        <Text style={styles.item}>
          {" "}
          • 1 colher de sopa de óleo vegetal (por exemplo, óleo de coco)
        </Text>
        <Text style={styles.item}>
          {" "}
          • 1 colher de chá de extrato de baunilha
        </Text>

        <Text
          style={{
            color: "#000",
            fontSize: 20,
            textAlign: "center",
            marginTop: 30,
            marginBottom: 20,
            fontStyle: "italic",
          }}
        >
          Modo de preparo
        </Text>

        <Text style={styles.item}>
          {" "}
          1. Em uma tigela grande, misture as farinhas, a proteína em pó, o
          fermento em pó e o sal.
        </Text>

        <Text style={styles.item}>
          {" "}
          2. Em uma tigela separada, misture o leite vegetal, o óleo vegetal, o
          adoçante (se estiver usando) e o extrato de baunilha.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          3. Adicione os ingredientes líquidos aos ingredientes secos e mexa até
          obter uma massa homogênea. Se a massa estiver muito grossa, você pode
          adicionar um pouco mais de leite vegetal.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          4. Aqueça uma frigideira antiaderente em fogo médio.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          5. Despeje pequenas porções de massa na frigideira para formar as
          panquecas.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          6. Cozinhe cada lado por 2-3 minutos, ou até que a massa comece a
          formar bolhas.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          7. Vire as panquecas e cozinhe o outro lado até ficar dourado.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          8. Repita o processo até que toda a massa tenha sido utilizada.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          9. Sirva as panquecas com suas coberturas favoritas, como frutas
          frescas, xarope de bordo, nozes ou sementes.{" "}
        </Text>

        <Text style={styles.item}>
          {" "}
          Essas panquecas são uma opção deliciosa e nutritiva, rica em proteínas
          vegetais. Lembre-se de ajustar os ingredientes de acordo com suas
          preferências pessoais.
        </Text>
        <Text style={styles.item}> Bom apetite!</Text>
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
    width: 370,
    height: 250,
    marginTop: 50,
    alignSelf: "center",
    marginBottom: 40,
    marginLeft: 70,
  },
  textoContainer: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 20,
    width: 340,
    alignItems: "center",
    marginLeft: 40,
    height: 1670,
    paddingBottom: 10,
    paddingTop: -20,
    marginTop: 50,
    marginBottom: 30,
  },
});
