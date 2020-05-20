<template>
  <div class='Home'>
    <h1>Homepage Works</h1>
    <ApolloQuery :query="require('../graphql/queries/allTodos.gql')">
      <template v-slot="{result: {error, data}}">
        <h2 v-if="error">Please try again.</h2>
        <div v-if="data">
          <p v-for="todo in data.todos" :key="todo.id">
            {{todo.title}}
          </p>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
