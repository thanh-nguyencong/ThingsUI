import {Button} from "@/components/Button";
import {MenuIcon} from "lucide-react";
import {useState} from "react";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/Sheet";

export default function LandingPageDrawer() {
    var [hovered, setHovered] = useState(false);
    return <>
        <Sheet>
            <SheetTrigger>
                <Button
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    variant={"ghost"}
                    className={"inline-flex lg:hidden w-9 h-9"}>
                    <MenuIcon/>
                </Button>
            </SheetTrigger>
            <SheetContent
                    side={"top"}
                    className={"h-[100vh]"}>
                <SheetHeader>
                    <SheetTitle>
                        <h1><a href={"/"} className={"text-2xl font-bold"}>thinghives</a></h1>
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    </>
}