import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import Styles from './idVerificationStyles';
import IDProof from "../assets/images/ID Proof.svg"
import DrivingLicence from "../assets/images/Driving License.svg"
const IdVerification = () => {
  const description = {
    dis: 'To comply with the Indian Government Regulations, we must verify your Driving Licence and a Government issue ID.',
  };
  const [selectedCountries, setSelectedCountries] = useState("");
  return (
    <View style={Styles.mainContainerIdVerification}>
      <View>
        <Text style={Styles.idVerifyText}>We need to verify your id</Text>
        <Text style={Styles.idVerifyDescription}>{description.dis}</Text>
      </View>
      <View style={{marginTop: 40}}>
        <Text style={Styles.selectedCountriesTitleText}>
          Select the country where your Driving Licence was issued
        </Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Pressable
              onPress={() => {
                setSelectedCountries("India");
              }}>
              <View
                style={
                  selectedCountries==="India"
                    ? Styles.selectedCountryOuterCheckbox
                    : Styles.unSelectedCountryOuterCheckbox
                }>
                <View
                  style={
                    selectedCountries==="India"
                      ? Styles.selectedCountryInnerCheckbox
                      : Styles.unSelectedCountryInnerCheckbox
                  }></View>
              </View>
            </Pressable>
            <Text
              style={
                selectedCountries==="India"
                  ? Styles.selectedCountriesText
                  : Styles.unSelectedCountriesText
              }>
              India
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 55}}>
            <Pressable
              onPress={() => {
                setSelectedCountries("Other");
              }}>
              <View
                style={
                  selectedCountries==="Other"
                    ? Styles.selectedCountryOuterCheckbox
                    : Styles.unSelectedCountryOuterCheckbox
                }>
                <View
                  style={
                    selectedCountries==="Other"
                      ? Styles.selectedCountryInnerCheckbox
                      : Styles.unSelectedCountryInnerCheckbox
                  }></View>
              </View>
            </Pressable>
            <Text
              style={
                selectedCountries==="Other"
                  ? Styles.selectedCountriesText
                  : Styles.unSelectedCountriesText
              }>
              Other
            </Text>
          </View>
        </View>
      </View>
      <View style={Styles.idProofsMainContainerView}>
        <View style={Styles.idProofView}>
          <IDProof style={Styles.idProofsIcons}></IDProof>
          <View style={{marginLeft: 12}}>
            <Text style={Styles.idProofsTitle}>ID proof</Text>
            <Text style={Styles.idProofsDescription}>Aadhaar</Text>
          </View>
        </View>
        <View style={Styles.drivingLicenceView}>
          <DrivingLicence style={Styles.idProofsIcons}></DrivingLicence>
          <View style={{marginLeft: 12}}>
            <Text style={Styles.idProofsTitle}>Driving Licence</Text>
            <Text style={Styles.idProofsDescription}>
              Learner's licence is not acceptable
            </Text>
          </View>
        </View>
      </View>
      <Text style={Styles.timeTakenUnhighlightText}>
        We usually take
        <Text style={Styles.timeTakenHighlightText}> 4 minutes</Text> to
        complete the process
      </Text>
      <View style={Styles.footerContainer}>
        <View style={Styles.footerView}>
          <View style={Styles.footerIcon}></View>
          <Text style={Styles.privacyPolicyUnhighlightText}>
            We take our user's privacy very seriously. Your data is secure with
            us. Check
            <Text style={Styles.privacyPolicyHighlightText}>
              {' '}
              Privacy Policy
            </Text>{' '}
            to know more.
          </Text>
        </View>
        <Pressable style={Styles.footerButtonView}>
          <Text style={Styles.footerButtonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default IdVerification;

