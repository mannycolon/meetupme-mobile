import EStylesheet from 'react-native-extended-stylesheet';

const styles = EStylesheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  item: {
    marginVertical: '2%',
  },
  buttonCreate: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '10%',
  },
});

export default styles;
