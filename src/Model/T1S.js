export const T1S = {
  name: "T1 Standard",
  desc: "1493 cm³ engine with 	32 kW / 44 PS	(from 1965)",
  exterior: [
    {
      name: "Paint",
      kind: "header",
    },
    {
      name: ["Top", "Down"],
      kind: "colorPicker",
      options: [
        ["#222021", "#E2E4E1", "#CBA506", "#0F6744", "#0755A1", "#ff4c42"],
        ["#ff4c42", "#0755A1", "#0F6744", "#CBA506", "#E2E4E1", "#222021"],
      ],
      action: "setColorPicker",
      target: [
        ["t1m1_color2", "t1m2_color2"],
        ["t1m1_color1", "t1m2_color1"],
      ],
      selected: [0, 0],
    },
    {
      name: "Choose frontal logo color",
      options: [
        {
          name: "No color insert / pure chrome",
          color: "chrome",
          target: "t1m2_colorlogo",
        },
        {
          name: "Black",
          color: "#000000",
          target: "t1m2_colorlogo",
        },
        {
          name: "Color 01",
          color: "#A94246",
          target: "t1m2_colorlogo",
        },
      ],
      kind: "dropdown",
      action: "setMetallicColorDropdown",
    },
    {
      name: "Roof",
      kind: "header",
    },
    {
      name: "Model",
      options: [
        {
          name: "Standard",
          target: ["t1_extra_roof1"],
        },
        {
          name: "Sunroof",
          target: ["t1_extra_roof2"],
        },
      ],
      kind: "dropdown",
      action: "setModel",
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
          target: ["t1_extra_window1", "t1_extra_window1_transparent_shader"],
        },
        {
          name: "Safari",
          target: ["t1_extra_window2", "t1_extra_window2_transparent_shader"],
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Curtains?",
      options: ["Yes", "No"],
      target: "t1_extra_curtains",
      kind: "check",
      action: "setState",
      lock: { id: "curtainLock", state: false, control: true },
    },
    {
      name: "Curtain color",
      options: [
        {
          name: "Color 01",
          color: "#00000",
          target: "t1m3_colorcurtain",
        },
        {
          name: "Color 02",
          color: "#ff5b4c",
          target: "t1m3_colorcurtain",
        },
      ],
      kind: "dropdown",
      action: "setColorDropdown",
      lock: { id: "curtainLock", state: false },
    },
    {
      name: "Luggage Rack",
      kind: "header",
    },
    {
      name: "Would you like luggage rack?",
      options: ["Yes", "No"],
      target: [
        "t1_extra_lugaggerack1",
        "t1_extra_lugaggerack2",
        "t1_extra_lugaggerack3",
      ],
      kind: "check",
      action: "setState",
      lock: { id: "luggageLock", state: false, control: true },
    },
    {
      name: "Model",
      options: [
        {
          name: "Front",
          target: "t1_extra_lugaggerack2",
          lock: { id: "ladderlock", state: false, control: true },
        },
        {
          name: "Back",
          target: "t1_extra_lugaggerack1",
        },
        {
          name: "Full",
          target: "t1_extra_lugaggerack3",
        },
      ],
      lock: { id: "luggageLock", state: false },
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Would you like removable stairs?",
      options: ["Yes", "No"],
      kind: "check",
      action: "setState",
      target: "t1_extra_ladder",
      lock: { id: "ladderlock", state: false },
    },
    {
      name: "Bumpers",
      kind: "header",
    },
    {
      name: "Front",
      options: [
        {
          name: "Model 1",
          target: "t1_extra_bumper2front",
          lock: { id: "bumper2lock", state: false, control: true },
        },
        {
          name: "Model 2",
          target: "t1_extra_bumper1front",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Back",
      options: [
        {
          name: "Model 1",
          target: "t1_extra_bumper2rear",
          lock: { id: "bumper2lock", state: false, control: true },
        },
        {
          name: "Model 2",
          target: "t1_extra_bumper1rear",
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
          name: "Model 1",
          target: "t1_extra_mirror1",
        },
        {
          name: "Model 2",
          target: "t1_extra_mirror2",
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
      target: "t1_outter_molding",
      action: "setState",
      lock: { id: "moldingLock", state: false, control: true },
    },
    {
      name: "Choose strip Color",
      options: [
        {
          name: "No color insert / pure chrome",
          color: "chrome",
          target: ["t1m2_colormolding"],
        },
        {
          name: "Color 01",
          color: "#00000",
          target: ["t1m2_colormolding"],
        },
        {
          name: "Color 02",
          color: "#ff4c42",
          target: ["t1m2_colormolding"],
        },
      ],
      kind: "dropdown",
      action: "setMetallicColorDropdown",
      lock: { id: "moldingLock", state: false },
    },
    {
      name: "Extra Lights",
      kind: "header",
    },
    {
      name: "Reversing light",
      options: ["Yes", "No"],
      target: "t1_extra_taillight",
      kind: "check",
      action: "setState",
    },
    {
      name: "Fog light",
      options: ["Yes", "No"],
      kind: "check",
      target: ["t1_extra_fogfront", "t1_extra_fogrear"],
      action: "setState",
      lock: { id: "bumper2lock", state: false },
    },
    {
      name: "Indicators",
      kind: "header",
    },
    {
      name: "Front",
      options: [
        {
          name: "Model 1",
          target: "t1_extra_turnindicator1",
        },
        {
          name: "Model 2",
          target: "t1_extra_turnindicator2",
        },
        {
          name: "Model 3",
          target: "t1_extra_turnindicator3",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Back",
      options: [
        {
          name: "Model 1",
          target: "t1_extra_backlight1",
        },
        {
          name: "Model 2",
          target: "t1_extra_backlight2",
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
      options: [
        {
          name: "Black",
          color: "#000000",
          target: "t1m1_colorwheelrim",
        },
        {
          name: "Color 01",
          color: "#d6d6d6",
          target: "t1m1_colorwheelrim",
        },
      ],
      kind: "dropdown",
      action: "setColorDropdown",
    },
    // {
    //   name: "Volkswagen’s logo on hubcaps?",
    //   options: ["Yes", "No"],
    //   target: "t1_extra_logo1",
    //   action: "setState",
    //   kind: "check",
    // },
    {
      name: "Choose hubcap color",
      options: [
        {
          name: "Black",
          color: "#000000",
          target: "t1m1_colorhubcap",
        },
        {
          name: "Color 01",
          color: "#e73f39",
          target: "t1m1_colorhubcap",
        },
        {
          name: "Color 02",
          color: "#a8ddff",
          target: "t1m1_colorhubcap",
        },
      ],
      kind: "dropdown",
      action: "setColorDropdown",
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
          name: "Model 1",
          target: "t1_extra_seat1",
        },
        {
          name: "Model 2",
          target: "t1_extra_seat2",
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Primary color",
      options: [
        {
          name: "Color 01",
          color: "#8c281d",
          target: ["t1m3_color1", "t1m32_color1"],
        },
        {
          name: "Color 02",
          color: "#495ad4",
          target: ["t1m3_color1", "t1m32_color1"],
        },
        {
          name: "Color 03",
          color: "#fdfdfd",
          target: ["t1m3_color1", "t1m32_color1"],
        },
      ],
      kind: "dropdown",
      action: "setColorDropdown",
    },
    {
      name: "Secondary color",
      options: [
        {
          name: "Color 01",
          color: "#8c281d",
          target: ["t1m3_color2", "t1m32_color2"],
        },
        {
          name: "Color 02",
          color: "#495ad4",
          target: ["t1m3_color2", "t1m32_color2"],
        },
        {
          name: "Color 03",
          color: "#fdfdfd",
          target: ["t1m3_color2", "t1m32_color2"],
        },
      ],
      kind: "dropdown",
      action: "setColorDropdown",
    },
    {
      name: "Terciary color",
      options: [
        {
          name: "Color 01",
          color: "#8c281d",
          target: "t1m3_color3",
        },
        {
          name: "Color 02",
          color: "#495ad4",
          target: "t1m3_color3",
        },
        {
          name: "Color 03",
          color: "#fdfdfd",
          target: "t1m3_color3",
        },
      ],
      kind: "dropdown",
      action: "setColorDropdown",
    },
    // {
    //   name: "Floor",
    //   kind: "header",
    // },
    // {
    //   name: "Material",
    //   options: [
    //     {
    //       name: "Fabric",
    //     },
    //     {
    //       name: "Leather",
    //     },
    //     {
    //       name: "Wood",
    //     },
    //   ],
    //   kind: "dropdown",
    //   action: "setTexture",
    // },
    {
      name: "Extra Dash Indicators",
      kind: "header",
    },
    {
      name: "Vacuum indicator",
      options: ["Yes", "No"],
      kind: "check",
      target: [
        "t1_extra_extraindicatorsvacuum",
        "t1_extra_extraindicatorsvacuum_transparent_shader",
      ],
      action: "setState",
    },
    {
      name: "Central dash",
      options: ["Yes", "No"],
      kind: "check",
      target: [
        "t1_extra_extraindicatorscentral",
        "t1_extra_extraindicatorscentral_transparent_shader",
      ],
      action: "setState",
    },
  ],
};
