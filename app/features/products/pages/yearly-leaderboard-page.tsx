import type { Route } from "../../+types/products";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  return {
    year,
    leaderboard: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Yearly Leaderboard - WeMake" },
    { name: "description", content: "Top products of the year" },
  ];
}

export default function YearlyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top Products of {loaderData.year}</h1>
      <div className="space-y-4">
        {loaderData.leaderboard.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No products found for {loaderData.year}.
          </p>
        ) : (
          loaderData.leaderboard.map((product: any, index: number) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6 flex items-center">
              <div className="text-2xl font-bold text-gray-400 w-12">#{index + 1}</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 