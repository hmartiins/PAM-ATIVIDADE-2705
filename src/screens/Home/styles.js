import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    backgroundColor: '#e1e1e1'
  },
  buttonHeader: {
    marginHorizontal: 8,
    padding: 12,
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 30
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 16,
    color: 'black'
  },
  pessoasContainer: {
    flex: 1,
    width: '100%',
  },
  pessoaCard: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    marginVertical: 8,
    padding: 12,
    flexDirection: 'row',
  },
  nome: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  curso: {
    marginTop:4,
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#8f8f8f'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttons: {
    paddingHorizontal: 4
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
});

export default styles;
