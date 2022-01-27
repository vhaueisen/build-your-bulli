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
        ["#E2E4E1", "#222021", "#CBA506", "#0F6744", "#0755A1", "#A94246"],
        ["#A94246", "#0755A1", "#0F6744", "#CBA506", "#222021", "#E2E4E1"],
      ],
      action: "setColor",
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
          target: "",
        },
        {
          name: "Safari",
          target: "",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Curtains?",
      options: ["Yes", "No"],
      target: "T1_body",
      kind: "check",
      action: "setState",
    },
    {
      name: "Curtain color",
      options: [
        {
          name: "No color insert / pure chrome",
          color: "chrome",
          target: "",
        },
        {
          name: "Color 01",
          color: "#000",
          target: "",
        },
        {
          name: "Color 02",
          color: "#fafafa",
          target: "",
        },
      ],
      kind: "dropdown",
      action: "setColor",
      target: [],
    },
    {
      name: "Luggage Rack",
      kind: "header",
    },
    {
      name: "Would you like luggage rack?",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
      target: "",
    },
    {
      name: "Model",
      options: [
        {
          name: "Back",
          target: "T1_bagageiro1",
        },
        {
          name: "Front",
          target: "T1_bagageiro2",
        },
        {
          name: "Full",
          target: "T1_bagageiro3",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Would you like removable stairs?",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
      target: "",
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
          target: "",
        },
        {
          name: "Euro style",
          target: "",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Back",
      options: [
        {
          name: "USA style",
          target: "",
        },
        {
          name: "Euro style",
          target: "",
        },
      ],
      kind: "dropdown",
      action: "setModel",
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
          target: "",
        },
        {
          name: "Modelo 2",
          target: "",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Moldings",
      kind: "header",
    },
    {
      name: "Would you like side moldings?",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
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
      action: "setColor",
    },
    {
      name: "Extra Lights",
      kind: "header",
    },
    {
      name: "Reversing light",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
    },
    {
      name: "Fog light",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
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
      action: "setModel",
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
      action: "setModel",
    },
    {
      name: "Wheels",
      kind: "header",
    },
    {
      name: "How would you like the rims?",
      options: ["White", "Silver"],
      kind: "check",
      action: "setColor",
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
      action: "setColor",
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
      action: "setModel",
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
      action: "setColor",
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
      action: "setTexture",
    },
    {
      name: "Extra Dash Indicators",
      kind: "header",
    },
    {
      name: "Vacuum indicator",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
    },
    {
      name: "Central dash",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
    },
  ],
};
