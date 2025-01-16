# Lab 1.1 - Configurando Seu Ambiente Codespaces

Neste laboratório, você configurará seu ambiente de desenvolvimento usando o GitHub Codespaces. Este ambiente permitirá que você trabalhe na sua extensão do Copilot diretamente na nuvem, sem precisar instalar nada localmente.

## Passos para Completar

### 1. Iniciar o Codespace

Começaremos iniciando um Codespace na branch principal do repositório. Use o link rápido abaixo para começar:

[Iniciar Codespace na Principal](https://codespaces.new/githubuniverseworkshops/build-custom-copilot-extensions)

- Você deve ser direcionado para uma página onde seu ambiente Codespace é configurado automaticamente.

<img src="./images/create-codespace.png" width="600px" alt="Opções de criação do codespace" />

- Isso pode levar alguns momentos, pois o Codespaces provisiona o ambiente e puxa as dependências necessárias.

<img src="./images/codespace-building.png" width="600px" alt="Codespaces em processo de criação" />

### 2. Explore o Ambiente de Desenvolvimento

Uma vez que seu Codespace esteja pronto, você será direcionado para um ambiente de desenvolvimento totalmente configurado. Tire alguns minutos para se familiarizar com as ferramentas e o layout.

- Você deve ver um terminal, explorador de arquivos e editor de código prontos para uso.
- Os arquivos do repositório estão pré-carregados, e você pode começar a editar imediatamente.

<img src="./images/codespace-building.png" width="600px" alt="Codespace aberto" />

### 3. Verifique se o Repositório está na Branch Principal

Antes de prosseguir, verifique se você está trabalhando na branch `main`.

- Abra o terminal no Codespaces e execute o seguinte comando para verificar a branch atual:

    ```bash
    git branch
    ```

- Certifique-se de que `main` está destacado. Se você não estiver na branch `main`, mude para ela usando:

    ```bash
    git checkout main
    ```

- Certifique-se de que você tem o código mais recente puxando quaisquer mudanças:

    ```bash
    git pull
    ```

### 4. Inicie o Agente
Precisamos iniciar o agente no seu codespace. Você pode fazer isso executando o seguinte comando no terminal do seu codespace:

    ```bash
    npm run dev
    ```

### 5. Torne a porta da aplicação publicamente acessível

Para que o copilot acesse sua extensão, você precisa tornar a porta da aplicação publicamente acessível.

- Navegue até a aba `ports`

<img src="./images/ports-tab.png" width="600px" alt="Navegar até a aba de portas" />

- Clique com o botão direito na porta 3000 (API deste agente), selecione `Port Visibility` e depois `Public`

<img src="./images/change-visibility.png" width="600px" alt="Seleção de visibilidade da porta" />

**Nota:** Você precisará deste URL mais tarde, você pode clicar com o botão direito e selecionar "Copy Local Address" para torná-lo disponível para colar quando necessário.

### 5. Comece Sua Jornada de Desenvolvimento

Com o Codespace configurado e pronto, você está preparado para começar a trabalhar na sua extensão do Copilot. No próximo laboratório, criaremos a base para sua extensão.

---

Continue para [Lab 1.2 - Configurando um Agente](./../Lab%201.2%20-%20Configuring%20an%20Agent/README.md)
