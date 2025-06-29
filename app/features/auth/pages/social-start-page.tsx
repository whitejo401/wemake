import type { Route } from "./+types/social-start-page";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Social Authentication" },
    { name: "description", content: "Start social authentication process" },
  ];
}

export default function SocialStartPage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in with {loaderData?.provider || "social provider"}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Redirecting to {loaderData?.provider || "social provider"} for authentication...
        </p>
      </div>
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    </div>
  );
} 