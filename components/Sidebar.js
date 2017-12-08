import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Card,
  Avatar,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Header,
  List,
  ListItem
} from "react-native-elements";

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

import { Col, Row, Grid } from "react-native-easy-grid";
const list = [
  {
    title: "Profile",
    icon: "verified-user"
  },
  {
    title: "Account",
    icon: "account-balance"
  },
  {
    title: "Refer & Earn",
    icon: "attach-money"
  },
  {
    title: "Rate Us!",
    icon: "star"
  },
  {
    title: "Support",
    icon: "live-help"
  },
  {
    title: "FAQ",
    icon: "question-answer"
  }
];
export default class Sidebar extends React.Component {
  render() {
    return (
      <Content style={{ backgroundColor: "#ffffff" }}>
        <Grid>
          <Col />
          <Col>
            <Avatar
              xlarge
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </Col>
          <Col />
          <Col />
        </Grid>

        <Grid>
          <Col />
          <Col>
            <Row>
              <Text>Anup Borde</Text>
            </Row>
          </Col>
          <Col />
        </Grid>

        <Text style={{ marginLeft: "20%", marginTop: "5%" }}>borde.anup@gmail.com</Text>

        <List>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              leftIcon={{ name: item.icon }}
            />
          ))}
        </List>
      </Content>
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
