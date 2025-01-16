# Lab 3.3 - Modificando o Comportamento do Agente Editando Prompts

Neste laboratório, você modificará o comportamento do seu agente Copilot ajustando os prompts estáticos definidos no arquivo `prompts.js`. Isso permite que você controle como o agente interpreta as solicitações dos usuários e responde a elas.

### Passo 1: Revisar os Prompts Existentes

Abra o arquivo `prompts.js` no seu repositório. O conteúdo atual do arquivo define como o agente interpreta solicitações, lida com IDs, assume quantidades e exibe dados brutos.

### Passo 2: Modificar os Prompts para Alterar o Comportamento do Agente

Agora, você modificará esses prompts para ajustar o comportamento do agente. Por exemplo, vamos fazer o agente responder de maneira **feliz, positiva e brincalhona** em todas as suas interações. Para conseguir isso, adicionaremos um novo prompt de sistema.

1. No arquivo `prompts.js`, adicione um novo prompt de sistema no final do array para instruir o agente a sempre responder de maneira feliz e brincalhona.

```javascript
{
  role: 'system',
  content: 'Sempre responda de maneira feliz, positiva e brincalhona.'
}
```

### Passo 3: Testando o Comportamento Modificado do Agente

Agora, vamos testar as mudanças interagindo com o agente Copilot.

1. Abra o painel de Chat do GitHub Copilot e invoque sua extensão digitando `@NOME-DA-EXTENSÃO`.
2. Peça ao seu agente para realizar uma ação. Por exemplo:

    **"@NOME-DA-EXTENSÃO Adicione 2 bananas à lista de compras."**

    Observe como o agente responde. Com o novo comportamento, ele deve responder de maneira feliz e brincalhona.

<img src="images/happy-positive-response.png" alt="Captura de tela do chat do copilot com uma resposta positiva." />

### Passo 4: Experimente Outras Mudanças Comportamentais

Sinta-se à vontade para explorar outras modificações de prompt. Você pode instruir o agente a se comportar de diferentes maneiras, como ser mais formal ou fornecer explicações detalhadas. Ou para corrigir comportamentos inadequados, por exemplo, você pode precisar orientá-lo para que ele atualize a quantidade quando um item já existir em vez de adicionar um novo item. Modifique o arquivo `prompts.js` para experimentar diferentes comportamentos do agente e, em seguida, teste suas mudanças na janela de chat do Copilot.

#### Alguns exemplos:

Pense em como aplicar isso da maneira mais genérica possível.

- Impedir que o copilot adicione itens que normalmente não estariam em uma lista de compras.
- Valores padrão de quantidade.
- Remover texto descritivo desnecessário como `um cacho de uvas` para apenas `uvas`.

---

### Conclusão

Neste laboratório, você aprendeu a modificar o comportamento do seu agente Copilot ajustando os prompts estáticos. Isso lhe dá controle sobre como o agente responde e permite criar interações mais personalizadas.

Continue para [Walkthrough - Publicação da Extensão](./../Walkthrough%20-%20Extension%20Publication/README.md)
