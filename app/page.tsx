import { WordPair as WordPairType } from '#/types/types';
import WordPair from '#/ui/word-pair';

// TODO: error layout

export default async function Page() {
  const data = await getData();

  return (
    <section className="pt-2">
      <ul>
        {data.map((pair: WordPairType) => (
          <li key={pair.id} className="mb-10">
            <WordPair pair={pair} blind="ru" />
          </li>
        ))}
      </ul>
    </section>
  );
}

async function getData() {
  try {
    const res = await fetch('http://wr-api.sl-tech-playground.com');
    return res.json();
  } catch (err) {
    console.log('error', err);
    console.log('--------------------');
  }
}
