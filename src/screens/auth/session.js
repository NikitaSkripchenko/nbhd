import * as actionTypes from "../../constants/actionTypes"
import * as endpoints from "../../constants/apiEndpoints"
import { AsyncStorage } from "react-native";
import { getJSON } from "../../api/api";

export const signIn = ({ phone, password }) => {
  return getJSON(endpoints.USERS_SIGNIN, { phone, password });
};

export const signUp = ({ phone, name, password }) => {
  return getJSON(endpoints.USERS_SIGNUP, { phone, name, password });

};

export const signOut = (token) => {
  AsyncStorage.removeItem('user');
  return getJSON(endpoints.USERS_SIGNOUT, { token });
};