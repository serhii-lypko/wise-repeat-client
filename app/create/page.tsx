'use client';

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [eng, setEng] = useState('');
  const [ru, setRu] = useState('');

  let router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await axios.post('https://wr-api.sl-tech-playground.com/create', {
        eng,
        ru,
      });
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-lg pt-3">
      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700" htmlFor="title">
          Eng
        </label>
        <input
          id="eng"
          type="text"
          value={eng}
          onChange={(e) => setEng(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="mb-6">
        <label className="mb-2 block font-bold text-gray-700" htmlFor="body">
          Ru
        </label>
        <input
          id="ru"
          type="text"
          value={ru}
          onChange={(e) => setRu(e.target.value)}
          className="focus:shadow-outline w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
