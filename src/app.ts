import { yarg } from "./config/plugins/args.plugins";

(async () => {
  await main();
})();

async function main() {
  console.log("🚀", yarg);
}
