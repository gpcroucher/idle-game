type Item = {
  id: number;
  name: string;
  description: string;
  meltable?: string;
  meltvalue?: number;
};

type Itemstack = {
  item: Item;
  count: number;
};

type Inventory = {
  name: string;
  contents: Itemstack[];
};
