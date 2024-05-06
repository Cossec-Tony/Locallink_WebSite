<template>

  <v-container style="z-index: 1;">

    <v-container class="d-flex align-center justify-center">
      <h1 id="titreNousContacter" style="color: white; font-size: 5em; text-align: center;">Nous contacter</h1>
    </v-container>

    <v-container class="d-flex align-center justify-center">
      <h2 id="email" style="color: white; font-size: 2em; text-align: center;"> <a href="mailto:locallink-team@protonmail.com">locallink-team@protonmail.com</a></h2>
    </v-container>

    <v-container class="d-flex align-center justify-center">
      <h1 id="titreSuivezNous" style="color: white; font-size: 4em; text-align: center;">Suivez-nous !</h1>
    </v-container>

    <v-container class="d-flex align-center justify-center">
    <a href="https://www.instagram.com/locallink_fr/" class="mr-8">
    <img src="/img/logoIntagram.png" alt="lien vers le compte Locallink Instagram" style="width: 80px;" height="auto">
    </a>

    <a href="https://twitter.com/Locallink_fr">
    <img src="/img/logoX.png" alt="lien vers le compte Locallink X" style="width: 80px;" height="auto">
    </a>
    </v-container>
    
    <!-- <v-container>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :counter="10"
                :rules="nameRules"
                label="Nom Prenom"
                hide-details
                required
                style="background-color: white;"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="8">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                hide-details
                required
                style="background-color: white;"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="8">
              <v-text-field
                v-model="subject"
                label="Objet"
                hide-details
                required
                style="background-color: white;"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-textarea
                v-model="message"
                label="Message"
                hide-details
                rows="5"
                required
                style="background-color: white;"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>

    <v-container class="d-flex align-center justify-center">
      <button class="blob-btn" @click="submitForm" :class="{ 'loading': loading }">
        <template v-if="!loading">
          <span class="btn-text">Submit</span>
          <span class="blob-btn__inner">
            <span class="blob-btn__blobs">
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
              <span class="blob-btn__blob"></span>
            </span>
          </span>
        </template>
        <template v-if="loading">
          <div class="blob-btn">
            <div class="loader"></div>
          </div>
        </template>
      </button>
  </v-container>
    <br/> -->
  </v-container>
</template>

<script setup>

import { ref } from 'vue';

const loading = ref(false);

const submission = ref(false);

const submitForm = () => {
  loading.value = true;
  // Simulez une action asynchrone, par exemple une requête HTTP
  setTimeout(() => {
    // Réinitialisez l'état de chargement après une courte période
    loading.value = false;
    submission.value = true;
    console.log('Formulaire soumis');
  }, 2000); // Changez la durée selon vos besoins
};

</script>

<style>


.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #e5e9e8;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@media screen and (max-width: 400px) {
    #titreNousContacter {
      font-size: 3em !important;
    }


  #email {
      font-size: 1.2em !important;
    }

  #titreSuivezNous {
      font-size: 2em !important;
    }
} 

</style>
