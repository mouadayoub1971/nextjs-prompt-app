import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt"
export const POST = async (req) => {
 const { userId, prompt, tag } = await req.json()
 
 try {
  await connectToDB()
  const newPrompt = new Prompt({
   creator: userId,
   prompt,
   tag
  })
  await newPrompt.save()
  console.log('Prompt saved');
  return new Response(JSON.stringify(newPrompt), { status: 201 });
 } catch (error) {
  return new Response(`prompt is faied for this reason ${error}` , {status : 500})
 }
}