import Content from "@/lib/components/container/Container";
import IPost from "@/lib/interfaces/IPost";
import Link from "next/link";

interface IMarkdownPostListTemplateProps {
    posts: IPost[]
}

const MarkdownPostListTemplate: React.FC<IMarkdownPostListTemplateProps> = (props) => {
    return <Content id='markdownSection' className={['applyHeaderOffset'].join(' ')}>
        {...props.posts.map((post, index) => { return (<Link key={index} href={'posts/' + post.slug}>{post.slug}</Link>) })}
    </Content>
}
export default MarkdownPostListTemplate;
