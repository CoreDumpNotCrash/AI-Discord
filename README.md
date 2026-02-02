# AI Discord Bot

## About

This is **Ralph**, an open source discord bot powered with Artificial Intelligence.

You can use him in the Discord servers

Built using **Discord.js** and **Node.js**

## What it can do?

Ralph is a pretty small bot.

It has a `!ask [question]` command which works in specific channel.

It uses **meta-llama/Llama-3.1-8B-Instruct** as a model(text generation)

## How to install?

You are going to need to install **Node.js** And **npm** Package Manager

Clone this repository using **Git**, or download directly

Go to the project folder and open the **Terminal** and enter following:

```bash
npm install
```

Now is your next step is to setup `.env` file

Create a .env file, and enter following

```dotenv
TOKEN=YOUR_DISCORD_BOT_TOKEN
HUGGING_FACE_TOKEN=YOUR_HUGGING_FACE_TOKEN
AI_CHANNEL=YOUR_CHANNEL_ID
```

Go to [Discord Developer Portal](https://discord.com/developers/docs/intro)

and click "Applications" -> "Create Application" or choose your application

Go to **Bot** Section, and click on **"Reset Token"**

And store the password somewhere on your device

Now go to the [Hugging Face](https://huggingface.co/) Website

And Log in/Sign in into your account

Go to **Settings** -> **Access Tokens** -> **Create new token**

> [!IMPORTANT]
> Make sure that the token type is **Write**

And store the token somewhere on your device

And finally, go to your **Discord** server, or create a new one

And create a channel where you want to place your bot, and copy the ID of the channel

And replace the `YOUR_DISCORD_BOT_TOKEN` and `YOUR_HUGGING_FACE_TOKEN` and `YOUR_CHANNEL_ID` with the actual Token/ID

Now to run the code you need to enter following in **Terminal**

```bash
npm start
```

Enjoy!

## License

This project is licensed with [MIT LICENSE](./LICENSE)

That means that you are allowed to do anything with the code.
But there's no warranty.

[Learn more](https://en.wikipedia.org/wiki/MIT_License)
