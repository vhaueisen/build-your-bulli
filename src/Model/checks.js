const checks = {
  exterior: {
    luggageRack: {
      name: "Would you like luggage rack?",
      id: "exteriorLuggageRackCheck",
      options: ["Yes", "No"],
    },
    stair: {
      name: "Would you like removable stairs?",
      id: "exteriorStairCheck",
      options: ["Yes", "No"],
    },
    molding: {
      name: "Would you like side moldings?",
      id: "exteriorMoldingCheck",
      options: ["Yes", "No"],
    },
    reverseLight: {
      name: "Reversing light",
      id: "exteriorReverseLightCheck",
      options: ["Yes", "No"],
    },
    fogLight: {
      name: "Fog light",
      id: "exteriorFogLightCheck",
      options: ["Yes", "No"],
    },
    wheelRim: {
      name: "How would you like the rims?",
      id: "exteriorWheelRimCheck",
      options: ["White", "Silver"],
    },
    wheelLogo: {
      name: "Volkswagen’s logo on hubcaps?",
      id: "exteriorWheelLogoCheck",
      options: ["Yes", "No"],
    },
  },
  interior: {
    cupHolder: {
      name: "Would you like cup holder?",
      id: "interiorCupHolderCheck",
      options: ["Yes", "No"],
    },
  },
};

export default checks;
