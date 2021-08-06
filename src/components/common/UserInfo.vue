<template>
  <v-menu
      top
      v-model="menu"
      :close-on-content-click="false"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
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
              <span class="black--text headline login-info">{{getInicials(userData.username)}}</span>
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
// import { mapState } from "vuex"
export default {
    data() {
        return {
            menu: false,
            userData : {
              username: 'Guilhermy Henrique',
              email: 'guilhermy.1993@gmail.com'
            }
        }
    },
    computed: {
        // ...mapState({
        //     userData: (state) => state.userData.userData
        // })
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

<style scoped>
button.user-info {
  background-color: #5e499a00 !important;
  font-size: 1.375rem !important;
}
.v-application .headline.login-info {
  font-size: 1.2rem !important;
}
</style>