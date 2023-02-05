import { Canvas } from "./styles";
import './main.js'
import { memo } from "react";

function CanvasBackground(){
    return(
        <Canvas id="canvas" />
    )
}
export default memo(CanvasBackground)