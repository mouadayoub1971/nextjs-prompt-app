// GET (READ)

import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (request, {params}) => {
 try {
  await connectToDB();
  const prompt = await Prompt.findById(params.id).populate('creator');
  if(!prompt) return new Response("The prompt not found ", {status : 404})
  return new Response(JSON.stringify(prompt), { status: 200 });
 } catch (error) {
  return new Response(`failed to retrieve the data , the error is ${error}`, { status: 500 });
 }
};


// PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
 const { prompt, tag } = await request.json();
 console.log(`the prompt in the db is ${prompt} the tag is ${tag}`)

 try {
  await connectToDB();
  // find the existing prompt 
  const existingPrompt = await Prompt.findById(params.id);
  if (!existingPrompt) {
   return new Response("The prompt doesn't exit boy", { status: 404 });
  }
  // update the field

  existingPrompt.prompt = prompt;
  existingPrompt.tag = tag;

  await existingPrompt.save();

  return new Response("The update was made successfully", {status: 200})
  
 } catch(error) {
  return new Response(`Ooh Ooh an error appeared ${error}`, {status: 500})
 }
}

// DELETE (DELETE)
export const DELETE = async (request, { params }) => {
 try {
  await connectToDB();
  // find the prompt id and remove it 
  await Prompt.findByIdAndDelete(params.id);
  return new Response('The delete was made successfully', { status: 200 });

 } catch (error) {
  return new Response(`Ooh Ooh an error appeared ${error}`, { status: 500 });
 }
}