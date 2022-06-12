import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getUserRequest, setFilter} from '../../../store/reducers/userSlice';

const Search = () => {
  const [filter, onChangeFilter] = useState('');

  const {status} = useSelector(state => state.user);

  const dispatch = useDispatch();

  const isLoading = () => status === 'loading';

  const onSearch = () => {
    dispatch(setFilter(filter));
    dispatch(getUserRequest('loading'));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Informe o nickname do usuário"
        placeholderTextColor={'#B2B9BE'}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeFilter}
        value={filter}
        onSubmitEditing={onSearch}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        disabled={isLoading()}
        onPress={onSearch}>
        {isLoading() ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Icon name="search" size={28} color="#ffffff" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#059CF5',
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    borderRadius: 16,
    color: '#172A3C',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#07B0F2',
    height: 56,
    width: 56,
    borderRadius: 28,
    marginLeft: 8,
    elevation: 6,
  },
});

export default Search;
