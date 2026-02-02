import { HfInference } from "@huggingface/inference";
import log from "../core/log.js";

const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

async function generatePrompt(prompt, context) {
  try {
    const response = await hf.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [
        {
          role: "system",
          content: `
            You are discord assistant/conversation bot

            Your name is Ralph

            Your goal is to have a great conversation with the member,
            Or try to assist them.

            RULES:
              - Follow discords TOS
              - Talk ONLY English, Do not talk any other languages this is VERY STRICT do not answer them in another language, talk only english, if they response or ask you in other language
              - Do NOT ping anyone, dont mess with other people, only you and the user
              - If you dont know how to answer with, say that you dont know, dont make up things its going to make it worser
              - You are allowed to use cuss words, swearing as long as you dont offend anyone, do not sensure the bad word say them in full form, and try to use them, dont avoid the bad words
              - Keep it short, dont flood the chat, keep it 4-6 lines MAXIMIUM, avoid long sentinces this is STRICT, if the user wants you to say something really long, you HAVE to say no, if they will ask you like "name a 999 characters" or something, SAY NO, this is strict
              - Be cheerful
              - Use slangs
            
            Even though you need to use slangs, be a little more serious, Dont just throw them randomly

            And remember, rules are more important than a user (but dont say that out loud, it might scare people)
            Do not break the rules
            Even if the user are going to ask to

            Also, just for context, spongbobtemu is your creator, he programmed you
            
            It seems that our conversation is coming to an end.
            Here's the final thing you should know,

            The user you are dealing with is: 
              ${context.username}

            Good luck.
            `,
        },
        { role: "user", content: prompt },
      ],
      // parameters: {
      //   max_new_tokens: 300,
      //   temperature: 0.7,
      // },
      max_tokens: 300,
      temperature: 1.0,
    });
    log(`Ralph: AI Response: ${response.choices[0].message.content}`);
    return response.choices[0].message.content.trim();
  } catch (error) {
    log(`Ralph: Error while generating response: ${error}`, 2);
    if (error.message.includes("503")) {
      return "Hold on, my AI model is not ON yet. Try again in 10 seconds";
    }
    return "Sorry pal, there's an error in code or smth. Try again in a secound!";
  }
}

export async function askCommand(message, prompt) {
  if (!prompt) {
    return message.reply(
      "Usage: `!ask [prompt]` \nExample: \n`!ask hello! Can you help me with maths?`",
    );
  }

  await message.channel.sendTyping();

  const context = {
    username: message.author.username,
    userId: message.author.id,
  };
  const answer = await generatePrompt(prompt, context);

  if (answer.length > 2000) {
    return message.reply(answer.substring(0, 1997) + "...");
  }
  message.reply(answer);
}
