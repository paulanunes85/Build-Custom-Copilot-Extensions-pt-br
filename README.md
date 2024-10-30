<h1 align="center">How to build (and publish) custom GitHub Copilot extensions</h1>
<h5 align="center">@gateixeira @digimangos</h3>

<p align="center">
  <a href="#mega-prerequisites">Prerequisites</a>
  <a href="#workshop-labs">Workshop Labs</a>
  <a href="#book-resources">Resources</a>
</p>

- **Who is this for**: Enterprise - Developers, Open Source Developers or Maintainers, Startups
- **What you'll learn**: GitHub recently introduced GitHub Copilot Extensions, enabling teams to access contextual information and perform actions with GitHub Copilot Chat across various tools used in the software development lifecycle. These extensions can now be made available to everyone through the GitHub Marketplace, and your enterprise can drive adoption by integrating your own products with GitHub Copilot. In this workshop with GitHub’s senior service delivery engineers Damien Hardy and Guilherme Teixeira, you'll learn the basics of building a custom extension and publishing it to the Marketplace.
- **What you'll build**: Your first Copilot Extension.

# GitHub Copilot Extension Workshop

Welcome to the GitHub Copilot Extension Workshop, where we explore the process of building and publishing your own Copilot extension. Much like a pilot using a copilot, you'll work alongside GitHub Copilot to enhance your development process, solving complex problems and automating tasks through an AI-driven extension.

This workshop is for experienced developers looking to push the limits of GitHub Copilot’s capabilities. You’ll work hands-on to create a fully functional extension that handles key tasks, and ultimately, learn how to publish it to the GitHub Marketplace.

Please note that the template used in this model is lightweight and not intended for production use. It is designed to help you understand the core concepts of building a Copilot extension and how to integrate it with your own applications.

## In this workshop, you’ll:

- Set up a development environment using GitHub Codespaces.
- Create your own GitHub Copilot extension.
- Implement core functionality on our Agent that connects with a Shopping List API:
  - Extend the Agent context by providing metadata for the function to remove an item from the shopping list.
  - Enable Copilot to understand the use of the delete function by configuring the related metadata.
  - Write a function to integrate with the Shopping List API's Update endpoint and enable Copilot to understand this function.
  - Change the behaviour of your agent by modifying hard-coded prompts for Copilot to understand that it could increase the quantity of an item rather than adding a new one.
- Learn how you can publish an extension to the Github Marketplace.

## What to Expect

- `Hands-On Coding`. Develop a real Copilot extension with guidance.
- `Minimal Guidance`. Take charge of your development process with assistance provided only where necessary.
- `Advanced Problem Solving`. Dive deep into Copilot extensions to create functionality.
- `Real-World Use Cases`. Build a functional extension as a model to integrate with your own applications.

## Goal

The goal of this workshop is to help you build, refine, and publish your own GitHub Copilot extension. By the end of this workshop, you will have a deep understanding of how to create Copilot extensions, and integrate these tools into your daily development workflow.

## :mega: Prerequisites
We'll be running this workshop using Codespaces, so you don't need to install anything on your machine. You will need your GitHub Account.

---

## Workshop Labs

### Lab 1 - Environment Setup and Initial Configuration

#### Lab 1.1 - Setting Up Your Codespaces Environment
This section will guide you through setting up your environment using GitHub Codespaces.

- Get started here - [1.1 - Codespaces](./labs/Lab%201.1%20-%20Codespaces/README.md)

---

### Lab 1.2 - Configuring an Agent - Laying the Foundation
This section will guide you through setting up your copilot agent (as a GitHub App).

- Get started here - [1.2 - Configuring an Agent](./labs/Lab%201.2%20-%20Configuring%20an%20Agent/README.md)

---

### Lab 2 - Understanding the logic
This section will give you an overview of the template used to build our copilot agent.

- Get started here - [2.0 Understanding the Logic](./labs/Lab%202.0%20-%20Understanding%20the%20Logic/README.md)

### Lab 3 - Extending the logic

#### 3.1 - Enabling Copilot to Understand the Delete Function - Configuring Metadata
You will configure the necessary metadata to enable Copilot to understand and use the delete function effectively.

- Get started here - [3.1 - Configuring Delete Metadata](./labs/Lab%203.1%20-%20Configuring%20Delete%20Metadata/README.md)

#### 3.2 - Integrating with the Shopping List API’s Update Endpoint - Update Function
This section focuses on writing a function that integrates with the Shopping List API's Update endpoint and configuring Copilot to understand how to use this function.

- Get started here - [3.2 - Integrating Update Function](./labs/Lab%203.2%20-%20Integrating%20Update%20Function/README.md)

#### 3.3 - Modifying Agent Behaviour - Playing with Prompts
You will modify Copilot’s behaviour by playing with hard-coded prompts, ensuring it understands how to increase the quantity of existing items rather than adding new ones.

- Get started here - [3.3 - Modifying Agent Behaviour](./labs/Lab%203.3%20-%20Modifying%20Agent%20Behaviour/README.md)

---

### 4. Walkthrough - Publishing Your Extension

#### 4. Walkthrough - Preparing for Publication - Getting Ready for the Marketplace
This section will guide you through preparing your extension for publication, including final testing and documentation.

- Get started here - [Walkthrough - Extension Publication](./labs/Walkthrough%20-%20Extension%20Publication/README.md)

---

## :book: Resources
- [GitHub Docs - About building Copilot Extensions](https://docs.github.com/en/copilot/building-copilot-extensions/about-building-copilot-extensions)
- [Code resources](https://github.com/copilot-extensions)