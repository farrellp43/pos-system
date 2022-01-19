import { Cookies } from "react-cookie";
import defaultAxios, { AxiosError } from "axios";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { tokenKey } from "../constants/common";
import {
  AuthState,
  CheckToken,
  LogoutResponse,
  ErrorResponse,
  LoginBody,
  LoginResponse,
} from "../constants/types";
// import * as SplashScreen from "expo-splash-screen";
// import * as Font from "expo-font";
import axios from "../services/axios";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useQueryClient } from "react-query";
// import { Alert } from "react-native";
// import Notifications from "expo-notifications";
// import registerForPushNotif from "../utils/common/registerForPushNotif";

interface IAuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthState | undefined>(undefined);

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isPreparingApp, setPreparingApp] = useState<boolean>(true);
  const [isLoading, setLoading] = useState<boolean>(false);
  const cookies = useMemo(() => new Cookies(), []);
  const queryClient = useQueryClient();

  // const deviceId = (await Notifications.getDevicePushTokenAsync()).data;

  // const handleSetDeviceId = useCallback(async () => {
  //     const deviceId = (await Notifications.getDevicePushTokenAsync()).data;
  //     try {
  //         await AsyncStorage.setItem(deviceIdKey, deviceId);
  //     } catch (error) {
  //         throw error;
  //     }
  // }, [AsyncStorage.setItem]);
  // console.log(deviceId);

  async function loadResourcesAndDataAsync() {
    try {
      const token = await cookies.get(tokenKey);
      await checkToken(token);
    } catch (e) {
      console.warn(e);
    } finally {
      setPreparingApp(false);
    }
  }

  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  const handleSetToken = useCallback(
    async (token) => {
      try {
        await cookies.set(tokenKey, token);
      } catch (error) {
        throw error;
      }
    },
    [cookies]
  );

  const handleRemoveToken = useCallback(async () => {
    try {
      await cookies.remove(tokenKey);
    } catch (error) {
      throw error;
    }
  }, [cookies]);

  const handleErrorResponse = useCallback((error) => {
    if (defaultAxios.isAxiosError(error)) {
      const serverError = error as AxiosError<ErrorResponse>;
      if (serverError && serverError.response) {
        console.log(`serverError`, serverError);
        if (serverError.response.data.data) {
          // Alert.alert("", `${serverError.response.data.data}`
          console.log("", `${serverError.response.data.data}`, [
            { text: "OK" },
          ]);
        }

        if (serverError.response.status === 401) {
          // Alert.alert("", `Maaf, akun Anda tidak terautentikasi.`,
          console.log("", `Maaf, akun Anda tidak terautentikasi.`, [
            { text: "OK" },
          ]);
        }
      } else {
        // Alert.alert("", `Terjadi kesalahan! Silahkan coba lagi.`,
        console.log("", `Terjadi kesalahan! Silahkan coba lagi.`, [
          { text: "OK" },
        ]);
      }
    }
  }, []);

  const checkToken = useCallback(
    async (token: string | null) => {
      try {
        const { data } = await axios.get<CheckToken>(
          `/api/check-token?token=${token}`
        );
        console.log("checked");
        if (token && data.code === 200) {
          setAuthenticated(true);
        }
      } catch (error) {
        handleErrorResponse(error);
        setAuthenticated(false);
        handleRemoveToken();
        queryClient.clear();
      }
    },
    [handleErrorResponse, handleRemoveToken, queryClient]
  );

  const login = useCallback(
    async (values: LoginBody) => {
      setLoading(true);
      try {
        const { data } = await axios.post<LoginResponse>("/api/login", {
          ...values,
        });
        console.log(`data`, data);
        if (data.code === 200) {
          setAuthenticated(true);
          handleSetToken(data.data);
        }
        setLoading(false);
      } catch (error) {
        handleErrorResponse(error);
        setLoading(false);
      }
    },
    [handleErrorResponse, handleSetToken]
  );

  const logout = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get<LogoutResponse>("/api/logout");
      if (data.code === 200) {
        setAuthenticated(false);
        handleRemoveToken();
        queryClient.clear();
      }
      setLoading(false);
    } catch (error) {
      handleErrorResponse(error);
      setLoading(false);
    }
  }, [handleErrorResponse, handleRemoveToken, queryClient]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      checkToken,
      login,
      logout,
    }),
    [isAuthenticated, isLoading, checkToken, login, logout]
  );

  if (isPreparingApp) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };
