 function fuja() {
      const botaoNao = document.getElementById("nao");
      const audio = document.getElementById("audioFuja");

      const larguraJanela = window.innerWidth;
      const alturaJanela = window.innerHeight;

      const botaoWidth = botaoNao.offsetWidth;
      const botaoHeight = botaoNao.offsetHeight;

      const maxX = larguraJanela - botaoWidth;
      const maxY = alturaJanela - botaoHeight - 100; // evita passar do footer

      const aleatorioX = Math.floor(Math.random() * maxX);
      const aleatorioY = Math.floor(Math.random() * maxY);

      botaoNao.style.left = aleatorioX + "px";
      botaoNao.style.top = aleatorioY + "px";

      audio.play();
 }