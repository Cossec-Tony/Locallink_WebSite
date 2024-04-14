<template>
  <v-app id="v-app">
    <v-app-bar>
      <v-toolbar id="v-toolbar" app>
        <v-btn
          class="hidden-lg-and-up"
          @click="sidebar = !sidebar"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div class="d-flex align-center">
          <router-link :to="{ name: 'myHome' }">
            <v-img
              class="flex-1-0 ma-2 pa-2" 
              :width="60"
              aspect-ratio="16/9"
              src="../img/icon/logoLocallink.svg"
              alt="Logo Locallink représentant une maison qui sourit"
            ></v-img>
          </router-link>
          
          <h1 class="ma-2 pa-2">Locallink</h1>
        </div>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text :to="{ name: 'a_propos' }">À propos</v-btn>
          <v-btn text :to="{ name: 'who_we_are' }">Qui sommes-nous</v-btn>
          <v-btn text :to="{ name: 'contact' }">Nous contacter</v-btn>
          <v-btn text :to="{ name: 'connecter' }">Se connecter</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" app hide-overlay hide-on-click temporary>
      <v-list>
        <v-list-item link :to="{ name: 'myHome' }">
          <v-list-item-title>Accueil</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'a_propos' }">
          <v-list-item-title>À propos</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'who_we_are' }">
          <v-list-item-title>Qui sommes-nous</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'contact' }">
          <v-list-item-title>Nous contacter</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'connecter' }">
          <v-list-item-title>Se connecter</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer>
</v-footer>


  <router-view></router-view>
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const sidebar = ref(false)


</script>

<style>

#v-toolbar {
  background-color: #0f1316;
  color: white;
}

.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0; 
    width: 100%;
    height: 100%;

}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 60%;
    }

}

</style>