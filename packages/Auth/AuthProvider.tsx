import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  ReactNode,
  FC,
} from "react";
import axios from "axios";
import { useRouter } from "next/router";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: any;
}

interface AuthContextProps extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshAccessToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    refreshToken: null,
    user: null,
  });
  const router = useRouter();

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await axios.post("/api/auth/authenticate", {
        email,
        password,
      });
      const { accessToken, refreshToken, user } = response.data;
      setAuthState({ accessToken, refreshToken, user });
      localStorage.setItem("refreshToken", refreshToken);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }, []);

  const refreshAccessToken = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post("/api/auth/refresh", { refreshToken });
      const { accessToken } = response.data;
      setAuthState((prev) => ({ ...prev, accessToken }));
    } catch (error) {
      console.error("Token refresh failed:", error);
    }
  }, []);

  const logout = useCallback(() => {
    setAuthState({ accessToken: null, refreshToken: null, user: null });
    localStorage.removeItem("refreshToken");
    router.push("/landing");
  }, [router]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    if (authState.accessToken) {
      const jwtExp = JSON.parse(atob(authState.accessToken.split(".")[1])).exp;
      const expDate = new Date(jwtExp * 1000);
      const timeout = expDate.getTime() - Date.now() - 5 * 60 * 1000;
      interval = setTimeout(refreshAccessToken, timeout);
    }
    return () => clearTimeout(interval);
  }, [authState.accessToken, refreshAccessToken]);

  return (
    <AuthContext.Provider
      value={{ ...authState, login, logout, refreshAccessToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
