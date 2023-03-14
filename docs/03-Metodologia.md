
# Metodologia


<p align="justify">Apresentamos aqui a metodologia do projeto, detalhando-se as definições sobre os ambientes de trabalho utilizados pela equipe no processo de desenvolvimento. Inclui a gestão do código fonte e controle de versão, além da definição do processo de gerenciamento e ferramentas utilizadas pela equipe para o desenvolvimento do projeto.</p>

## Relação de Ambientes de Trabalho

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito apresentada abaixo

### Relação de Ambientes de Trabalho
   
| Ambiente      | Plataforma                | Link de Acesso             |
|---------------|---------------------------|----------------------------|
| Repositório de Código Fonte | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-time4-buscareceitas/blob/main/README.md |
| Documentação do Projeto | GitHub | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-1-e4-proj-infra-t1-time4-buscareceitas/tree/main/docs |
| Projeto de Interface  | Draw io | https://draw.io |
| Diagramaas  | Draw io | https://draw.io |
| Gerenciamento do Projeto | Github | https://github.com |

## Controle de Versão

<p align="justify">A ferramenta de controle de versão escolhida para o projeto foi o Git, com o GitHub tendo sido escolhido para a hospedagem do repositório. O fluxo de trabalho do Git escolhido para o projeto foi o Gitflow (descrito em Driessen, 2010), que consiste em um modelo de organização e gerenciamento de ramificações (branches) do Git. Dentro do Gitflow, todo o desenvolvimento e manutenções no código são realizados em branches separadas, sendo elas:</p>
     
- `main`: branch criada no início de projeto que deve conter apenas código pronto para lançamento, deve-se realizar (direta ou indiretamente) o merge de todas as outras branches à main branch quando estas houverem sido suficientemente testadas e consideradas concluídas.
- `develop`: branch criada a partir da main branch no início do projeto que contém novas funcionalidades recém produzidas, mas que ainda se encontram na fase de testes. É onde deve ser realizado o merge de novas funcionalidades desenvolvidas nas feature branches que já terminaram de ser progamadas mas ainda não foram testadas.
- `feature`: branches que devem ser criadas a partir da develop branch ao iniciar a implementação de uma nova funcionalidade. Ao completar a funcionalidade em questão, deve-se realizar o merge da feature branch em questão com a develop branch.    
- `release`: branch utilizada no processo de preparar um novo lançamento (release) do produto. É ramificada a partir da develop branch e deve ser utilizada apenas para a correção de bugs, melhoramentos em funcionalidades existentes e outras atividades relacionadas ao lançamento em questão (sem implementação de novas funcionalidades). Ao final do processo, deve ocorrer o merge desta branch com a main branch (marcando-se esta com o número da versão) e também com a develop branch.
- `hotfix`: branch ramificada diretamente da main branch que é utilizada para realizar modificações rápidas na main branch para lançamentos de produção. Uma vez concluída, deve-se realizar o merge tanto com a main branch (para implementação da modificação) quanto com a develop branch (para que as correções também estejam presentes no próximo release).
     
<p align="justify">Tal modelo permite a correção rápida de lançamentos de produção mantendo uma linha de desenvolvimento dedicada para a atualização de segurança, deixando que a equipe trabalhe com problemas sem interromper o fluxo do trabalho ou esperar o próximo ciclo de lançamento.
     
Uma representação gráfica deste fluxo de trabalho (obtida do artigo da Atlassian encontrado na seguinte URL: https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow) pode ser observada na figura abaixo:</p>
<br>
![gitflow](https://user-images.githubusercontent.com/74699119/159187821-2242dcea-f38f-4f8a-b2ef-0991bdfdd0b8.png)
<p align="center"><b>Figura </b> - Fluxo de controle do código fonte no repositório github  </p>
<br>
</div> 
<p align="justify">A gerência de issues será feita utilizando o próprio sistema do Github dentro do repositório do projeto, adotando-se a seguinte convenção para
etiquetas:</p>

- `documentation`: realizar mudanças na documentação
- `bug`: reportar problemas nas funcionalidades implementadas
- `enhancement`: realizar melhorias em alguma funcionalidade
- `feature`: realizar a implementação de uma nova funcionalidade

## Gerenciamento de Projeto

### Divisão de Papéis

Nosso trabalho utiliza métodos ágeis como metodologia de trabalho de acompanhamento do projeto. O método Scrum foi definido como base do processo de desenvolvimento. A equipe está organizada da seguinte maneira:

-	Product Owner (P.O.): Felipe Augusto Lara Soares;
-	Scrum Master: Pedro Daniel Jardim;
-	Equipe de Desenvolvimento: Cristiano Garcia, Michelle Leal Rodrigues, Pedro Daniel Jardim, Renata Diniz Guimarães de Oliveira e Vania Maria Tiburzio Rezende;
-	Equipe de Design: Michelle Leal Rodrigues, Renata Diniz Guimarães de Oliveira e Vania Maria Tiburzio Rezende.

### Processo

Coloque  informações sobre detalhes da implementação do Scrum seguido pelo grupo. O grupo deverá fazer uso do recurso de gerenciamento de projeto oferecido pelo GitHub, que permite acompanhar o andamento do projeto, a execução das tarefas e o status de desenvolvimento da solução.

### Ferramentas

As ferramentas empregadas no projeto são:

- Editor de código.
- Ferramentas de comunicação
- Ferramentas de desenho de tela (_wireframing_)

O editor de código foi escolhido porque ele possui uma integração com o sistema de versão. As ferramentas de comunicação utilizadas possuem integração semelhante e por isso foram selecionadas. Por fim, para criar diagramas utilizamos essa ferramenta por melhor captar as necessidades da nossa solução.

Liste quais ferramentas foram empregadas no desenvolvimento do projeto, justificando a escolha delas, sempre que possível.
 

