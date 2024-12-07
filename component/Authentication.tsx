'use client';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import { Amplify } from 'aws-amplify';
import outputs from '@/amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { StorageBrowser } from './Storage';

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function Authentication() {
  function createTodo() {
    client.models.Todo.create({
      content: window.prompt('Todo content'),
    });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>

          <h1>Files </h1>
          <StorageBrowser />
        </>
      )}
    </Authenticator>
  );
}
