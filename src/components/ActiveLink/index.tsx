import { cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement;
  activeClassName: string;
}

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: ActiveLinkProps) => {
  const { asPath } = useRouter();

  const className = asPath === props.href ? activeClassName : '';

  return (
    <Link {...props}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};

export default ActiveLink;
