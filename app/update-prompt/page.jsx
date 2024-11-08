'use client';
import { useState , useEffect} from 'react';
import { useRouter , useSearchParams} from 'next/navigation';
import Form from '@components/Form';

const EditPrompt = () => {
 const router = useRouter();
 const searchParams = useSearchParams();
 const promptId = searchParams.get('id');
 const [submitting, setSubmitting] = useState(false);
 const [post, setPost] = useState({
  prompt: '',
  tags: '',
 });
 useEffect(() => {
  const getPrompt = async () => {
   const response = await fetch(`/api/prompt/${promptId}`)
   const data = await response.json();
   setPost({
    prompt: data.prompt,
    tag : data.tag
   })
  }
  if (promptId) getPromptDetails();
 } , [promptId])
 const createPrompt = async (e) => {
  console.log('is this heaten ');
  e.preventDefault();
  setSubmitting(true);

  try {
   const response = await fetch('api/prompt/new', {
    method: 'POST',
    body: JSON.stringify({
     prompt: post.prompt,
     userId: session?.user.id,
     tag: post.tags,
    }),
   });

   if (response.ok) {
    router.push('/');
   }
  } catch (error) {
   console.log(error);
  } finally {
   setSubmitting(false);
  }
 };
 return <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />;
};
export default EditPrompt;
