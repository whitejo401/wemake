import type { Route } from "../../../../+types/features/auth/pages/social-complete-page";
import { makeSSRClient } from "~/supa-client";
  
export function meta(): Route.MetaFunction {
  return [
    { title: "Complete Social Authentication" },
    { name: "description", content: "Complete social authentication process" },
  ];
}

export const loader = async ({request}: Route.LoaderArgs) => {
  const {client, headers} = makeSSRClient(request);
  return null;
};

export default function SocialCompletePage({ loaderData, actionData }: Route.ComponentProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Completing authentication
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Processing your {loaderData?.provider || "social"} authentication...
        </p>
      </div>
      <div className="flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
      {actionData?.error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-sm text-red-600">{actionData.error}</p>
        </div>
      )}
    </div>
  );
} 