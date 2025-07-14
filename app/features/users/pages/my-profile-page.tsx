import type { Route } from "./+types/my-profile-page";
import { redirect } from "react-router";
import { makeSSRClient } from "~/supa-client";

export const loader = async ({request}: Route.LoaderArgs) => {
  const {client, headers} = makeSSRClient(request);
  return redirect("/users/nico");
};