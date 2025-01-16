<h1 align="center">Como construir (e publicar) extensões personalizadas do GitHub Copilot</h1>
<h5 align="center">@gateixeira @digimangos</h5>
<h5 align="center">Revisão para Português Brasil @paulanunes85 - 2025</h5>

<p align="center">
  <a href="#mega-prerequisites">Pré-requisitos</a>
  <a href="#workshop-labs">Laboratórios do Workshop</a>
  <a href="#book-resources">Recursos</a>
</p>

- **Para quem é isso**: Empresas - Desenvolvedores, Desenvolvedores ou Mantenedores de Código Aberto, Startups
- **O que você vai aprender**: O GitHub recentemente introduziu as Extensões do GitHub Copilot, permitindo que as equipes acessem informações contextuais e realizem ações com o GitHub Copilot Chat em várias ferramentas usadas no ciclo de vida do desenvolvimento de software. Essas extensões agora podem ser disponibilizadas para todos através do GitHub Marketplace, e sua empresa pode impulsionar a adoção integrando seus próprios produtos com o GitHub Copilot. Neste workshop com os engenheiros seniores de entrega de serviços do GitHub, Damien Hardy e Guilherme Teixeira, você aprenderá o básico sobre como construir uma extensão personalizada e publicá-la no Marketplace.
- **O que você vai construir**: Sua primeira Extensão do Copilot.

# Workshop de Extensão do GitHub Copilot

Bem-vindo ao Workshop de Extensão do GitHub Copilot, onde exploramos o processo de construção e publicação de sua própria extensão do Copilot. Assim como um piloto usando um copiloto, você trabalhará ao lado do GitHub Copilot para aprimorar seu processo de desenvolvimento, resolvendo problemas complexos e automatizando tarefas por meio de uma extensão orientada por IA.

Este workshop é para desenvolvedores experientes que desejam explorar os limites das capacidades do GitHub Copilot. Você trabalhará de forma prática para criar uma extensão totalmente funcional que lida com tarefas-chave e, por fim, aprenderá como publicá-la no GitHub Marketplace.

Observe que o modelo usado neste workshop é leve e não é destinado para uso em produção. Ele foi projetado para ajudá-lo a entender os conceitos básicos de construção de uma extensão do Copilot e como integrá-la com suas próprias aplicações.

## Neste workshop, você irá:

- Configurar um ambiente de desenvolvimento usando o GitHub Codespaces.
- Criar sua própria extensão do GitHub Copilot.
- Implementar funcionalidades principais em nosso Agente que se conecta a uma API de Lista de Compras:
  - Estender o contexto do Agente fornecendo metadados para a função de remover um item da lista de compras.
  - Permitir que o Copilot entenda o uso da função de exclusão configurando os metadados relacionados.
  - Escrever uma função para integrar com o endpoint de Atualização da API de Lista de Compras e permitir que o Copilot entenda essa função.
  - Alterar o comportamento do seu agente modificando prompts codificados para que o Copilot entenda que pode aumentar a quantidade de um item em vez de adicionar um novo.
- Aprender como publicar uma extensão no GitHub Marketplace.

## O que esperar

- `Codificação Prática`. Desenvolva uma extensão real do Copilot com orientação.
- `Orientação Mínima`. Assuma o controle do seu processo de desenvolvimento com assistência fornecida apenas quando necessário.
- `Resolução Avançada de Problemas`. Aprofunde-se nas extensões do Copilot para criar funcionalidades.
- `Casos de Uso do Mundo Real`. Construa uma extensão funcional como modelo para integrar com suas próprias aplicações.

## Objetivo

O objetivo deste workshop é ajudá-lo a construir, refinar e publicar sua própria extensão do GitHub Copilot. Ao final deste workshop, você terá um entendimento profundo de como criar extensões do Copilot e integrar essas ferramentas em seu fluxo de trabalho diário de desenvolvimento.

## :mega: Pré-requisitos
Executaremos este workshop usando Codespaces, então você não precisa instalar nada em sua máquina. Você precisará da sua conta do GitHub.

---

## Laboratórios do Workshop

### Lab 1 - Configuração do Ambiente e Configuração Inicial

#### Lab 1.1 - Configurando seu Ambiente Codespaces
Esta seção irá guiá-lo na configuração do seu ambiente usando o GitHub Codespaces.

- Comece aqui - [1.1 - Codespaces](./labs/Lab%201.1%20-%20Codespaces/README.md)

---

### Lab 1.2 - Configurando um Agente - Lançando as Bases
Esta seção irá guiá-lo na configuração do seu agente copilot (como um App do GitHub).

- Comece aqui - [1.2 - Configurando um Agente](./labs/Lab%201.2%20-%20Configuring%20an%20Agent/README.md)

---

### Lab 2 - Entendendo a lógica
Esta seção dará uma visão geral do modelo usado para construir nosso agente copilot.

- Comece aqui - [2.0 Entendendo a Lógica](./labs/Lab%202.0%20-%20Understanding%20the%20Logic/README.md)

### Lab 3 - Estendendo a lógica

#### 3.1 - Permitindo que o Copilot Entenda a Função de Exclusão - Configurando Metadados
Você configurará os metadados necessários para permitir que o Copilot entenda e use a função de exclusão de forma eficaz.

- Comece aqui - [3.1 - Configurando Metadados de Exclusão](./labs/Lab%203.1%20-%20Configuring%20Delete%20Metadata/README.md)

#### 3.2 - Integrando com o Endpoint de Atualização da API de Lista de Compras - Função de Atualização
Esta seção foca em escrever uma função que integra com o endpoint de Atualização da API de Lista de Compras e configurar o Copilot para entender como usar essa função.

- Comece aqui - [3.2 - Integrando Função de Atualização](./labs/Lab%203.2%20-%20Integrating%20Update%20Function/README.md)

#### 3.3 - Modificando o Comportamento do Agente - Brincando com Prompts
Você modificará o comportamento do Copilot brincando com prompts codificados, garantindo que ele entenda como aumentar a quantidade de itens existentes em vez de adicionar novos.

- Comece aqui - [3.3 - Modificando o Comportamento do Agente](./labs/Lab%203.3%20-%20Modifying%20Agent%20Behaviour/README.md)

---

### 4. Passo a Passo - Publicando Sua Extensão

#### 4. Passo a Passo - Preparando para Publicação - Preparando-se para o Marketplace
Esta seção irá guiá-lo na preparação de sua extensão para publicação, incluindo testes finais e documentação.

- Comece aqui - [Passo a Passo - Publicação da Extensão](./labs/Walkthrough%20-%20Extension%20Publication/README.md)

---

## :book: Recursos
- [Documentação do GitHub - Sobre a construção de Extensões do Copilot](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)
- [Recursos de código](https://github.com/copilot-extensions)