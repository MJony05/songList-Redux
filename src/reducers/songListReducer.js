const songListReducer = (history=[], song) => {
  return [
    { name: "Uzbek", time: "3:12", author: "Uzim" },
    { name: "Russia", time: "3:11", author: "Sergey" },
    { name: "USA", time: "2:44", author: "Alex" },
    { name: "Kazakh", time: "4:11", author: "Jelsinbay" },
  ];
};

export default songListReducer;