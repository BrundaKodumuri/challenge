import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import getReq from "../../Network/Network";
import API from "../../Network/API";

function BarangaysComponent() {
  function BarangaysAPI() {
    getReq(`${API.cities}`).then(({ data }) => {
      setBarangays(data);
    });
  }
  const [barangays, setBarangays] = useState([]);
  useEffect(() => {
    BarangaysAPI();
  });
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <FlatList
          data={barangays}
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

export default BarangaysComponent;
