const dropdowns = {
  exterior: {
    frontalLogo: {
      name: "Choose frontal logo color",
      id: "exteriorFrontalLogoDropdown",
      options: [
        {
          name: "None",
          price: 0,
        },
        {
          name: "Color 01",
          price: 0,
          color: "black",
        },
        {
          name: "Color 02",
          price: 0,
          color: "red",
        },
      ],
    },
    windowFront: {
      name: "Front",
      id: "exteriorWindowFrontDropdown",
      options: [
        {
          name: "Standard",
          price: 0,
        },
        {
          name: "Safari",
          price: 0,
        },
      ],
    },
    windowSide: {
      name: "Side",
      id: "exteriorWindowSideDropdown",
      options: [
        {
          name: "Standard",
          price: 0,
        },
        {
          name: "Vent windows",
          price: 0,
        },
      ],
    },
    windowBackSide: {
      name: "Backside",
      id: "exteriorWindowBackSideDropdown",
      options: [
        {
          name: "Standard",
          price: 0,
        },
        {
          name: "Vent windows",
          price: 0,
        },
      ],
    },
    windowCurtain: {
      name: "Curtains",
      id: "exteriorWindowCourtainDropdown",
      options: [
        {
          name: "None",
          price: 0,
        },
        {
          name: "Color 01",
          price: 0,
          color: "black",
        },
        {
          name: "Color 02",
          price: 0,
          color: "red",
        },
      ],
    },
    bumperFront: {
      name: "Front",
      id: "exteriorBumperFrontDropdown",
      options: [
        {
          name: "USA style",
          price: 0,
        },
        {
          name: "Euro style",
          price: 0,
        },
      ],
    },
    bumperBack: {
      name: "Back",
      id: "exteriorBumperBackDropdown",
      options: [
        {
          name: "USA style",
          price: 0,
        },
        {
          name: "Euro style",
          price: 0,
        },
      ],
    },
    mirrorFront: {
      name: "Front",
      id: "exteriorMirrorFrontDropdown",
      options: [
        {
          name: "Elephant ear",
          price: 0,
        },
        {
          name: "Round",
          price: 0,
        },
        {
          name: "T2 style",
          price: 0,
        },
      ],
    },
    mirrorBack: {
      name: "Back",
      id: "exteriormirrorBackDropdown",
      options: [
        {
          name: "Elephant ear",
          price: 0,
        },
        {
          name: "Round",
          price: 0,
        },
        {
          name: "T2 style",
          price: 0,
        },
      ],
    },
    moldings: {
      name: "Choose strip Color",
      id: "exteriorMoldingsDropdown",
      options: [
        {
          name: "No color insert / pure chrome",
          price: 0,
        },
        {
          name: "Color 01",
          price: 0,
          color: "black",
        },
        {
          name: "Color 02",
          price: 0,
          color: "red",
        },
      ],
    },
    hubcap: {
      name: "Choose hubcap color",
      id: "exteriorHubcapDropdown",
      options: [
        {
          name: "None",
          price: 0,
        },
        {
          name: "Color 01",
          price: 0,
          color: "black",
        },
        {
          name: "Color 02",
          price: 0,
          color: "red",
        },
      ],
    },
    luggageRack: {
      name: "Choose model",
      id: "exteriorLuggageDropdown",
      options: [
        {
          name: "None",
          price: 0,
        },
        {
          name: "Top",
          price: 0,
        },
        {
          name: "Top & Side Stairs",
          price: 0,
        },
      ],
    },
  },
  interior: {
    seatNumber: {
      name: "Seats number",
      id: "interiorSeatNumberDropdown",
      options: [
        {
          name: "9 seats",
          price: 0,
          desc: "1 seat driver, 2 seats beside, 3 bank in the middle and 3 bank in the back",
        },
        {
          name: "8 seats",
          price: 0,
          desc: "1 seat driver, 1 seat beside, 3 and 3",
        },
        {
          name: "7 seats",
          price: 0,
          desc: "1 seat driver, 1 beside, 2 seats in the middle, 3 back",
        },
      ],
    },
    seatMaterial: {
      name: "Seats materials",
      id: "interiorSeatMaterialDropdown",
      options: [
        {
          name: "Material / fabric",
          price: 0,
        },
        {
          name: "Leatherette",
          price: 0,
        },
        {
          name: "Leather",
          price: 0,
        },
        {
          name: "Plastic / synthetic",
          price: 0,
        },
      ],
    },
    seatColor: {
      name: "Seats color",
      id: "interiorSeatColorDropdown",
      options: [
        {
          name: "None",
          price: 0,
        },
        {
          name: "Color 01",
          price: 0,
          color: "black",
        },
        {
          name: "Color 02",
          price: 0,
          color: "red",
        },
      ],
    },
    materials: {
      name: "Inside Materials",
      id: "interiorMaterialsDropdown",
      options: [
        {
          name: "Fabric",
          price: 0,
        },
        {
          name: "Leather",
          price: 0,
        },
        {
          name: "Wood",
          price: 0,
        },
      ],
    },
  },
};

export default dropdowns;
