import { CommandOptionConfig } from "./CommandOptionConfig";
import {CommanderStatic} from "commander";

export interface CommandConfig {
  commander: CommanderStatic,
  title: string;
  description: string;
  options: CommandOptionConfig[];
}
