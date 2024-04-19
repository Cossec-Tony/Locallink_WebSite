<template>
  <v-container class="d-flex flex-column align-center justify-center" style="margin-top: 8%;   z-index: 1;">
    <v-container class="d-flex align-center justify-center">
      <h1 style="color: white; font-size: 5em;">Se connecter</h1>
    </v-container>
    <v-container>
      <v-form v-model="valid">
        <v-container>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="firstname"
                :counter="10"
                :rules="nameRules"
                label="Nom d'utilisateur"
                hide-details
                required
                style="background-color: white;"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="d-flex align-center justify-center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="subject"
                label="Mot de passe"
                hide-details
                required
                style="background-color: white;"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-container>
    <v-container class="d-flex align-center justify-center">
      <button class="blob-btn" @click="submitForm">Se connecter
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const valid = ref(false);
const firstname = ref('');
const subject = ref('');

const nameRules = [
  (v) => !!v || 'Le nom d\'utilisateur est requis',
];
const submitForm = () => {
  // Méthode de soumission du formulaire
};
</script>

