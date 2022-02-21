import T1Simg from "./../images/T15.png";
import bundle from "./../3d/models/T15.glb";
export const T15 = {
  name: "T1,5",
  bundle: bundle,
  img: T1Simg,
  size: 25376508,
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
        ["t1,5m1_color2", "t1,5m2_color2"],
        ["t1,5m1_color1", "t1,5m2_color1"],
      ],
      selected: [0, 0],
    },
    {
      header: "Roof",
      name: "Choose color",
      pool: "s_colors",
      target: ["t1,5m2_roofcolor", "t1,5m2_roofmatchcolor"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Frontal Vent",
      name: "Choose color",
      options: [
        {
          name: "Secondary",
          color: "secondary",
          target: "t1,5m2_frontgridcolor",
        },
        {
          name: "Black",
          color: "#000000",
          target: "t1,5m2_frontgridcolor",
        },
      ],
      kind: "dropdown",
      action: "setMetallicColorDropdown",
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
          target: [
            "t1,5_extra_window1",
            "t1,5_extra_window1_transparent_shader",
          ],
        },
        {
          name: "Safari",
          target: [
            "t1,5_extra_window2",
            "t1,5_extra_window2_transparent_shader",
          ],
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Curtains?",
      options: ["Yes", "No"],
      target: ["t1,5_extra_curtains"],
      kind: "check",
      action: "setState",
      lock: { id: "curtainLock", state: false, control: true },
    },
    {
      header: "Curtain",
      name: "Choose color",
      pool: "t_colors",
      target: ["t1,5m3_curtaincolor", "t1,5m2_colorrooffabric"],
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
        "t1,5_extra_luggagerack1",
        "t1,5_extra_luggagerack2",
        "t1,5_extra_luggagerack3",
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
          target: "t1,5_extra_luggagerack2",
          lock: { id: "ladderlock", state: false, control: true },
        },
        {
          name: "Back",
          target: "t1,5_extra_luggagerack1",
        },
        {
          name: "Full",
          target: "t1,5_extra_luggagerack3",
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
      target: "t1,5_extra_ladder",
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
          target: ["t1,5_extra_bumper1front"],
        },
        {
          name: "Model 2",
          target: ["t1,5_extra_bumper2front"],
          lock: { id: "bumper2lock", state: false, control: true },
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
          target: ["t1,5_extra_bumper1rear"],
        },
        {
          name: "Model 2",
          target: ["t1,5_extra_bumper2rear"],
          lock: { id: "bumper2lock", state: false, control: true },
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Extra Lights",
      kind: "header",
    },
    {
      name: "Reversing light",
      options: ["Yes", "No"],
      target: "t1,5_extra_taillight",
      kind: "check",
      action: "setState",
    },
    {
      name: "Fog light",
      options: ["Yes", "No"],
      kind: "check",
      target: ["t1,5_extra_fog"],
      action: "setState",
      lock: { id: "bumper2lock", state: false },
    },
    {
      name: "Wheels",
      kind: "header",
    },
    {
      name: "How would you like the rims?",
      pool: "s_colors",
      target: "t1,5m1_wheelrimcolor",
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      name: "Volkswagen’s logo on hubcaps?",
      options: ["Yes", "No"],
      target: ["t1,5_extra_hubcap1"],
      action: "setState",
      kind: "check",
    },
    {
      header: "Hubcap",
      name: "Choose color",
      pool: "s_colors",
      target: ["t1,5m1_hubcapcolor", "t1,5m1_hubcapcolor2"],
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
            "t1,5_extra_seat1",
            "t1,5_extra_body1_1",
            "t1,5_extra_body2_1",
            "t1,5_extra_body3_1",
            "t1,5_extra_body4_1",
          ],
        },
        {
          name: "Model 2",
          target: [
            "t1,5_extra_seat2",
            "t1,5_extra_body1_2",
            "t1,5_extra_body2_2",
            "t1,5_extra_body3_2",
            "t1,5_extra_body4_2",
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
      target: ["t1,5m3_leatherstrap", "t1,5m3_seat"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Secondary color",
      name: "Choose color",
      pool: "t_colors",
      target: ["t1,5m3_seat2", "t1,5m3_middlebody", "t1,5m3_middlebody2"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Terciary color",
      name: "Choose color",
      pool: "t_colors",
      target: "t1,5m3_color3",
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
      target: "t1,5m3_floorcolor",
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
        "t1,5_extra_extraindicatorsvacuum",
        "t1,5_extra_extraindicatorsvacuum_transparent_shader",
      ],
      action: "setState",
    },
    {
      name: "Central dash",
      options: ["Yes", "No"],
      kind: "check",
      target: [
        "t1,5_extra_extraindicatorscentral",
        "t1,5_extra_extraindicatorscentral_transparent_shader",
      ],
      action: "setState",
    },
  ],
};
