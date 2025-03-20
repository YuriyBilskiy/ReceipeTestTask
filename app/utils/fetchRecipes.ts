export const fetchRecipes = async (searchParams: {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
}) => {
  const API_KEY = process.env.SPOONACULAR_API_KEY;

  if (!API_KEY) {
    throw new Error('API key is missing');
  }

  const { query, cuisine, maxReadyTime } = searchParams;
  const url = new URL('https://api.spoonacular.com/recipes/complexSearch');

  if (query) url.searchParams.append('query', query);
  if (cuisine) url.searchParams.append('cuisine', cuisine);
  if (maxReadyTime) url.searchParams.append('maxReadyTime', maxReadyTime);
  url.searchParams.append('apiKey', API_KEY);

  const response = await fetch(url.toString(), { next: { revalidate: 60 } });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  return response.json();
};
