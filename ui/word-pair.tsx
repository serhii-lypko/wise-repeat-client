'use client';

import { useState } from 'react';
import { WordPair as WordPairType } from '#/types/types';
import clsx from 'clsx';

type Props = {
  pair: WordPairType;
  blind: 'eng' | 'ru' | 'rand' | 'none';
};

export default function WordPair({ pair }: Props) {
  const [revealed, toggleRevealed] = useState(false);

  const toggleVisibility = () => {
    toggleRevealed((revealed) => !revealed);
  };

  // TODO: implement blind map for each mode

  return (
    <div onClick={toggleVisibility} className="flex w-full justify-between">
      <span className="text-lg capitalize">{pair.eng}</span>
      <span
        className={clsx('text-lg capitalize', {
          invisible: !revealed,
        })}
      >
        {pair.ru}
      </span>
    </div>
  );
}
