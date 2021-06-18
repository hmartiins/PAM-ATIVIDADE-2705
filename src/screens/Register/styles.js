import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 120,
    backgroundColor: '#e1e1e1',
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a8a8a8',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#928484',
    padding: 16,
    borderRadius: 10,
    marginBottom: 4,
    fontSize: 18,
    color: '#d9d9d9',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#3ad6d1',
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontStyle: 'normal',
    color: 'black'
  }
});

export default styles;
