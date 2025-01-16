# Lab 3.1 - Habilitando o Copilot para Entender a Função de Exclusão

Neste laboratório, você configurará os metadados para sua extensão do Copilot para permitir que ele entenda e processe a função de exclusão. Isso será feito mapeando a implementação da funcionalidade de exclusão da sua API nos metadados que o Copilot requer.

Antes de começarmos, vamos adicionar alguns itens à lista de compras através da janela de chat interagindo com o agente configurado.

### Passo 1: Adicionando Itens à Lista de Compras

1. Abra o painel de Chat do GitHub Copilot clicando no ícone do Copilot no canto inferior direito de qualquer página no GitHub.com.
2. Invoque sua extensão digitando `@NOME-DA-EXTENSÃO`, substituindo quaisquer espaços no nome por hífens.
3. Na janela de chat, peça ao seu agente Copilot para adicionar algo à lista de compras. Por exemplo:

<img src="images/chat-add-apples.png" alt="Janela de chat mostrando como adicionar maçãs à lista." width="600px" />

4. Verifique se o item foi adicionado com sucesso revisando a resposta na janela de chat.

### Passo 2: Configurando Metadados para a Função de Exclusão

Para permitir que o Copilot processe solicitações de exclusão, precisaremos olhar para a função de exclusão existente que foi implementada e transformá-la nos metadados que o Copilot pode entender.

1. Abra o arquivo `client.js` no seu repositório.
2. Localize a função responsável por excluir itens da lista de compras. O código deve se parecer com algo assim:

    ```javascript
        async function deleteShoppingListItem(id) {
        const url = `${baseurl}/items/${JSON.parse(id).id}`
          // implementação
        }
    ```

3. Agora, navegue até `functionMappings.js`. É aqui que você configurará os metadados para sua extensão do Copilot.
4. Adicione uma nova entrada para a função de exclusão, mapeando-a para a funcionalidade definida em `client.js`. A estrutura deve definir como o Copilot pode entender e invocar essa ação. Por exemplo:

    ```javascript
    {
        type: 'function',
        title: 'Excluir um item da lista de compras',
        description: 'Este item removerá o ID {id} da lista de compras.',
        requiresConfirmation: true,
        function: {
           name: 'deleteShoppingListItem',
           parameters: {
               type: 'object',
               properties: {
               id: {
                   type: 'string'
               }
               },
               required: ['id']
           }
        }
    }
    ```

    `title`, `description`, `function` `name` e `parameters` são os campos aos quais você precisa prestar atenção. `requiresConfirmation` é um booleano que indica se a função requer uma confirmação do usuário antes de ser invocada e deve ser usada para todas as operações destrutivas.

5. Salve suas alterações em `functionMappings.js`.

### Passo 3: Testando a Função de Exclusão

Agora que você configurou os metadados para a função de exclusão, é hora de testá-la na janela de chat.

1. Abra o painel de Chat do GitHub Copilot novamente.
2. Invoque sua extensão digitando `@NOME-DA-EXTENSÃO`.
3. Peça ao Copilot para excluir o item que você adicionou anteriormente. Por exemplo:

    **"@shopping-list-agent Exclua as maçãs da lista de compras."**

4. Verifique se o Copilot processa a solicitação e remove o item da lista.

5. Se o item for excluído com sucesso, seus metadados estão configurados corretamente e o Copilot agora pode lidar com ações de exclusão.

### Resumo

Neste laboratório, você habilitou sua extensão do Copilot para entender a função de exclusão por:

- Traduzir a funcionalidade de exclusão de `client.js` em metadados em `functionMappings.js`.
- Testar a funcionalidade de exclusão via a janela de chat.

Agora que você completou esta tarefa com sucesso, você pode seguir para o próximo laboratório para expandir ainda mais as capacidades da sua extensão do Copilot.

---

Continue para [Lab 3.2 - Integrando com o Endpoint de Atualização da API da Lista de Compras](./../Lab%203.2%20-%20Integrating%20Update%20Function/README.md)
