<template>
  <div class="base">
    <div class="main main1">
      <i class="fas fa-user-friends fa-2x"></i>
      <h1>
        A Unit Converting bot
      </h1>
      <div class="window">
        <div class="titlebar">
          <div class="buttons">
            <div class="close">
              <a class="closebutton" href="#"></a>
            </div>
            <div class="minimize">
              <a class="minimizebutton" href="#"></a>
            </div>
            <div class="zoom">
              <a class="zoombutton" href="#"></a>
            </div>
          </div>
          #general - Discord
        </div>
        <div class="content">
          <discord-messages>
            <discord-message author="Yeh dis iz murica" avatar="gray">
              They only gave me 10$ for running 4 miles delivering 40 Pounds of hardware!
            </discord-message>
            <discord-message author="🇹🇫 does not mean 🥖">
              Hmm... In metric? To EUR?<br>
              m!convert <mention type="channel">general</mention> 424633431754801164
            </discord-message>
            <discord-message author="PityBitty" avatar="https://cdn.glitch.com/326dee5b-8b69-4d5e-ac87-3394248b188e%2FPityBitty.png?v=1593713265830">
              <discord-embed slot="embeds" title="Conversion results">
                They only gave me 11EUR for running 2 kilometers delivering 18 kilograms of hardware!
                <embed-fields slot="fields">
                  <embed-field :inline="true" title="To currency 💵">
                    EUR
                  </embed-field>
                  <embed-field :inline="true" title="To timezone 🕗🌐">
                    UTC+1
                  </embed-field>
                  <embed-field :inline="true" title="To imperial or metric 📏">
                    Metric
                    </embed-field>
                </embed-fields>
              </discord-embed>
            </discord-message>
            <discord-message author="🇹🇫 does not mean 🥖">
              OOF... Hard work don't always pay off!
            </discord-message>
          </discord-messages>
        </div>
      </div>
      <h2>
        Automatically converts: <br>
        -Currency to currency<br>
        -Metric to imperial<br>
        -Timezones
      </h2>
    </div>

    <div class="main main2">
      <i class="fas fa-money-bill-wave fa-2x"></i>
      <h1>
        A Currency Converting bot
      </h1>

      <div class="window">
        <div class="titlebar">
          <div class="buttons">
            <div class="close">
              <a class="closebutton" href="#"></a>
            </div>
            <div class="minimize">
              <a class="minimizebutton" href="#"></a>
            </div>
            <div class="zoom">
              <a class="zoombutton" href="#"></a>
            </div>
          </div>
          CSS OS X Yosemite Window
        </div>
        <div class="content">
          <discord-messages>
            <discord-message author="SellYourTrades" avatar="https://cdn.glitch.com/326dee5b-8b69-4d5e-ac87-3394248b188e%2FSellYourTrades.png?v=1593713269466">
              I'm selling this action for 50$! Anyone?
            </discord-message>
            <discord-message author="€cologist" avatar="https://cdn.glitch.com/326dee5b-8b69-4d5e-ac87-3394248b188e%2F%C2%A3cologist.png?v=1593713260524">
              m!convertraw <mention type="channel">general</mention> 424633431754801164
            </discord-message>
            <discord-message author="PityBitty" avatar="https://cdn.glitch.com/326dee5b-8b69-4d5e-ac87-3394248b188e%2FPityBitty.png?v=1593713265830">
              <discord-embed slot="embeds" title="Conversion results">
                I'm selling this action for 45EUR! Anyone?
                <embed-fields slot="fields">
                  <embed-field :inline="true" title="To currency 💵">
                    EUR
                  </embed-field>
                  <embed-field :inline="true" title="To timezone 🕗🌐">
                    UTC+2
                  </embed-field>
                  <embed-field :inline="true" title="To imperial or metric 📏">
                    Metric
                  </embed-field>
                </embed-fields>
              </discord-embed>
            </discord-message>
            <discord-message author="€cologist">
              <mention>SellYourTrades</mention> You got my attention! Let's go in DMs.
            </discord-message>
          </discord-messages>
        </div>
      </div>

      <h2>
        Support some symbols, negative money notation and all 3-letters currency representation
      </h2>
    </div>

    <div class="main main3">
      <i class="fas fa-ruler fa-2x"></i>
      <h1>
        An imperial to metric bridge
      </h1>

      <h2>
        Supports full form and abbreviations of<br>
        Pounds (lbs), Kilograms (kgs), Miles (mis), Kilometers (kms),<br>
        Degrees Celcius (°C), Degrees Fahrenheit (°F), Feets ('), Meters (m)
      </h2>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style>
/* START--TAKEN from="https://codepen.io/JohJakob/pen/YPxgwo" asked-permission */
.window {
  background: #fff;
  margin: auto;
  border: 1px solid #acacac;
  border-radius: 6px;
  box-shadow: 0px 0px 20px #00000099;
}
.titlebar {
  background: linear-gradient(#ebebeb, #d5d5d5);
  color: #4d494d;
  font-size: 11pt;
  line-height: 20px;
  text-align: center;
  width: 100%;
  height: 20px;
  border-top: 1px solid #f3f1f3;
  border-bottom: 1px solid #b1aeb1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  cursor: default;
}

.buttons {
  padding-left: 8px;
  padding-top: 3px;
  float: left;
  line-height: 0px;
}

.buttons:hover a {
  visibility: visible;
}

.close {
  background: #ff5c5c;
  font-size: 9pt;
  width: 11px;
  height: 11px;
  border: 1px solid #e33e41;
  border-radius: 50%;
  display: inline-block;
}

.close:active {
  background: #c14645;
  border: 1px solid #b03537;
}

.close:active .closebutton {
  color: #4e0002;
}

.closebutton {
  color: #820005;
  visibility: hidden;
  cursor: default;
}

.minimize {
  background: #ffbd4c;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 4px;
  width: 11px;
  height: 11px;
  border: 1px solid #e09e3e;
  border-radius: 50%;
  display: inline-block;
}

.minimize:active {
  background: #c08e38;
  border: 1px solid #af7c33;
}

.minimize:active .minimizebutton {
  color: #5a2607;
}

.minimizebutton {
  color: #9a5518;
  visibility: hidden;
  cursor: default;
}

.zoom {
  background: #00ca56;
  font-size: 9pt;
  line-height: 11px;
  margin-left: 6px;
  width: 11px;
  height: 11px;
  border: 1px solid #14ae46;
  border-radius: 50%;
  display: inline-block;
}

.zoom:active {
  background: #029740;
  border: 1px solid #128435;
}

.zoom:active .zoombutton {
  color: #003107;
}

.zoombutton {
  color: #006519;
  visibility: hidden;
  cursor: default;
}

/* END--TAKEN */

#menu {
  background-color: #20bf55;
  background-image: linear-gradient(315deg, #20bf55 0%, #01baef 74%);
}
.discord-messages * {
  font-family: Roboto, sans-serif;
  text-align: left!important;
  margin: 0;
  border-radius: 0,0,4px,4px;
}
.main {
  text-align: center;
  margin: 5vw;
  padding: 2vw;
  box-shadow: 0px 0px 2vw #00000099;
}

body {
  background: #ecf0f1;
  color: #000;
  font-family: HelveticaNeue, 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif;
}

.main2{
  background-color: #f06262;
}
.main3{
  background-color: #76f79c;
}
.main4{
  background-color: #827af1;
}
</style>