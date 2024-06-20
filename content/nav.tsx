import { LucideIcons } from '@/modules/shared/icons';
import { PATHS } from './paths';
import { TOOLTIP_MESSAGES } from './tolltip-messages';

const { home, about, items, search } = PATHS;
const { home_tooltip, about_tooltip, items_tooltip, search_tooltip } =
  TOOLTIP_MESSAGES;

export const NavigationContent = [
  {
    href: home,
    icon: <LucideIcons.home />,
    tooltip: home_tooltip,
  },
  {
    href: about,
    icon: <LucideIcons.info />,
    tooltip: about_tooltip,
  },
  {
    href: items,
    icon: <LucideIcons.items />,
    tooltip: items_tooltip,
  },
  {
    href: search,
    icon: <LucideIcons.search />,
    tooltip: search_tooltip,
  },
];
