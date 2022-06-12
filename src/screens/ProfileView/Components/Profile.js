import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import Loading from '../../../components/Loading';
import StatusMessage from '../../../components/StatusMessage';

const windowWidth = Dimensions.get('window').width;

const Profile = () => {
  const {dataUser, status} = useSelector(state => state.user);

  if (status === 'idle') {
    return (
      <StatusMessage
        title="Informe um nickname"
        subtitle="Acesse um perfil de uma conta do GitHub."
        imageSrc={require('../../../assets/img/github.png')}
      />
    );
  }

  if (status === 'failed') {
    return (
      <StatusMessage
        title="Usuário não encontrado"
        subtitle="Verifique se o nickname está correto."
        imageSrc={require('../../../assets/img/no-avatar.png')}
      />
    );
  }

  if (status === 'succeeded' || dataUser) {
    return (
      <View style={styles.container}>
        <View style={styles.decoratedView} />
        <View style={styles.card}>
          <Image style={styles.image} source={{uri: dataUser.avatar_url}} />
          <View style={{marginLeft: 21}}>
            <Text style={styles.name}>
              {dataUser.name || '(Não informado)'}
            </Text>
            <Text style={styles.nickname}>{dataUser.login}</Text>
            <View style={styles.cardDetails}>
              <View>
                <Text style={styles.followers}>{dataUser.followers}</Text>
                <Text style={styles.followersLabel}>Seguidores</Text>
              </View>
              <View style={{marginLeft: 24}}>
                <Text style={styles.repos}>{dataUser.public_repos}</Text>
                <Text style={styles.reposLabel}>Repositórios</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  if (status === 'loading') {
    return <Loading />;
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: -24,
  },
  decoratedView: {
    backgroundColor: '#059CF5',
    height: 80,
  },
  card: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    top: -64,
    padding: 16,
    marginHorizontal: 16,
    shadowColor: '#707070',
    borderRadius: 16,
    elevation: 16,
  },
  image: {
    height: 96,
    width: 96,
    borderRadius: 48,
  },
  cardDetails: {
    flexDirection: 'row',
    marginTop: 8,
  },
  name: {
    color: '#172A3C',
    fontSize: 20,
    fontWeight: '700',
    width: windowWidth - 181,
  },
  nickname: {
    color: '#B2B9BE',
    fontSize: 16,
  },
  followers: {
    color: '#172A3C',
    fontSize: 18,
    fontWeight: '500',
  },
  followersLabel: {
    color: '#B2B9BE',
    fontSize: 12,
  },
  repos: {
    color: '#172A3C',
    fontSize: 18,
    fontWeight: '500',
  },
  reposLabel: {
    color: '#B2B9BE',
    fontSize: 12,
  },
});

export default Profile;
