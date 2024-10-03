'use client';

import Link from 'next/link'
import React from 'react'

interface InternalLinkProps {
    href: string;
    name?: string;
    }

export default function InternalLink({ href, name }: InternalLinkProps) {
  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //   // Empêche le comportement par défaut du lien
  //   e.preventDefault();

  //   // Récupère l'ID de la section à partir du href
  //   const id = href.replace('#', '');
  //   const element = document.getElementById(id);

  //   if (element) {
  //     // Défilement fluide vers la section
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }

  //   // Met à jour l'URL sans recharger la page
  //   window.history.pushState(null, '', href);
  // };

  return (
    <Link className='tracking-wider' href={href} >{name}</Link>
  )
}
