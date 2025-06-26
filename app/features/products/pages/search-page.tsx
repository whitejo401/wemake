import type { Route } from "../../+types/products";

export function loader({ request }: Route.LoaderArgs) {
  return {
    results: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Search Products - WeMake" },
    { name: "description", content: "Search for products" },
  ];
}

export default function SearchPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Products</h1>
      <div className="mb-6">
        {/* Search form placeholder */}
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Search for products..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loaderData.results.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center py-8">
            No products found.
          </p>
        ) : (
          loaderData.results.map((product: any) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 