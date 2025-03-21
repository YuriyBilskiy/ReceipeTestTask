# Recipe Finder
#Vercel Link <https://receipe-test-task.vercel.app/>
This is a [Next.js] application for searching and displaying recipes using the Spoonacular API.

## Features

- Recipe Search: Search for recipes based on keywords, cuisine type, and maximum preparation time
- Recipe Details: View detailed information about a specific recipe, including ingredients
- Dynamic Routing: Each recipe has its own dedicated page
- API Integration: Fetching data from the Spoonacular API
- Server and Client Components:
  - Server-side fetching for recipes
  - Client-side form handling for search queries
- Styled with Tailwind CSS: Responsive design with modern UI components

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js] (v18 or later)
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone <https://github.com/YuriyBilskiy/ReceipeTestTask.git>
cd receipetesttask
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Spoonacular API key:

```env
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
```

You can get an API key by signing up at [Spoonacular API](https://spoonacular.com/food-api)

### Running the Application

1. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

2. Open [http://localhost:3000](http://localhost:3000) to view the application

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Then start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Project Structure

```
receipetesttask/
├── app/
│   ├── recipes/
│   │   └── [id]/ 
│   │       └── page.tsx    # Recipe details page
│   └── page.tsx            # Recipe list
    | searchPage/
│     └── page.tsx            # SearchForm

├── public/                 # Static assets
├── .env.local             # Environment variables
├── package.json           # Project dependencies
└── tailwind.config.js     # Tailwind CSS configuration
```

## Code Quality & Formatting

This project uses ESLint and Prettier for maintaining code quality.

Run ESLint:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
```

Format with Prettier:

```bash
npm run format
# or
yarn format
# or
pnpm format
```

## Deployment

To deploy the project on Vercel:

1. Push your code to GitHub
2. Connect the repository to Vercel
3. Set up environment variables on Vercel:
   - Add `SPOONACULAR_API_KEY` to your Vercel project settings
4. Deploy!

## Technologies Used

- [Next.js] - React framework
- [TypeScript] - Type-safe JavaScript
- [Tailwind CSS] - Utility-first CSS framework
- [Spoonacular API] - Recipe data API

## License

This project is licensed under the MIT License - see the LICENSE file for details
