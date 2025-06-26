import type { Route } from "../../+types/products";

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [
      { id: "1", name: "SaaS", description: "Software as a Service products", count: 0 },
      { id: "2", name: "Mobile Apps", description: "Mobile applications", count: 0 },
      { id: "3", name: "Developer Tools", description: "Tools for developers", count: 0 },
      { id: "4", name: "Design", description: "Design and creative tools", count: 0 },
      { id: "5", name: "Productivity", description: "Productivity and workflow tools", count: 0 },
    ],
  };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Product Categories - WeMake" },
    { name: "description", content: "Browse products by category" },
  ];
}

export default function CategoriesPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Product Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loaderData.categories.map((category: any) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{category.count} products</span>
              <a 
                href={`/products/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Browse →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 