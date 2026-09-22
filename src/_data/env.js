// Eleventy sets ELEVENTY_RUN_MODE automatically: "build" for `eleventy`
// (what the deploy workflow and `npm run build` use), "serve"/"watch" for
// local preview (`npm start`). Used to keep GA4 out of local dev.
export default { production: process.env.ELEVENTY_RUN_MODE === "build" };
