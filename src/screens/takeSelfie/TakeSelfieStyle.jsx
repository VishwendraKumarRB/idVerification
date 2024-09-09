import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  selfieDiscriptionView: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: 24,
    marginRight: 24,
    paddingHorizontal: 10,
    // width: Dimensions.get('screen').width,
  },
  selfieDiscriptionText: {
    fontFamily: 'Mulish',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'left',
    color: '#595B5B',
    marginLeft: 16,
    paddingRight: 20,
    paddingVertical: 2,
    justifyContent: 'center',
  },
  footerView: {
    position: 'absolute',
    bottom: 40,
    marginRight: 8,
    width: '100%',
  },
  footerBtn: {
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
