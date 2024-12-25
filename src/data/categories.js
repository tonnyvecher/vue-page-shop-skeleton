export const categories = Array.from({ length: 1 }).map(() => ({
  name: "Название категории",
  count: "3",
  children: Array.from({ length: 3 }).map(() => ({
    name: "Название категории",
    count: "3",
  })),
}));
