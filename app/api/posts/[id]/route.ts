import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { posts } from "@/app/api/posts/posts";

export async function GET(req: Request,
  { params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.filter(post => post.id.toString() === id)[0];
  return NextResponse.json(post);
};

export async function DELETE(req: Request,
  { params }: { params: { id: string } }) {
  const { id } = params;

  const headerList = headers();
  const type = headerList.get('Content-Type')
  const cookiesList = cookies();
  const coo2 = cookiesList.get('Cookie_1')?.value
  //logic delete post
  //redirect('/blog');

  return NextResponse.json({ id, type, cookie: coo2 });
};
export async function PUT(req: Request,
  { params }: { params: { id: string } }) {
  const { id } = params;

  return NextResponse.json({ id });
};