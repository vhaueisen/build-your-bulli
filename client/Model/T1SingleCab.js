import T1Simg from "./../images/T1SingleCab.png";
import bundle from "./../3d/models/T1SingleCab.glb";
export const T1SingleCab = {
  name: "T1 Single Cab",
  bundle: bundle,
  size: 24814944,
  img: T1Simg,
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
        ["t1scm1_color2", "t1scm2_color2"],
        ["t1scm1_color1", "t1scm2_color1"],
      ],
      selected: [0, 0],
    },
    {
      header: "Roof",
      name: "Choose color",
      pool: "s_colors",
      target: ["t1scm2_roofcolor", "t1scm2_roofmatchcolor"],
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
          target: "t1scm2_colorlogo",
        },
        {
          name: "Secondary",
          color: "secondary",
          target: "t1scm2_colorlogo",
        },
        {
          name: "No color insert / pure chrome",
          color: "chrome",
          target: "t1scm2_colorlogo",
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
            "t1sc_extra_window1",
            "t1sc_extra_window1_transparent_shader",
          ],
        },
        {
          name: "Safari",
          target: [
            "t1sc_extra_window2",
            "t1sc_extra_window2_transparent_shader",
          ],
        },
      ],
      kind: "dropdown",
      action: "setModel",
    },
    {
      name: "Luggage Rack",
      kind: "header",
    },
    {
      name: "Would you like luggage rack?",
      options: ["Yes", "No"],
      target: ["t1sc_extra_luggagerack"],
      kind: "check",
      action: "setState",
      lock: { id: "luggageLock", state: false, control: true },
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
          target: "t1sc_extra_bumper2front",
          lock: { id: "bumper2lock", state: false, control: true },
        },
        {
          name: "Model 2",
          target: "t1sc_extra_bumper1front",
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
          target: "t1sc_extra_bumper2rear",
          lock: { id: "bumper2lock", state: false, control: true },
        },
        {
          name: "Model 2",
          target: "t1sc_extra_bumper1rear",
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
          target: "t1sc_extra_mirror1",
        },
        {
          name: "Model 2",
          target: "t1sc_extra_mirror2",
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
      target: "t1sc_extra_taillight",
      kind: "check",
      action: "setState",
    },
    {
      name: "Fog light",
      options: ["Yes", "No"],
      kind: "check",
      target: "t1sc_extra_foglights",
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
          target: "t1sc_extra_turnindicator1",
        },
        {
          name: "Model 2",
          target: "t1sc_extra_turnindicator2",
        },
        {
          name: "Model 3",
          target: "t1sc_extra_turnindicator3",
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
          target: "t1sc_extra_backlight1",
        },
        {
          name: "Model 2",
          target: "t1sc_extra_backlight2",
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
      target: "t1scm1_colorwheelrim",
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      name: "Volkswagen’s logo on hubcaps?",
      options: ["Yes", "No"],
      target: ["t1sc_extra_hubcap1"],
      action: "setState",
      kind: "check",
    },
    {
      header: "Hubcap",
      name: "Choose color",
      pool: "s_colors",
      target: ["t1scm1_colorhubcap", "t1scm1_colorhubcap2"],
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
            "t1sc_extra_seat1",
            "t1sc_extra_body1_1",
            "t1sc_extra_body2_1",
            "t1sc_extra_body3_1",
            "t1sc_extra_body4_1",
          ],
        },
        {
          name: "Model 2",
          target: [
            "t1sc_extra_seat2",
            "t1sc_extra_body1_2",
            "t1sc_extra_body2_2",
            "t1sc_extra_body3_2",
            "t1sc_extra_body4_2",
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
      target: ["t1scm3_leatherstrap", "t1scm3_seat"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Secondary color",
      name: "Choose color",
      pool: "t_colors",
      target: ["t1scm3_seat2", "t1scm3_middlebody", "t1scm3_middlebody2"],
      kind: "dropdownColor",
      action: "setColorDropdown",
    },
    {
      header: "Terciary color",
      name: "Choose color",
      pool: "t_colors",
      target: "t1scm3_color3",
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
      target: "t1scm3_floorcolor",
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
        "t1sc_extra_extraindicatorsvacuum",
        "t1sc_extra_extraindicatorsvacuum_transparent_shader",
      ],
      action: "setState",
    },
    {
      name: "Central dash",
      options: ["Yes", "No"],
      kind: "check",
      target: [
        "t1sc_extra_extraindicatorscentral",
        "t1sc_extra_extraindicatorscentral_transparent_shader",
      ],
      action: "setState",
    },
  ],
};
