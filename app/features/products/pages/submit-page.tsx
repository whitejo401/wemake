import type { Route } from "../../+types/products";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Submit Product - WeMake" },
    { name: "description", content: "Submit a new product" },
  ];
}

export default function SubmitPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit a Product</h1>
      <form className="space-y-4 max-w-lg mx-auto">
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Product Name"
        />
        <textarea
          className="w-full border border-gray-300 rounded px-4 py-2"
          placeholder="Product Description"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 