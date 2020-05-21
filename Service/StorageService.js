import { AsyncStorage } from 'react-native';

export default {
  _removeData: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
    }
  },

  _storeData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
    }
  },

  _retrieveData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (error) {
      return null;
    }
  },
};