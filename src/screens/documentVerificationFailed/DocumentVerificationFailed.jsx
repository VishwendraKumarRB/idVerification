import { Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import VerificationFailed from '../../assets/images/verificationFailed.svg';
import Styles from './DocumentVerificationFailedStyle';
const DocumentVerificationFailed = () => {
  const description = {
    dis: 'This might be a technical glitch or an internet issue. Please re-upload your document or try using an alternative method.',
  };
  const [retryBtn, setRetryBtn] = useState(true);
  return (
    <View
      style={Styles.mainContainerView}>
      <View
        style={Styles.warningView}>
        <VerificationFailed style={{width: 500, height: 279}} />
        <Text
          style={Styles.warningHighlightedText}>
          Oops! Something went wrong
        </Text>
        <Text
          style={Styles.warningUnHighlightedText}>
          {description.dis}
        </Text>
      </View>
      <View style={Styles.footerView}>
        <Pressable
          onPress={() => {
            setRetryBtn(false);
          }}
          style={Styles.footerSelectedBtnView}>
          <Text style={Styles.footerBtnText}>
            {retryBtn ? <Text>RETRY DIGILOCKER</Text> : <Text>RETRY</Text>}
          </Text>
        </Pressable>
        <Pressable style={Styles.footerUnSelectedBtnView}>
          <Text style={Styles.footerBtnText}>
            {retryBtn ? (
              <Text>ENTER AADHAAR N0.</Text>
            ) : (
              <Text>UPLOAD MANUALLY</Text>
            )}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DocumentVerificationFailed;
