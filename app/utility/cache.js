import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from 'dayjs';
import logger from './logger';
const prefix = "cache";
const expiryInMinutes = 5;
const storeData = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem(prefix + key, jsonValue);
  } catch (e) {
    // saving error
    logger.log(e)
  }
};

const isExpired = (item) => {
  const now = dayjs();
  const storedTime = dayjs(item.timestamp);
  return now.diff(storedTime, "minute") > expiryInMinutes;
};

const getData = async (key) => {
  try {
    const item = await AsyncStorage.getItem(prefix + key);
    if (item == null) {
      return null;
    }
    // item previously stored
    const object = JSON.parse(item);
    console.log(object);
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return object.value;
  } catch (e) {
    // error reading value
  }
};

export default {
  storeData,
  getData,
};
