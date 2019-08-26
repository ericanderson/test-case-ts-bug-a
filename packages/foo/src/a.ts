import { B } from "./b";
import { A as BarA } from "bar";

export interface A {
  b: B;
  foo?: BarA
}
