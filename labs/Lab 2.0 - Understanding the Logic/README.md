Neste laboratório, você explorará a base de código de um projeto que integra com uma API de lista de compras usando o GitHub Copilot. Este guia irá orientá-lo pelos arquivos principais e suas funcionalidades.

## Passos para Completar

### 1. Visão Geral da Base de Código

O projeto consiste em vários arquivos principais que você precisa para o workshop:

- `index.js`: O arquivo principal do servidor que lida com solicitações recebidas e interage com a extensão do Copilot.
- `client.js`: Contém funções para interagir com a API da lista de compras.
- `functionMappings.js`: Mapeia nomes de funções para suas descrições e parâmetros.
- `prompts.js`: Define prompts estáticos usados pela extensão do Copilot.

### 2. Explore `index.js`

Este arquivo configura um servidor Express e lida com solicitações recebidas. Inclui funções para chamar funções da API e gerenciar confirmações.

### 3. Explore `client.js`

Este arquivo contém funções para interagir com a API da lista de compras.

- **getShoppingList**: Busca a lista de compras atual.
- **addShoppingListItem**: Adiciona um item à lista de compras.
- **deleteShoppingListItem**: Exclui um item da lista de compras.

### 4. Explore `functionMappings.js`

Este arquivo mapeia nomes de funções para suas descrições e parâmetros. Ele ajuda a extensão do Copilot a entender o que cada função faz e quais parâmetros ela requer.

- **functionMappings**: Um array de objetos, cada um representando uma função com seu título, descrição e parâmetros.

### 5. Explore `prompts.js`

Este arquivo define prompts estáticos usados pela extensão do Copilot para guiar suas interações.

- **staticPrompts**: Um array de objetos, cada um representando um prompt com um papel e conteúdo.

---

Continue para [Lab 3.1 - Configurando Metadados de Exclusão](./../Lab%203.1%20-%20Configuring%20Delete%20Metadata/README.md).