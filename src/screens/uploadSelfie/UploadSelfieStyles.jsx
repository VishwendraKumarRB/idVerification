import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  mainContainer:{
    justifyContent: "center",
    // marginTop:200,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
  uploadSelfieView:{
    height: 200,
    width: 200,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  uploadSelfieDiscription:{
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20.08,
    textAlign: 'center',
    color: '#222222',
  },
  footerContainer: {position: 'absolute', bottom: 40, width: '95%'},
  footerView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  privacyPolicyUnhighlightText: {
    fontFamily: 'Mulish',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'justify',
    color: '#595B5B',
    width: '98%',
  },
  footerUnSelectedBtnView: {
    borderRadius: 8,
    borderColor: '#B5B5B5',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 16,
  },

  footerButtonView: {
    borderRadius: 8,
    backgroundColor: '#FED250',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  footerButtonText: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.08,
    textAlign: 'left',
    color: '#222222',
  },
});
export default Styles;
