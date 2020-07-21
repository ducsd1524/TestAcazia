import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import ASSETS from "../../contant/ASSETS";
import style from "./style";

const { width, height } = Dimensions.get("window")

interface State {
    setActive: number
};

interface Props {
    data: any
};

class Card extends Component<Props, State> {
    state: State = {
        setActive: 3
    };

    renderText = () => {
        const { data } = this.props
        const name = data ? data["name"].title + " " + data["name"].first + " " + data["name"].last : "";
        if (this.state.setActive == 3) {

            return (
                <View>
                    <Text style={style.txtName}>My address is</Text>
                    <Text style={style.txtAddress}>{data["location"].street + ", " + data["location"].city + ", " + data["location"].state + ", " + data["location"].zip}</Text>
                </View>
            )
        } else if (this.state.setActive == 4) {
            return (
                <View>
                    <Text style={style.txtName}>My phone is</Text>
                    <Text style={style.txtAddress}>{data["phone"]}</Text>
                    <Text style={style.txtAddress}>{data["cell"]}</Text>
                </View>
            )
        } else if (this.state.setActive == 1) {
            return (
                <View>
                    <Text style={style.txtName}>{name}</Text>
                    <Text style={style.txtAddress}>{data["email"]}</Text>
                    <Text style={style.txtAddress}>{data["username"]}</Text>
                </View>
            )
        }
    };
    setActive = (value: number) => {

        this.setState({
            setActive: value
        });
    };

    render() {
        const { data } = this.props;
        const { setActive } = this.state;
        return (
            <View style={style.viewContainer}>
                <View style={{ flex: 1 }}></View>
                <View style={style.viewContent1}>
                    <View style={style.viewATV}>
                        <Image source={{ uri: data["picture"] }} style={style.imgAVT} />
                    </View>
                    {this.renderText()}
                    <View>
                    </View>
                </View>
                <View style={style.viewContent2}>
                    <View style={style.viewBottomtab}>
                        <TouchableOpacity style={setActive == 1 ? style.touchActive : style.touch} onPress={() => this.setActive(1)}>
                            {setActive == 1 ?
                                <Image source={ASSETS.icPersionalActive} style={style.icon} />
                                :
                                <Image source={ASSETS.icPersional} style={style.icon} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={setActive == 2 ? style.touchActive : style.touch} onPress={() => this.setActive(2)}>
                            {setActive == 2 ?
                                <Image source={ASSETS.icCalendaActive} style={style.icon} />
                                :
                                <Image source={ASSETS.icCalenda} style={style.icon} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={setActive == 3 ? style.touchActive : style.touch} onPress={() => this.setActive(3)}>
                            {setActive == 3 ?
                                <Image source={ASSETS.icMapActive} style={style.icon} />
                                :
                                <Image source={ASSETS.icMap} style={style.icon} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={setActive == 4 ? style.touchActive : style.touch} onPress={() => this.setActive(4)}>
                            {setActive == 4 ?
                                <Image source={ASSETS.icPhoneActive} style={style.icon} />
                                :
                                <Image source={ASSETS.icPhone} style={style.icon} />
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={setActive == 5 ? style.touchActive : style.touch} onPress={() => this.setActive(5)}>
                            {setActive == 5 ?
                                <Image source={ASSETS.icLockActive} style={style.icon} />
                                :
                                <Image source={ASSETS.icLock} style={style.icon} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
};

export default Card;