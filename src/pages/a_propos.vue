<template>
  <v-container class="d-flex flex-column align-center justify-center" style="z-index: 1; margin-bottom: 125px;">
    <h2 id="titre1" style="color: white; font-size: 7em; text-align: center;">Qu'est-ce-que Locallink ?</h2>
  <img id="Illustration2" src="../../img/Illustration2.png" alt="" style="z-index: 1; width: 60%; height: auto; ">
  </v-container>
   
  <v-container id="block1" class="d-flex align-center justify-center black-box" style="margin-top: 1%; z-index: 1;">

    <img id="Illustration1" src="../../img/Illustration1.png" alt="" style="z-index: 1; width: 700px; height: auto; ">

    <v-container class="text-container mt-3" style="color: white; ">
      <h3 class="headline" id="titre2">Une Web App tout support disponible partout !</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 1%; font-size: 1.8em;">
          Locallink vous garantit la protection de vos données, une expérience utilisateur optimale et des fonctionnalités innovantes.
        </p>
      </div>
    </v-container>
  </v-container>


  <v-container class="d-column align-center justify-center black-box" style="margin-top: 8%; z-index: 1;">

    <v-container class="text-container mt-6" style="color: white; ">
      <h3 class="headline" id="titre3">Les fonctionnalités principals</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 5%; font-size: 1.8em;">
          Découvrez nos fonctionnalités tel que la création de vos États des lieux en simultanée ou de la réutilisation de vos État des lieux précédents en seulement quelques clicks !
        </p>
      </div>
    </v-container>

    <v-img
      id="imgTéléphone"
      class="mx-auto"
      src="../../img/Illustration3.png"
      :style="{ width: '80%', maxWidth: '800px' }"
      aspect-ratio="16/9"
      alt="Logo Locallink représentant une maison qui sourit"
    ></v-img>
  </v-container>

  <v-container class="d-flex align-center justify-center black-box" style="margin-top: 15%; margin-bottom: 5%; z-index: 1;">

    <v-container class="text-container mt-6" style="color: white;">
      <h3 class="headline">Pourquoi choisir Locallink ?</h3> 
      <div class="content">
        <p class="body-1" style="margin-bottom: 5%; font-size: 1.8em;">
          L'histoire débute par un obstacle récurrent lors des états des lieux, où seul l'une des parties, que ce soit le propriétaire ou le locataire, a véritablement accès aux détails en cours. Cette lacune nous a inspiré une solution novatrice : la création d'une application dédiée à cet impératif. 
         <br> L'objectif ? Simplifier et optimiser cette tâche fastidieuse, afin de la rendre à la fois facile et accessible à tous les intervenants. Cette application offrirait une plateforme commune où les deux parties pourraient documenter efficacement l'état du bien loué, facilitant ainsi la transparence, la communication et réduisant les litiges éventuels. En somme, elle deviendrait l'outil indispensable pour une gestion locative fluide et harmonieuse.
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

#titre1 {
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

  @media screen and (max-width: 1200px) {

  #Illustration1 {
    width: 60% !important;
  }
}

@media screen and (max-width: 1000px) {

    #titre1 {
      font-size: 3.5em !important;
    }

    .headline {
      font-size: 3.5em !important ;
    }
  }

  @media screen and (max-width: 750px) {

  #block1 {
    flex-wrap: wrap;
  }

  #titre1 {
      font-size: 2.5em !important;
    }

  #titre2 {
    font-size: 2em !important;
  }

  #titre3 {
    font-size: 1.5em !important;
  }

}

@media screen and (max-width: 360px) {
    .headline {
      font-size: 2em; 
    }

    .subtitle {
      font-size: 3em;
    }

  }

@media screen and (max-width: 500px) {
    #animation-titre {
      font-size: 1.7em !important; 
    }

    #titre2 {
    font-size: 1.5em !important;
  }

  #titre3 {
    font-size: 1.5em !important;
  }
  }




</style>
