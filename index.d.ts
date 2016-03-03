import * as VFile from "vfile";
import * as unified from "unified";

declare function retext(): unified.Processor;
declare namespace retext { }

export = retext;
