<template>
    <v-container class="d-flex flex-column align-center justify-center" style="margin-top: 8%;">
      <v-img
        class="mx-auto my-4"
        src="../../img/icon/logoLocallink.svg"
        :style="{ width: '100%', maxWidth: '450px' }"
        aspect-ratio="16/9"
        alt="Logo Locallink représentant une maison qui sourit"
      ></v-img>
      <h2 style="font-size: 2.5em; color: white; text-align: center; max-width: 600px;">“Simplifier vos états des lieux, retrouver la confiance”</h2>
    </v-container>
    <v-img
      style="margin-top: -30%;"
      src="../../img/wave.svg"
      :style="{ width: '100%' }"
    ></v-img>
  
    <v-container class="black-box d-flex align-center justify-center" style="margin-top: 5%; max-width: 1400px; background-color: #21303f;">
      <v-img
        class="mr-6"
        src="../../img/icon/logoLocallink.svg"
        :style="{ width: '100%', maxWidth: '400px' }"
        aspect-ratio="16/9"
        alt="Logo Locallink représentant une maison qui sourit"
      ></v-img>
      <div class="content">
        <h3 style="font-size: 1.8em; margin-bottom: 1rem;">Une application disponible pour tous</h3>
        <p style="font-size: 1.2em; margin-bottom: 1rem;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, ipsum ac fermentum convallis, metus orci finibus ex, at laoreet nisi mauris eget turpis.
        </p>
        <v-btn color="primary" style="width: 8em; height: 3em; font-size: 1.4em;">A propos</v-btn>
      </div>
    </v-container>
  </template>
  
  <script setup>
  console.log("myHome")
  </script>
  
  <style scoped>



  .black-box {
    padding: 80px;
    color: white;
  }
  </style>
  