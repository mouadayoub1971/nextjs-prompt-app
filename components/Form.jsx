import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
   <>
    <section className="w-full max-w-full flex flex-col ">
     <h1 className="head_text  text-left">
      <span className="blue_gradient">{type} Post</span>
     </h1>
     <p className="desc text-left max-w-md">
      {type} and share amazing prompts with the worlsd, and let your imagination to inspire the entire world with best
      AI prompts{' '}
     </p>
     <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7  glassmorphism">
      <label>
       <span className="font-satoshi font-semibold text-base text-gray">Your Ai Prompt</span>
       <textarea
        value={post.prompt}
        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
        placeholder="please tap your prompt"
        required
        className="form_textarea"
       ></textarea>
      </label>

      <label>
       <span className="font-satoshi font-semibold text-base">
        Tag : <span className="font-normal">( #product, #webdevelopment, #idea, etc)</span>
       </span>
       <textarea
        value={post.tags}
        onChange={(e) => setPost({ ...post, tags: e.target.value })}
        placeholder="#tag"
        required
        className="form_input"
       ></textarea>
       <div className="flex-end mt-3 mb-5 mx-3 gap-4">
        <Link href="/" className=" text-gray-500 text-sm">
         Cancel
        </Link>
        <button
         type="submit"
         disabled={submitting}
         className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
         {submitting ? `${type}ing...` : type}
        </button>
       </div>
      </label>
     </form>
    </section>
   </>
  );
}
export default Form