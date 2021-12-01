import React, { useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DummyData from './assets/DummyData';
import FlatlistItem from './components/flatlistItems/FlatlistItem';
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

import { checkboxData } from './components/checkBoxData/CheckBoxData';

export default function App() {

  const renderItem = ({ item }) => (
    <FlatlistItem item={item} />
  );

  const Data = DummyData

  const FlatlistData = Data[0].data.handover_details;

  let searchCashString = "cash";
  const filterCashData = FlatlistData.filter(FlatlistData => FlatlistData.handover_item_type.includes(searchCashString));
  let searchSampleString = "sample";
  const filterSampleData = FlatlistData.filter(FlatlistData => FlatlistData.handover_item_type.includes(searchSampleString));

  const [flatlistData, setFlatlistData] = useState();

  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        backgroundColor={'#0E142E'}
        barStyle={'light-content'}
      />
      <View style={styles.body}>
        <Text style={styles.headerText}>
          To get Handover Details,
        </Text>
        <View>
          <Text style={styles.subText}>
            Select handover item type.
          </Text>
          <BouncyCheckboxGroup
            data={checkboxData}
            onChange={(selectedItem: ICheckboxButton) => {
              console.log("SelectedItem: ", JSON.stringify(selectedItem.id === 0 ? setFlatlistData(filterSampleData) : setFlatlistData(filterCashData)));
              console.log("SelectedItem: ", JSON.stringify(selectedItem.id === 2 ? setFlatlistData(FlatlistData) : ''));
            }}
            style={styles.checkboxContainer}
          />
        </View>
        <Text style={[styles.subText, { paddingBottom: 10 }]}>
          All details:
        </Text>
        <FlatList
          data={flatlistData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 1,
    backgroundColor: '#0E142E',
    padding: 16
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  subText: {
    fontSize: 18,
    color: '#ffffff',
    paddingTop: 12
  },
  checkboxContainer: {
    padding: 10,
    justifyContent: 'space-between'
  },
});

