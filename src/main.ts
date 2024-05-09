import { Data, MCFunction, Objective, Selector, Variable, _, execute, title } from "sandstone";

// Variables and scores
const selfEntity = Selector("@s");

const posX = Objective.create("pos_x", "dummy")("@s");
const posY = Objective.create("pos_y", "dummy")("@s");
const posZ = Objective.create("pos_z", "dummy")("@s");

const displayFlag = Variable(0); // Set the flag to know if the HUDDisplay is set

const updatePos = MCFunction("private/update_position", () => {
  execute
    .as("@a")
    .at("@s")
    .run(() => {
      // Referencing the Pos of the player
      const playerDataX = Data("entity", "@s", "Pos[0]");
      const playerDataY = Data("entity", "@s", "Pos[1]");
      const playerDataZ = Data("entity", "@s", "Pos[2]");

      // Setting the scores to new pos
      posX.set(playerDataX);
      posY.set(playerDataY);
      posZ.set(playerDataZ);
    });
});

const displayCoordinates = MCFunction("private/display_coords", () => {
  _.if(displayFlag["=="](1), () => {
    // Defining the custom text component
    const textComponent = [
      { text: "X: ", posX },
      //// { score: { name: posX.target, objective: posX.objective.name } },
      { text: "Y: ", posY },
      //// { score: { name: posY.target, objective: posY.objective.name } },
      { text: "Z: ", posZ },
      //// { score: { name: posZ.target, objective: posZ.objective.name } },
    ];

    // Use the custom text component
    title("@a").actionbar(textComponent);
  });
});

//! Ticking Function
const main = MCFunction(
  "private/main",
  () => {
    displayCoordinates();
    updatePos();
  },
  {
    runEveryTick: true,
  }
);

// console.log(posX.objective.display);
