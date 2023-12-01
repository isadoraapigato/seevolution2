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
import BottomTab from "../../assets/components/BottomTab";

import extensora from "../../assets/extensora.jpg";
import panturrilha from "../../assets/panturrilha.jpg";
import abdomen from "../../assets/abdomen.jpg";
import peito from "../../assets/peito.jpg";
import ombro from "../../assets/ombro.jpg";
import gluteo from "../../assets/gluteo.jpg";

import Extensora from "../extensora";

export default function Treino({ navigation }) {
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
      <BottomTab selectedOption="treino" />
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
          Treino
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
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Mobilidade
              </Text>
            </View>

            <View style={styles.categoriacards}>
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Inferiores
              </Text>
            </View>

            <View style={styles.categoriacards}>
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Superiores
              </Text>
            </View>

            <View style={styles.categoriacards}>
              <Text style={{ textAlign: "center", color: "#fff" }}>
                Alongamentos
              </Text>
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
            source={extensora}
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
            Extensora
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(Extensora)}
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
            source={panturrilha}
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
            Elevação de panturrilha em pé
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Panturrilha")}
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
            source={abdomen}
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
            Abdomen Supra
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Abdomen")}
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
            source={peito}
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
            Supino Inclinado
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Peito")}
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
            source={ombro}
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
            Desenvolvimento
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Ombro")}
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
            source={gluteo}
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
            Extensão de lombar
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("Gluteo")}
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
