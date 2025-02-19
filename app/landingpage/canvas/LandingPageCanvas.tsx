import {Canvas} from "@react-three/fiber";
import LandingPageModel from "../LandingPageModel";
import {Environment} from "@react-three/drei";

export default function LandingPageCanvas(){
    return <Canvas>
        <directionalLight intensity={3} position={[0, 3, 2]} />
        <Environment preset={'city'}/>
        <LandingPageModel/>
    </Canvas>
}