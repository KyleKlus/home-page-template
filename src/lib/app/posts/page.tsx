import MarkdownPostListTemplate from '@/lib/app/posts/MarkdownPostListTemplate'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import IPost from '@/lib/interfaces/IPost';

async function getPosts(): Promise<IPost[]> {
    const folder = path.join(process.cwd(), 'posts');
    const filenames = fs.readdirSync(folder)

    const markdownFilenames = filenames.filter(file => file.endsWith('.md')).map(filename => filename.replace('.md', ''))
    const delimiter = '---'

    const posts: IPost[] = markdownFilenames.map((filename) => {
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
    })

    return posts
}

export default async function Page() {
    // Fetch data directly in a Server Component
    const posts = await getPosts()
    // Forward fetched data to your Client Component
    return <MarkdownPostListTemplate posts={posts} />
}