import { z } from "zod";
export interface newsDataType {
  _id: string;
  others_info: {
    is_todays_pick: boolean;
    is_trending: boolean;
  };
  category_id: string;
  rating: { number: number; badge: string };

  total_view: number;
  title: string;
  author: {
    name: string;
    published_date: string;
    img: string;
  };
  thumbnail_url: string;
  image_url: string;
  details: string;
}

const newsValidator = z
  .object({
    _id: z.string(),
    others_info: z.object({
      is_todays_pick: z.boolean(),
      is_trending: z.boolean(),
    }),
    category_id: z.string(),
    rating: z.object({ number: z.number(), badge: z.string() }),

    total_view: z.number(),
    title: z.string(),
    author: z.object({
      name: z.string(),
      published_date: z.string(),
      img: z.string(),
    }),
    thumbnail_url: z.string(),
    image_url: z.string(),
    details: z.string(),
  })
  .array();
