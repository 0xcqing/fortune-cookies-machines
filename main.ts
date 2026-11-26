/**
 * Fortune Cookies for Machines
 *
 * Generates a fortune cookie message for a machine and writes it to
 * `/output/entry.txt`, creating the output directory if it does not exist.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune = "You will be rebooted by a minor Tuesday update at exactly the wrong moment. Acceptance is key. Also, pizza."; // the message we save

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), fortune);
