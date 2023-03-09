type $fixme = any;

export default async function Page() {
  const data = await getData();

  return (
    <div className="space-y-8">
      {/* <Speaker /> */}
      <span>Learned</span>

      <hr />

      {data.map((pair: $fixme) => {
        return (
          <li key={pair.id} className="mb-2 flex">
            <span className="mr-3 capitalize">{pair.eng}</span>-
            <span className="ml-3 capitalize">{pair.ru}</span>
          </li>
        );
      })}
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch('https://wr-api.sl-tech-playground.com/learned');
    return res.json();
  } catch (err) {
    console.log('error', err);
  }
}
