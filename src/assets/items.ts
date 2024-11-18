const items = [
  {
    id: 0,
    name: "Useless Sprocket",
    description: "A toothed wheel with several teeth missing or bent",
    material: "steel",
    meltable: true,
    meltvalue: 2,
  },
  {
    id: 1,
    name: "Doohickey Case",
    description: "A little metal box that used to contain some kind of device",
    material: "steel",
    meltable: true,
    meltvalue: 1,
  },
  {
    id: 2,
    name: "Dead Lightbulb",
    description: "A sooty bulb with broken filaments",
    material: "complex",
    canDismantle: true,
    dismantleRecipes: [
      {
        tool: "none",
        time: 500,
        smash: true,
        input: { itemID: 2 },
        output: [{ itemID: 9, count: 1 }], // Glass Shards x1
      },
    ],
  },
  {
    id: 3,
    name: "Cracked Vial",
    description: "An acrid-smelling vial, no longer watertight",
    material: "glass",
  },
  {
    id: 4,
    name: "Table Leg",
    description: "A disembodied wooden table leg",
    material: "wood",
  },
  {
    id: 5,
    name: "Frazzled Motor",
    description: "An electric motor which has been pushed beyond its limits",
    material: "complex",
    canDismantle: true,
    dismantleRecipes: [
      {
        tool: "screwdriver",
        time: 10000,
        input: { itemID: 5 },
        output: [
          { itemID: 1, count: 1 },
          { itemID: 10, count: 1 },
        ], // Doohickey Case x1, Copper Windings x1
      },
    ],
  },
  {
    id: 6,
    name: "Dog-eared Manual",
    description: "This would have been informative, but it's all soggy",
    material: "paper",
  },
  {
    id: 7,
    name: "Stripped Bolt",
    description: "A large steel bolt worn smooth",
    material: "steel",
    meltable: true,
    meltvalue: 2,
  },
  {
    id: 8,
    name: "Flanged Offcut",
    description: "A steel plate bent on one edge",
    material: "steel",
    meltable: true,
    meltvalue: 1,
  },
  {
    id: 9,
    name: "Glass Shards",
    description: "A handful of jagged glass fragments",
    material: "glass",
  },
  {
    id: 10,
    name: "Copper Windings",
    description: "Tiny copper strands wound into a coil",
    material: "copper",
  },
  {
    id: 11,
    name: "Excised Stoppage",
    description:
      "A hunk of machinery sliced with a cutting torch out of a larger installation",
    material: "complex",
    canDismantle: true,
    dismantleRecipes: [
      {
        input: { itemID: 11 },
        output: [
          { itemID: 12, count: 1 },
          {
            nFrom: 1,
            options: [
              { itemID: 13, count: 1 },
              { itemID: 15, count: 1 },
            ],
          },
        ], // Stamped Panel x1, 1 from (Sprocket Assembly x1, Seized Valve x1)
      },
    ],
  },
  {
    id: 12,
    name: "Stamped Panel",
    description: "A large pressed steel panel",
    material: "steel",
    meltable: true,
    meltvalue: 2,
  },
  {
    id: 13,
    name: "Sprocket Assembly",
    description:
      "This complex-looking array of gears and chains is clearly not operational",
    material: "complex",
    canDismantle: true,
    dismantleRecipes: [
      {
        input: { itemID: 13 },
        output: [
          { itemID: 0, count: 1 },
          { itemID: 14, count: 2 },
        ], // Useless Sprocket x1, Brass Gears x2
      },
    ],
  },
  {
    id: 14,
    name: "Brass Gears",
    description: "A few shiny brass gears from some clockwork gizmo",
    material: "brass",
  },
  {
    id: 15,
    name: "Seized Valve",
    description:
      "A brass valve with some pipes attached - apparently stuck in the closed position",
    material: "complex",
    canDismantle: true,
    dismantleRecipes: [
      {
        tool: "cutter",
        input: { itemID: 15 },
        output: [
          { itemID: 16, count: 1 },
          { itemID: 17, count: 2 },
        ], // Brass Fitting x1, Copper Pipe x2
      },
    ],
  },
  {
    id: 16,
    name: "Brass Fitting",
    description: "A tarnished brass pipe fitting. Something is broken inside.",
    material: "brass",
  },
  {
    id: 17,
    name: "Copper Pipe",
    description: "A length of copper pipe with no major defects",
    material: "copper",
  },
  // {
  //   id: 18,
  //   name: "Rusted Toolbox",
  //   description: "A misplaced cache of useful tools and parts.",
  //   material: "complex",
  //   dismantleRecipes: [
  //     {
  //       tool: "cutter",
  //       input: {itemID: 18},
  //       output: [{}],
  //     },
  //   ],
  // },
  // {
  //   id: 19,
  //   name: "Simple Handle",
  //   description: "A turned wooden rod",
  //   material: "wood",
  // },
] as Item[];

export default items;
