import {useFrame, useThree} from "@react-three/fiber";
import {animated, useSpring} from '@react-spring/three'
import {
    useGLTF,
    Text,
    MeshTransmissionMaterial,
    Environment,
    type MeshTransmissionMaterialProps, Text3D
} from "@react-three/drei";
import {type ForwardedRef, useEffect, useRef} from "react";
import {BoxGeometry, Group, Light, Mesh, MeshStandardMaterial, RectAreaLight} from "three";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

RectAreaLightUniformsLib.init()
export default function LandingPageModel(){
    const { scene, viewport } = useThree();
    const imageGroup = useRef<Group>(null);
    const videoGroup = useRef<Group>(null);
    const mesh = useRef<Mesh>(null);
    const videoMesh = useRef<Mesh>(null);
    
    // Should spread equally along the height of 1 / 4 a cylinder with radius 10 and all looking at the origin.
    const rectAreaLightRadius = 8
    const rectAreaLightWidth = 12
    const rectAreaLightHeight = 10
    const rectAreaLightIntensity = 8

    useEffect(() =>
    {
        const rectAreaLightCount = 2
        const rectAreaLights: RectAreaLight[] = []
        const rectAreaLightHelpers: RectAreaLightHelper[] = []
        for (let i = 0; i < rectAreaLightCount; i++)
        {
            const y = 0
            const x = rectAreaLightRadius * Math.cos(i / (rectAreaLightCount - 1) * Math.PI / 32 * 31 + Math.PI / 64)
            const z = -rectAreaLightRadius * Math.sin(i / (rectAreaLightCount - 1) * Math.PI / 32 * 31 + Math.PI / 64)
            // Create the light, alternating between red green and blue
            const rectAreaLight = new RectAreaLight(0xffffff, rectAreaLightIntensity, rectAreaLightWidth, rectAreaLightHeight)
            rectAreaLight.position.set(x, y, z)
            rectAreaLight.lookAt(0, 0, 0)
            scene.add(rectAreaLight)
            rectAreaLights.push(rectAreaLight)
            const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
            scene.add(rectAreaLightHelper)
            rectAreaLightHelpers.push(rectAreaLightHelper)
        }
        
        return () =>
        {
            rectAreaLights.forEach((rectAreaLight) => scene.remove(rectAreaLight));
            rectAreaLightHelpers.forEach((rectAreaLightHelper) => scene.remove(rectAreaLightHelper));
        }
    })

    const { nodes: imageNodes } = useGLTF('/icons/video.glb')
    // image should lay flat on the ground facing up
    imageNodes.Video.position.y = 0// -rectAreaLightHeight / 2
    imageNodes.Video.rotation.y = Math.PI / 3
    imageNodes.Video.rotation.x = Math.PI / 4
    
    let goUp = false
    useFrame((state, delta, frame) => {
        const currentMesh = mesh.current
        if (!currentMesh) return
        currentMesh.rotation.x += 0.03
        // currentMesh.rotation.y += 0.02
        if (currentMesh.position.z > 7) {
            currentMesh.position.z += 0.03
        } else {
            currentMesh.position.z += 0.07
        }
        currentMesh.position.y = 3 * Math.sin(delta / 100)
        if (currentMesh.position.z > 16) {
            currentMesh.position.z = -10
        }
    })
    
    const { nodes: videoNodes } = useGLTF('/icons/video.glb')
    // video should lay flat on the ground facing up
    // videoNodes.Video.position.y = -rectAreaLightHeight / 2
    // videoNodes.Video.rotation.y = Math.PI / 8
    
    // let lastUpdate = Date.now()
    // let currentIsImage = true
    // useFrame(() => {
    //     // Change between video and image every 1 second
    //     if (Date.now() - lastUpdate > 2000) {
    //         lastUpdate = Date.now()
    //         const currentMesh = mesh.current
    //         if (currentMesh) {
    //             if (currentIsImage) {
    //                 currentIsImage = false
    //                 currentMesh.remove(imageNodes.Image)
    //                 currentMesh.add(videoNodes.Video)
    //             } else {
    //                 currentIsImage = true
    //                 currentMesh.remove(videoNodes.Video)
    //                 currentMesh.add(imageNodes.Image)
    //             }
    //         }
    //     }
    // })
    
    return <>
        <group ref={imageGroup} position={[0, 0, 0]}>
            <Text3D size={1} font={'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json'} position={[-1.5, 0, 0]}>
                vivid
            </Text3D>
            <mesh ref={mesh} {...imageNodes.Video}>
                <MeshTransmissionMaterial transmission={1} ior={1.2} thickness={1} roughness={0} chromaticAberration={0.12} backside={true}/>
            </mesh>
        </group>
    </>
}