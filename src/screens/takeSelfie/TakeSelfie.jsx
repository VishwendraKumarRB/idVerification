import {ScrollView, Text, View, Dimensions, Pressable} from 'react-native';
import React from 'react';
import TakingSelfie from '../../assets/images/Taking Selfie Illustration .svg';
import DontCoverYourFace from '../../assets/images/Do not cover your face .svg';
import DontWearAnything from '../../assets/images/Do not wear anything.svg';
import WellLitLight from '../../assets/images/well lit light .svg';
import Styles from './TakeSelfieStyle';
const TakeSelfie = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 16}}>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <TakingSelfie style={{height: 309, width: 420}} />
      </View>
      <View style={{marginTop: 36}}>
        <View style={Styles.selfieDiscriptionView}>
          <DontCoverYourFace style={{height: 48, width: 48}} />
          <Text style={Styles.selfieDiscriptionText}>
            Remove anything that covers your face (mask, hat)
          </Text>
        </View>
        <View style={Styles.selfieDiscriptionView}>
          <DontWearAnything style={{height: 48, width: 48}} />
          <Text style={Styles.selfieDiscriptionText}>
            Take off your spectacles/ glasses to avoid glare{' '}
          </Text>
        </View>
        <View style={Styles.selfieDiscriptionView}>
          <WellLitLight style={{height: 48, width: 48}} />
          <View style={{justifyContent: 'center'}}>
            <Text style={Styles.selfieDiscriptionText}>
              Take the selfie in a well-lit space{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={Styles.footerView}>
        <Pressable style={Styles.footerBtn}>
          <Text style={Styles.footerBtnText}>TAKE SELFIE</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TakeSelfie;
