import { WordPair as WordPairType } from '#/types/types';
import WordPair from '#/ui/word-pair';

// TODO: error layout

export default async function Page() {
  const data = await getData();
  const dataToRender = data.filter((pair: WordPairType) => !pair.isLearned);

  return (
    <section className="pt-2">
      <ul>
        {dataToRender.map((pair: WordPairType) => (
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
    const res = await fetch('https://wr-api.sl-tech-playground.com', {
      next: { revalidate: 5 },
    });

    return res.json();
  } catch (err) {
    console.log('error', err);
    console.log('--------------------');
  }
}
