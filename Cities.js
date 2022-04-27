import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import getReq from "../../Network/Network";
import API from "../../Network/API";

function CitiesComponent() {
  function CitiesAPI() {
    getReq(`${API.cities}`).then(({ data }) => {
      setCities(data);
    });
  }
  const [cities, setCities] = useState([]);
  useEffect(() => {
    CitiesAPI();
  });
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <FlatList
          data={cities}
          keyExtractor={(item) => item.index}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  header: {
    padding: 20
  }
});

export default CitiesComponent;
