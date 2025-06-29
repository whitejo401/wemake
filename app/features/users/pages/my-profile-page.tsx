import type { Route } from "./+types/my-profile-page";
import { redirect } from "react-router";

export const loader = () => {
  return redirect("/users/nico");
};