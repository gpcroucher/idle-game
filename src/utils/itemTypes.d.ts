type Item = {
  id: number;
  name: string;
  description: string;
  material: "complex" | "aluminium" | "glass" | "paper" | "steel" | "wood";
  meltable?: boolean;
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
