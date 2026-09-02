import fs from 'fs/promises';

export type CommentSummary = {postId: number; id: number; commenterEmail: string};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${targetPostId}/comments`);
  const raw: Array<{postId: number; id: number; email: string}> = (await data.json()) as Array<{ postId: number; id: number; email: string }>;
  const summaries: CommentSummary[] = raw.map((comment) => ({postId: comment.postId, id: comment.id, commenterEmail: comment.email}));
  const filter = summaries.filter((comment) => !comment.commenterEmail.toLowerCase().endsWith(".org"));
  await fs.writeFile(outputPath, JSON.stringify(filter));
  return filter.length;
}
