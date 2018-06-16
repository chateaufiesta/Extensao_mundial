# Extensão Mundial
Extensão que informa os jogos que vão decorrer no Mundial 2018 por dia e com indicação do canal onde vai ser transmitido.


![alt text](https://github.com/chateaufiesta/Extensao_mundial/raw/master/static/extensao.PNG)


Extensão para o Google Chrome baseada no template  <a href="https://github.com/YuraDev/vue-chrome-extension-template">Vue.js Chrome Extension Template</a>.

Base de dados dos jogos através do <a href="https://github.com/openfootball/world-cup.json">Openfootball World Cup</a> e de uma pequena base de dados Firebase que liga a base de dados dos jogos com os canais. 

Bandeiras <a href="https://www.flaticon.com/packs/international-flags">Flaticons</a>

Depois de clonar o projecto basta correr:

$ cd projecto

$ npm install

$ npm run dev


Para usar a extensão basta entrar em chrome://extensions, ativar o modo de programador e arrastar para essa página a pasta "build" que é criada quando se corre o npm run dev.

Foi criado o ext_mundial.zip, este zip tem a pasta que deve ser colocada na página chrome://extensions para quem não quer usar o npm. Basta descompactar e arrastar a pasta build para o chrome://extensions.

Algum problema/sugestão de melhoria apitem.

  
