type Item = {
  id: number;
  name: string;
  description: string;
  material:
    | "complex"
    | "aluminium"
    | "copper"
    | "glass"
    | "paper"
    | "steel"
    | "wood";
  isTool?: boolean;
  meltable?: boolean;
  meltvalue?: number;
  canDismantle?: boolean;
  dismantleRecipes?: DismantleRecipe[];
};

type Itemstack = {
  item: Item;
  count: number;
};

type IDstack = {
  itemID: number;
  count: number;
};

type Inventory = {
  name: string;
  contents: Itemstack[];
};

type DismantleRecipe = {
  tool: "none" | "cutter" | "hammer" | "screwdriver";
  skillsRequired?: [{ skillName: string; skillLevel: number }];
  condition?: string;
  smash?: boolean;
  time: number;
  input: { itemID: number };
  output: (
    | { itemID: number; count: number }
    | { nFrom: number; options: { itemID: number; count: number }[] }
  )[];
};
