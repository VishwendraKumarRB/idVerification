import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const Styles = StyleSheet.create({
  mainContainerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
  warningView:{
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningHighlightedText:{
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.08,
    textAlign: 'center',
    color: '#2B2C2C',
  },warningUnHighlightedText:{
    fontFamily: 'Mulish',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'center',
    color: '#7A7A7A',
    paddingHorizontal: 25,
    marginTop: 8,
  },
  footerView: {
    position: 'absolute',
    bottom: 40,
    marginHorizontal: 8,
    width: '100%',
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
  footerSelectedBtnView: {
    borderRadius: 8,
    backgroundColor: '#FED250',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 16,
  },
  footerBtnText: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20.08,
    textAlign: 'left',
    color: '#222222',
  },
});
export default Styles;
