<template>
  <v-menu
      v-model="menu"
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          color="primary"
          class="user-info"
          v-bind="attrs"
          v-on="on"
        >
          {{getInicials(userData.username)}}
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar color="primary">
              <span class="black--text headline">{{getInicials(userData.username)}}</span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{userData.username}}</v-list-item-title>
              <v-list-item-subtitle>{{userData.email}}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                @click="menu = false"
              >
                <v-icon>fa-times</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list class="font-weight-black">
          <v-list-item  @click="logout">
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
</template>

<script>
import { mapState } from "vuex"
export default {
    data() {
        return {
            menu: false
        }
    },
    computed: {
        ...mapState({
            userData: (state) => state.userData.userData
        })
    },
    methods: {
        getInicials(nome){
            let names =  nome.split(' ')
            if(names.length>1) {
                return names[0].substr(0,1) + names[1].substr(0,1)
            } else {
                return names[0].substr(0,2)
            }
        },
        logout() {
            localStorage.clear()
            this.$router.push("/login").catch(()=>{})
        }
    }
}
</script>

<style>
button.user-info {
    height: 22px !important;
    margin-top: 10px !important;
    font-size: large !important;
}
</style>