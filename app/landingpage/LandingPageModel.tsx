import {useFrame, useThree} from "@react-three/fiber";
import {
    useGLTF,
    Text,
    MeshTransmissionMaterial,
    Environment,
    type MeshTransmissionMaterialProps
} from "@react-three/drei";
import {type ForwardedRef, useEffect, useRef} from "react";
import {Group, Light, Mesh, RectAreaLight} from "three";
import {RectAreaLightHelper} from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import {RectAreaLightUniformsLib} from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

RectAreaLightUniformsLib.init()
export default function LandingPageModel(){
    const { scene, viewport } = useThree();
    const imageGroup = useRef<Group>(null);
    const videoGroup = useRef<Group>(null);
    const imageMesh = useRef<Mesh>(null);
    const videoMesh = useRef<Mesh>(null);
    const rectAreaLightRef = useRef<RectAreaLight>(null);

    useEffect(() =>
    {
        const rectAreaLight = new RectAreaLight(0xffffff, 100, 1000, 2)
        rectAreaLight.position.set(-2, 20, -5)
        rectAreaLight.lookAt(0, 5, 5)
        scene.add(rectAreaLight)
        const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight)
        scene.add(rectAreaLightHelper)
        rectAreaLightRef.current = rectAreaLight;
        return () => {
            scene.remove(rectAreaLight)
            scene.remove(rectAreaLightHelper)
        }
    })

    const { nodes: imageNodes } = useGLTF('/icons/image.glb')
    imageNodes.Image.rotation.set(3.14 / 4, 3.14 / 4, 0)

    const { nodes: videoNodes } = useGLTF('/icons/video.glb')
    videoNodes.Video.rotation.set(3.14 / 6, 0, 0)
    
    useFrame(() => {
        const currentImageGroup = imageGroup.current
        if (currentImageGroup) {
            currentImageGroup.position.x += 0.05
            if (currentImageGroup.position.x > 20) {
                currentImageGroup.position.x = -20
            }
        }
        
        const currentVideoGroup = videoGroup.current
        if (currentVideoGroup) {
            currentVideoGroup.position.x += 0.05
            if (currentVideoGroup.position.x > 20) {
                currentVideoGroup.position.x = -20
            }
        }
        
        const currentVideoMesh = videoMesh.current
        if (currentVideoMesh) {
            currentVideoMesh.rotation.x += 0.01
        }
        
        const currentImageMesh = imageMesh.current
        if (currentImageMesh) {
            currentImageMesh.rotation.x += 0.01
        }
    })
    
    return <>
        <group ref={imageGroup} position={[-viewport.width / 2, -2, 0]}>
            <Text font={'/fonts/Inter/static/Inter_18pt-Black.ttf'} fontSize={3} position={[-8, 3, 1]}>
                image
            </Text>
            <mesh ref={imageMesh} {...imageNodes.Image}>
                <MeshTransmissionMaterial transmission={0.95} ior={1.2} thickness={1}
                                          roughness={0}
                                          chromaticAberration={0.12} backside={true}/>
            </mesh>
        </group>
        <group ref={videoGroup} position={[viewport.width / 2, -2, 0]}>
            <Text font={'/fonts/Inter/static/Inter_18pt-Black.ttf'} fontSize={3} position={[-8, 0, -1]}>
                video
            </Text>
            <mesh ref={videoMesh} {...videoNodes.Video} position={[0, 2, -1]}>
                <MeshTransmissionMaterial transmission={0.95} ior={1.2} thickness={1}
                                          roughness={0}
                                          chromaticAberration={0.12} backside={true}/>
            </mesh>
        </group>
    </>
}