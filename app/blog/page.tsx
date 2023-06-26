import { PostSearch } from '@/app/components/PostSearch';
import {Posts} from '@/app/components/Posts';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Blog | Next App',
  description: 'Generated by create next app',
}

const Blog = () => {

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  )
};

export default Blog