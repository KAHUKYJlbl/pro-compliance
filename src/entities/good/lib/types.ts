export type GoodType = {
  name: string,
  id: string,
};

export type StoredGoodType = {
  good: GoodType,
  removed: boolean,
};
