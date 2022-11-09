const player = {
  name: "Lee",
  point: function (helth, mana) {
    console.log(helth + mana);
  },
};

player.point(9999, 1);
console.log(player);
