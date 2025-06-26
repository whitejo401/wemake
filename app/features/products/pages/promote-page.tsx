import type { Route } from "../../+types/products";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Promote Product - WeMake" },
    { name: "description", content: "Promote your product" },
  ];
}

export default function PromotePage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Promote Your Product</h1>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <p className="mb-4">Promote your product to reach more makers and users!</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Promote Now
        </button>
      </div>
    </div>
  );
} 