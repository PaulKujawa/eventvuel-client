import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import Vue from 'vue';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

const uri = process.env.NODE_ENV !== 'production'
  ? 'http://localhost:4000'
  : 'https://eventvuel-server.now.sh';

function getClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: new HttpLink({ uri }),
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
