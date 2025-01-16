# Lab 3.2 - Integrando com o Endpoint de Atualização da API da Lista de Compras

Neste laboratório, você expandirá a funcionalidade da sua extensão do Copilot integrando-a com o endpoint de atualização da API da Lista de Compras. Isso permitirá que o Copilot entenda solicitações de atualização e modifique itens na lista de compras.

Antes de mergulharmos na implementação, vamos primeiro garantir que há um item adicionado à lista, para que possamos atualizá-lo posteriormente.

### Passo 1: Adicionando um Item à Lista de Compras

1. Abra o painel de Chat do GitHub Copilot clicando no ícone do Copilot no canto inferior direito de qualquer página no GitHub.com.
2. Invoque sua extensão digitando `@NOME-DA-EXTENSÃO`.
3. Na janela de chat, peça ao seu agente Copilot para adicionar algo à lista de compras. Por exemplo:

    **"Adicione 1 Plush Octocat à lista de compras."**

4. Verifique se o item foi adicionado com sucesso revisando a resposta na janela de chat.

### Passo 2: Revisando a Especificação da API para a Função de Atualização

Antes de implementarmos a funcionalidade de atualização, vamos examinar a especificação da API da Lista de Compras para atualizar um item.

<img src="images/update-specification.png" width="600px" alt="Captura de tela da especificação do endpoint no Swagger UI" />

### Passo 3: Implementando a Função de Atualização em `client.js`

Agora, vamos codificar a funcionalidade de atualização dentro do arquivo `client.js` para lidar com atualizações dos itens na lista de compras.

Abra o arquivo `client.js` no seu repositório.
Implemente a função de atualização com base na especificação da API. A função deve se parecer com isso:

```javascript
async function updateShoppingListItem(details) {
  const { id, quantity, description } = details
  const url = `${baseurl}/items/${id}`

  const updateData = { id, quantity, description }

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    })

    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error processing API call:', error)
    throw error
  }
}
```

Salve as alterações no arquivo `client.js`.

### Passo 4: Configurando Metadados para a Função de Atualização

Agora que a função de atualização está implementada, precisamos configurar os metadados em `functionMappings.js` para que o Copilot entenda como invocar essa funcionalidade.

Abra o arquivo `functionMappings.js`.

Adicione uma nova entrada para a função de atualização.

Os metadados devem se parecer com isso:

```javascript
{
    type: 'function',
    title: 'Atualiza um item na lista de compras.',
    description: 'Esta ação atualizará o item {id} na lista de compras.',
    requiresConfirmation: true,
    function: {
      name: 'updateShoppingListItem',
      parameters: {
        type: 'object',
        properties: {
          id: {
            type: 'number',
            description: 'O nome do item a ser atualizado.'
          },
          quantity: {
            type: 'number',
            description: 'A nova quantidade para o item.'
          },
          description: {
            type: 'string',
            description: 'A nova descrição do item sendo atualizado.'
          }
        },
        required: ['id']
      }
    }
  }
```

Finalmente, atualize o array de funções `functions` para incluir o nome da sua nova função.

Salve suas alterações em `functionMappings.js`.

### Passo 5: Testando a Função de Atualização

Agora que a função de atualização está implementada e os metadados estão configurados, é hora de testá-la.

Abra o painel de Chat do GitHub Copilot.
Invoque sua extensão digitando @NOME-DA-EXTENSÃO.
Peça ao Copilot para atualizar a quantidade do item que você adicionou anteriormente. Por exemplo:
"@NOME-DA-EXTENSÃO Atualize a lista porque agora eu gostaria de 2 Plush Octocats em vez de 1."

Verifique se o Copilot processa a solicitação e atualiza o item na lista.

Se a quantidade for atualizada com sucesso, os metadados e a implementação estão configurados corretamente, e o Copilot agora pode lidar com ações de atualização.

### Resumo

Neste laboratório, você integrou sua extensão do Copilot com a funcionalidade de atualização da API da Lista de Compras por:

- Implementar a função de atualização em `client.js`.
- Configurar os metadados para a função de atualização em `functionMappings.js`.
- Testar a funcionalidade de atualização via a janela de chat.

---

Agora que você completou esta tarefa, sua extensão do Copilot é capaz de atualizar itens na lista de compras. Siga para o próximo laboratório para explorar mais capacidades.

Continue para [Lab 3.3 - Modificando o Comportamento do Agente](./../Lab%203.3%20-%20Modifying%20Agent%20Behaviour/README.md).
