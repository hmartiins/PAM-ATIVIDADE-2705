import React, { 
  useEffect, 
  useState
} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView
} from 'react-native';

import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles';

export default function Register() {
  const navigation = useNavigation();
  const route = useRoute();

  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');

  useEffect(() => {
    if (route.params) {
      setNome(route.params.nome);
      setCurso(route.params.curso);
    }
  }, []);

  const handleCreate = () => {
    let formData = new FormData();
    formData.append('nome', nome);
    formData.append('curso', curso);

    api.post('', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }).then((response) => {
      Alert.alert(
        response.status == 200 ? 'Sucesso' : 'Erro',
        response.status == 200 ? 'Pessoa registrada com sucesso !' : 'Aconteceu algo, tente novamente...',
        [
          {
            text: 'Ok',
          },
        ],
      );
      navigation.navigate('Home');
    });
  };

  const handleUpdate = () => {
    const data = { nome, curso };

    api.put(`/${route.params.id}`, data).then((response) => {
      Alert.alert(
        response.status == 200 ? 'Sucesso' : 'Erro',
        response.status == 200 ? 'Pessoa Atualizada com sucesso!' : 'Aconteceu algo, tente novamente...',
        [
          {
            text: 'Ok',
          },
        ],
      );

      navigation.navigate('Home');
    });
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#e1e1e1' }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>🖊️ Cadastrar Pessoa 🖊️</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#222121"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Curso</Text>
            <TextInput
              style={styles.input}
              placeholder="Curso"
              placeholderTextColor="#222121"
              value={curso}
              onChangeText={(text) => setCurso(text)}
            />
          </View>
          <RectButton
            style={styles.button}
            onPress={() => (route.params ? handleUpdate() : handleCreate())}
          >
            <Text style={styles.buttonText}>
              {route.params ? 'Atualizar' : 'Cadastrar'}
            </Text>
          </RectButton>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
