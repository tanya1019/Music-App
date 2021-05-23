import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";

const Equalizer = (props) => {
  const [checked, setChecked] = React.useState("first");

  return (

    <View style={styles.container}>

{/*-----------------------------------------------------Equalizer---------------------------------------------------------------- */}
      <View style={styles.header}>

        <View style={{ width: "10%", justifyContent: "center", paddingLeft: 5 }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Settings")} >
            <Ionicons name="chevron-back" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <View style={{ width: "80%", alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.headertext}>
            Equalizer
          </Text>
        </View>

        <View style={{ width: "10%" }}></View>

      </View>
{/* ---------------------------------------------------Normal------------------------------------------------- */}
     
      <View style={styles.option}>
        <RadioButton
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
          uncheckedColor="white"
          color="blue"
        />

        <Text style={styles.optionname}>
          Normal
        </Text>
      </View>
{/*--------------------------------------------Pop----------------------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
          uncheckedColor="white"
          color="blue"
        />
        <Text style={styles.optionname}>
          Pop
        </Text>
      </View>
{/*--------------------------------------------Classic----------------------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          uncheckedColor="white"
          color="blue"
        />
        <Text style={styles.optionname}>
          Classic
        </Text>
      </View>
{/*--------------------------------------------------Jazz----------------------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="fourth"
          status={checked === "fourth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fourth")}
          uncheckedColor="white"
          color="blue"
        />
        <Text style={styles.optionname}>
          Jazz
        </Text>
      </View>
{/*--------------------------------------------Rock----------------------------------------------------------- */}
      <View style={styles.option}>
        <RadioButton
          value="fifth"
          status={checked === "fifth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fifth")}
          uncheckedColor="white"
          color="blue"
        />
        <Text style={styles.optionname}>
          Rock
        </Text>
      </View>
{/*-----------------------------------------------End----------------------------------------------------------- */}
    </View>
  );
};

export default Equalizer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop:40
  },
  header: {
    backgroundColor: "blue",
    width: "100%",
    height: 60,
    flexDirection: "row",
  },
  headertext: {
    fontSize: 22,
    fontWeight: "bold",
  },
  option: {
    width: "100%",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionname: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});