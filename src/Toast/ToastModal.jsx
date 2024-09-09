import {Text, View, Modal, Dimensions, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import ToastNotification from '../assets/images/Toast Notification.svg';

const ToastModal = ({visible, setVisible}) => {
  // useEffect(()=>{
  //     if(visible){
  //         const checkForSubscription = setTimeout(() => {
  //             console.log("AFTER TIMEOUT ")
  //         setVisible(() => !visible);
  //     }, 1500);
  //     return () => clearTimeout(checkForSubscription);
  // }
  // },[])
  return (
    <Modal
      visible={visible}
      transparent
      onDismiss={() => {
        setVisible(!visible);
      }}>
      <Pressable
        onPress={() => setVisible(!visible)}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height,
          backgroundColor: 'black',
          opacity: 0.5,
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 40,
          width: '100%',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 12,
            backgroundColor: '#FFFBEB',
          }}>
          <Text
            style={{
              fontFamily: 'Mulish',
              fontSize: 14,
              fontWeight: '700',
              lineHeight: 22,
              letterSpacing: -0.4,
              color: '#222222',
            }}>
            {'Selfie Updated Successfully'}
          </Text>
          <ToastNotification style={{height: 60, width: 60}} />
        </View>
      </View>
    </Modal>
  );
};

export default ToastModal;
