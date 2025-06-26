import type { Route } from "../../+types/products";

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  return {
    category,
    products: [],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Category - WeMake" },
    { name: "description", content: "Products in this category" },
  ];
}

export default function CategoryPage({ loaderData, actionData }: Route.ComponentProps) {
  const categoryName = loaderData.category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loaderData.products.length === 0 ? (
          <p className="text-gray-500 col-span-full text-center py-8">
            No products found in {categoryName}. Be the first to submit one!
          </p>
        ) : (
          loaderData.products.map((product: any) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">By {product.creator}</span>
                <a 
                  href={`/products/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 