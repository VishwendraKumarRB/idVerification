import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Setting from '../../assets/images/Settings.svg';
import Previous from '../../assets/images/Previous.svg';
import EditMyProfile from '../../assets/images/EditMyProfile.svg';
import PendingDocumentUpload from '../../assets/images/Logged in - Document Upload Pending.svg';
import Styles from './UserLoginStyle';
const UserLogin = () => {
  const backendData = {
    name: 'Vishwendra Kumar',
    uploadIdDescription: 'Upload your documents and enjoy our Services',
    phoneNumber: '+91 9535351016',
    email: 'vishwendra.royalbrothers@gmail.com',
  };
  const [editEmail, setEditEmail] = useState(true);
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#FED250', flex: 2}}>
        <View style={Styles.headerIconContainer}>
          <View style={Styles.headerIconView}>
            <Previous style={{height: 20, width: 20}} />
          </View>
          <View style={Styles.headerIconView}>
            <Setting style={{height: 24, width: 24}} />
          </View>
        </View>
        <View style={Styles.usersImageView}></View>
      </View>
      <View style={{flex: 12, marginHorizontal: 20}}>
        <Text style={Styles.usersNameView}>{backendData.name}</Text>
        <View style={{marginTop: 16}}>
          <Text style={Styles.usersDetailsTitle}>Phone Number</Text>
          <TextInput
            style={Styles.usersDetailsInput}
            placeholder="Enter Mobile number"
            value={backendData.phoneNumber}
          />
        </View>
        <View style={{marginTop: 16}}>
          <Text style={Styles.usersDetailsTitle}>Email Id</Text>
          <View style={Styles.usersDetailsInputView}>
            <TextInput
              style={{paddingHorizontal: 20, flex: 1}}
              placeholder="Enter email id"
              value={backendData.email}
            />
            <Pressable onPress={() => setEditEmail(false)}>
              {editEmail ? (
                <EditMyProfile style={Styles.usersDetailsEditIcon} />
              ) : (
                <Text style={Styles.usersDetailsSaveBtn}>SAVE</Text>
              )}
            </Pressable>
          </View>
        </View>

        <Text style={[Styles.usersDetailsTitle, {marginTop: 16}]}>
          Your Documents
        </Text>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <PendingDocumentUpload style={{height: 156, width: 208}} />
          <Text style={Styles.usersDocumentsDescription}>
            {backendData.uploadIdDescription}
          </Text>
        </View>
        <View style={Styles.footerView}>
          <Pressable style={Styles.footerBtn}>
            <Text style={Styles.footerBtnText}>GET VERIFIED</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UserLogin;

const styles = StyleSheet.create({});
