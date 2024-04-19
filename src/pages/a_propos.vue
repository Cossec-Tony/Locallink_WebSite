<template>
  <v-container class="d-flex flex-column align-center justify-center" style="margin-top: 5%;   z-index: 1;">
    <h2 id="animation-titre" style="color: white; font-size: 8em; text-align: center;">Qu'est-ce-que Locallink ?</h2>
  </v-container>
  
  <v-container class="d-flex align-center justify-center black-box" style="margin-top: 18%; z-index: 1;">
    <v-img
      id="imgTéléphone"
      class="mx-auto"
      src="../../img/imgLocallink1.png"
      :style="{ width: '80%', maxWidth: '300px' }"
      aspect-ratio="16/9"
      alt="Logo Locallink représentant une maison qui sourit"
    ></v-img>

    <v-container class="text-container mt-3" style="color: white; ">
      <h3 class="headline">Une Web App tout support disponible partout !</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 1%;">
          Locallink vous garantit la protection de vos données, une expérience utilisateur optimale et des fonctionnalités innovantes.
        </p>
      </div>
    </v-container>
  </v-container>


  <v-container class="d-flex align-center justify-center black-box" style="margin-top: 5%; z-index: 1;">

    <v-container class="text-container mt-6" style="color: white; ">
      <h3 class="headline">Les fonctionnalités principals</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 5%;">
          Découvrez nos fonctionnalités de création des États des lieux en simultanée ou de la réutilisation de vos État des lieux précédents.
        </p>
      </div>
    </v-container>

    <v-img
      id="imgTéléphone"
      class="mx-auto"
      src="../../img/imgLocallink1.png"
      :style="{ width: '80%', maxWidth: '300px' }"
      aspect-ratio="16/9"
      alt="Logo Locallink représentant une maison qui sourit"
    ></v-img>
  </v-container>

  <v-container class="d-flex align-center justify-center black-box" style="margin-top: 15%; margin-bottom: 5%; z-index: 1;">

    <v-container class="text-container mt-6" style="color: white;">
      <h3 class="headline">Les fonctionnalités principals</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 5%;">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, ipsum ac fermentum convallis, metus orci finibus ex, at laoreet nisi mauris eget turpis.
        </p>
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
  

@media screen and (max-width: 360px) {
    .headline {
      font-size: 2em; 
    }

    .subtitle {
      font-size: 3em;
    }

    #imgTéléphone {
      height: 60%;
    }
  }


</style>
