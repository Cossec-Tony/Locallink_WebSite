<template>
  <v-app id="v-app">
    <v-app-bar>
      <v-toolbar id="v-toolbar" app>
        <v-btn
          class="hidden-lg-and-up"
          @click="sidebar = !sidebar"
        >
        <v-icon>mdi-menu</v-icon>

        </v-btn>
        <div id="logoLocallink" class="d-flex align-center">
          <router-link :to="{ name: 'myHome' }">
            <v-img
              class="flex-1-0 ma-2 pa-2"
              :width="60"
              aspect-ratio="16/9"
              src="/img/icon/logoLocallink.svg"
              alt="Menu Home"
            ></v-img>
          </router-link>
          <RouterLink :to="{ name : 'myHome' }">
            <h1 style="color: #424adf;" class="ma-2 pa-2">Locallink</h1>            
          </RouterLink>
        </div>
        
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text :to="{ name: 'a_propos' }">À propos</v-btn>
          <v-btn text :to="{ name: 'who_we_are' }">Qui sommes-nous</v-btn>
          <v-btn text :to="{ name: 'contact' }">Nous contacter</v-btn>
          <!-- <v-btn text :to="{ name: 'connecter' }">Se connecter</v-btn> -->
        </v-toolbar-items>
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" app hide-overlay hide-on-click temporary>
      <v-list>
        <v-list-item link :to="{ name: 'myHome' }">
          <v-list-item-title>Accueil</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'a_propos' }">
          <v-list-item-title>À propos</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'who_we_are' }">
          <v-list-item-title>Qui sommes-nous</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'contact' }">
          <v-list-item-title>Nous contacter</v-list-item-title>
        </v-list-item>
        <!-- <v-list-item link :to="{ name: 'connecter' }">
          <v-list-item-title>Se connecter</v-list-item-title>
        </v-list-item> -->
      </v-list>
    </v-navigation-drawer>

    <v-footer>
</v-footer>


  <router-view></router-view>

    <div class="footer" style="z-index: 1;">
  <div class="bubbles">
    <div class="bubble" style="--size:3.283778460829012rem; --distance:8.273995682244763rem; --position:80.43121961838831%; --time:3.370470516561046s; --delay:-2.4460750377075677s;"></div>
    <div class="bubble" style="--size:2.8917775001193196rem; --distance:8.454264258769582rem; --position:-1.892480833658683%; --time:2.870417823317806s; --delay:-3.8694363898657054s;"></div>
    <div class="bubble" style="--size:3.056008172581711rem; --distance:7.571228915589839rem; --position:101.36290426526402%; --time:3.556279976104421s; --delay:-2.601994631532017s;"></div>
    <div class="bubble" style="--size:3.22671020910027rem; --distance:8.977876061761204rem; --position:69.44795371340336%; --time:2.0813687087410555s; --delay:-2.561126203255737s;"></div>
    <div class="bubble" style="--size:3.7130270767886904rem; --distance:9.15367913841726rem; --position:36.78355273882992%; --time:3.4415953312360266s; --delay:-2.8423432581270194s;"></div>
    <div class="bubble" style="--size:2.846429800070382rem; --distance:9.850031890259043rem; --position:63.51703893124248%; --time:2.48611792099451s; --delay:-3.957713451098727s;"></div>
    <div class="bubble" style="--size:5.148489190934578rem; --distance:7.8185867715909385rem; --position:44.27428830609239%; --time:3.0912972813262374s; --delay:-2.4548184305462204s;"></div>
    <div class="bubble" style="--size:3.073022863441822rem; --distance:6.748615665272697rem; --position:17.187709593603337%; --time:2.869641888050805s; --delay:-3.011358944260785s;"></div>
    <div class="bubble" style="--size:2.4934683696411932rem; --distance:9.661759778304251rem; --position:38.28385025284947%; --time:3.3066616446050388s; --delay:-3.903278872741094s;"></div>
    <div class="bubble" style="--size:3.017692044104651rem; --distance:7.742406344583268rem; --position:7.135396211953164%; --time:3.9814409149202454s; --delay:-2.769434098028662s;"></div>
    <div class="bubble" style="--size:4.220709880817442rem; --distance:6.273886998189256rem; --position:97.58004171875584%; --time:3.1349176005189006s; --delay:-3.9274262276392298s;"></div>
    <div class="bubble" style="--size:3.5907802134353792rem; --distance:9.870786669090203rem; --position:98.38043362003364%; --time:2.365772524802981s; --delay:-3.155876947312736s;"></div>
    <div class="bubble" style="--size:3.153202036251672rem; --distance:8.019938162492018rem; --position:17.19668721036048%; --time:3.6277311767623384s; --delay:-3.1876739225876354s;"></div>
    <div class="bubble" style="--size:3.4877396066133333rem; --distance:8.270634812076594rem; --position:10.484445181872442%; --time:3.0775952904576176s; --delay:-2.2907439552389293s;"></div>
    <div class="bubble" style="--size:5.239738288627671rem; --distance:8.364557911980619rem; --position:87.23110357446504%; --time:2.1930097960461055s; --delay:-3.0322261546336517s;"></div>
    <div class="bubble" style="--size:2.096379882401747rem; --distance:8.369893834364031rem; --position:32.32516475439321%; --time:3.695249819707472s; --delay:-3.851082655427779s;"></div>
    <div class="bubble" style="--size:2.014227665781494rem; --distance:9.475179023878415rem; --position:18.072465784612906%; --time:2.876721765742051s; --delay:-3.456765174855402s;"></div>
    <div class="bubble" style="--size:2.6544780967758683rem; --distance:9.993914974673478rem; --position:47.41484229787173%; --time:2.6928887058432203s; --delay:-3.6501705520332406s;"></div>
    <div class="bubble" style="--size:3.9602029523135043rem; --distance:8.811978694178176rem; --position:22.085129474405363%; --time:2.3040885125074015s; --delay:-3.9822714071472305s;"></div>
    <div class="bubble" style="--size:4.724989417802013rem; --distance:8.126549828172152rem; --position:83.76957059823852%; --time:2.8347659523990463s; --delay:-2.4045807342328174s;"></div>
    <div class="bubble" style="--size:3.5005873287032445rem; --distance:7.9251184298861475rem; --position:-1.7530963025931068%; --time:2.5654285446675242s; --delay:-3.719663280805641s;"></div>
    <div class="bubble" style="--size:5.221728885270182rem; --distance:9.286314646321468rem; --position:42.28149761730227%; --time:3.389657748614331s; --delay:-2.961540852653576s;"></div>
    <div class="bubble" style="--size:3.9555668943551874rem; --distance:7.587517096965727rem; --position:86.98518380989474%; --time:3.8328433866272116s; --delay:-3.947314208169883s;"></div>
    <div class="bubble" style="--size:4.659085472309417rem; --distance:6.833049757751052rem; --position:18.34331186924404%; --time:2.1401803669951542s; --delay:-3.281758431062622s;"></div>
    <div class="bubble" style="--size:5.657469779677323rem; --distance:8.59153006822326rem; --position:72.97116848710832%; --time:3.2281152136729996s; --delay:-2.6942268466639807s;"></div>
    <div class="bubble" style="--size:5.57833766575319rem; --distance:7.499254928961794rem; --position:94.12393327236666%; --time:3.4806354090355405s; --delay:-2.274765603356683s;"></div>
    <div class="bubble" style="--size:2.5739678385733678rem; --distance:8.917657906310211rem; --position:36.30111446297418%; --time:2.132094571645426s; --delay:-2.300338825704596s;"></div>
    <div class="bubble" style="--size:2.921396795915677rem; --distance:6.017635087648889rem; --position:64.47566942541235%; --time:2.1329836115090024s; --delay:-2.9493514981070006s;"></div>
    <div class="bubble" style="--size:3.6759907032328405rem; --distance:8.418483277724492rem; --position:32.34008573798657%; --time:2.4480223557558345s; --delay:-2.0329066324347824s;"></div>
    <div class="bubble" style="--size:4.787565853418627rem; --distance:7.002471829807719rem; --position:71.91523290439147%; --time:2.958165535287203s; --delay:-3.874622142256656s;"></div>
    <div class="bubble" style="--size:2.876971757413453rem; --distance:6.068564148976618rem; --position:11.865157104893097%; --time:2.827771256360732s; --delay:-2.39512359755763s;"></div>
    <div class="bubble" style="--size:3.3360664273276166rem; --distance:7.983397791094809rem; --position:68.65578472758347%; --time:3.9335303632278293s; --delay:-3.4294180673320884s;"></div>
    <div class="bubble" style="--size:2.785922768617306rem; --distance:7.082254824315727rem; --position:28.396955159650958%; --time:2.942223891965728s; --delay:-2.5935628505954393s;"></div>
    <div class="bubble" style="--size:5.723073490329043rem; --distance:9.090319785576288rem; --position:-3.3796480533643103%; --time:2.2633471262800557s; --delay:-3.2578755649237174s;"></div>
    <div class="bubble" style="--size:2.1814720163593524rem; --distance:6.396504615967695rem; --position:50.89372542693971%; --time:2.582017377993537s; --delay:-2.906294282914755s;"></div>
    <div class="bubble" style="--size:3.62120707963538rem; --distance:9.076979425692606rem; --position:11.150253759803633%; --time:3.0486377247236534s; --delay:-2.8041488577211697s;"></div>
    <div class="bubble" style="--size:2.709501141760601rem; --distance:7.8373914558643705rem; --position:5.674632497742465%; --time:3.395681112908417s; --delay:-2.2649544585446963s;"></div>
    <div class="bubble" style="--size:3.184680382015328rem; --distance:8.878536191481098rem; --position:8.386217564803701%; --time:3.9938236104040246s; --delay:-3.582227746566318s;"></div>
    <div class="bubble" style="--size:3.4014949844199958rem; --distance:8.171860996672919rem; --position:84.2657700109125%; --time:2.2494226346466255s; --delay:-2.5677067273975007s;"></div>
    <div class="bubble" style="--size:2.738787520059482rem; --distance:7.215369023176211rem; --position:56.250543764215685%; --time:3.976054489308197s; --delay:-2.326983298866254s;"></div>
    <div class="bubble" style="--size:4.21593419511934rem; --distance:8.927963260087107rem; --position:25.147537992688058%; --time:3.009996529717521s; --delay:-3.0238438289524225s;"></div>
    <div class="bubble" style="--size:5.513584744686991rem; --distance:8.22544620750663rem; --position:101.1452384048811%; --time:3.282739845432842s; --delay:-3.661873228440018s;"></div>
    <div class="bubble" style="--size:5.572625591150981rem; --distance:7.345648077046019rem; --position:22.8560703003273%; --time:2.7498169626967566s; --delay:-2.17990566059977s;"></div>
    <div class="bubble" style="--size:5.9527591413810015rem; --distance:8.228548797101368rem; --position:86.92141319108892%; --time:2.1195045300057886s; --delay:-2.1550354449961038s;"></div>
    <div class="bubble" style="--size:3.767163633315376rem; --distance:8.004107269407179rem; --position:58.86574552235167%; --time:2.4584153129693487s; --delay:-3.8899327217598216s;"></div>
    <div class="bubble" style="--size:5.239318894400097rem; --distance:8.21018133412617rem; --position:49.79329539415349%; --time:2.486417355278126s; --delay:-3.935240915466869s;"></div>
    <div class="bubble" style="--size:5.405641933124867rem; --distance:7.787670658003827rem; --position:55.299301993538734%; --time:2.9254208880312023s; --delay:-3.4035022943444453s;"></div>
    <div class="bubble" style="--size:2.6536622797162357rem; --distance:7.047091090720969rem; --position:99.8065168678203%; --time:3.1358735873884225s; --delay:-2.7674896723499964s;"></div>
    <div class="bubble" style="--size:3.6759966425104382rem; --distance:9.304354596540962rem; --position:50.078877699643236%; --time:2.364227888914125s; --delay:-2.1049591636942835s;"></div>
    <div class="bubble" style="--size:3.039820548413071rem; --distance:7.700594071278777rem; --position:54.369437773201135%; --time:2.3518890849934877s; --delay:-3.816455915222773s;"></div>
    <div class="bubble" style="--size:2.263980751965552rem; --distance:6.845227344107201rem; --position:7.6223749655636635%; --time:3.2543534151869933s; --delay:-3.5968097313692247s;"></div>
    <div class="bubble" style="--size:3.7636117769983146rem; --distance:9.28767671082202rem; --position:104.59608438872068%; --time:2.6660045314116205s; --delay:-3.0279672533679767s;"></div>
    <div class="bubble" style="--size:5.809103802369521rem; --distance:9.865569439286801rem; --position:15.660853702232227%; --time:2.518863325103205s; --delay:-3.5808886812518383s;"></div>
    <div class="bubble" style="--size:2.4500873479914125rem; --distance:7.274598849994393rem; --position:36.897733125341446%; --time:3.3461286093771387s; --delay:-3.6280095853685674s;"></div>
    <div class="bubble" style="--size:4.3926522787512265rem; --distance:9.612613676284077rem; --position:22.262054455432867%; --time:2.373303643948798s; --delay:-3.0679725632400907s;"></div>
    <div class="bubble" style="--size:3.844775009709453rem; --distance:8.355266723179703rem; --position:3.429889023129533%; --time:3.804465386878591s; --delay:-2.513210465049223s;"></div>
    <div class="bubble" style="--size:3.987597068631678rem; --distance:6.323842998471056rem; --position:58.472598393140736%; --time:3.6685014540532994s; --delay:-2.125640472580853s;"></div>
    <div class="bubble" style="--size:5.409522304422901rem; --distance:8.08453713835749rem; --position:7.192255114868317%; --time:3.6024864503739416s; --delay:-2.02777453028783s;"></div>
    <div class="bubble" style="--size:3.1897153674684295rem; --distance:7.970038416707961rem; --position:79.81130078644377%; --time:3.2691207165145544s; --delay:-3.1095874096110614s;"></div>
    <div class="bubble" style="--size:3.043749061825313rem; --distance:9.519971455545065rem; --position:-2.8790650455965716%; --time:2.5921789839789624s; --delay:-3.3392150143930954s;"></div>
    <div class="bubble" style="--size:2.3135489970103658rem; --distance:8.429205824133346rem; --position:10.078502192237377%; --time:3.478083377118066s; --delay:-2.3933149990580658s;"></div>
    <div class="bubble" style="--size:5.41080890592663rem; --distance:6.263885540517833rem; --position:88.47970464538236%; --time:3.791977923545102s; --delay:-2.1539409602055803s;"></div>
    <div class="bubble" style="--size:5.2260631351390066rem; --distance:6.953165091043609rem; --position:87.01664638966206%; --time:2.2054605348148777s; --delay:-2.0729929853657163s;"></div>
    <div class="bubble" style="--size:3.2309243043140823rem; --distance:8.90242528602417rem; --position:70.6941354974967%; --time:2.420572336985768s; --delay:-3.902986636768033s;"></div>
    <div class="bubble" style="--size:5.179842125942596rem; --distance:6.279313089480346rem; --position:51.631946389170714%; --time:2.9215376152158723s; --delay:-3.579196747493768s;"></div>
  </div>
  <div class="content">
      <div class="container">
      <h2 class="footer__title" style="text-align: center; margin-bottom: 40px;">L O C A L L I N K</h2>
    
    <ul class="footer__links">
      <li>
        <RouterLink :to="{ name: 'a_propos' }">
          <p href="" class="footer__link">À propos</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'who_we_are' }">
          <p href="" class="footer__link">Qui sommes-nous</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'contact' }">
          <p href="" class="footer__link">Nous contacter</p>
        </RouterLink>
      </li>
      <!-- <li>
        <RouterLink :to="{ name: 'connecter' }">
          <p href="" class="footer__link">Se connecter</p>
        </RouterLink>
      </li> -->
      <li>
        <a href="https://www.instagram.com/locallink_fr/">
        <img src='/img/logoIntagram.png' alt="lien vers le compte de Locallink sur Instagram" style="width: 40px;" height="auto">
      </a>
      </li>
      <li>
        <a href="https://twitter.com/Locallink_fr">
        <img src='/img/logoX.png' alt="lien vers le compte Locallink sur X" style="width: 40px;" height="auto" >
      </a>
      </li>
    </ul>
    <p style="display: flex; justify-content: center; align-items: center;">© 2024 Locallink. Tout droits réservés.</p>
  </div>
 
  </div>
</div>
<svg style="position:fixed;">
  <defs>
    <filter id="blob">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
    </filter>
  </defs>
</svg>

  </v-app>
        <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
</template>

<script setup>
import { ref } from 'vue'

const sidebar = ref(false)

</script>

<style>

#logoLocallink {
  transition: color 1s;
}

#logoLocallink:hover {

    animation-duration: changeColor; 
    animation: changeColor 0.2s forwards;
}


@keyframes changeColor {
  0% { background-color: none; }
  100% { background-color: #181919; }
}


#v-toolbar {
  background-color: #0f1316;
  color: white;
}

.area{
    background: #4e54c8;  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0; 
    width: 100%;
    height: 100%;

}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}



@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 60%;
    }

}


/*
*****************************************************

Footer

*****************************************************
*/

h2 {
  margin-top: 50px;
}

a {
  text-decoration: none;
  color: #fff;
}
ul li {
  list-style: none;
  color: #fff;
}


body {
  font-family: 'Poppins', sans-serif;
  overflow-x: hidden !important;
}

body .footer {
  z-index: 1;
  --footer-background:rgb(0, 0, 0);
  display: grid;
  position: relative;
  grid-area: footer;
  min-height: 12rem;
  bottom: -150px;
}

body .footer .bubbles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  background: var(--footer-background);
  filter: url("#blob");
}
body .footer .bubbles .bubble {
  position: absolute;
  left: var(--position, 50%);
  background: var(--footer-background);
  border-radius: 100%;
  -webkit-animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
          animation: bubble-size var(--time, 4s) ease-in infinite var(--delay, 0s), bubble-move var(--time, 4s) ease-in infinite var(--delay, 0s);
  transform: translate(-50%, 100%);
}
body .footer .content {
  padding: 1rem 1rem 2rem;
  background: var(--footer-background);
  z-index: 2;
}
.footer .content .container {
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  color: #fff;
}

.content h2 {
  margin-bottom: .25rem;
  font-size: 2.25rem;
}

.content span {
  font-size: .875rem;
}

.footer__links  {
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
  transition: all 150ms ease-out;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
}

.footer__links .footer__link {
  transition: all 150ms ease-out;
  display: inline-block;
}

.footer__link:hover:after {
    width: 100%;
}

.footer__link:after {
    content: '';
    display: block;
    margin: auto;
    height: 2px;
    width: 0px;
    background-color: #fff;
    transition: width .25s ease-out;
}

@-webkit-keyframes bubble-size {
  0%, 75% {
    width: var(--size, 4rem);
    height: var(--size, 4rem);
  }
  100% {
    width: 0rem;
    height: 0rem;
  }
}

@keyframes bubble-size {
  0%, 75% {
    width: var(--size, 4rem);
    height: var(--size, 4rem);
  }
  100% {
    width: 0rem;
    height: 0rem;
  }
}
@-webkit-keyframes bubble-move {
  0% {
    bottom: -4rem;
  }
  100% {
    bottom: var(--distance, 10rem);
  }
}
@keyframes bubble-move {
  0% {
    bottom: -4rem;
  }
  100% {
    bottom: var(--distance, 10rem);
  }
}

@media screen and (max-width: 767px){

  .footer .content {
    padding: 0 1.5rem;
  }
  .footer .content .container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .content h2 {
    font-size: 1.5rem;
  }

  .content span {
    font-size: .813rem;
  }
  
}

@media screen and (max-width: 567px){
  .footer .content .container {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 3.5rem;
  }
}


/* 
************************************************
Button 
************************************************
*/


.blob-btn.loading {
  pointer-events: none;
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
  top: 2px; 
  width: 30%;
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

@media screen and (max-width: 600px) {
    .footer__links {
      flex-wrap: wrap
    }
  }

@media screen and (max-width: 760px) {
    .blob-btn {
      font-size: 12px;
    }
  }

@media screen and (max-width: 1025px) {
    .blob-btn {
      padding: 15px 120px;
    }
  }

  @media screen and (max-width: 700px) {
    .blob-btn {
      padding: 10px 100px;
    }
  }



</style>