/** @format */

import React, {createContext, useContext, useState} from 'react'

interface FakeAuthType {
    isAuthenticated: boolean
    signIn: (cb: () => void) => void
    signOut: (cb: () => void) => void
}

export interface ContextType {
    user: string | null
    signIn: (cb: () => void) => void
    signOut: (cb: () => void) => void
}

const initialContext: ContextType = {
    user: null,
    signIn: cb => {
        cb()
    },
    signOut: cb => {
        cb()
    },
}

const AuthContext = createContext(initialContext)

export const useAuth = (): ContextType => {
    return useContext(AuthContext)
}

export const AuthProvider = ({children}: {children: JSX.Element}): JSX.Element => {
    const auth = useAuthProvider()
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

const fakeAuth: FakeAuthType = {
    isAuthenticated: false,
    signIn: cb => {
        fakeAuth.isAuthenticated = true
        setTimeout(cb, 100)
    },
    signOut: cb => {
        fakeAuth.isAuthenticated = false
        setTimeout(cb, 100)
    },
}

const useAuthProvider = () => {
    const [user, setUser] = useState<null | string>(null)

    const signIn = (cb: () => void): void => {
        return fakeAuth.signIn(() => {
            setUser('user')
            cb()
        })
    }
    const signOut = (cb: () => void): void => {
        return fakeAuth.signOut(() => {
            setUser(null)
            cb()
        })
    }
    return {
        user,
        signIn,
        signOut,
    }
}
