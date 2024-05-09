import type { DatapackConfig, ResourcePackConfig, SandstoneConfig } from "sandstone";

export default {
  name: "Quadrant Finder New",
  packs: {
    datapack: {
      description: ["A ", { text: "Sandstone", color: "gold" }, " datapack."],
      packFormat: 19,
    } as DatapackConfig,
    resourcepack: {
      description: ["A ", { text: "Sandstone", color: "gold" }, " resource pack."],
      packFormat: 18,
    } as ResourcePackConfig,
  },
  onConflict: {
    default: "warn",
  },
  namespace: "quadrant_finder_new",
  packUid: "kZzHGK67",
  mcmeta: "latest",
  // saveOptions: {
  //   world: "Test World",
  // },
  saveOptions: { path: "./.sandstone/output/datapack" },
} as SandstoneConfig;
