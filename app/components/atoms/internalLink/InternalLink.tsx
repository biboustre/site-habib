import Link from 'next/link'
import React from 'react'

interface InternalLinkProps {
    href: string;
    name?: string;
    }

export default function InternalLink({ href, name }: InternalLinkProps) {
  return (
    <Link href={href}>{name}</Link>
  )
}
