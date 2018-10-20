import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

function getClient(): ApolloClient<NormalizedCacheObject> {
  const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV !== 'production',
  });
}

export function createProvider() {
  return new VueApollo({
    defaultClient: getClient(),
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
      },
    },
    errorHandler(error) {
      const style = 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;';
      window.console.log('%cError', style, error.message);
    },
  });
}

// // Manually call this when user log in
// export async function onLogin(apolloClient: any, token: any) {
//   if (typeof localStorage !== 'undefined' && token) {
//     localStorage.setItem(AUTH_TOKEN, token);
//   }

//   // restartWebsockets(apolloClient.wsClient);

//   try {
//     await apolloClient.resetStore();
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     window.console.log('%cError on cache reset (login)', 'color: orange;', e.message);
//   }
// }

// // Manually call this when user log out
// export async function onLogout(apolloClient: any) {
//   if (typeof localStorage !== 'undefined') {
//     localStorage.removeItem(AUTH_TOKEN);
//   }

//   // restartWebsockets(apolloClient.wsClient);

//   try {
//     await apolloClient.resetStore();
//   } catch (e) {
//     // eslint-disable-next-line no-console
//     window.console.log('%cError on cache reset (logout)', 'color: orange;', e.message);
//   }
// }
