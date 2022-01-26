export const T1S = {
  exterior: [
    {
      name: "Paint",
      kind: "header",
    },
    {
      name: ["Top", "Down"],
      kind: "colorPicker",
      options: [
        ["#E2E4E1", "#0755A1", "#0F6744", "pink", "white", "black"],
        ["#A94246", "#0755A1", "#0F6744", "pink", "white", "black"],
      ],
      target: ["T1_body", "T1_body"],
    },
    {
      name: "Windows",
      kind: "header",
    },
    {
      name: "Model",
      options: [
        {
          name: "Standard",
        },
        {
          name: "Safari",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Curtains?",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Curtain color",
      options: [
        {
          name: "No color insert / pure chrome",
        },
        {
          name: "Color 01",
          color: "black",
        },
        {
          name: "Color 02",
          color: "red",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Luggage Rack",
      kind: "header",
    },
    {
      name: "Would you like luggage rack?",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Model",
      options: [
        {
          name: "Back",
          target: ["T1_bagageiro1"],
        },
        {
          name: "Front",
          target: ["T1_bagageiro2"],
        },
        {
          name: "Full",
          target: ["T1_bagageiro3"],
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Would you like removable stairs?",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Bumpers",
      kind: "header",
    },
    {
      name: "Front",
      options: [
        {
          name: "USA style",
        },
        {
          name: "Euro style",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Back",
      options: [
        {
          name: "USA style",
        },
        {
          name: "Euro style",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Mirrors",
      kind: "header",
    },
    {
      name: "Model",
      options: [
        {
          name: "Modelo 1",
        },
        {
          name: "Modelo 2",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Moldings",
      kind: "header",
    },
    {
      name: "Would you like side moldings?",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Choose strip Color",
      options: [
        {
          name: "No color insert / pure chrome",
        },
        {
          name: "Color 01",
          color: "black",
        },
        {
          name: "Color 02",
          color: "red",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Extra Lights",
      kind: "header",
    },
    {
      name: "Reversing light",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Fog light",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Indicators",
      kind: "header",
    },
    {
      name: "Front",
      options: [
        {
          name: "Elephant ear",
        },
        {
          name: "Round",
        },
        {
          name: "T2 style",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Back",
      options: [
        {
          name: "Elephant ear",
        },
        {
          name: "Round",
        },
        {
          name: "T2 style",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Wheels",
      kind: "header",
    },
    {
      name: "How would you like the rims?",
      options: ["White", "Silver"],
      kind: "check",
    },
    // {
    //   name: "Volkswagen’s logo on hubcaps?",
    //   options: ["Yes", "No"],
    //   kind: "check",
    // },
    {
      name: "Choose hubcap color",
      options: [
        {
          name: "None",
        },
        {
          name: "Color 01",
          color: "black",
        },
        {
          name: "Color 02",
          color: "red",
        },
      ],
      kind: "dropdown",
    },
  ],
  interior: [
    {
      name: "Seats",
      kind: "header",
    },
    {
      name: "Models and materials",
      options: [
        {
          name: "Material / fabric",
        },
        {
          name: "Leatherette",
        },
        {
          name: "Leather",
        },
        {
          name: "Plastic / synthetic",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Colors",
      options: [
        {
          name: "None",
        },
        {
          name: "Color 01",
          color: "black",
        },
        {
          name: "Color 02",
          color: "red",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Floor",
      kind: "header",
    },
    {
      name: "Material",
      options: [
        {
          name: "Fabric",
        },
        {
          name: "Leather",
        },
        {
          name: "Wood",
        },
      ],
      kind: "dropdown",
    },
    {
      name: "Extra Dash Indicators",
      kind: "header",
    },
    {
      name: "Vacuum indicator",
      options: ["Yes", "No"],
      kind: "check",
    },
    {
      name: "Central dash",
      options: ["Yes", "No"],
      kind: "check",
    },
  ],
};
