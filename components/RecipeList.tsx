import { fetchRecipes } from "@/app/utils/fetchRecipes";
import Link from "next/link";

const RecipeList = async ({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) => {
  let data;
  try {
    data = await fetchRecipes(searchParams);
  } catch (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600 font-semibold">
          Failed to fetch recipes. Please try again later.
        </p>
      </div>
    );
  }
    return (
        <div className="flex flex-wrap justify-center gap-6">
        {data.results?.length > 0 ? (
          data.results.map((recipe: any) => (
            <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
              <div className="bg-[#ffddff] border border-gray-200 rounded-lg p-4 w-72 shadow-lg transition transform hover:scale-105">
                <img
                  src={recipe.image || ''}
                  alt={recipe.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold mt-3 text-gray-700">
                  {recipe.title}
                </h2>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">No recipes found.</p>
        )}
      </div>
    )
}

export default RecipeList;