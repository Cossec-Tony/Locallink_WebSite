<template>
    <v-container class="d-flex flex-column align-center justify-center" style="margin-top: 8%;   z-index: 1;">

      <v-container class="d-flex align-center justify-center">
        <h1 id="animation-text" style="color: white; font-size: 5em;">Notre équipe</h1>
      </v-container>
  
      <v-row class="d-flex justify-center">
        <v-col
          v-for="(member, index) in team"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <div class="member-container">
            <v-img
              :src="member.src"
              :width="400"
              aspect-ratio="16/9"
              cover
              :class="{ 'animated-image': animateImages, 'image-border': animateImages }"
              class="mr-16"
            ></v-img>
            <h3 id="animation-miniText" class="member-name mr-16">{{ member.name }}</h3>
            <p id="animation-miniText" class="member-role mr-16">{{ member.role }}</p>
          </div>
        </v-col>
      </v-row>
  
 
      <v-container id="animation-text" class="d-flex mt-16" style="margin-top: 50%;">
        <v-container class="d-column text-center">
          <h1 style="color: white; font-size: 5em;">Notre histoire</h1>
          <p style="color: white;"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </p>
        </v-container>
  
     
        <v-img
          src="../../img/characters.png"
          :width="500"
          aspect-ratio="16/9"
          cover
        ></v-img>
      </v-container>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const team = ref([
    { src: '../../img/Florian.png', name: 'Florian Soler', role: 'Responsable technique' },
    { src: '../../img/Thomas.png', name: 'Thomas Robson', role: 'Responsable gestion de projet' },
    { src: '../../img/Hugo.jpg', name: 'Hugo Cossec', role: 'Responsable design' }
  ]);
  
  const animateImages = ref(false);
  
  onMounted(() => {
    animateImages.value = true;
  });
  </script>
  
  <style>
  #animation-text {
    opacity: 0;
    animation: appearFromBottom 1s ease-in-out forwards;
  }
  
  @keyframes appearFromBottom {
    0% {
      opacity: 0; 
      transform: translateY(50px); 
    }
    100% {
      opacity: 1; 
      transform: translateY(0); 
    }
  }
  
  #animation-miniText {
    opacity: 0;
    animation: appearFromBottom 3s ease-in-out forwards;
  }
  
  .animated-image {
    opacity: 0;
    animation: appearFromBottom 3s ease-in-out forwards;
  }
  
  .image-border {
    border: 2px solid #ccc;
    border-radius: 8px; 
    margin: 8px; 
  }
  
  .member-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .member-name {
    color: white;
    font-weight: bold;
    text-align: center;
    margin-bottom: 4px;
  }
  
  .member-role {
    color: #ddd;
    text-align: center;
    margin-bottom: 16px;
  }
  </style>
  