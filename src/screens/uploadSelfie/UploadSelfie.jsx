import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, { useState } from 'react';
import Styles from './UploadSelfieStyles';
import ToastModal from '../../Toast/ToastModal';
// import {ToastProvider} from 'react-native-toast-notifications';

const UploadSelfie = () => {
  const [visible,setVisible] = useState(false)
  const showToast = () => setVisible(!visible)
  return (
    <View style={Styles.mainContainer}>
      <ToastModal visible={visible} setVisible={setVisible}/>
      <View style={Styles.uploadSelfieView}></View>
      <View style={{marginTop: 12, marginHorizontal: 37}}>
        <Text style={Styles.uploadSelfieDiscription}>
          Does your selfie look perfect for the next step? Use retake if needed.
        </Text>
      </View>
      <View style={Styles.footerContainer}>
        <View style={Styles.footerView}>
          <Text style={Styles.privacyPolicyUnhighlightText}>
            *Your selfie will be used to verify your identity with uploaded
            documents for renting a bike
          </Text>
        </View>
        <Pressable
          style={Styles.footerButtonView}
          onPress={showToast}
          // onPress={()=>custom_type()}
        >
          <Text style={Styles.footerButtonText}>SUBMIT</Text>
        </Pressable>
        <Pressable style={Styles.footerUnSelectedBtnView}>
          <Text style={Styles.footerButtonText}>RETAKE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default UploadSelfie;

const styles = StyleSheet.create({});
