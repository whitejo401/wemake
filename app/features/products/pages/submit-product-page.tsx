import type { Route } from "./+types/submit-product-page";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta(): Route.MetaFunction {
  return [
    { title: "Submit Product" },
    { name: "description", content: "Submit a new product" },
  ];
}

export default function SubmitProductPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Product</h1>
      <div className="max-w-2xl">
        {/* Product submission form will go here */}
      </div>
    </div>
  );
} 