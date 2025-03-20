const ReceipeInformation = async (searchParams: {
  params: { id?: string };
}) => {
  const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY;

  if (!searchParams.params.id) {
    return <div className="text-white">No recipe ID provided</div>;
  }

  const url = `https://api.spoonacular.com/recipes/${searchParams.params.id}/information?apiKey=${API_KEY}`;

  const response = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen  text-white">
          <p className="mt-2">Failed to fetch recipes. Please try again later.</p>
      </div>
    );
  }
  const data: {
    title: string;
    extendedIngredients: { id: number; original: string }[];
  } = await response.json();

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen  p-4">
      <h1 className="text-white flex items-center justify-center mb-4">
        Recipe {data.title}
      </h1>

      <div className="flex justify-center items-center">
        <ul className="list-none gap-2 flex flex-col">
          {data.extendedIngredients.map((ingredient) => (
            <li
              className="border border-gray bg-blue-500 p-2 rounded shadow-lg "
              key={ingredient.id}
            >
              {ingredient.original}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReceipeInformation;
