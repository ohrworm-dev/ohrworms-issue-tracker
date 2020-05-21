import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const apolloProvider = new VueApollo({
  defaultClient: new ApolloClient ({
    uri: 'https://ohrworms-todo-app.herokuapp.com/v1/graphql'
  })
})
Vue.use(VueApollo)
new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
