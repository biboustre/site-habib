import Link from 'next/link';
import React from 'react'

interface AnchorLinkProps {
    href: string;
    children?: React.ReactNode;
    target?: string;
    rel?: string;
    }

export default function AnchorLink({ href, children, target, rel }: AnchorLinkProps) {
  return (
    <Link className='tracking-wider' href={href} target={target} rel={rel}>{children}</Link>
  )
}
