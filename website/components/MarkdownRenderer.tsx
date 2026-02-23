import { MDXRemote } from 'next-mdx-remote/rsc';

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="rtl-content" id="content-container">
      <MDXRemote source={content} />
    </div>
  );
}
