import { createContext, ReactNode, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from  'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { api } from '../services/api';

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

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [isUserLoading, setIsUserLoading] = useState(false);

    console.log(AuthSession.makeRedirectUri({ useProxy: true }));

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '69419222022-u0fpdkkt28oi8tiuhbvalqpbhjprf0fi.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        scopes: ['profile', 'email']
    })

    async function signIn() {
        try { 
            setIsUserLoading(true);
            console.log('Vamos logar!');
            await promptAsync();
        } catch(e) {
            console.log(e);
            throw e;
        } finally {
            setIsUserLoading(false);
        }
    }

    async function signInWithGoogle(access_token: string) {
        console.log("TOKEN DE AUTENTICAÇÃO ===>", access_token);
        try {
            setIsUserLoading(true);
            const tokenResponse = await api.post('/users', { access_token });
            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;

            const userInfoResponse = await api.get('/me');
            setUser(userInfoResponse.data.user);

        } catch(error) {
            console.log(error);
            throw error;
        } finally {
            setIsUserLoading(false);
        }
    }

    useEffect(() => {
        if (response?.type === 'success' && response.authentication?.accessToken) {
            signInWithGoogle(response.authentication.accessToken);
        }
    }, [response]);

    return (
        <AuthContext.Provider value={{
            signIn,
            isUserLoading,
            user,
            // user: {
            //     name: 'Paulo Henrique',
            //     avatarUrl: 'https://github.com/pahique.png'
            // }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
