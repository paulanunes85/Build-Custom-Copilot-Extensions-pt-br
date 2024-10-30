
# Lab 1.2 - Creating Your Copilot Extension App

In this lab, you'll create a GitHub Copilot Extension by setting up a GitHub App. This app will serve as the foundation for integrating with GitHub Copilot.

Follow the steps below to configure your app and connect it to your Codespace environment.

## Steps to Complete

Watch the [Walkthrough video](https://youtu.be/VQ7Yqew9mYI) or follow the steps below to complete the lab.

</details>

### 1. Prerequisites

Before you start, ensure you have:

- **Port Forwarded**: Ensure that you have made your application port (3000) publically accessible from your codespace.
- **Started the Agent**: Ensure that you have started the agent in your codespace. You can do this by running the following command in your codespace terminal:

    ```bash
    npm run dev
    ```
- **Agent API URL**: You can find this from your ports tab in your codespace. It will be in the format `https://<your-codespace-name>-3000.githubpreview.dev/`

### 2. Create Your GitHub App

Now, let's create your GitHub App:

1. **Sign in to GitHub** and click on your profile photo in the upper-right corner of any page.

2. **Navigate to Account Settings**:
   - We will create an app owned by a personal account, to do that click on **Settings**.
   - It is possible to create an organization app, but we will not be doing this in the workshop.

3. In the left sidebar, click on **Developer settings**.

4. Then, click on **GitHub Apps**.

5. Click on **New GitHub App**.

6. Under **GitHub App name**, enter a name for your app. Note:
   - The name cannot exceed 34 characters.
   - The name will be displayed in lowercase, with spaces replaced by hyphens, and accents ignored. For example, "My App Name” would display as “my-app-name”.
   - Ensure the name is unique across GitHub and not already in use by another account.
     - example `copilot-workshop-<YOUR-GITHUB-HANDLE>`

7. Optionally, provide a description of your app under **Description**. This description will be visible to users and organizations when they install your app.

8. Under **Homepage URL**, enter a URL for your app. You can use:
   - Enter any URL here for the workshop e.g. `https://mycopilotextension.com`.

9. Under **Callback URL**, enter the URL from codespaces. It will be in the format `https://<your-codespace-name>-3000.githubpreview.dev/`. This is the local address from Lab 1.1 step 5.

10. Under **Webhook**, deselect **Active**.

11. **Set Permissions**:
   - In the left sidebar, click on **Permissions & events**.
   - Click to expand the **Account permissions** section.
   - In the **GitHub Copilot Chat** row, select **Access** from the dropdown menu, then choose **Read-only**. Click **Save changes**.

12. Click on **Create GitHub App**.

<img src="images/register-new-github-app.png" alt="screenshot of github app registration" width="600px" />

### 3. Configuring your GitHub App for your Copilot agent

1. **Complete Copilot Settings**:
   - In the left sidebar, click on **Copilot**.
   - In the **App type** section, select the dropdown menu and click **Agent**.
   - Under **URL**, enter the url from codespaces (the same you used in the "callback" field).
   - Under **Inference description**, type a brief description of your agent, then click **Save**. This description will be visible to users when they hover over your agent's slug in the chat window.

<img src="images/copilot-agent-configuration.png" width="600px" alt="Screen for configuration of your copilot agent" />

2.  **Using Your Extension**:
    - On any page on GitHub.com, click the **GitHub Copilot** icon at the bottom right of the page. The GitHub Copilot Chat panel will display.
    - To resize the panel, click and drag the top or left edge.
    - If the panel contains a previous conversation, click the **New conversation** icon (a plus sign) at the top right of the panel.

<img src="images/chat-icon-shortcut.png" width="600px" alt="Indication of the chat shortcut icon" />

3.  **Invoke Your Extension**:
    - Type @EXTENSION-NAME, replacing any spaces in the extension name with hyphens, then press **Enter** (be mindful that, for a new extension, it may take some time to have the name auto-completed, thus try typing the full name on the first times you invoke your extension).

<img src="images/chat-type-extension-name.png" alt="Type the extension name to activate it." />

4.  **Connect**:
    - If this is your first time using the extension, you will be prompted to connect the app.

<img src="images/chat-connect-agent.png" alt="Click on connect to allow your agent to connect." />

5.  **Authorize**:
    - After connecting, you will be prompted to authorize the app.

<img src="images/chat-authorize-agent.png" alt="Click on authorize to authorize your agent." />

6.  **Development Port**:
    - If detected you may be prompted to authorize your agent to communicate over the development port of codespaces.

<img src="images/chat-development-port.png" alt="Screen showing prompt for codespaces port access." />

7.  **Ask Your Extension a Question**:
    - Once authenticated, you can start interacting with your extension. For example, ask: "What is the software development lifecycle?"

<img src="images/chat-in-action.png" alt="Agent responding to request." />

Some other examples you could try:

> Add an apple to the shopping list
>
> Add 5 oranges to the list
>
> What's on the list?
>
> How can you help me?


---

With your GitHub App now configured and ready, you can proceed to the next lab, where you will start building out the core functionality for your extension.

Continue to [Lab 2.0 - Understanding the Logic](./../Lab%202.0%20-%20Understanding%20the%20Logic/README.md)

---

Also see - [GitHub Docs - Creating a GitHub App for Your Copilot Extension](https://docs.github.com/en/copilot/building-copilot-extensions/creating-a-copilot-extension/creating-a-github-app-for-your-copilot-extension)

---
