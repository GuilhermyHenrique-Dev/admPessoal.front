<template>
    <v-main class="navigation">
        <v-bottom-navigation
            v-model="value"
            :background-color="color"
            dark
            shift
        >
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click="$router.push('/')"
                >
                  <span>Home</span>
                  <v-icon small>fas fa-home</v-icon>
                </v-btn>
              </template>
              Home
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click="$router.push('/configuracao')"
                >
                  <span>Configuração</span>
                  <v-icon small>fas fa-cog</v-icon>
                </v-btn>
              </template>
              Configuração
            </v-tooltip>

            <v-spacer></v-spacer>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click="$router.push('/dividas')"
                >
                  <span>Dividas</span>
                  <v-icon>fas fa-file-invoice-dollar</v-icon>
                </v-btn>
              </template>
              Dividas
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click="$router.push('/financas')"
                >
                  <span>Finaças</span>
                  <v-icon>fas fa-dollar-sign</v-icon>
                </v-btn>
              </template>
              Finanças
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click="$router.push('/investimentos')"
                >
                  <span>Investimentos</span>
                  <v-icon>fas fa-hand-holding-usd</v-icon>
                </v-btn>
              </template>
              Investimentos
            </v-tooltip>

            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn 
                  v-bind="attrs"
                  v-on="on"
                  @click="$router.push('/ativos')"
                >
                  <span>Ativos</span>
                  <v-icon>fas fa-coins</v-icon>
                </v-btn>
              </template>
              Ativos
            </v-tooltip>

            <v-spacer></v-spacer>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <div style="height: 100%;" v-bind="attrs" v-on="on">
                  <calculator/>
                </div>
              </template>
              Calculadora
            </v-tooltip>

            <UserInfo/>
        </v-bottom-navigation>
    </v-main>
</template>

<script>
import Calculator from './Calculator.vue'
import UserInfo from './UserInfo.vue'
export default {
  components: {
    UserInfo,
    Calculator
  },
  data: () => ({ value: 0 }),
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'primary'
        case 2: return 'error'
        case 3: return 'teal'
        case 4: return 'brown'
        case 5: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
}
</script>

<style>
.navigation {
  position: fixed;
  bottom: 20px;
  left: 10px;
  right: 10px;
}
</style>