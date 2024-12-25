export const filters = [
  {
    name: "Бренд",
    clean: "Очистить",
    isSearchable: true,
    attributes: Array.from({ length: 6 }).map(() => ({
      name: "Атрибут",
      count: "3",
    })),
  },
  {
    name: "Размер",
    isSearchable: false,
    attributes: Array.from({ length: 6 }).map(() => ({
      name: "Атрибут",
      count: "3",
    })),
  },
];
