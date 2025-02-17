import {Canvas, useLoader} from '@react-three/fiber'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {Button} from "@/components/Button";
import {SquareArrowOutUpRight} from "lucide-react";
import {SignInButton} from "@/components/SignInButton";
import {ThemeButton} from "@/components/ThemeButton";
import LandingPageNav from "~/landingpage/LandingPageNav";
import LandingPageDrawer from "~/landingpage/LandingPageDrawer";

export function LandingPage() {
    const gltf = useLoader(GLTFLoader, ['/icons/video.glb', '/icons/image.glb'])
    gltf[0].scene.rotation.set(3.14 / 2, 0, 0)
    gltf[1].scene.rotation.set(3.14 / 2, 0, 0)
    gltf[0].scene.position.set(-3, 0, 0)
    gltf[1].scene.position.set(3, 0, 0)
    return <>
        <header>
            <div className={"max-w-[100vw] flex justify-center align-center"}>
                <div className={"container flex justify-between gap-x-5 pl-4 pr-4 ml-8 mr-8 pt-3"}>
                    <LandingPageDrawer/>
                    <h1><a href={"/"} className={"text-2xl font-bold"}>thinghives</a></h1>
                    <LandingPageNav/>
                    <div className={"flex flex-1 items-center justify-end"}>
                        <div className={"w-fit flex items-center justify-center"}>
                            <SignInButton/>
                            <ThemeButton/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className={"pt-29 w-full flex justify-center"}>
                <div className="grid grid-cols-2 w-[90vw]">
                    <div className={"grid grid-rows-3 gap-8"}>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl w-[calc(100%+150px)]">
                            Digital Asset Management.<br/>
                            Speed, Simplified.
                        </h1>
                        <p className="leading-7">
                            Seamless collaboration on millions of assets—at lightning speed.
                            Customize workflows, automate approvals, all optimized.
                        </p>
                        <Button className="h-9 w-fit">Instant 5-Minute Demo <SquareArrowOutUpRight/></Button>
                    </div>
                    <div className={"hidden lg:flex"}>
                        <Canvas orthographic camera={{zoom: 10, position: [0, 0, 10]}}>
                            <primitive object={gltf[0].scene}/>
                            <primitive object={gltf[1].scene}/>
                            <boxGeometry/>
                            <ambientLight intensity={0.5}/>
                            <pointLight position={[10, 10, 20]} color={"white"} intensity={4000}/>
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    </>
}