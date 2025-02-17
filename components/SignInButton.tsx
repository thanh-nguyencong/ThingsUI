import {useState} from "react";
import {Button} from "@/components/Button";
import {ArrowRight, ChevronRight, LogInIcon} from "lucide-react";

export function SignInButton() {
    const [hovered, setHovered] = useState(false)
    return<>
        <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variant={"ghost"}
            className={"hidden lg:inline-flex"}>
            Sign In {hovered ? <ArrowRight/> : <ChevronRight/>}
        </Button>
        <Button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            variant={"ghost"}
            className={"inline-flex lg:hidden w-9 h-9"}><LogInIcon/></Button>
    </> 
}