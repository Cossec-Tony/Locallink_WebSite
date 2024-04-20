<template>
  <v-container class="d-flex flex-column align-center justify-center" style="margin-top: 20%;   z-index: 1;">
    <h2 id="animation-titre" class="headline" style="color: white; text-align: center;">Simplifier vos états des lieux, retrouver la confiance.</h2>
  </v-container>

  <v-container class="d-flex align-center justify-center black-box" style="margin-top: 35%; z-index: 1;">
    <v-img
      id="imgTéléphone"
      class="mx-auto"
      src="../../img/imgLocallink1.png"
      :style="{ width: '80%', maxWidth: '300px' }"
      aspect-ratio="16/9"
      alt="Logo Locallink représentant une maison qui sourit"
    ></v-img>

    <v-container class="text-container mt-6" style="color: white; ">
      <h3 class="headline">Une application disponible pour tous</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 5%; font-size: 1.5em;">
          Que vous soyez propriétaire, locataire ou professionnel, notre application est conçue pour vous simplifier la gestion locative avec efficacité et facilité.
        </p>
        <router-link :to="{ name: 'a_propos' }">
        <button class="blob-btn" @click="submitForm">À propos
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
        </router-link>

      </div>
    </v-container>
  </v-container>

  <v-container class="d-flex align-center justify-center black-box" style="margin-top: 40%; margin-bottom: 30%; z-index: 1;">

    <v-container class="text-container mt-6" style="color: white;">
      <h3 class="headline">Une équipe à l'écoute</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 5%; font-size: 1.5em;">
          Composé de élève ingénieur de l'ENSSAT en alternance et d'un BUT Métier du multimédia et de l'internet à l'IUT de Lannion, notre équipe reste à l'écoute de VOS besoins
        </p>

      <router-link :to="{ name: 'who_we_are' }">
      
        <button class="blob-btn" @click="submitForm">Qui somme-nous ?
        <span class="blob-btn__inner">
          <span class="blob-btn__blobs">
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
            <span class="blob-btn__blob"></span>
          </span>
        </span>
      </button>
      </router-link>
      </div>
    </v-container>
  </v-container>
</template>

<script setup>
console.log("myHome")
</script>

<style scoped>


.headline {
  font-size: 4em;
  margin-bottom: 1rem;
  text-align: center;
}

.content {
  text-align: center;
}

#animation-titre {
    opacity: 0;
    animation: appearFromBottom 1s ease-in-out forwards;
  }
  
  @keyframes appearFromBottom {
    0% {
      opacity: 0; 
    }
    100% {
      opacity: 1; 
    }
  }
  

@media screen and (max-width: 715px) {
    .headline {
      font-size: 2em; 
    }

    .subtitle {
      font-size: 3em;
    }

    #imgTéléphone {
      height: 60%;
    }

    .d-flex {
      flex-wrap: wrap;
    }
  }

</style>
