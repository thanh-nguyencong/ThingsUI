import {Canvas} from "@react-three/fiber";
import LandingPageModel from "../LandingPageModel";
import {OrbitControls} from "@react-three/drei";

export default function LandingPageCanvas(){
    return <Canvas camera={{position: [0, 0, 15], fov: 50}}>
        <LandingPageModel/>
    </Canvas>
}