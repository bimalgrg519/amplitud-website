export const traits_type2 = [
  {
    id: 1,
    name: "BLACK-1",
  },
  {
    id: 2,
    name: "Red-1",
  },
  {
    id: 3,
    name: "Yellow-30",
  },
  {
    id: 4,
    name: "Green-20",
  },
  {
    id: 5,
    name: "White-10",
  },
];

export const traits_type = [
  {
    id: 1,
    name: "Background",
  },
  {
    id: 2,
    name: "Bottom LID",
  },
  {
    id: 3,
    name: "Eye Color",
  },
  {
    id: 4,
    name: "Eye ball",
  },
  {
    id: 5,
    name: "Top LID",
  },
  {
    id: 6,
    name: "GOO",
  },
  {
    id: 7,
    name: "IRIS",
  },
  {
    id: 8,
    name: "Shine",
  },
  {
    id: 9,
    name: "IRIS",
  },
  {
    id: 10,
    name: "Shine",
  },
];

export const attribute_type = [
  {
    id: 1,
    name: "High-20",
  },
  {
    id: 2,
    name: "Low-40",
  },
  {
    id: 3,
    name: "Middle-40",
  },
  {
    id: 4,
    name: "Eye ball",
  },
  {
    id: 5,
    name: "High-40",
  },
  {
    id: 6,
    name: "Middle-20",
  },
  {
    id: 7,
    name: "Low-20",
  },
];

export const fullList = {
  artwork_type: "STATIC_GENERATIVE_V1",
  tokens_to_generate: 3,
  traits_and_attributes: {
    Background: {
      weight: 1,
      attributes: {
        black: {
          weight: 1,
          file: "black.png",
          hash: "522748524ad010358705b6852b81be4c",
          onlyone: false,
          upload_order: 1,
        },
      },
    },
    "Bottom lid": {
      weight: 1,
      attributes: {
        high: {
          weight: null,
          file: "bottom_high.png",
          hash: "1326e8dbd2ff57d8d6ccd53ac919dc96",
          onlyone: true,
          upload_order: 2,
        },
        low: {
          weight: 0.5,
          file: "bottom_low.png",
          hash: "480120be005697f81d03f1e867f5ac2c",
          onlyone: false,
          upload_order: 3,
        },
        middle: {
          weight: 0.5,
          file: "bottom_middle.png",
          hash: "379c9c9a47ab6279b7c0d95cd8994467",
          onlyone: false,
          upload_order: 4,
        },
      },
    },
    "Eye color": {
      weight: 1,
      attributes: {
        cyan: {
          weight: null,
          file: "cyan.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: true,
          upload_order: 5,
        },
        green: {
          weight: 0.2,
          file: "green.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 6,
        },
        purple: {
          weight: 0.2,
          file: "purple.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 8,
        },
        red: {
          weight: 0.2,
          file: "red.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 9,
        },
        yellow: {
          weight: 0.2,
          file: "yellow.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 10,
        },
      },
    },
    Eyeball: {
      weight: 1,
      attributes: {
        red: {
          weight: 0.5,
          file: "cyan.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 11,
        },
        white: {
          weight: 0.5,
          file: "red.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 12,
        },
      },
    },
    Iris: {
      weight: null,
      attributes: {
        large: {
          weight: null,
          file: "white.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 13,
        },
        medium: {
          weight: null,
          file: "large.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: true,
          upload_order: 14,
        },
        small: {
          weight: 1,
          file: "medium.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 15,
        },
      },
    },
    Shine: {
      weight: 1,
      attributes: {
        shapes: {
          weight: 1,
          file: "small.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 16,
        },
      },
    },
    Toplid: {
      weight: null,
      attributes: {
        high: {
          weight: null,
          file: "shine.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: true,
          upload_order: 17,
        },
        low: {
          weight: null,
          file: "sup_high.png",
          hash: "1326e8dbd2ff57d8d6ccd53ac919dc96",
          onlyone: true,
          upload_order: 18,
        },
        middle: {
          weight: null,
          file: "sup_low.png",
          hash: "480120be005697f81d03f1e867f5ac2c",
          onlyone: true,
          upload_order: 19,
        },
      },
    },
  },
  trait_order: [
    "Background",
    "Bottom lid",
    "Eye color",
    "Eyeball",
    "Iris",
    "Shine",
    "Top lid",
  ],
  static_rules: [
    {
      type: "combination",
      trait: "Bottom Lid",
      attribute: "low",
      others: [
        {
          trait: "Iris",
          attribute: "large",
        },
        {
          trait: "Iris",
          attribute: "medium",
        },
      ],
    },
    {
      type: "exclusion",
      trait: "Eyeball",
      attribute: "red",
      others: [
        {
          trait: "Eye color",
          attribute: "red",
        },
        {
          trait: "Eye color",
          attribute: "pink",
        },
      ],
    },
  ],
  tokens: {
    "1": {
      Background: "black",
      "Bottom lid": "middle",
      "Eye color": "purple",
      Eyeball: "white",
      Iris: "small",
      Shine: "shapes",
      Toplid: "high",
    },
    "2": {
      Background: "black",
      "Bottom lid": "middle",
      "Eye color": "yellow",
      Eyeball: "red",
      Iris: "medium",
      Shine: "shapes",
      Toplid: "high",
    },
    "3": {
      Background: "black",
      "Bottom lid": "low",
      "Eye color": "cyan",
      Eyeball: "white",
      Iris: "large",
      Shine: "shapes",
      Toplid: "high",
    },
  },
};

export const fullListPoc = {
  artwork_type: "STATIC_GENERATIVE_V1",
  tokens_to_generate: 3,
  traits_and_attributes: [
    {
      id: "Background",
      weight: 1,
      attributes: [
        {
          id: "black",
          weight: 1,
          file: "black.png",
          hash: "522748524ad010358705b6852b81be4c",
          onlyone: false,
          upload_order: 1,
        },
      ],
    },
    {
      id: "Bottom lid",
      weight: 1,
      attributes: [
        {
          id: "high",
          weight: null,
          file: "bottom_high.png",
          hash: "1326e8dbd2ff57d8d6ccd53ac919dc96",
          onlyone: true,
          upload_order: 2,
        },
        {
          id: "low",
          weight: 0.5,
          file: "bottom_low.png",
          hash: "480120be005697f81d03f1e867f5ac2c",
          onlyone: false,
          upload_order: 3,
        },
        {
          id: "middle",
          weight: 0.5,
          file: "bottom_middle.png",
          hash: "379c9c9a47ab6279b7c0d95cd8994467",
          onlyone: false,
          upload_order: 4,
        },
      ],
    },
    {
      id: "Eye color",
      weight: 1,
      attributes: [
        {
          id: "cyan",
          weight: null,
          file: "cyan.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: true,
          upload_order: 5,
        },
        {
          id: "green",
          weight: 0.2,
          file: "green.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 6,
        },
        {
          id: "purple",
          weight: 0.2,
          file: "purple.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 8,
        },
        {
          id: "red",
          weight: 0.2,
          file: "red.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 9,
        },
        {
          id: "yellow",
          weight: 0.2,
          file: "yellow.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 10,
        },
      ],
    },
    {
      id: "Eyeball",
      weight: 1,
      attributes: [
        {
          id: "red",
          weight: 0.5,
          file: "cyan.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 11,
        },
        {
          id: "white",
          weight: 0.5,
          file: "red.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 12,
        },
      ],
    },
    {
      id: "Iris",
      weight: null,
      attributes: [
        {
          id: "large",
          weight: null,
          file: "white.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 13,
        },
        {
          id: "medium",
          weight: null,
          file: "large.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: true,
          upload_order: 14,
        },
        {
          id: "small",
          weight: 1,
          file: "medium.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 15,
        },
      ],
    },
    {
      id: "Shine",
      weight: 1,
      attributes: [
        {
          id: "shapes",
          weight: 1,
          file: "small.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: false,
          upload_order: 16,
        },
      ],
    },
    {
      id: "Toplid",
      weight: null,
      attributes: [
        {
          id: "high",
          weight: null,
          file: "shine.png",
          hash: "7daa361598dfacc4a2a634b73575ed65",
          onlyone: true,
          upload_order: 17,
        },
        {
          id: "low",
          weight: null,
          file: "sup_high.png",
          hash: "1326e8dbd2ff57d8d6ccd53ac919dc96",
          onlyone: true,
          upload_order: 18,
        },
        {
          id: "middle",
          weight: null,
          file: "sup_low.png",
          hash: "480120be005697f81d03f1e867f5ac2c",
          onlyone: true,
          upload_order: 19,
        },
      ],
    },
  ],
  static_rules: [
    {
      type: "combination",
      trait: "Bottom Lid",
      attribute: "low",
      others: [
        {
          trait: "Iris",
          attribute: "large",
        },
        {
          trait: "Iris",
          attribute: "medium",
        },
      ],
    },
    {
      type: "exclusion",
      trait: "Eyeball",
      attribute: "red",
      others: [
        {
          trait: "Eye color",
          attribute: "red",
        },
        {
          trait: "Eye color",
          attribute: "pink",
        },
      ],
    },
  ],
  tokens: [
    [
      {
        trait: "Background",
        attribute: "black",
      },
      {
        trait: "Bottom lid",
        attribute: "middle",
      },
      {
        trait: "Eye color",
        attribute: "purple",
      },
      {
        trait: "Eyeball",
        attribute: "white",
      },
      {
        trait: "Iris",
        attribute: "small",
      },
      {
        trait: "Shine",
        attribute: "shapes",
      },
      {
        trait: "Toplid",
        attribute: "high",
      },
    ],
    [
      {
        trait: "Background",
        attribute: "black",
      },
      {
        trait: "Bottom lid",
        attribute: "middle",
      },
      {
        trait: "Eye color",
        attribute: "yellow",
      },
      {
        trait: "Eyeball",
        attribute: "red",
      },
      {
        trait: "Iris",
        attribute: "medium",
      },
      {
        trait: "Shine",
        attribute: "shapes",
      },
      {
        trait: "Toplid",
        attribute: "high",
      },
    ],
    [
      {
        trait: "Background",
        attribute: "black",
      },
      {
        trait: "Bottom lid",
        attribute: "low",
      },
      {
        trait: "Eye color",
        attribute: "cyan",
      },
      {
        trait: "Eyeball",
        attribute: "white",
      },
      {
        trait: "Iris",
        attribute: "large",
      },
      {
        trait: "Shine",
        attribute: "shapes",
      },
      {
        trait: "Toplid",
        attribute: "high",
      },
    ],
  ],
};
