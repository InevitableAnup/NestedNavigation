import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
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

export default class Profile extends React.Component {
    render() {
      return (
        <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
            This is Profile Section
          </Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      )
    }
}