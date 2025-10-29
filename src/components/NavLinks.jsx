import React from 'react';
import { Briefcase, User, Mail } from 'lucide-react';

const links = [
  { href: '#work', label: 'Work', icon: Briefcase },
  { href: '#about', label: 'About', icon: User },
  { href: '#contact', label: 'Contact', icon: Mail },
];

const NavLinks = ({ orientation = 'horizontal', onNavigate }) => {
  if (orientation === 'vertical') {
    return (
      <ul className="flex flex-col gap-2">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              <Icon size={16} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="hidden md:flex items-center gap-6 text-sm">
      {links.map(({ href, label }) => (
        <li key={href}>
          <a href={href} className="text-neutral-300 hover:text-white transition-colors">
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
