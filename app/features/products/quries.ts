import { error } from "console";
import type { DateTime } from "luxon";
import client from "~/supa-client";

export const getProductsByDateRange = async ({
  startDate,
  endDate,
  limit,
}: {
  startDate: DateTime;
  endDate: DateTime;
  limit: number;
}) => {
    const { data, error } = await client 
    .from("products")
    .select(
    `
        product_id,
        name,
        tagline,
        description,
        upvotes:stats->>upvotes,
        views:stats->>views,
        reviews:stats->>reviews
        `
    )
    .order("upvotes", { ascending: false })
    .gte("created_at", startDate.toISO())
    .lte("created_at", endDate.toISO())
    .limit(limit);
    if( error ) throw new Error(error.message);
{}  return data;
};