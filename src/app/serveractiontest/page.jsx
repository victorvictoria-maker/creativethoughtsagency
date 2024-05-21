import { addPost, deletePost } from "@/lib/action";

const page = () => {
  return (
    <>
      <form action={addPost}>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='desc' name='desc' />
        <input type='text' placeholder='userid' name='userId' />
        <input type='text' placeholder='slug' name='slug' />

        <button>Click me </button>
      </form>

      <form action={deletePost}>
        <input type='text' placeholder='Enter post Id' name='id' />
        <button>Delete Post</button>
      </form>
    </>
  );
};

export default page;
