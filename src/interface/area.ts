import { Grops } from "./groups";
import { Thing } from "./things";

export interface Area {
  areaId: number;
  name: string;
  nodes?: Grops[];
}
