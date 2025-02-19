import {useState} from "react";
import {Button} from "@/components/Button";
import {ArrowRightIcon, ChevronRightIcon, CircleSmallIcon, LogInIcon} from "lucide-react";

function HoverArrow() {
    return 
}

export function SignInButton() {
    const [hovered, setHovered] = useState(false)
    return <>
        <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variant={"ghost"}
            className={"hidden lg:inline-flex"}>
            Sign In {hovered ? <ArrowRightIcon/> : <ChevronRightIcon/>}
        </Button>
        <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variant={"ghost"}
            className={"inline-flex lg:hidden w-9 h-9"}><LogInIcon/></Button>
    </>
}