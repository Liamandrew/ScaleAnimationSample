import React from 'react';
import { LayoutAnimation, StyleSheet, Text, View, TouchableOpacity, UIManager } from 'react-native';
import { AnimatedSquare } from './animated-square.component'

UIManager.setLayoutAnimationEnabledExperimental &&   UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component {

  state = {
    squareOneExpanded: false,
    squareTwoExpanded: false,
  }

  handleOnePress = () =>  {
    const customSpring = {
      duration: 300,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleX
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
      },
      delete: {
        duration: 300,
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleX
      },
    }

    LayoutAnimation.configureNext(customSpring)
    this.setState({ squareOneExpanded: !this.state.squareOneExpanded })
  }

  handleTwoPress = () =>  {
    const customSpring = {
      duration: 300,
      create: {
        duration: 300,
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleY
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.4,
      },
      delete: {
        duration: 300,
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleY
      },
    }

    LayoutAnimation.configureNext(customSpring)
    this.setState({ squareTwoExpanded: !this.state.squareTwoExpanded })
  }

  render() {
    const { squareOneExpanded, squareTwoExpanded } = this.state

    return (
      <View style={ { flex: 1 }}>
        <AnimatedSquare
          expanded={ squareOneExpanded }
        />
        <AnimatedSquare
          expanded={ squareTwoExpanded }
        />
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={ this.handleOnePress }
          >
            <View style={ { flex: 1, backgroundColor: 'blue' }}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={ this.handleTwoPress }
          >
            <View style={ { flex: 1, backgroundColor: 'green' }}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

console.ignoredYellowBox = ['Remote debugger', 'Warning']
