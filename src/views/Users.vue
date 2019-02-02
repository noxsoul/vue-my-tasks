<template>
  <div class="Users">
    <h1 class="subheading grey--text">Users</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.id">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.profile }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      team: [
        { id: 'aa12345', name: 'A-a-ron', profile: 'Fullstack developer', avatar: '/avatar-1.jpg'},
        { id: 'ry23456', name: 'Ryu', profile: 'Graphic designer', avatar: '/avatar-2.png'},
        { id: 'ch34567', name: 'Chun Li', profile: 'Web developer', avatar: '/avatar-3.png'},
        { id: 'go45678', name: 'Gouken', profile: 'Social media maverick', avatar: '/avatar-4.png'},
        { id: 'yo56789', name: 'Yoshi', profile: 'Sales guru', avatar: '/avatar-5.jpg'}
      ]
    }
  }
}
</script>