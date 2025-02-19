import {useFrame, useThree} from "@react-three/fiber";
import {useGLTF, Text, MeshTransmissionMaterial} from "@react-three/drei";
import {useRef} from "react";
import {Mesh} from "three";
import {useControls} from "leva";

export default function LandingPageModel(){
    const mesh = useRef<Mesh>(null);
    
    const { nodes } = useGLTF('/icons/video.glb')
    nodes.Video.rotation.set(3.14 / 2, 0, 0)
    
    const { viewport } = useThree()
    
    useFrame(() => {
        const current = mesh.current;
        if (current) {
            current.rotation.x += 0.005;
        }
    })
    return <group scale={viewport.width / 20}>
        <Text fontSize={7} textAlign="center" font={'/fonts/Inter/static/Inter_18pt-ExtraBoldItalic.ttf'} position={[0, 0, -10]}>
            thanhdeptrai
        </Text>
        <mesh ref={mesh} {...nodes.Video}>
            <MeshTransmissionMaterial transmission={0.99} ior={1.2} thickness={0.2} roughness={0} chromaticAberration={0.02} backside={true} />
        </mesh>
    </group>
}