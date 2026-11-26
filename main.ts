import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune = "You will be rebooted by a minor Tuesday update at exactly the wrong moment. Acceptance is key. Also, pizza.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), fortune);
