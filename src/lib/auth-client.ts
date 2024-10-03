import { createAuthClient } from 'better-auth/react';

export const client = createAuthClient({
  baseURL: 'http://localhost:3000',
});

export const { signIn, signUp, useSession, signOut } = client;
