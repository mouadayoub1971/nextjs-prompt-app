'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Form from '@components/Form';

const EditPromptContent = () => {
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
        tags: data.tag
      })
    }
    if (promptId) getPrompt();
  }, [promptId])

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if(!promptId) return alert("Missing prompt ID!");

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
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

  return (
    <Form 
      type="Edit" 
      post={post} 
      setPost={setPost} 
      submitting={submitting} 
      handleSubmit={updatePrompt} 
    />
  );
};

const EditPrompt = () => {
  return (
    <Suspense>
      <EditPromptContent />
    </Suspense>
  );
};

export default EditPrompt;