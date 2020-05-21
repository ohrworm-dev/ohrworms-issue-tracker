<template>
  <div>
    <div>
      Search
      <!-- 1 -->
      <input type="text" v-model="searchTodos">
    </div>
    <link-item
      v-for="(todo, index) in allTodos"
      :key="todo.id"
      :todo="todo"
      :index="index">
    </link-item>
  </div>
</template>

<script>
  // 2
  import { ALL_TODOS_SEARCH_QUERY } from '../constants/graphql'
  import TodoItem from './TodoItem'

  export default {
    name: 'Search',
    data () {
      return {
        allTodos: [],
        searchText: ''
      }
    },
    // 3
    apollo: {
      allTodos: {
        query: ALL_TODOS_SEARCH_QUERY,
        variables () {
          return {
            searchText: this.searchText
          }
        },
        skip () {
          return !this.searchText
        }
      }
    },
    components: {
      TodoItem
    }
  }
</script>