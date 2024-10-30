# Lab 1.1 - Setting Up Your Codespaces Environment

In this lab, you will set up your development environment using GitHub Codespaces. This environment will allow you to work on your Copilot extension directly in the cloud without needing to install anything locally.

## Steps to Complete

### 1. Launch the Codespace

We'll begin by launching a Codespace on the main branch of the repository. Use the quick link below to get started:

[Launch Codespace on Main](https://codespaces.new/githubuniverseworkshops/build-custom-copilot-extensions)

- You should be directed to a page where your Codespace environment is automatically set up.

<img src="./images/create-codespace.png" width="600px" alt="Create codespace options" />

- This may take a few moments, as Codespaces provisions the environment and pulls in the required dependencies.

<img src="./images/codespace-building.png" width="600px" alt="Codespaces in the process of creation" />

### 2. Explore the Development Environment

Once your Codespace is ready, you will be dropped into a fully-configured development environment. Take a few minutes to familiarize yourself with the tools and layout.

- You should see a terminal, file explorer, and code editor ready for action.
- The repository files are pre-loaded, and you can start editing right away.

<img src="./images/codespace-building.png" width="600px" alt="Codespace open" />

### 3. Verify the Repository is on the Main Branch

Before proceeding, verify that you are working on the `main` branch.

- Open the terminal in Codespaces and run the following command to check the current branch:

    ```bash
    git branch
    ```

- Ensure that `main` is highlighted. If you're not on the `main` branch, switch to it using:

    ```bash
    git checkout main
    ```

- Ensure that you have the latest code by pulling any changes:

    ```bash
    git pull
    ```

### 4. Start the Agent
We need to start the agent in your codespace. You can do this by running the following command in your codespace terminal:

    ```bash
    npm run dev
    ```

### 5. Make application port publicly accessible

In order for copilot to access your extension, you need to make the application port publicly accessible.

- Navigate to the `ports` tab

<img src="./images/ports-tab.png" width="600px" alt="Navigate to the ports tab" />

- Right click on port 3000 (This agent's API), select `Port Visibility` and then `Public`

<img src="./images/change-visibility.png" width="600px" alt="Port visibility selection" />

**Note:** You will need this URL later, you are able to right click and select "Copy Local Address" to make it available to paste when required.

### 5. Start Your Development Journey

With the Codespace set up and ready, you're now prepared to begin working on your Copilot extension. In the next lab, we will create the foundation for your extension.

---

Continue to [Lab 1.2 - Configuring an Agent](./../Lab%201.2%20-%20Configuring%20an%20Agent/README.md)
