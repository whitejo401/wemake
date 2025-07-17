import type { Route } from "./+types/my-profile-page";
import { redirect } from "react-router";
import { makeSSRClient } from "~/supa-client";
import { getUserByID } from "../queries";

export const loader = async ({request}: Route.LoaderArgs) => {  
  const {client} = makeSSRClient(request);
  const {data: {user}} = await client.auth.getUser();
  
  if( user ) {
    const profile = await getUserByID(client, {id: user.id});
    return redirect(`/users/${profile.username}`);
  }
  return redirect("/auth/login");
};