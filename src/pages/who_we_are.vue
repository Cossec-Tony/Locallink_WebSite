<template>
    <v-container class="d-flex flex-column align-center justify-center" style="margin-top: 8%;   z-index: 1;">

      <v-container class="d-flex align-center justify-center">
        <h1 id="animation-text" style="color: white; font-size: 5em; text-align: center;">Notre équipe</h1>
      </v-container>
  
      <v-row class="d-flex justify-center align-center">
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
  
 
      <v-container id="animation-text" class="d-flex" style="margin-top: 14%;">
        <v-container class="d-column text-center">
          <h1 style="color: white; font-size: 5em;">Notre histoire</h1>
          <p style="color: white; font-size: 1.5em;"> 
            Après que Florian, étudiant à l'ENSSAT de Lannion, a eu l'idée, il a vite réalisé que cette tâche était trop grande pour le faire seul. Il a alors sollicité l'aide de Thomas, un ami de sa classe, mais ils ont vite compris qu'ils avaient besoin d'une équipe plus large pour faire décoller le projet. En quête de personnes partageant leur intérêt, ils se sont tournés vers le programme régional de sensibilisation à l'entrepreneuriat "Fabrik ta pépite" 3ème édition en Bretagne. C'est là qu'ils ont rencontré trois étudiants de première année en BUT MMI à l'IUT de Lannion, qui ont pris en charge le design du prototype, la communication vidéo et une part du marketing. L'équipe de Locallink a fini par remporter le deuxième prix parmi 34 équipes participantes, pour son prototype numérique. Malgré le départ de deux membres du projet par la suite, Hugo Cossec est resté pour continuer à travailler sur le design. Aujourd'hui, avec passion et dévouement, nous continuons à développer ce projet dans le but de créer une application utile et pratique pour tous.
          </p>
        </v-container>
  
     

      </v-container>
    </v-container>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const team = ref([
    { src: '/img/Florian.png', name: 'Florian Soler', role: 'Responsable technique' },
    { src: '/img/Thomas.png', name: 'Thomas Robson', role: 'Responsable gestion de projet' },
    { src: '/img/Hugo.jpg', name: 'Hugo Cossec', role: 'Responsable design' }
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

  @media screen and (max-width: 840px) {
    #imgCharacters {
     display: none;
    }
  } 
  </style>
  