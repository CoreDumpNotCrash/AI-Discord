import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { askCommand } from "./tools/generateResponseAI.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (
    message.author.bot ||
    !message.guild ||
    message.channel.id !== process.env.AI_CHANNEL
  ) return;

  const args = message.content.split(" ");
  const command = args[0];

  if (command === "!ask") {
    await askCommand(message, args.slice(1).join(" "));
  }
});

client.login(process.env.TOKEN);
