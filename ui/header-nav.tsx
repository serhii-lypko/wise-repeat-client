'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';

type NavItemProps = {
  name: string;
  href: string;
  className?: string;
};

export function HeaderNav() {
  return (
    <header className="flex w-full justify-between px-5 py-4 shadow">
      <Link href="/">
        <span className="text-lg font-bold">Wise repeat</span>
      </Link>

      <nav>
        <GlobalNavItem href="pairs" name="Pairs" className="mr-3" />
        <GlobalNavItem href="learned" name="Learned" />
      </nav>
    </header>
  );
}

function GlobalNavItem({ name, href, className }: NavItemProps) {
  const segment = useSelectedLayoutSegment();
  const isActive = href === segment;

  return (
    <Link
      href={`/${href}`}
      className={clsx(className, {
        'text-grey': !isActive,
        'font-semibold text-black underline': isActive,
      })}
    >
      {name}
    </Link>
  );
}
