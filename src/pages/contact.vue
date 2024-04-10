<template>
  <v-container class="d-flex flex-column align-start justify-center" style="margin-top: 8%;">

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
    <button class="blob-btn" @click="submitForm">
      Submit
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
    <br/>
  </v-container>
</template>

<script setup>


const submitForm = () => {
  // Ajoutez ici la logique pour soumettre le formulaire via un serveur
  console.log('Formulaire soumis');
};

</script>

<style>
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
