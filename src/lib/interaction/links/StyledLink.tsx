import Link from 'next/link';

interface StyledLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
}

const StyledLink = ({ href, children, ...props }: StyledLinkProps) => {
  return (
    <Link href={href} {...props} className={['linkClass', props.className].join(' ')}>
      {children}
    </Link>
  );
};

export default StyledLink;