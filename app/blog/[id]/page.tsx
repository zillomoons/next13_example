import { getAllPosts, getPostById } from "@/services/getPosts";
import { Metadata } from "next"


type Props = {
  params: {
    id: string
  }
}
export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();
  
  return posts.map(post => ({
    slug: post.id.toString(),
  }))
}

export async function generateMetadata({
  params: { id }
}: Props): Promise<Metadata> {
  const res = await getPostById(id);
  const post = Array.isArray(res) ? res[0] : res; 

  return {
    title: post.title,
  }
}

export default async function Post({ params: {id} }: Props) {
  const res = await getPostById(id);
  const post = Array.isArray(res) ? res[0] : res; 
  
  return <>
    <h1>{ post.title }</h1>
    <p>{post.body}</p>
  </>
}