<template>
  <div 
    class="container"
    style="width:600px;">
    <el-row style="height:50px">
      <el-col :span="24"><div 
        style="background-color: blue;color: white;text-align:center;">
      <h1>Onde ver o Mundial?</h1></div></el-col>
    </el-row>
    <el-row style="height:50px">
      <el-col :span="4">
        <el-button 
          type="primary" 
          icon="arrow-left"
          @click="diaAnterior()"> Anterior </el-button>
      </el-col>
      <el-col 
        :span="16" 
        class="centrar">
        <h2>Dia {{ dia }}</h2>
      </el-col>
      <el-col :span="4">
        <el-button 
          type="primary" 
          icon="arrow-right"
          @click="diaSeguinte()"> Seguinte </el-button>
      </el-col>
    </el-row>
    <div 
      v-for="round in games.rounds" 
      :key="round.name"
      :name="round.name">
     
      <div
        v-for="item in round.matches" 
        v-if="item.num !== null && item.date == dia"
        :key="item.num"
        style="margin-top:9px;margin-bottom:4px">
        <el-row>
          <el-col 
            :span="24"
            class="centrar"
            style="font-size:20px">
            {{ item.group }}
          </el-col>
        </el-row> 
        <el-row style="border:1px solid #ccc">
          <el-col
            :span="11"
            class="centrar"
            style="font-size:20px;justify-content:flex-end">
            {{ item.team1.name }}&nbsp;&nbsp;
            <img 
              :src="'../flags/' + item.team1.code + '.png'" 
              width="45px" >
          </el-col>
          <el-col
            :span="2"
            class="centrar"
            style="font-size:24px;height:45px">
            vs
          </el-col>
          <el-col
            :span="11"
            class="centrar"
            style="font-size:20px;justify-content:flex-start">
            <img 
              :src="'../flags/' + item.team2.code + '.png'"  
              width="45px" >&nbsp;&nbsp;
            {{ item.team2.name }}
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="24"
            class="centrar"
            style="font-size:10px">
            <strong>{{ item.city }}</strong>, Estádio: {{ item.stadium.name }}, <strong> {{ getHoras(item.date, item.time, item.timezone) }}</strong>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            :span="24"
            class="centrar"
            style="margin-top:5px;">
            <span 
              v-html="getCanais(item.num)"/>
          </el-col>
        </el-row>
      </div>
      
    </div>
    <div 
      id="credito" 
      style="font-size:10px"><p>Extensão baseada no <a href="https://github.com/YuraDev/vue-chrome-extension-template">Vue.js Chrome Extension Template</a></p><p> Base de dados dos jogos através do <a href="https://github.com/openfootball/world-cup.json">Openfootball World Cup</a> </p><p> Bandeiras <a href="https://www.flaticon.com/packs/international-flags">Flaticons</a></p> </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    games: "",
    dia: ""
  }),
  computed: {},
  created() {
    this.getDate();
    this.getGames();
  },
  mounted() {},
  methods: {
    getHoras(data, hora, timezone) {
      const toTwoDigits = num => (num < 10 ? "0" + num : num);
      var d = new Date(data + " " + hora + " " + timezone);

      var newDate = new Date(d.getTime() + d.getTimezoneOffset() * 60 * 1000);

      var offset = d.getTimezoneOffset() / 60;
      var hours = d.getHours();

      newDate.setHours(hours + offset + 1);

      return newDate.toLocaleString();
    },
    getCanais(elemento) {
      if (elemento !== null) {
        var el = parseInt(elemento);
        var canal = this.$root.can[el - 1].canal;
        var resp = "<img src='/canais/sporttv.png' height='15px'/>";
        if (canal == ",RTP1") {
          resp +=
            "&nbsp;&nbsp;<img src='../canais/rtp.png' height='25px'/> (HD: 301)";
        }
        if (canal == ",SIC") {
          resp +=
            "&nbsp;<img src='../canais/sic.png' height='20px'/> (HD: 303)";
        }
        return resp;
      }
    },
    getDate() {
      const toTwoDigits = num => (num < 10 ? "0" + num : num);
      let today = new Date();
      let year = today.getFullYear();
      let month = toTwoDigits(today.getMonth() + 1);
      let day = toTwoDigits(today.getDate());

      this.dia = year + "-" + month + "-" + day;
    },
    getGames() {
      this.$http
        .get(
          "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
        )
        .then(
          response => {
            // success callback
            this.games = response.body;
            // chrome.extension.getBackgroundPage().console.dir(this.games);
          },
          response => {
            // error callback
          }
        );
    },
    diaSeguinte() {
      const toTwoDigits = num => (num < 10 ? "0" + num : num);
      let atual = new Date(
        this.dia.substr(0, 4),
        this.dia.substr(5, 2),
        this.dia.substr(8, 2)
      );
      let year = atual.getFullYear();
      let month = toTwoDigits(atual.getMonth());
      let day = toTwoDigits(atual.getDate() + 1);
      this.dia = year + "-" + month + "-" + day;
    },
    diaAnterior() {
      const toTwoDigits = num => (num < 10 ? "0" + num : num);
      let atual = new Date(
        this.dia.substr(0, 4),
        this.dia.substr(5, 2),
        this.dia.substr(8, 2)
      );
      let year = atual.getFullYear();
      let month = toTwoDigits(atual.getMonth());
      let day = toTwoDigits(atual.getDate() - 1);
      this.dia = year + "-" + month + "-" + day;
    }
  }
};
</script>
<style lang="scss">
div {
  color: black;
}
.centrar {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>