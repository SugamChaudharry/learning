import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addpost, fetchPosts, fetchTags } from "../api/api";
import React from "react";

const PostLists = () => {

  const {
    data: postData,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const { data: tagsData } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  const queryClient = useQueryClient()

  const {
    mutate,
    isError: ispostError,
    isPending,
    error: postError,
  } = useMutation({
    mutationFn: addpost,
    // onMutate:()=>{

    // },
    onSuccess: ()=>{
      queryClient.invalidateQueries({
        queryKey: ["posts"],
        exact: true,
      })
    }

  });
  const handleSumbit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const title = formData.get("title");
    const tags = Array.from(formData.keys()).filter(
      (key) => formData.get(key) === "on"
    );
    if(!tags || !title) return

    mutate({id: postData.length +1 ,title,tags})
  }
  return (
    <div className="text-white ">
      <form onSubmit={handleSumbit} className="bg-slate-500 text-black">
        <input
          type="text"
          placeholder="Enter your post..."
          className="h-9 p-6  my-10 w-full rounded-xl"
          name="title"
        />
        <div className="flex items-center justify-around">
          {tagsData?.map((tag) => {
            return (
              <div key={tag}>
                <input name={tag} id={tag} type="checkbox" />
                <label htmlFor={tag}>{tag}</label>
              </div>
            );
          })}
        </div>
        <button className="bg-slate-800 py-3 px-6 rounded-xl my-10 w-full">Post</button>
      </form>

      {isLoading && isPending && <p> Loading...</p>}
      {isError && <p>{error?.message}</p>}
      {ispostError && <p>{postError?.message}</p>}

      {postData?.map((post) => {
        return (
          <div key={post.id}>
            <h2 className="text-4xl flex items-center ">{post.title}</h2>
            {post.tags.map((tag) => (
              <ui className="text-xl flex items-center" key={tag}>
                <li>{tag}</li>
              </ui>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PostLists;
