import { createContext, ReactNode, useState, useEffect } from "react";
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { Redirect } from "expo-router";


WebBrowser.maybeCompleteAuthSession();

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [isUserLoading, setIsUserLoading] = useState(false)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '581026344013-kbf9olfkspp6skr9gisacf4r8aifg0dq.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri(),
    scopes: ['profile', 'email'],
  });
  
  async function signIn(){
    try {
      setIsUserLoading(true)
      await promptAsync()




    } catch (error) {

      console.log(error)
      throw error

    } finally {
      setIsUserLoading(false)
    }
  }


  async function signInWithGoogle(access_token: string){
    console.log('TOKEN DE AUTENTICAÇÃO ==>', access_token);
  }

  useEffect(() => {
    if(response?.type === 'success' && response.authentication?.accessToken){
      signInWithGoogle(response.authentication.accessToken)
    }
  }, [response])

  return(
    <AuthContext.Provider value={{
      signIn,
      isUserLoading,
      user,
    }}>
      {children}
    </AuthContext.Provider>
    
  ) 
}