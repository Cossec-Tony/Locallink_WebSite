<template>
  <v-app>
    <v-app-bar>
      <v-toolbar app>
        <span class="hidden-sm-and-up">
          <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
        </span>
        <v-toolbar-title>
          <h1>Mon Site</h1>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn text :to="{ name: 'myHome' }">Acceuil</v-btn>
          <v-btn text :to="{ name: 'a_propos' }">À propos</v-btn>
          <v-btn text :to="{ name: 'who_we_are' }">Qui sommes-nous</v-btn>
          <v-btn text :to="{ name: 'contact' }">Nous contacter</v-btn>
          <v-btn text :to="{ name: 'connecter' }">Se connecter</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <!-- <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-item link :to="{ name: 'about' }">
          <v-list-item-title>À propos</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'who-we-are' }">
          <v-list-item-title>Qui sommes-nous</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'contact' }">
          <v-list-item-title>Nous contacter</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'Se connecter' }">
          <v-list-item-title>Se connecter</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
 
    <router-view></router-view>

     
  </v-app>
</template>

<script setup>
import { ref } from 'vue'


const sidebar = ref(false)


</script>