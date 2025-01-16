# Lab 1.2 - Criando Seu Aplicativo de Extensão do Copilot

Neste laboratório, você criará uma Extensão do GitHub Copilot configurando um Aplicativo GitHub. Este aplicativo servirá como base para a integração com o GitHub Copilot.

Siga os passos abaixo para configurar seu aplicativo e conectá-lo ao seu ambiente Codespace.

## Passos para Completar

Assista ao [vídeo tutorial](https://youtu.be/VQ7Yqew9mYI) ou siga os passos abaixo para completar o laboratório.

### 1. Pré-requisitos

Antes de começar, certifique-se de que você tem:

- **Porta Encaminhada**: Certifique-se de que você tornou a porta da sua aplicação (3000) publicamente acessível a partir do seu codespace.
- **Agente Iniciado**: Certifique-se de que você iniciou o agente no seu codespace. Você pode fazer isso executando o seguinte comando no terminal do seu codespace:

    ```bash
    npm run dev
    ```
- **URL da API do Agente**: Você pode encontrar isso na aba de portas do seu codespace. Será no formato `https://<seu-nome-do-codespace>-3000.githubpreview.dev/`

### 2. Crie Seu Aplicativo GitHub

Agora, vamos criar seu Aplicativo GitHub:

1. **Faça login no GitHub** e clique na sua foto de perfil no canto superior direito de qualquer página.

2. **Navegue até Configurações da Conta**:
   - Vamos criar um aplicativo de propriedade de uma conta pessoal, para isso clique em **Settings**.
   - É possível criar um aplicativo de organização, mas não faremos isso no workshop.

3. Na barra lateral esquerda, clique em **Developer settings**.

4. Em seguida, clique em **GitHub Apps**.

5. Clique em **New GitHub App**.

6. Em **GitHub App name**, insira um nome para seu aplicativo. Nota:
   - O nome não pode exceder 34 caracteres.
   - O nome será exibido em letras minúsculas, com espaços substituídos por hífens e acentos ignorados. Por exemplo, "Meu Nome de App" seria exibido como “meu-nome-de-app”.
   - Certifique-se de que o nome é único no GitHub e não está sendo usado por outra conta.
     - exemplo `copilot-workshop-<SEU-HANDLE-GITHUB>`

7. Opcionalmente, forneça uma descrição do seu aplicativo em **Description**. Esta descrição será visível para usuários e organizações quando instalarem seu aplicativo.

8. Em **Homepage URL**, insira uma URL para seu aplicativo. Você pode usar:
   - Insira qualquer URL aqui para o workshop, por exemplo, `https://minhaextensaocopilot.com`.

9. Em **Callback URL**, insira a URL do codespaces. Será no formato `https://<seu-nome-do-codespace>-3000.githubpreview.dev/`. Este é o endereço local do Passo 5 do Lab 1.1.

10. Em **Webhook**, desmarque **Active**.

11. **Defina Permissões**:
   - Na barra lateral esquerda, clique em **Permissions & events**.
   - Clique para expandir a seção **Account permissions**.
   - Na linha **GitHub Copilot Chat**, selecione **Access** no menu suspenso e escolha **Read-only**. Clique em **Save changes**.

12. Clique em **Create GitHub App**.

<img src="images/register-new-github-app.png" alt="captura de tela do registro do novo aplicativo github" width="600px" />

### 3. Configurando seu Aplicativo GitHub para seu agente Copilot

1. **Complete as Configurações do Copilot**:
   - Na barra lateral esquerda, clique em **Copilot**.
   - Na seção **App type**, selecione o menu suspenso e clique em **Agent**.
   - Em **URL**, insira a URL do codespaces (a mesma que você usou no campo "callback").
   - Em **Inference description**, digite uma breve descrição do seu agente e clique em **Save**. Esta descrição será visível para os usuários quando eles passarem o mouse sobre o slug do seu agente na janela de chat.

<img src="images/copilot-agent-configuration.png" width="600px" alt="Tela para configuração do seu agente copilot" />

2.  **Usando Sua Extensão**:
    - Em qualquer página no GitHub.com, clique no ícone **GitHub Copilot** no canto inferior direito da página. O painel de Chat do GitHub Copilot será exibido.
    - Para redimensionar o painel, clique e arraste a borda superior ou esquerda.
    - Se o painel contiver uma conversa anterior, clique no ícone **New conversation** (um sinal de mais) no canto superior direito do painel.

<img src="images/chat-icon-shortcut.png" width="600px" alt="Indicação do ícone de atalho do chat" />

3.  **Invoque Sua Extensão**:
    - Digite @NOME-DA-EXTENSÃO, substituindo quaisquer espaços no nome da extensão por hífens, e pressione **Enter** (tenha em mente que, para uma nova extensão, pode levar algum tempo para que o nome seja auto-completado, então tente digitar o nome completo nas primeiras vezes que você invocar sua extensão).

<img src="images/chat-type-extension-name.png" alt="Digite o nome da extensão para ativá-la." />

4.  **Conectar**:
    - Se for a primeira vez que você usa a extensão, você será solicitado a conectar o aplicativo.

<img src="images/chat-connect-agent.png" alt="Clique em conectar para permitir que seu agente se conecte." />

5.  **Autorizar**:
    - Após conectar, você será solicitado a autorizar o aplicativo.

<img src="images/chat-authorize-agent.png" alt="Clique em autorizar para autorizar seu agente." />

6.  **Porta de Desenvolvimento**:
    - Se detectado, você pode ser solicitado a autorizar seu agente a se comunicar pela porta de desenvolvimento do codespaces.

<img src="images/chat-development-port.png" alt="Tela mostrando solicitação de acesso à porta do codespaces." />

7.  **Pergunte Algo à Sua Extensão**:
    - Uma vez autenticado, você pode começar a interagir com sua extensão. Por exemplo, pergunte: "Qual é o ciclo de vida do desenvolvimento de software?"

<img src="images/chat-in-action.png" alt="Agente respondendo à solicitação." />

Alguns outros exemplos que você pode tentar:

> Adicione uma maçã à lista de compras
>
> Adicione 5 laranjas à lista
>
> O que está na lista?
>
> Como você pode me ajudar?


---

Com seu Aplicativo GitHub agora configurado e pronto, você pode prosseguir para o próximo laboratório, onde começará a construir a funcionalidade principal da sua extensão.

Continue para [Lab 2.0 - Entendendo a Lógica](./../Lab%202.0%20-%20Understanding%20the%20Logic/README.md)

---

Veja também - [Documentação do GitHub - Criando um Aplicativo GitHub para Sua Extensão Copilot](https://docs.github.com/en/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension)

---
