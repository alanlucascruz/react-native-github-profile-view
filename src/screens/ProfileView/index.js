import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {getUserRequest} from '../../store/reducers/userSlice';
import Profile from './Components/Profile';
import Search from './Components/Search';
import Repos from './Components/Repos';

export const ProfileView = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserRequest('loading'));
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <Profile />
      <Repos />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default ProfileView;
