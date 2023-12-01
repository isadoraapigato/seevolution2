import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
} from "react-native";
import { Searchbar, Dialog } from "react-native-paper";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

import chaufadequinoa from "../../assets/chaufadequinoa.jpg";
import chipsbatatadoce from "../../assets/chipsbatatadoce.jpg";
import graodebicoassado from "../../assets/graodebicoassado.jpg";
import panquecaproteica from "../../assets/panquecaproteica.jpeg";
import paodebanana from "../../assets/paodebanana.jpg";
import paodequeijodetapioca from "../../assets/paodequeijodetapioca.jpg";
import smoothieproteico from "../../assets/smoothieproteico.jpg";
import wrapsaudavel from "../../assets/wrapsaudavel.png";
import BottomTab from "../../assets/components/BottomTab";

import Panquecaproteica from "../panquecaproteica";


export default function Receitas({ navigation }) {
  const [searchQuery, setSearchQuery] = useState(""); // Adicionado estado para a pesquisa
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFavoritePress = () => {
    Alert.alert(
      "Item Favoritado",
      "Este item foi adicionado aos favoritos!",
      [
        {
          text: "OK",
          style: "cancel",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>

    <BottomTab selectedOption="receitas"/>
    <ScrollView style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          color: "#fff",
          marginTop: 70,
          marginLeft: 40,
        }}
      >
        Receitas
      </Text>

      <Searchbar
        placeholder="Pesquisar"
        clearButtonMode="always"
        value={searchQuery}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(query) => handleSearch(query)}
        style={{
          marginHorizontal: 30,
          marginVertical: 10,
          borderRadius: 10,
          marginTop: 30,
          backgroundColor: "transparent",
          borderColor: "#8B8B8B",
          borderWidth: 1,
        }}
      />

      <ScrollView horizontal style={styles.scrollView}>
        <View style={styles.cards}>
          <View style={styles.categoriacards}>
            <Text style={{ textAlign: "center", color: "#fff" }}>Doces</Text>
          </View>

          <View style={styles.categoriacards}>
            <Text style={{ textAlign: "center", color: "#fff" }}>Salgadas</Text>
          </View>

          <View style={styles.categoriacards}>
            <Text style={{ textAlign: "center", color: "#fff" }}>Veganas</Text>
          </View>

          <View style={styles.categoriacards}>
            <Text style={{ textAlign: "center", color: "#fff" }}>Massas</Text>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          width: 170,
          borderWidth: 2,
          borderColor: "#fff",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          marginTop: 30,
          marginLeft: 30,
          height: 300,
        }}
      >
        <Image
          source={panquecaproteica}
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            marginLeft: 18,
            borderRadius: 15,
          }}
        ></Image>

        <Text
          style={{
            textAlign: "center",
            width: 140,
            height: 100,
            marginLeft: 18,
            marginTop: 12,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Panqueca Proteica
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(Panquecaproteica)}
          style={{
            alignItems: "center",
            marginTop: -60,
            fontSize: 30,
            borderColor: "#AE001B",
            borderWidth: 1.5,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            borderRadius: 7,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}
        />
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </View>

      <View
        style={{
          width: 170,
          borderWidth: 2,
          borderColor: "#fff",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          marginTop: -300,
          marginLeft: 220,
          height: 300,
        }}
      >
        <Image
          source={graodebicoassado}
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            marginLeft: 18,
            borderRadius: 15,
          }}
        ></Image>

        <Text
          style={{
            textAlign: "center",
            width: 140,
            height: 100,
            marginLeft: 18,
            marginTop: 12,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Grão de Bico Assado
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Graodebicoassado")}
          style={{
            alignItems: "center",
            marginTop: -50,
            fontSize: 30,
            borderColor: "#AE001B",
            borderWidth: 1.5,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            borderRadius: 7,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}
        />
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </View>

      <View
        style={{
          width: 170,
          borderWidth: 2,
          borderColor: "#fff",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 30,
          height: 300,
        }}
      >
        <Image
          source={smoothieproteico}
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            marginLeft: 18,
            borderRadius: 15,
          }}
        ></Image>

        <Text
          style={{
            textAlign: "center",
            width: 140,
            height: 100,
            marginLeft: 18,
            marginTop: 12,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Smoothie Proteico
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Smoothieproteico")}
          style={{
            alignItems: "center",
            marginTop: -60,
            fontSize: 30,
            borderColor: "#AE001B",
            borderWidth: 1.5,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            borderRadius: 7,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}
        />
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </View>

      <View
        style={{
          width: 170,
          borderWidth: 2,
          borderColor: "#fff",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          marginTop: -300,
          marginLeft: 220,
          height: 300,
        }}
      >
        <Image
          source={wrapsaudavel}
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            marginLeft: 18,
            borderRadius: 15,
          }}
        ></Image>

        <Text
          style={{
            textAlign: "center",
            width: 140,
            height: 100,
            marginLeft: 18,
            marginTop: 12,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Wrap Saudável
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Wrapsaudavel")}
          style={{
            alignItems: "center",
            marginTop: -50,
            fontSize: 30,
            borderColor: "#AE001B",
            borderWidth: 1.5,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            borderRadius: 7,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}
        />
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </View>

      <View
        style={{
          width: 170,
          borderWidth: 2,
          borderColor: "#fff",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 30,
          height: 300,
        }}
      >
        <Image
          source={chaufadequinoa}
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            marginLeft: 18,
            borderRadius: 15,
          }}
        ></Image>

        <Text
          style={{
            textAlign: "center",
            width: 140,
            height: 100,
            marginLeft: 18,
            marginTop: 12,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Chaufa de Quinoa e Vegetais
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Chaufadequinoa")}
          style={{
            alignItems: "center",
            marginTop: -50,
            fontSize: 30,
            borderColor: "#AE001B",
            borderWidth: 1.5,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            borderRadius: 7,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}
        />
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </View>

      <View
        style={{
          width: 170,
          borderWidth: 2,
          borderColor: "#fff",
          borderTopLeftRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
          justifyContent: "center",
          marginTop: -300,
          marginLeft: 220,
          height: 300,
        }}
      >
        <Image
          source={chipsbatatadoce}
          style={{
            width: 130,
            height: 130,
            marginTop: 20,
            marginLeft: 18,
            borderRadius: 15,
          }}
        ></Image>

        <Text
          style={{
            textAlign: "center",
            width: 140,
            height: 100,
            marginLeft: 18,
            marginTop: 12,
            fontWeight: "bold",
            color: "#fff",
            fontSize: 15,
          }}
        >
          Chips de Batata Doce
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Chipsbatatadoce")}
          style={{
            alignItems: "center",
            marginTop: -50,
            fontSize: 30,
            borderColor: "#AE001B",
            borderWidth: 1.5,
            width: 120,
            marginLeft: 25,
            marginBottom: 30,
            borderRadius: 7,
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Text style={{ color: "#fff" }}>Ver mais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFavoritePress}
          style={styles.favoriteButton}
        />
        <Text style={styles.favoriteButtonText}>Favoritar</Text>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#04090B",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  icon: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "transparent",
    border: 1,
    borderColor: "#fff",
    width: "90%",
  },
  favoriteButtonText: {
    color: "#fff",
    marginBottom: 30,
    marginTop: -20,
    backgroundColor: "#AE001B",
    width: 120,
    marginLeft: 25,
    paddingBottom: 2,
    paddingTop: 2,
    borderRadius: 7,
    textAlign: "center",
  },
  cards: {
    flexDirection: "row",
    marginLeft: 25,
    marginTop: 10,
  },
  categoriacards: {
    backgroundColor: "#102D36",
    marginLeft: 5,
    height: 30,
    paddingTop: 5,
    paddingBottom: 5,
    width: 100,
    borderRadius: 6,
    fontSize: 15,
  },
  scrollView: {
    flexDirection: "row", // Permite a rolagem horizontal
  },
});
