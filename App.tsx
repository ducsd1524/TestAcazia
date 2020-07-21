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
import Swiper from 'react-native-swiper';
import Card from "./src/component/Card";

const { width, height } = Dimensions.get("window")

interface State {
  data: any,
  loading: boolean,
  text: string,
  count: number
}
class App extends Component<State> {
  state: State = {
    loading: true,
    data: {},
    text: "",
    count: 1
  };

  componentDidMount() {
    this.fetch();
  };

  fetch = async () => {
    fetch('https://randomuser.me/api/0.4/?randomapi', {
      method: 'GET'
      //Request Type 
    })
      .then((response) => response.json())
      .then((responseJson) => {
        let data = responseJson.results[0].user
        this.setState({
          loading: false,
          data: data,
        })
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });
  };

  onChange = () => {
    this.setState({
      loading: true,
      data: {},
    }, this.fetch)
  };


  render() {
    const { data, loading, text } = this.state;
    return (
      <Swiper
        loop={true}
        onIndexChanged={this.onChange}
        onScroll={event => {
          this.setState({
            count: event.nativeEvent.contentOffset.x
          })
          if (event.nativeEvent.contentOffset.x >= this.state.count) {
            this.setState({
              text: "DISLIKE",
              loading: true,
            })
          } else {
            this.setState({
              text: "LIKE",
              loading: true,
            })
          }
        }}
      >
        {loading ?
          <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Text>{text}</Text>
            <Text>Đang tải dữ liệu</Text>
          </View>
          :
          <Card
            data={data}
          />
        }
        <>
          {loading ?
            <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
              <Text>{text}</Text>
              <Text>Đang tải dữ liệu</Text>
            </View>
            :
            <Card
              data={data}
            />
          }
        </>
      </Swiper>
    )
  }
}

export default App;
