const API = 'https://jsonplaceholder.typicode.com/posts';
// const API = 'http://localhost:3000/api/posts'

export const getAllPosts = async () => {
  const response = await fetch(API);
  if(!response.ok) throw new Error('Unable to fetch posts.')
  return response.json();
}

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `${API}?q=${search}`
  );
  if(!response.ok) throw new Error('Unable to fetch post.')
  return response.json();
}

export const getPostById = async (id: string) => {
  const response = await fetch(`${API}/${id}`,
    /* { next: { revalidate: 60 } }*/
  );
  if (!response.ok) throw new Error('Unable to fetch post.')
  return response.json();
}



