import T1Simg from "./../images/T1S.png";
import bundle from "./../3d/models/T1S.glb";
export const T1S = {
  name: "T1 Standard",
  bundle: bundle,
  img: T1Simg,
  size: 32875596,
  desc: "1493 cm³ engine with 	32 kW / 44 PS	(from 1965)",
  exterior: [
    {
      name: "Paint",
      kind: "header",
    },
    {
      name: ["Primary", "Secondary"],
      options: ["p_colors", "p_colors"],
      kind: "colorPicker",
      action: "setColorPicker",
      target: [
        ["t1m1_color2", "t1m2_color2"],
        ["t1m1_color1", "t1m2_color1"],
      ],
      selected: [0, 0],
    },
    {
      header: "Roof",
      name: "Choose color",
      pool: "s_colors",
      target: ["t1m2_roofcolor", "t1m2_roofmatchcolor"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Frontal Logo",
      name: "Choose color",
      options: [
        {
          name: "Primary",
          color: "primary",
          target: "t1m2_colorlogo",
        },
        {
          name: "Secondary",
          color: "secondary",
          target: "t1m2_colorlogo",
        },
        {
          name: "No color insert / pure chrome",
          color: "chrome",
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
      header: "Model",
      name: "Choose model",
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
      target: ["t1_extra_curtains"],
      kind: "check",
      action: "setState",
      lock: { id: "curtainLock", state: false, control: true },
    },
    {
      header: "Curtain",
      name: "Choose color",
      pool: "t_colors",
      target: ["t1m3_colorcurtain", "t1m2_colorrooffabric"],
      kind: "dropdownColor",
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
      header: "Model",
      name: "Choose Model",
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
      header: "Frontal",
      name: "Choose model",
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
      header: "Back",
      name: "Choose model",
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
      name: "Choose model",
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
      header: "Strip Color",
      name: "Choose color",
      options: [
        {
          name: "Primary",
          color: "primary",
          target: ["t1m2_colormolding"],
        },
        {
          name: "Secondary",
          color: "secondary",
          target: ["t1m2_colormolding"],
        },
        {
          name: "No color insert / pure chrome",
          color: "chrome",
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
      header: "Frontal",
      name: "Choose model",
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
      header: "Back",
      name: "Choose model",
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
      pool: "s_colors",
      target: "t1m1_colorwheelrim",
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      name: "Volkswagen’s logo on hubcaps?",
      options: ["Yes", "No"],
      target: ["t1_extra_hubcap1"],
      action: "setState",
      kind: "check",
    },
    {
      header: "Hubcap",
      name: "Choose color",
      pool: "s_colors",
      target: ["t1m1_colorhubcap", "t1m1_colorhubcap2"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
  ],
  interior: [
    {
      name: "Seats",
      kind: "header",
    },
    {
      header: "Models and materials",
      name: "Choose model",
      options: [
        {
          name: "Model 1",
          target: [
            "t1_extra_seat1",
            "t1_extra_body1_1",
            "t1_extra_body2_1",
            "t1_extra_body3_1",
            "t1_extra_body4_1",
          ],
        },
        {
          name: "Model 2",
          target: [
            "t1_extra_seat2",
            "t1_extra_body1_2",
            "t1_extra_body2_2",
            "t1_extra_body3_2",
            "t1_extra_body4_2",
          ],
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      header: "Primary color",
      name: "Choose color",
      pool: "t_colors",
      target: ["t1m3_leatherstrap", "t1m3_seat"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Secondary color",
      name: "Choose color",
      pool: "t_colors",
      target: ["t1m3_seat2", "t1m3_middlebody", "t1m3_middlebody2"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Terciary color",
      name: "Choose color",
      pool: "t_colors",
      target: "t1m3_color3",
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      name: "Floor",
      kind: "header",
    },
    {
      name: "Choose color",
      pool: "t_colors",
      target: "t1m3_colorfloor",
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
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
