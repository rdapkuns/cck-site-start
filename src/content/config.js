import { defineCollection, z } from "astro:content";

const workshopsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
    }),
});

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      function: z.string(),
      bio: z.string(),
      pic: image(),
    }),
});

const foundationsCollection = defineCollection({
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

export const collections = {
  team: teamCollection,
  foundations: foundationsCollection,
  workshops: workshopsCollection,
};
