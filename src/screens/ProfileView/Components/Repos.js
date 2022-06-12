import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import StatusMessage from '../../../components/StatusMessage';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FormatDate} from '../../../core';

const ListEmptyComponent = () => (
  <StatusMessage
    title="Sem repositórios"
    subtitle={'Não há repositórios disponíveis para essa conta.'}
    imageSrc={require('../../../assets/img/no-data.png')}
  />
);

const Repos = () => {
  const {dataRepos, status} = useSelector(state => state.user);

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.iconContainer}>
            <MIcon name="code" size={16} color="#B2B9BE" />
            <Text style={styles.description}>{item.language}</Text>
          </View>
          <View style={styles.iconContainer}>
            <MCIcon name="calendar-month" size={14} color="#B2B9BE" />
            <Text style={styles.description}>
              Alterado em {FormatDate.formatDate(item.updated_at)}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  if (status === 'idle' || status === 'failed' || status === 'loading') {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repositórios</Text>
      <FlatList
        disableScrollViewPanResponder={true}
        data={dataRepos}
        // style={{paddingTop: 4}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#172A3C',
    fontSize: 24,
    fontWeight: '700',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: '#808080',
    elevation: 6,
  },
  name: {
    color: '#172A3C',
    fontSize: 16,
    fontWeight: '700',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  description: {
    color: '#B2B9BE',
    fontSize: 14,
    marginLeft: 4,
  },
});

export default Repos;
