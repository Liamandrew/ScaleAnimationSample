import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, View } from 'react-native'

export class AnimatedSquare extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    horizontal: PropTypes.bool,
  }

  render = () => {
    const { expanded, horizontal } = this.props
    var style = { width: 200, height: 200 }

    if (horizontal && !expanded) {
      style = { ...style, width: 0 }
    }

    // ios treats the creation of view differently to android. In order to test
    // the animation properly on ios we need to only render the view if it is
    // expanded
    if (Platform.OS = 'ios') {
      return (
        <View style={ { flex: 4, alignItems: 'center', justifyContent: 'center' }} >
          {expanded &&
            <View style={ { ...style, backgroundColor: 'red' }} >

            </View>
          }
        </View>
      )
    }

    return (
      <View style={ { flex: 4, alignItems: 'center', justifyContent: 'center' }} >
        <View style={ { ...style, backgroundColor: 'red' } } >

        </View>
      </View>
    )
  }
}
