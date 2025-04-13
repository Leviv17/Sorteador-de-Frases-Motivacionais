  const quotes = [
    "Acredite em você mesmo e todo o resto irá se encaixar.",
    "Não desista. Normalmente é a última chave do chaveiro que abre a porta.",
    "A persistência realiza o impossível.",
    "Acredite que você pode e já estará no meio do caminho.",
    "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
    "Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.",
    "Viver é ter sonhos e esperanças, e deixar que a fé seja nossa maior inspiração. É encontrar grandes motivos para ser feliz nas pequenas coisas!",
    "Gostaria que você soubesse que existe dentro de si uma força capaz de mudar sua vida. Basta que lute e aguarde um novo amanhecer.",
    "Aprenda com o ontem. Viva o hoje. tenha esperança para o amanhã.",
    "Não há atalhos para nenhum destino onde se vale a pena chegar.",
    "Não se deixe intimidar pela opinião dos outros. Só a mediocridade é segura, por isso corra seus riscos e faça o que deseja.",
    "De que adianta temer o que já aconteceu? O tempo do medo já aconteceu, agora, começa o tempo da esperança.",
    "Um dia, quando olhar para trás, verá que os dias mais belos foram aqueles em que lutou.",
    "Maravilhas nunca faltaram ao mundo; o que sempre falta é a capacidade de senti-las e admirá-las.",
    "Qualquer pessoa de sucesso sabe que é uma peça importante, mas sabe que não conseguirá nada sozinho.",
    "Só é lutador quem sabe lutar consigo mesmo.",
    "Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.",
    "Seus sonhos não precisam de plateia, eles só precisam de você.",
    "A persistência é o caminho do êxito.",
    "Faça da dificuldade a sua motivação. A volta por cima vem na continuação.",
    "Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.",
    "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
    "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!",
    "As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.",
    "Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.",
    "Tente de novo. Fracasse de novo. Mas fracasse melhor.",
    "Muitos questionam qual a frase motivacional de hoje? Depois de ler não fazem nada! Agir é o segredo.",
    "O sucesso não tem a ver com quanto dinheiro você ganha, mas com a diferença que você faz na vida de outras pessoas.",
    "É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo.",
    "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    "O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.",
    "O sucesso é ir de frustração a frustração sem perder o entusiasmo.",
    "Coragem é a resistência e o domínio do medo, não a ausência dele",
    "Nunca te diminuas para caberes no mundo de alguém. Se não houver espaço para ti, não insistas. Quem te quiser de verdade na sua vida, fará tudo para que tu caibas, de forma inteira, sem que tu precises de te diminuir."
  ]
  
  const quoteElement = document.querySelector('.quote');
  const nextButton = document.querySelector('.btn-next');
  
  function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  nextButton.addEventListener('click', showRandomQuote);
  
  showRandomQuote();
