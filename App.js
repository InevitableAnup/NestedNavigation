import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Header,
  Card,
  Avatar,
  FormLabel,
  FormInput,
  FormValidationMessage,
  
} from "react-native-elements";
import { StackNavigator } from "react-navigation";
import SideBar from './components/Sidebar';

import {
  Container,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Drawer
} from "native-base";

export default class App extends React.Component {
  closeDrawer(){
    this._drawer._root.close();
  };
  openDrawer(){
    this._drawer._root.open();
  };

  leftComponent(){
    return(
      <Button transparent  onPress={()=> this.openDrawer()}>
      <Icon name='menu'/>
      </Button>
      
    );
      
    
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    this.setState({ isReady: true });
  }
  

  render() {
 
    return (
      <Drawer
      ref={(ref) => { this._drawer = ref; }}
      content={<SideBar navigator={this._navigator} />}
      onClose={() => this.closeDrawer()} >
      <Container>
      <Header
      leftComponent={this.leftComponent()}
      centerComponent={{ text: "Home", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff" }}
    />

      <Content>
        <Text>This is Content Section</Text>
      </Content>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
    </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
