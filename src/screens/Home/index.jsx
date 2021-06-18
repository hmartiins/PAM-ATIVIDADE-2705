import React, { 
  useEffect, 
  useState
} from 'react';
import { View, Text, FlatList, Alert } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  const [pessoas, setPessoas] = useState();

  const data = api.get('')
    .then((response) => setPessoas(response.data));

  useEffect(() => {
    return navigation.addListener('focus', () => {
      data;
    });
  }, [navigation]);

  function handleDelete(idPessoa) {
    Alert.alert(
      'Confirme 🤔',
      'Deseja mesmo apagar o registro dessa pessoa ?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Apagar',
          onPress: () => {
            api.delete(`/${idPessoa}`)
              .then(() => getData);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>📌 Pessoas Cadastradas 📌</Text>

      <View style={styles.pessoasContainer}>
        <FlatList
          data={pessoas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.pessoaCard}>
              <View>
                <Text style={styles.nome}>
                  {item.nome}
                </Text>
                <Text style={styles.curso}>
                  {item.curso}
                </Text>
              </View>
              <View style={styles.actions}>
                <RectButton style={styles.buttons}>
                  <Feather
                    name="edit"
                    size={20}
                    color="#3d3d3d"
                    onPress={() => {
                      navigation.navigate('Register', {
                        id: item.id,
                        nome: item.nome,
                        curso: item.curso,
                      });
                    }}
                  />
                </RectButton>
                <RectButton
                  style={styles.buttons}
                  onPress={() => handleDelete(item.id)}
                >
                  <Feather name="trash" size={20} color="#ac3232" />
                </RectButton>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.titleHeader}>Adicionar pessoa</Text>
        <RectButton
          style={styles.buttonHeader}
          onPress={() => navigation.navigate('Register')}
        >
          <Feather name="user-plus" size={25} color="black" />
        </RectButton>
      </View>
    </SafeAreaView>
  );
};
