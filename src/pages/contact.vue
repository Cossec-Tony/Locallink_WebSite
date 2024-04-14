<template>
  <v-container class="d-flex flex-column align-start justify-center" style="margin-top: 8%;   z-index: 1;">

    <v-container class="d-flex align-center justify-center">
      <h1 style="color: white; font-size: 5em;">Nous contacter</h1>
    </v-container>
    
    <v-container>
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
    <br/>
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

/* HTML: <div class="loader"></div> */
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

.blob-btn.loading {
  pointer-events: none; /* Désactive les événements de clics lorsque le bouton est en cours de chargement */
}

@keyframes l3 {to{transform: rotate(1turn)}}

.blob-btn {
  z-index: 1;
  position: relative;
  padding: 20px 150px;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #424adf;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  outline: none;
  border: none;
  transition: transform 0.2s ease; 
  cursor: pointer;
  border-radius: 30px;
}



.blob-btn:hover {
  color: #ffffff;
  border-radius: 30px;
}

.blob-btn:hover:after {
  transition: all 0.3s;
  left: 0;
  top: 0;
  border-radius: 30px;
}

.blob-btn__inner {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: #ffffff;
}

.blob-btn__blobs {
  position: relative;
  display: block;
  height: 100%;
  filter: url('#goo');
}

.blob-btn__blob {
  position: absolute;
  top: 2px; /* Ajustez selon vos besoins */
  width: 30%; /* Ajustez selon vos besoins */
  height: 100%;
  background: #424adf;
  border-radius: 100%;
  transform: translate3d(0, 150%, 0) scale(1.7);
  transition: transform 0.45s;

  @supports (filter: url('#goo')) {
    transform: translate3d(0, 150%, 0) scale(1.4);
  }

  &:nth-child(1) {
    left: 0;
    transition-delay: 0s;
  }

  &:nth-child(2) {
    left: 25%;
    transition-delay: 0.08s;
  }

  &:nth-child(3) {
    left: 50%;
    transition-delay: 0.16s;
  }

  &:nth-child(4) {
    left: 75%;
    transition-delay: 0.24s;
  }

  .blob-btn:hover & {
    transform: translateZ(0) scale(1.7);

    @supports (filter: url('#goo')) {
      transform: translateZ(0) scale(1.4);
    }
  }
}

</style>
