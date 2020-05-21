<template>
  <div>
    <div class="search">
      <label>search issues</label>
      <input type="text" v-model="searchText">
    </div>
    <div
      v-for="issue in issues"
      :key="issue.id"
      :issue="issue">
    </div>

    <div class="displayedIssues">
      <h2>Issues</h2>
      <hr/>
      <ApolloQuery :query="require('../graphql/queries/showIssues.gql')">
        <template v-slot="{result: {error, data}}">
          <h2 v-if="error">Please try again.</h2>
          <div v-if="data">
            <div v-for="issue in data.issues" :key="issue.id">
              <h3>{{issue.title}}</h3>
              <p>{{issue.description}}</p>
            </div>
          </div>
        </template>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import { search } from '../graphql/queries/search.gql'

export default {
  name: 'Search',
  data () {
    return {
      searchText: ''
    }
  },
}
</script>