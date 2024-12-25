export const cards = Array.from({ length: 12 }).map(() => ({
  image: require(`/src/images/IMG.svg`),
  brandName: "Бренд",
  name: "Полное название товара в несколько строк для вида с обрывом в конце...",
  price: {
    new: "5 990 ₽",
    old: "5 990 ₽",
  },
  sale: "25%",
  type: "Хит продаж",
  isAvaliable: Math.random() > 0.5,
}));
