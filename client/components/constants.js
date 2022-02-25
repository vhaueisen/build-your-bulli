export const p_colors = [
  { color: "#FFFFFF", name: "Ultra White" },
  { color: "#E6E6E6", name: "Inox " },
  { color: "#C7C7C7", name: "Classic Grey" },
  { color: "#7B7D7C", name: "Hail Grey" },
  { color: "#AEAF9F", name: "Clay" },
  { color: "#B6AC9B", name: "Taupe Trivia" },
  { color: "#D0C0A6", name: "Sahara" },
  { color: "#BBA375", name: "Capuccino" },
  { color: "#B39052", name: "Hacienda Clay" },
  { color: "#984C40", name: "Cocoa" },
  { color: "#501D00", name: "Brunette" },
  { color: "#4B1408", name: "Rosewood" },
  { color: "#631312", name: "Urucum" },
  { color: "#6B000E", name: "Royal Wine" },
  { color: "#250D02", name: "Sahara" },
  { color: "#441F37", name: "Royal Purple" },
  { color: "#D90000", name: "Red" },
  { color: "#E63564", name: "Pink" },
  { color: "#FF3E03", name: "Orange" },
  { color: "#FF9251", name: "Tangerine " },
  { color: "#FFD800", name: "Yellow Jet" },
  { color: "#00AA05", name: "Green" },
  { color: "#14291F", name: "Selva" },
  { color: "#3D3E35", name: "Lead" },
  { color: "#36302D", name: "Gray Slate" },
  { color: "#3ED0E9", name: "Blue" },
  { color: "#5681AF", name: "Blue Sport" },
  { color: "#071570", name: "Hawaii" },
  { color: "#300F64", name: "Royal Lilac" },
  { color: "#051439", name: "Blue Monarch" },
  { color: "#003F59", name: "Blue Ocean" },
  { color: "#252B3A", name: "Sandstone" },
  { color: "#121A22", name: "Black" },
  { color: "#000000", name: "Black Ink" },
];

// export const s_colors = [
//   { color: "#D8E0E1", name: "Color #1" },
//   { color: "#E3DFD3", name: "Color #1" },
//   { color: "#989D96", name: "Color #1" },
//   { color: "#7E8689", name: "Color #1" },
//   { color: "#060808", name: "Color #1" },
//   { color: "#173E34", name: "Color #1" },
//   { color: "#2F4E2F", name: "Color #1" },
//   { color: "#2D5332", name: "Color #1" },
//   { color: "#569D66", name: "Color #1" },
//   { color: "#7DA744", name: "Color #1" },
//   { color: "#CDC78E", name: "Color #1" },
//   { color: "#C5B882", name: "Color #1" },
//   { color: "#D8BF52", name: "Color #1" },
//   { color: "#E7D954", name: "Color #1" },
//   { color: "#BD602C", name: "Color #1" },
//   { color: "#BA2E27", name: "Color #1" },
//   { color: "#A42C24", name: "Color #1" },
//   { color: "#83251C", name: "Color #1" },
//   { color: "#4D1815", name: "Color #1" },
//   { color: "#5A1A18", name: "Color #1" },
//   { color: "#3E1F16", name: "Color #1" },
//   { color: "#58175B", name: "Color #1" },
//   { color: "#762DBF", name: "Color #1" },
//   { color: "#5A0DA3", name: "Color #1" },
//   { color: "#51318E", name: "Color #1" },
//   { color: "#33156B", name: "Color #1" },
//   { color: "#1E2A47", name: "Color #1" },
//   { color: "#285E83", name: "Color #1" },
//   { color: "#20506C", name: "Color #1" },
//   { color: "#4BA6C3", name: "Color #1" },
// ];

// export const t_colors = [
//   { color: "#E3E5D8", name: "Color #1" },
//   { color: "#C0B687", name: "Color #1" },
//   { color: "#938D73", name: "Color #1" },
//   { color: "#7E6F58", name: "Color #1" },
//   { color: "#68583E", name: "Color #1" },
//   { color: "#68583E", name: "Color #1" },
//   { color: "#C29A43", name: "Color #1" },
//   { color: "#5E6651", name: "Color #1" },
//   { color: "#61737E", name: "Color #1" },
//   { color: "#3F4B59", name: "Color #1" },
//   { color: "#1E2C2C", name: "Color #1" },
//   { color: "#019291", name: "Color #1" },
//   { color: "#3271A6", name: "Color #1" },
//   { color: "#01184A", name: "Color #1" },
//   { color: "#041537", name: "Color #1" },
//   { color: "#03060D", name: "Color #1" },
//   { color: "#1D1412", name: "Color #1" },
//   { color: "#3B252F", name: "Color #1" },
//   { color: "#42241C", name: "Color #1" },
//   { color: "#5D2A11", name: "Color #1" },
//   { color: "#6C3C32", name: "Color #1" },
//   { color: "#B60623", name: "Color #1" },
// ];
export const s_colors = p_colors;
export const t_colors = p_colors;

export const resetGlobal = () => {
  global.pColor = p_colors[0];
  global.sColor = p_colors[0];
};

export const getPool = (index) => {
  return index === "s_colors"
    ? s_colors
    : index === "t_colors"
    ? t_colors
    : p_colors;
};

resetGlobal();
