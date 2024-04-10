<template>
    <v-container class="d-flex flex-column align-start justify-center" style="margin-top: 8%;">
      <h1 style="color: white; font-size: 5em;">Nous contacter</h1>
  
      <v-container>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="firstname"
                  :counter="10"
                  :rules="nameRules"
                  label="Nom"
                  hide-details
                  required
                  style="background-color: white;"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :counter="10"
                  :rules="nameRules"
                  label="Prenom"
                  hide-details
                  required
                  style="background-color: white;"
                ></v-text-field>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  hide-details
                  required
                  style="background-color: white;"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" md="4">
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
  
      <v-btn
        id="contour"
        :loading="loading"
        class="mt-2"
        text="Submit"
        type="submit"
        style="max-width: 1000px; width: 20em; height: 4em;"
        block
      ></v-btn>
    </v-container>
  </template>
  
  <script setup>
  console.log("Contact page")
  </script>
  
  <style>
  #contour {
      background-color: #0b0d0f;
      border-radius: 10px;
      position: relative;
      overflow: hidden;
      z-index: 2;
      color: white;
  }
  
  #contour::before {
      content: "";
      background: linear-gradient(
          #00ccff, #d500f9
      );
      width: 100%;
      height: 100%;
      position: absolute;
      animation: rotate 4s linear infinite;
      z-index: 5px;
  }
  
  #contour::after {
      content: "";
      background: #0e1538;
      position: absolute;
      border-radius: 10px;
      inset: 5px;
  }
  
  @keyframes rotate {
      0% {
          transform: rotate(0deg);
      }
      100% {
          transform: rotate(-360deg);
      }
  }
  </style>
  