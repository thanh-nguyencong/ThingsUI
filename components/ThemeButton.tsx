import {useTheme} from "@/components/theme-provider";
import {Button} from "@/components/Button";
import {MoonIcon, SunIcon} from "lucide-react";

export function ThemeButton() {
    const {theme, setTheme} = useTheme()
    return <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant={"ghost"}
            className={"h-9 w-9"}>
        {theme === "dark" && <SunIcon/> || <MoonIcon/>}
    </Button>
}