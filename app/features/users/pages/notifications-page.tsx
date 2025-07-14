import type { Route } from "./+types/notifications-page";
import { NotificationCard } from "../components/notification-card";
import { makeSSRClient } from "~/supa-client";
  
export const meta: Route.MetaFunction = () => {
  return [{ title: "Notifications | wemake" }];
};

export const loader = async ({request}: Route.LoaderArgs) => {
  const {client, headers} = makeSSRClient(request);
  return null;
};

export default function NotificationsPage() {
  return (
    <div className="space-y-20">
      <h1 className="text-4xl font-bold">Notifications</h1>
      <div className="flex flex-col items-start gap-5">
        <NotificationCard
          avatarUrl="https://github.com/serranoarevalo.png"
          avatarFallback="S"
          userName="Steve Jobs"
          message=" followed you."
          timestamp="2 days ago"
          seen={false}
        />
      </div>
    </div>
  );
}