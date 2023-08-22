// import { Options } from "$fresh/plugins/twindv1.ts";

// export default {
//   selfURL: import.meta.url,
// } as Options;


import { defineConfig } from "@twind/core";
import presetTailwind from "@twind/preset-tailwind";

export default {
  ...defineConfig({
    presets: [presetTailwind()],
  }),
  selfURL: import.meta.url,
};