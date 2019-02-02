<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort projects by person's name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat class="pa3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "2019-03-10",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rerum iure, maiores sed enim eveniet incidunt quidem magni, minima asperiores sequi ea. Quibusdam corrupti numquam similique alias fuga neque eius."
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "2019-01-24",
          status: "complete",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laborum sunt dolor sapiente architecto, esse libero iure deleniti sit illum reiciendis in reprehenderit autem dignissimos similique, quis eligendi neque velit?"
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "2018-12-20",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatum voluptas voluptate reprehenderit eos? Quam, nostrum aspernatur? Quod optio reprehenderit nostrum nisi dolore dolorum iure voluptatem! Deleniti nobis sequi ut."
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "2018-11-15",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem fugiat saepe at accusamus est reiciendis similique nam, iusto animi perspiciatis quia esse provident dolorum? Libero dolor ratione consectetur vero doloribus?"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #1494ef;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #1494ef;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>
