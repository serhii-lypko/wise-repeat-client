'use client';

import { useState } from 'react';
import { WordPair as WordPairType } from '#/types/types';
import clsx from 'clsx';
import axios from 'axios';

type Props = {
  pair: WordPairType;
  blind: 'eng' | 'ru' | 'rand' | 'none';
};

export default function WordPair({ pair }: Props) {
  const [revealed, toggleRevealed] = useState(false);

  const toggleVisibility = () => {
    toggleRevealed((revealed) => !revealed);
  };

  const handleLearn = async (id: string) => {
    try {
      await axios.patch(
        `https://wr-api.sl-tech-playground.com/toggle-status/${id}`,
      );
    } catch (err) {
      console.log(err);
    }
  };

  // TODO: implement blind map for each mode

  return (
    <div onClick={toggleVisibility} className="flex w-full justify-between">
      <span className="text-lg capitalize">{pair.eng}</span>
      <div
        className={clsx('flex items-center', {
          invisible: !revealed,
        })}
      >
        <span className="text-lg capitalize">{pair.ru}</span>

        <button
          onClick={() => handleLearn(pair.id)}
          type="button"
          className="ml-3 rounded-sm bg-blue-500 py-1 px-3 text-sm font-bold text-white hover:bg-blue-700"
        >
          Learn
        </button>
      </div>
    </div>
  );
}
