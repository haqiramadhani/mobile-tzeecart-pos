import React from 'react';
import {ScrollView, View} from "react-native";
import StatusBar from "../Component/StatusBar";
import {Body, Header, Title} from "native-base";

const Purchase = () => {
  return (
    <View style={{
      flex: 1,
    }}>
      <StatusBar/>
      {/* ========== Header ========== */}
      <Header style={{
        backgroundColor: 'green',
      }}>
        <Body style={{
          alignItems: 'center',
        }}>
          <Title>Purchase Manager</Title>
        </Body>
      </Header>
      {/* ======== End Header ======== */}
      <ScrollView>

      </ScrollView>
    </View>
  )
};

export default Purchase;
