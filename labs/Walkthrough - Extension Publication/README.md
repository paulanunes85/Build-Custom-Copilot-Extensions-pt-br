# Passo a Passo para Publicar a Extensão do Copilot

Esta seção detalha o processo de publicação do seu agente no marketplace. Isso é baseado no conteúdo de [GitHub Docs - Gerenciando a disponibilidade da sua Extensão Copilot](https://docs.github.com/en/copilot/building-copilot-extensions/managing-the-availability-of-your-copilot-extension)

---

### Passo 1: Alterando a Visibilidade da Sua Extensão Copilot

Depois de construir sua Extensão Copilot, para prepará-la para o Marketplace, é necessário torná-la pública. Isso permite que qualquer pessoa com o link para a página de instalação do seu aplicativo possa instalá-lo. Para alterar a visibilidade da sua Extensão Copilot, siga estes passos:

1. No canto superior direito do GitHub, clique na sua foto de perfil e selecione **Your organizations**.
2. Em "Organizations", ao lado do nome da sua organização, clique em **Settings**.
3. Na parte inferior da barra lateral, selecione **Developer settings**, depois clique em **GitHub Apps**.
4. Ao lado da sua Extensão Copilot, clique em **Edit**.
5. Na barra lateral, clique em **Advanced**.
6. Na parte inferior da seção "Danger Zone", escolha uma das seguintes opções:
   - **Make public**: Seu Aplicativo GitHub está atualmente privado, e apenas a organização ou usuário que o criou pode instalá-lo. Clique em **Make public** para permitir que qualquer pessoa com o link para a página de instalação do seu aplicativo possa instalá-lo.
7. Se o seu aplicativo for público, você pode compartilhar o link para a página de instalação clicando em **Public page** na barra lateral e copiando o link.

### Passo 2: Listando Sua Extensão Copilot no GitHub Marketplace

Para listar sua Extensão Copilot no GitHub Marketplace, siga estes passos:

1. Uma vez que o aplicativo esteja público...
2. Role para baixo até a seção **Marketplace** e clique em **List in Marketplace**. Esta opção só é visível se o seu aplicativo for público.

3. Na caixa de texto **Listing name**, digite um nome para sua listagem. O nome deve seguir uma destas convenções:
   - NOME-DO-SEU-PRODUTO (exemplo: "Copilot")
   - NOME-DA-SUA-EMPRESA (exemplo: "GitHub")
   - NOME-DA-SUA-EMPRESA-PRODUTO (exemplo: "GitHub Copilot")

4. Na seção **Primary category**, selecione uma categoria no menu suspenso.

5. Preencha todas as seções obrigatórias para sua listagem.
6. Verifique se a conta da organização que possui o Aplicativo GitHub é um editor verificado no GitHub Marketplace.
   - Se sua organização ainda não for verificada, siga os passos para solicitar a verificação do editor.
7. Aceite o **GitHub Marketplace Developer Agreement**.

Uma vez que esses passos sejam concluídos, clique em **Submit for review**.

### Passo 4: Processo de Revisão do GitHub Marketplace

Depois de enviar sua extensão, o GitHub a revisará para garantir que ela atenda aos padrões de qualidade, desempenho, confiabilidade e segurança. Se sua submissão for aprovada, ela será listada no GitHub Marketplace. Se sua submissão for negada, o GitHub fornecerá feedback, e você poderá resolver quaisquer problemas antes de reenviar.

### Conclusão

Neste laboratório, você aprendeu como gerenciar a visibilidade da sua Extensão Copilot e listá-la no GitHub Marketplace. Isso permitirá que outros descubram e instalem sua extensão.


