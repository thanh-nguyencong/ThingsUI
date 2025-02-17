import {
    NavigationMenu, NavigationMenuLink,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger, NavigationMenuIndicator, navigationMenuTriggerStyle
} from "@/components/NavigationMenu";
import {Button} from "@/components/Button";
import {Link} from "react-router";

export default function LandingPageNav() {
    return <NavigationMenu className={"hidden lg:block"}>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={"pl-5 pr-5 pt-2.5 pb-2.5"}>Products</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={"pl-5 pr-5 pt-2.5 pb-2.5"}>Solutions</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={"pl-5 pr-5 pt-2.5 pb-2.5"}>Developers</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger className={"pl-5 pr-5 pt-2.5 pb-2.5"}>Resources</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <div className={"w-30 flex items-center justify-center"}>
                    <Link to={""} className={"w-100%"}>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Pricing
                        </NavigationMenuLink>
                    </Link>
                </div>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
}