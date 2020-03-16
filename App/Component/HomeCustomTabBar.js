import {Icon} from "react-native-elements";

const React = require('react');
const { ViewPropTypes, TouchableOpacity} = ReactNative = require('react-native');
const PropTypes = require('prop-types');
const createReactClass = require('create-react-class');
const {
  StyleSheet,
  Text,
  View,
  Animated,
} = ReactNative;

const Button = require('./Button');

const HomeCustomTabBar = createReactClass({
  propTypes: {
    goToPage: PropTypes.func,
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: ViewPropTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: ViewPropTypes.style,
    activeSize: PropTypes.number,
    inactiveSize: PropTypes.number,
    rightClick: PropTypes.func,
    leftClick: PropTypes.func
  },

  getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      backgroundColor: null,
    };
  },

  renderTabOption(name, page) {
  },

  renderTab(name, page, isTabActive, onPressHandler) {
    const { activeTextColor, inactiveTextColor, textStyle, activeSize, inactiveSize } = this.props;
    const textColor = isTabActive ? activeTextColor : inactiveTextColor;
    const fontWeight = isTabActive ? 'bold' : 'normal';
    const fontSize = isTabActive ? activeSize : inactiveSize;

    return <Button
      style={{flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab, this.props.tabStyle, ]}>
        <Text style={[{color: textColor, fontWeight, fontSize }, textStyle, ]}>
          {name}
        </Text>
      </View>
    </Button>;
  },

  render() {

    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        <TouchableOpacity style={{width: 80}} onPress={()=>{
          this.props.leftClick && this.props.leftClick()
        }}>
          <Icon
            name='menu'
            type='entypo'
            color='black'
          />
        </TouchableOpacity>

        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <TouchableOpacity style={{width: 80}} onPress={()=>{
          this.props.rightClick&&this.props.rightClick()
        }}>
          <Icon
            name='search'
            color='black'
          />
        </TouchableOpacity>
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

module.exports = HomeCustomTabBar;
