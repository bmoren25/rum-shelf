const rumData = {
  appleton12: {
    name: "Appleton Estate 12 Year",
    age: "12 years",
    notes: "Orange peel, toasted oak, vanilla, spice",
    style: "Jamaican rum, pot and column still blend",
    producer: "Appleton Estate"
  },
  wray: {
    name: "Wray & Nephew White Overproof",
    age: "Unaged",
    notes: "Banana, pineapple, funk, peppery finish",
    style: "Jamaican overproof rum",
    producer: "Wray & Nephew"
  },
  plantation: {
    name: "Plantation Original Dark",
    age: "Blend",
    notes: "Caramel, banana, brown sugar, baking spice",
    style: "Dark blended rum",
    producer: "Plantation / Planteray"
  }
};

function showRum(rumKey) {
  const rum = rumData[rumKey];

  document.getElementById("rum-name").textContent = rum.name;
  document.getElementById("rum-age").textContent = rum.age;
  document.getElementById("rum-notes").textContent = rum.notes;
  document.getElementById("rum-style").textContent = rum.style;
  document.getElementById("rum-producer").textContent = rum.producer;
}
