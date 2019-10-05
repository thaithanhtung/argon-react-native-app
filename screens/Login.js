import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { Block, Button, Text, theme, Input, Toast } from "galio-framework";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import Icon from "../components/Icon";
import ToastMessage from "../components/Toast";
import { ToastNotification } from "react-native-toast-notification";

const dataUser = {
  username: "tu",
  password: "123456"
};

class Login extends React.Component {
  state = {
    isShowPassword: false,
    username: "",
    password: ""
  };

  handleShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword
    });
  };

  handleUsername = e => {
    this.setState({
      username: e.nativeEvent.text
    });
  };

  handlePassword = e => {
    this.setState({
      password: e.nativeEvent.text
    });
  };

  handleLogin = (username, password, navigation) => {
    if (username === dataUser.username && password === dataUser.password) {
      navigation.navigate("Home");
    } else {
      Alert.alert("Username/Password is invalid. Please enter again.");
    }
  };

  render() {
    const { navigation } = this.props;
    const { isShowPassword, username, password } = this.state;

    return (
      <Block flex style={styles.container}>
        {/* <StatusBar hidden /> */}
        {/* <Block flex center style={{ backgroundColor: "#fff" }}>
          <ImageBackground
            source={Images.Onboarding}
            
          />
        </Block> */}
        <Block flex center space="around">
          <Text color={argonTheme.COLORS.PINK} h4>
            A Day Off
          </Text>
        </Block>
        <Block flex style={styles.padded}>
          <Block flex space="around" style={{ zIndex: 2 }}>
            <Block style={styles.title}>
              <Block>
                <Input
                  onChange={this.handleUsername}
                  style={styles.customInput}
                  placeholder="Username"
                />
              </Block>

              <Block>
                <Input
                  style={styles.customInput}
                  onChange={this.handlePassword}
                  password={true}
                  placeholder="Password"
                  right
                  secureTextEntry={!isShowPassword}
                  iconContent={
                    isShowPassword ? (
                      <TouchableWithoutFeedback
                        onPress={() => this.handleShowPassword()}
                      >
                        <Icon
                          size={14}
                          color={argonTheme.COLORS.ICON_EYE}
                          name="visibility"
                          family="MaterialIcons"
                        />
                      </TouchableWithoutFeedback>
                    ) : (
                      <TouchableWithoutFeedback
                        onPress={() => this.handleShowPassword()}
                      >
                        <Icon
                          size={14}
                          color={argonTheme.COLORS.ICON_EYE}
                          name="visibility-off"
                          family="MaterialIcons"
                        />
                      </TouchableWithoutFeedback>
                    )
                  }
                />
              </Block>

              <Block right>
                <TouchableWithoutFeedback onPress={() => console.log("abc")}>
                  <Text
                    color={argonTheme.COLORS.PINK}
                    size={12}
                    style={{ paddingVertical: 10 }}
                  >
                    Forget your password?
                  </Text>
                </TouchableWithoutFeedback>
              </Block>
            </Block>

            <Block center>
              <Button
                style={styles.button}
                color={argonTheme.COLORS.PINK}
                onPress={() => this.handleLogin(username, password, navigation)}
                textStyle={{ color: argonTheme.COLORS.WHITE }}
              >
                Sign In
              </Button>

              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Home")}
              >
                <Text
                  color={argonTheme.COLORS.PINK}
                  size={15}
                  style={{ paddingVertical: 20 }}
                >
                  Don't have an account? Sign up.
                </Text>
              </TouchableWithoutFeedback>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.WHITE
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    // position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: "relative",
    marginTop: "-50%"
  },
  customInput: {
    borderColor: "#A6A6A6",
    borderWidth: 2,
    width: width - theme.SIZES.BASE * 4
  },
  subTitle: {
    marginTop: 20
  }
});

export default Login;
