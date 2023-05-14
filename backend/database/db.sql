/* 
 *  Create & init site content
 */


--- RECEITAS
--DROP TABLE IF EXISTS recipe;

CREATE TABLE IF NOT EXISTS recipe (
  id INTEGER PRIMARY KEY,
  titulo TEXT DEFAULT "",
  ingredientes TEXT DEFAULT "",
  modoPreparo TEXT DEFAULT "",
  categoria TEXT DEFAULT "",
  informacoesAdicionais TEXT DEFAULT "",
  usuarioNome TEXT DEFAULT "",
  usuarioEmail TEXT DEFAULT "",
  tempoPreparo INTEGER DEFAULT 0,
  rendimento TEXT DEFAULT "",
  link TEXT DEFAULT ""
);

INSERT INTO recipe
  ( titulo,
  ingredientes,
  modoPreparo,
  categoria,
  informacoesAdicionais,
  usuarioNome,
  usuarioEmail,
  tempoPreparo,
  rendimento,
  link) 
VALUES 
  ( "Macarrão na Caneca", "2 fatias de cheddar, 1/4 xícara (chá) de leite, 1/2 xícara (chá) de água, 1/3 xícara (chá) de macarrão, Queijo ralado a gosto","1. Leve o macarrão com a água para o microondas por 4 ou 6 minutos. 2. Pare a cada dois para mexer um pouco a mistura. 3. Quando estiver al dente, escorra a água. 4. Misture o leite e o queijo e leve para o microondas novamente. 5. Mexa de 1 em 1 minuto. 6. Deixe até o queijo derreter e misturar com o leite. 7. Decore com queijo ralado. 8. Sirva em seguida.","Massas","O americano macarrão com queijo, dito Mac nCheese, é uma receita facílima e muito gostosa para você fazer bem rapidinho para aquele dia corrido ou para não perder nada da sua série favorita! Conheça essa receita extra-cremosa e `queijuda` e confira as dicas de harmonização com cerveja no fim!","Maria","maria.123@bol.com.br",20,"4 porções", "https://img.cybercook.com.br/imagens/receitas/267/macarrao-na-caneca-840x480.jpg?q=75"),
  ( "Lasanha de caneca", "Molho a bolonhesa, Queijo, Presunto, Requeijão, 4 colheres de sopa de leite, Massa de lasanha pré cozida, 1 colher de chá de manteiga, Queijo Parmesão ralado, 1 caneca média","1. Separe uma caneca que vá ao micro-ondas. 2. Monte sua lasanha dentro da caneca conforme os passos: coloque o molho no fundo da caneca, adicione a massa para lasanha, coloque mais molho, o presunto, molho, a massa para lasanha, molho, fatias de queijo, molho novamente, acrescente a massa. 3. Para ficar melhor ainda, adicione o requeijão, uma fatia de massa e o molho. 4. Finalize adicionando a manteiga, o queijo ralado e o leite. Coloque a caneca sobre um prato e leve ao micro-ondas por 10 minutos.","Massas","Gororoba nao nutricional, mas é uma delícia","João","joao.321@bol.com.br",20,"4 porções", "https://www.anamariabrogui.com.br/assets/uploads/receitas/fotos/268q11s4o29wc088o8.png"),
  ("Bolo de cenoura", "3 cenouras, 4 ovos, 2 xícaras de açúcar, 2 xícaras de farinha de trigo, 1 xícara de óleo, 1 colher de sopa de fermento em pó", "1. Rale as cenouras finamente. \n2. Bata os ovos e misture com o açúcar. \n3. Adicione a farinha de trigo e misture bem. \n4. Adicione as cenouras raladas e o óleo, misture bem novamente. \n5. Adicione o fermento em pó e misture gentilmente. \n6. Despeje a mistura em uma forma untada e asse em forno preaquecido a 180 graus por cerca de 40 minutos.", "Sobremesa", "", "João", "joao@email.com", 40, "12 fatias", "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/470bfbb41f979e963d1ef671207af0eb.jpg"),
  ("Arroz de frango", "2 xícaras de arroz, 1 peito de frango cortado em cubos, 1 cebola picada, 2 dentes de alho picados, 2 tomates picados, 2 colheres de sopa de azeite, sal e pimenta a gosto", "1. Tempere o frango com sal e pimenta. \n2. Aqueça o azeite em uma panela e refogue a cebola e o alho. \n3. Adicione o frango e deixe dourar. \n4. Adicione o arroz e mexa bem. \n5. Adicione os tomates picados e mexa novamente. \n6. Adicione água suficiente para cobrir o arroz e o frango e deixe cozinhar em fogo baixo por cerca de 20 minutos ou até que o arroz esteja cozido.", "Prato principal", "", "Maria", "maria@email.com", 30, "4 porções", "https://static.itdg.com.br/images/640-420/4503a9e6491e4aa11ba7233baf6b7693/28871-original.jpg"),
  ( "Strogonoff de Frango", "3 peitos de frango cortados em cubos 1 dente de alho picado sal e pimenta a gosto 1 cebola picada 2 colheres (sopa) de maionese,1 colher de manteiga, 1/2 copo de ketchup, 1/3 copo de mostarda, 1 copo de cogumelos, 1 copo de creme de leite, batata palha a gosto","1. Primeiro corte o frango em cubinhos. 2. Em uma panela média, coloque o óleo, o alho e a cebola e espere dourar. 3. Depois coloque o frango e o sal e a pimenta a gosto, aqueça até o ponto de fritura. 4. Mexa bem e tampe meia panela para que crie água, espere. 5. Sumir a água e começar a fritura. 6. Quando o frango já tiver dourado, acrescente o molho de tomate e o champignon. 7. Depois coloque a lata de creme de leite e mexa até espalhar, com a mesma lata encha de água. 8. Mexa mais uma vez até misturar e deixe levantar fervura. 9. O strogonoff está pronto para ser servido. Logo Carrefour Sobraram ingredientes?","Aves","Segundo a historiografia, o strogonoff surgiu na Rússia e a receita original levava pedaços de carne, creme de leite e sal. Levado à França, esse prato ganhou a adição do champinhon, da páprica e da mostarda. Ficou com água na boca só de saber da história? Que tal experimentar esse strogonoff de frango super especial?","Pedro Jardim","pedro.jardim.123@protonmail.com",30,"4 porções", "https://cdn0.tudoreceitas.com/pt/posts/6/8/8/strogonoff_de_frango_simples_9886_600_square.jpg"),
  ( "Atum com shoyu", "Uma lata de atum, uma ou duas colheres de shoyu. Se curtir, um pouco de limão também (umas gotinhas).","Pega o que você tem - o arroz requentado, a saladinha improvisada e/ou o que for - e coloca no prato. Nele mesmo, você joga o atum que estava na lata (depois de escorrer a água ou o óleo) e tempera com o shoyu. Pronto.","Peixe","Essa é para os dias quentes, quando sobrou arroz do outro dia. A dica é montar uma saladinha com o que tiver também e ficar feliz de ter uma refeição balanceada em pouquíssimos minutos.","Ryu","ryu.123@bol.com.br",5,"1 porções", "https://static.itdg.com.br/images/640-420/b16ead59237949e3ece923fc249949ba/365601-original.jpg");

INSERT INTO recipe
  ( titulo,
  ingredientes,
  modoPreparo,
  categoria,
  informacoesAdicionais,
  usuarioNome,
  usuarioEmail,
  tempoPreparo,
  rendimento,
  link) 
VALUES 
  ("Omelete de Queijo", "3 ovos, 50g de queijo ralado, sal e pimenta a gosto", "Quebre os ovos em uma tigela e bata com um garfo. Adicione o queijo ralado, o sal e a pimenta e misture bem. Aqueça uma frigideira antiaderente e despeje a mistura de ovos. Deixe cozinhar em fogo médio-baixo até que a parte de baixo esteja dourada e firme. Vire o omelete com a ajuda de uma espátula e deixe cozinhar do outro lado também. Sirva quente.", "Café da Manhã", "-", "João Silva", "joaosilva@gmail.com", 10, "1 porção", "https://comidinhasdochef.com/wp-content/uploads/2022/01/Omelete-com-Queijo00.jpg"),
  ("Panqueca de banana", " - 1 banana amassada\n- 1 ovo\n- 1 colher de sopa de aveia\n- 1 colher de chá de canela em pó\n- 1 colher de chá de fermento em pó\n- 1 pitada de sal\n- Mel para servir", "1. Em um recipiente, misture a banana, o ovo, a aveia, a canela, o fermento e o sal até obter uma mistura homogênea.\n2. Em uma frigideira antiaderente, despeje a massa em pequenas porções.\n3. Cozinhe até as bordas começarem a soltar da frigideira.\n4. Vire a panqueca e cozinhe do outro lado.\n5. Repita o processo até acabar a massa.\n6. Sirva com mel.", "Doces", "Rendimento 2 porções", "André Luiz", "andre.luiz@gmail.com", 15, "4 panquecas", "https://static.itdg.com.br/images/1200-630/33357f0abb1d3b4495c8896ad1d2df97/panqueca-de-banana.jpg"),
  ("Salmão Grelhado com Molho de Limão", "1 filé de salmão, suco de 1 limão, 2 dentes de alho picados, sal e pimenta a gosto", "Tempere o filé de salmão com o suco de limão, o alho picado, o sal e a pimenta. Deixe marinar por alguns minutos. Aqueça uma frigideira ou grelha e coloque o filé de salmão para grelhar por alguns minutos de cada lado, até que esteja bem cozido. Sirva com molho de limão por cima.", "Prato Principal","-", "Maria Santos", "mariasantos@gmail.com", 20, "1 porção", "https://img.cybercook.com.br/receitas/665/salmao-grelhado-com-molho-de-limao-1-840x480.jpeg?q=75");





CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "",
  unit TEXT DEFAULT "",
  price INTEGER DEFAULT 0,
  qty INTEGER DEFAULT 0,
  desc TEXT DEFAULT ""
);

INSERT INTO items
  (name, unit, price, qty, desc) 
VALUES 
  ("Biscotti", "bag of 10", 500, 5, "Great dunked in coffee."),
  ("Milk", "quart", 500, 3, "Good source of calcium."),
  ("Eggs", "dozen", 400, 7, "Great for breakfast and baking."),
  ("Whole chicken", "lb", 750, 2, "Perfect for roasting."),
  ("Honey", "pint", 1350, 4, "Sweetens your tea.");