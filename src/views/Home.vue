<template>
  <div>
    <el-button type="primary" @click="add">add db record</el-button>
    <el-button type="primary" @click="view">view</el-button>
  </div>
</template>

<script>
import db from '../config/firebase'

export default {
  name: 'Home',
  components: {
  },
  mounted() {
    console.log(db)
  },
  methods: {
    add() {
      db.collection('users')
        .add({
          first: 'Alan',
          middle: 'Mathison',
          last: 'Turing',
          born: 1912
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function(error) {
          console.error('Error adding document: ', error)
        })
    },
    view() {
      db.collection('users')
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot)
        })
    }
  }
}
</script>
