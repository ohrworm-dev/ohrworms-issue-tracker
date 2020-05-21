<template>
  <div class='Home'>
    <h1>Homepage Works</h1>
    <ApolloQuery :query="require('../graphql/queries/search.gql')">
      <template v-slot="{result: {error, data}}">
        <h2 v-if="error">Please try again.</h2>
        <div v-if="data">
          <div v-for="issue in data.publicIssues" :key="issue.id">
            <h3>{{issue.title}}</h3>
            <p>{{issue.description}}</p>
          </div>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'

export default {
  name: 'Home',
  components: {
    Search
  }
}
</script>
