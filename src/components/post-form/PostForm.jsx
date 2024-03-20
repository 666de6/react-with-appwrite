import React, {useCallback, useEffect} from "react";
import {useForm} from "react-hook-form"
import Button from "../Button"
import Input from "../Input"
import RTE from "../RTE"
import Select from "../Select"
import appwriteSerice from "../../appwrite/blogService"
import {useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"

function PostForm({post}) {
  const { register, handleSubmit, watch, setValue, control, getValues, reset } = useForm();
  
  const navigate = useNavigate();
  const userData = useSelector(state => state.auth.userData);
  const submit = async(data) => {
    console.log({data})
    if (post) {
        const file = data.image[0] ? await appwriteSerice.uploadFile(data.image[0]) : null

        if (file) {
            appwriteSerice.deleteFile(post.featuredImage)
        }
        const dbPost = await appwriteSerice.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined 
        })
        if (dbPost) {
            navigate(`/post/${dbPost.$id}`)
        }
    } else {
      const file = await appwriteSerice.uploadFile(data.image[0])
      if (file) {
        const fileId = file.$id
        data.featuredImage = fileId
        const dbPost = await appwriteSerice.createPost({...data, userId: userData.$id})
        
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`)
        }
      }
    }
  };
  
  const slugTransform = useCallback((value) => {
    if(value && typeof value === "string") return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-')
    .replace(/\s/g, "-");
}, []);

useEffect(() => {  
  console.log({post})
    reset({
      title: post?.title || '',
      slug: post?.$id || '',
      content: post?.content || '',
      status: post?.status || 'active', 
    })
    watch((value, {name}) => {
      // ??
      if(name === 'title'){
        setValue("slug", slugTransform(value.title), {shouldValidate: true})
      }
    })
  }, [watch, slugTransform, setValue, post])

  return (
    <form onSubmit={handleSubmit(submit)}
    className="flex flex-wrap"
    >
      <div className="w-full px-2">
        {/* title */}
        <Input
        label='Title'
        placeholder='Title'
        className='mb-4'
        {...register('title', {required: true})}
        />
        {/* slug */}
        <Input
        label='Slug'
        placeholder='Slug'
        className='mb-4'
        {...register('slug', {required: true})}
        onInput={(e) => {
          setValue('slug', slugTransform(e.target.value), {shouldValidate: true})
        }}
        /> 
        {/* RTE */}
        <RTE
        label='Content'
        name='content'
        control={control}
        defaultValue={getValues('content')}
        />
      
        <Input
          label="Featured Image"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg"
          {...register("image", {required: !post})}
          />
          {post && (
              <div className="w-full mb-4">
                  <img src={appwriteSerice.getFilePreview(post.featuredImage)} alt={post.title}
                  className="rounded-lg"
                  />
                  
              </div>
          )}
          <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", {required: true})}
          />
          <Button
          type="submit"
          bgColor={post ? "bg-green-500": undefined}
          className="w-full"
          >{post ? "Update": "Submit"}</Button>
      </div>

    </form>
  );
}

export default PostForm;