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
  rendimento TEXT DEFAULT ""
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
  rendimento) 
VALUES 
  ( "Macarrão na Caneca", "2 fatias de cheddar, 1/4 xícara (chá) de leite, 1/2 xícara (chá) de água, 1/3 xícara (chá) de macarrão, Queijo ralado a gosto","1. Leve o macarrão com a água para o microondas por 4 ou 6 minutos. 2. Pare a cada dois para mexer um pouco a mistura. 3. Quando estiver al dente, escorra a água. 4. Misture o leite e o queijo e leve para o microondas novamente. 5. Mexa de 1 em 1 minuto. 6. Deixe até o queijo derreter e misturar com o leite. 7. Decore com queijo ralado. 8. Sirva em seguida.","Massas","O americano macarrão com queijo, dito Mac nCheese, é uma receita facílima e muito gostosa para você fazer bem rapidinho para aquele dia corrido ou para não perder nada da sua série favorita! Conheça essa receita extra-cremosa e `queijuda` e confira as dicas de harmonização com cerveja no fim!","Maria","maria.123@bol.com.br",20,"4 porções"),
  ( "Lasanha de caneca", "Molho a bolonhesa, Queijo, Presunto, Requeijão, 4 colheres de sopa de leite, Massa de lasanha pré cozida, 1 colher de chá de manteiga, Queijo Parmesão ralado, 1 caneca média","1. Separe uma caneca que vá ao micro-ondas. 2. Monte sua lasanha dentro da caneca conforme os passos: coloque o molho no fundo da caneca, adicione a massa para lasanha, coloque mais molho, o presunto, molho, a massa para lasanha, molho, fatias de queijo, molho novamente, acrescente a massa. 3. Para ficar melhor ainda, adicione o requeijão, uma fatia de massa e o molho. 4. Finalize adicionando a manteiga, o queijo ralado e o leite. Coloque a caneca sobre um prato e leve ao micro-ondas por 10 minutos.","Massas","Gororoba nao nutricional, mas é uma delícia","João","joao.321@bol.com.br",20,"4 porções"),
  ( "STROGONOFF DE FRANGO", "3 peitos de frango cortados em cubos 1 dente de alho picado sal e pimenta a gosto 1 cebola picada 2 colheres (sopa) de maionese,1 colher de manteiga, 1/2 copo de ketchup, 1/3 copo de mostarda, 1 copo de cogumelos, 1 copo de creme de leite, batata palha a gosto","1. Primeiro corte o frango em cubinhos. 2. Em uma panela média, coloque o óleo, o alho e a cebola e espere dourar. 3. Depois coloque o frango e o sal e a pimenta a gosto, aqueça até o ponto de fritura. 4. Mexa bem e tampe meia panela para que crie água, espere. 5. Sumir a água e começar a fritura. 6. Quando o frango já tiver dourado, acrescente o molho de tomate e o champignon. 7. Depois coloque a lata de creme de leite e mexa até espalhar, com a mesma lata encha de água. 8. Mexa mais uma vez até misturar e deixe levantar fervura. 9. O strogonoff está pronto para ser servido. Logo Carrefour Sobraram ingredientes?","Aves","Segundo a historiografia, o strogonoff surgiu na Rússia e a receita original levava pedaços de carne, creme de leite e sal. Levado à França, esse prato ganhou a adição do champinhon, da páprica e da mostarda. Ficou com água na boca só de saber da história? Que tal experimentar esse strogonoff de frango super especial?","Pedro Jardim","pedro.jardim.123@protonmail.com",30,"4 porções"),
  ( "Atum com shoyu", "Uma lata de atum, uma ou duas colheres de shoyu. Se curtir, um pouco de limão também (umas gotinhas).","Pega o que você tem - o arroz requentado, a saladinha improvisada e/ou o que for - e coloca no prato. Nele mesmo, você joga o atum que estava na lata (depois de escorrer a água ou o óleo) e tempera com o shoyu. Pronto.","Peixe","Essa é para os dias quentes, quando sobrou arroz do outro dia. A dica é montar uma saladinha com o que tiver também e ficar feliz de ter uma refeição balanceada em pouquíssimos minutos.","Ryu","ryu.123@bol.com.br",5,"1 porções");


-- ITEMS --

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