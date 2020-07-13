/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import ASSETS from './src/contant/ASSETS';

const { width, height } = Dimensions.get("window")

class App extends Component {
  render() {
    return (
      <View style={style.viewContainer}>
        <View style={{flex: 1}}></View>
        <View style={style.viewContent1}>
          <View style={style.viewATV}>
            <Image source={ASSETS.AVATAR_DEFAUT} style={style.imgAVT} />
          </View>
          <Text style={style.txtName}>Bùi Hữu Đức</Text>
          <Text style={style.txtAddress}>Thành phố Hà Nội, Việt Nam</Text>
        </View>
        <View style={style.viewContent2}>
          <View style={style.viewBottomtab}>
            <TouchableOpacity style={style.touchActive}>
              <Text style={style.txtItem}>Sex</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.touchActive}>
              <Text style={style.txtItem}>Birthday</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.touchActive}>
              <Text style={style.txtItem}>Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.touchActive}>
              <Text style={style.txtItem}>Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.touchActive}>
              <Text style={style.txtItem}>Clock</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

export default App;

const style = StyleSheet.create({
  viewContainer: {
    height: height
  },
  viewContent1: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  viewContent2: {
    flex: 2,
    // justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  viewATV: {
    height: width / 3 + 10,
    width: width / 3 + 10,
    borderRadius: 65,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#4C5264"
  },
  imgAVT: {
    height: width / 3,
    width: width / 3,
    borderRadius: 60
  },
  txtName: {
    fontWeight: "600",
    fontSize: 18,
    color: "#4C5264",
    marginTop: 30
  },
  txtAddress: {
    fontWeight: "600",
    fontSize: 22,
    color: "black",
    marginTop: 15,
  },
  viewBottomtab: {
    flexDirection: "row",
    marginTop: 40
  },
  touchActive: {
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: "#66CC00",
    borderTopWidth: 0.5
  },
  txtItem: {
    fontSize: 16,
    margin: 5,
  }
})
