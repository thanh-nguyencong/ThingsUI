import {Canvas, extend, useFrame, useLoader} from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import {Button} from "@/components/Button";
import {SquareArrowOutUpRight} from "lucide-react";
import {SignInButton} from "@/components/SignInButton";
import {ThemeButton} from "@/components/ThemeButton";
import LandingPageNav from "~/landingpage/LandingPageNav";
import LandingPageDrawer from "~/landingpage/LandingPageDrawer";
import LandingPageCanvas from "~/landingpage/canvas/LandingPageCanvas";

extend({ TextGeometry })
export function LandingPage() {
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
                        <LandingPageCanvas/>
                    </div>
                </div>
            </div>
        </section>
    </>
}