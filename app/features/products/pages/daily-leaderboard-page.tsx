import type { Route } from "../../+types/products";

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month, day } = params;
  return {
    year,
    month,
    day,
    leaderboard: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Daily Leaderboard - WeMake" },
    { name: "description", content: "Top products of the day" },
  ];
}

export default function DailyLeaderboardPage({ loaderData, actionData }: Route.ComponentProps) {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthName = monthNames[parseInt(loaderData.month) - 1] || loaderData.month;
  const date = new Date(parseInt(loaderData.year), parseInt(loaderData.month) - 1, parseInt(loaderData.day));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Top Products of {monthName} {loaderData.day}, {loaderData.year}</h1>
      <div className="space-y-4">
        {loaderData.leaderboard.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No products found for {monthName} {loaderData.day}, {loaderData.year}.
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