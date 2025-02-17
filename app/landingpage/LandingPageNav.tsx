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
                <NavigationMenuTrigger className={"pl-5 pr-5 pt-2.5 pb-2.5 focus:bg-opacity-0 hover:bg-opacity-0"}>Products</NavigationMenuTrigger>
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
                <Link to={""}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Pricing
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
}