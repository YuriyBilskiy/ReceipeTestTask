import Link from 'next/link';
import { fetchRecipes } from '../utils/fetchRecipes';
import Image from 'next/image';
import RecipeList from '@/components/RecipeList';
import { Suspense } from 'react';
import Loading from '../loading';

const Recipes = ({
  searchParams,
}: {
  searchParams: { query?: string; cuisine?: string; maxReadyTime?: string };
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Recipes
      </h1>
      <Suspense fallback={<Loading />}>
        <RecipeList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};

export default Recipes;
