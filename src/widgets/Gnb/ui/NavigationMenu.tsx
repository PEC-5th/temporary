import Link from 'next/link';
import { PATHS } from '@/shared/constants/path';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/shared/ui/NavigationMenu';
import { NAVIGATION_MENUS } from '../model';

const GnbNavigationMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVIGATION_MENUS.map((menu) => (
          <NavigationMenuItem key={menu.name}>
            <Link href={PATHS[menu.path] as string}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {menu.name}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default GnbNavigationMenu;
