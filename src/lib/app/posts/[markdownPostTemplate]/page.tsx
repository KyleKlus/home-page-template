/** @format */
import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import MarkdownSection from '@/lib/components/markdown/MarkdownSection';
import Markdown from 'markdown-to-jsx';
import Content from '@/lib/components/container/Content';
import IPost from '@/lib/interfaces/IPost';
import { GetStaticPropsContext } from 'next/types';
import MarkdownImage from '@/lib/components/markdown/MarkdownImage';

interface IMarkdownPostTemplateProps {
  params: { params: IPost }
}

type Params = {
  params: {
    markdownPostTemplate: string
  }
}
// IMPORTANT: The folder name neeeeds to be the same as the param name
export default async function MarkdownPostTemplate({ params: { markdownPostTemplate } }: Params) {
  console.log(markdownPostTemplate);
  const post = getFile(markdownPostTemplate);
  return (

    <Content className={['applyHeaderOffset'].join(' ')}>
      <Markdown options={{
        wrapper: MarkdownSection,
        overrides: {
          img: {
            component: MarkdownImage,
          },
        },
        forceWrapper: true
      }}>{post.content}</Markdown>
    </Content>
  );
}

export async function generateStaticParams() {
  const folder = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(folder)

  const markdownFilenames = filenames.filter(file => file.endsWith('.md')).map(filename => filename.replace('.md', ''))

  return markdownFilenames.map(name => ({ markdownPostTemplate: name }));
}

function getFile(filename: string): IPost {
  const folder = path.join(process.cwd(), 'posts');
  const delimiter = '---'

  const slug = filename
  const filepath = path.join(folder, filename + '.md');
  const buffer = fs.readFileSync(filepath, 'utf-8')
  let fileContent = buffer.toString();
  let frontmatter = {}

  if (fileContent.startsWith(delimiter)) {
    frontmatter = matter(fileContent).data
    const startOfFrontmatter = fileContent.indexOf(delimiter)
    const endOfFrontmatter = fileContent.indexOf(delimiter, startOfFrontmatter + delimiter.length) + delimiter.length
    fileContent = fileContent.substring(endOfFrontmatter, fileContent.length)
  }

  return {
    name: filename,
    slug: slug,
    path: filepath,
    frontmatter: frontmatter,
    content: fileContent
  }
}