import React from 'react'
import {Button, Header, Input} from "react-native-elements";
import {View, Text, TouchableOpacity} from "react-native";
import getStyle from './Style/PhoneLoginStyle'
import { Icon } from 'react-native-elements'
import PhoneModal from '../Component/PhoneModal'
import {checkPhone, checkEmpty} from '../Util/Tool'
import Toast from "react-native-root-toast";
import ApiUtil from '../Service/ApiUtil'
import {connect} from "react-redux";
import {Login} from '../Store/actionCreators'

let Styles = {}


const Type = {
  phone: 'phone',
  password: 'password'
}

class PhoneLogin extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      phone: '18833234045',
      phoneCode: '+86',
      password: '137212liushun',
      type: Type.phone,
      beforeType: Type.phone
    }
  }

  goNext= async () => {

    const {phone} = this.state

    if (!checkPhone(phone)) {
      Toast.show("请输入11位数字的手机号", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM
      })
      return false
    }


    try{
      const result = await ApiUtil.request('checkPhone', {phone})
      if(result.data.code === 200 && result.data.exist === 1){
        this.setState({
          type: Type.password,
          beforeType: Type.phone
        })
      }else{
        Toast.show("该手机号没有注册", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM
        })
      }
    }catch{

    }

  }

  goLogin= async () => {

    const {phone, password} = this.state

    if (!checkEmpty(password)) {
      Toast.show("请输入密码", {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM
      })
      return false
    }

    try {
      const result = await ApiUtil.request('login', {phone, password})
      if (result.data.code === 200) {
        this.props.login(result.data)
        this.props.navigation.navigate('Home')
      } else {
        Toast.show(result.data.message, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM
        })
      }
    } catch {

    }

  }

  render(){

    Styles = getStyle()
    const {navigate} = this.props.navigation
    return(
      <View>
        <Header
          containerStyle={Styles.headerContainer}
          placement="left"
          leftComponent={
            <Icon
              name='arrowleft'
              type='antdesign'
              color='black'
              onPress={() =>{
                if(this.state.type === Type.phone){
                  navigate('LoginView')
                }else{
                  this.setState({
                    type: this.state.beforeType
                  })
                }
              }}
            />
          }
          centerComponent={{ text: '手机号登录', style: { color: 'black', fontSize: 16 } }}
        />

        {/*手机号输入*/}

        {
          this.state.type === Type.phone?
            <View>
              <Text style={Styles.tip}>未注册手机号登录后将自动创建账号</Text>

              <Input
                ref={(ref)=>this.input=ref}
                inputStyle={{fontSize: 16, margin: 0, padding: 0}}
                placeholder='请输入手机号'
                keyboardType='numeric'
                leftIconContainerStyle={{ marginLeft: 0}}
                leftIcon={
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={()=>{
                      this.modal.setModalVisible(true)
                    }}
                  >
                    <Text>{this.state.phoneCode}</Text>
                    <Icon
                      name={'caretdown'}
                      type={'antdesign'}
                      color={'black'}
                      size={10}
                      iconStyle={{marginHorizontal: 5}}
                    />
                  </TouchableOpacity>
                }
                rightIcon={
                  this.state.phone.length?
                    <Icon
                      name={'close'}
                      type={'antdesign'}
                      color={'gray'}
                      size={16}
                      onPress={()=>{
                        this.setState({
                          phone: ''
                        },()=>{
                          this.input.clear()
                        })
                      }
                      }
                    />:
                    null
                }
                value={this.state.phone}
                onChangeText={(text)=>{
                  this.setState({
                    phone: text
                  })
                }}
              />

              <Button
                title={"下一步"}
                buttonStyle={Styles.nextButtonStyle}
                titleStyle={Styles.nextTitleStyle}
                onPress={this.goNext}
              />
              <PhoneModal ref={(ref)=>this.modal=ref} getCode={(phoneCode)=>this.setState({phoneCode})}/>
            </View>
            :
            null
        }

        {/*密码输入*/}

        {
          this.state.type === Type.password?
            <View>

              <Input
                ref={(ref)=>this.input=ref}
                inputStyle={{fontSize: 16, margin: 0, padding: 0}}
                placeholder='请输入密码'
                secureTextEntry={true}
                rightIcon={
                  <Text style={{fontSize: 12, color: 'blue'}}>忘记密码？</Text>
                }
                value={this.state.password}
                onChangeText={(password)=>{
                  this.setState({
                    password
                  })
                }}
              />

              <Button
                title={"登录"}
                buttonStyle={Styles.nextButtonStyle}
                titleStyle={Styles.nextTitleStyle}
                onPress={this.goLogin}
              />
            </View>
            :
            null
        }


      </View>
    )
  }
}
const mapState = state => ({

})

const mapDispatch = dispatch => ({
  login(data) {
    dispatch(Login(data))
  }
})

export default connect(
  mapState,
  mapDispatch
)(PhoneLogin)

