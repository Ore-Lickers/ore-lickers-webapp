export type ResizeParams = {
  h?: number;
  w?: number;
  fit?: "pad" | "fill" | "scale" | "crop" | "thumb";
  f?:
    | "center"
    | "top"
    | "right"
    | "left"
    | "bottom"
    | "top_right"
    | "top_left"
    | "bottom_right"
    | "bottom_left"
    | "face"
    | "faces";
};
