import {
  BatteryWarning,
  BellRinging,
  Browsers,
  Calendar,
  Cards,
  CaretDoubleRight,
  ChartBar,
  ChartLine,
  ChartLineUp,
  ChartPie,
  CheckCircle,
  DotsThreeCircle,
  IconProps,
  ListNumbers,
  Minus,
  Notification,
  Option,
  PictureInPicture,
  RadioButton,
  Sidebar,
  SlidersHorizontal,
  User,
  Warning,
} from 'phosphor-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { v4 as generatedID } from 'uuid'

export interface routerPath {
  id: string
  name: string
  href: string
  tag?: boolean
  deprecate?: boolean
  redirect?: boolean
  folderName?: string
  target?: string
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>
}

export const routes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Accordion',
    href: '/docs/components/accordion',
    tag: false,
    deprecate: false,
    folderName: 'Accordion',
    Icon: Browsers,
  },
  {
    id: generatedID(),
    name: 'Alert',
    href: '/docs/components/alert',
    tag: false,
    deprecate: false,
    folderName: 'Alert',
    Icon: Warning,
  },
  {
    id: generatedID(),
    name: 'Area Chart',
    href: '/docs/components/areaChart',
    tag: false,
    deprecate: false,
    folderName: 'Chart',
    Icon: ChartLineUp,
  },
  {
    id: generatedID(),
    name: 'Bar Chart',
    folderName: 'Chart',
    href: '/docs/components/barChart',
    tag: false,
    deprecate: false,
    Icon: ChartBar,
  },
  {
    id: generatedID(),
    name: 'Line Chart',
    folderName: 'Chart',
    href: '/docs/components/lineChart',
    tag: false,
    deprecate: false,
    Icon: ChartLine,
  },
  {
    id: generatedID(),
    name: 'Pie Chart',
    folderName: 'Chart',
    href: '/docs/components/pieChart',
    tag: false,
    deprecate: false,
    Icon: ChartPie,
  },
  {
    id: generatedID(),
    name: 'Avatar',
    href: '/docs/components/avatar',
    tag: false,
    deprecate: false,
    folderName: 'Avatar',
    Icon: User,
  },
  {
    id: generatedID(),
    name: 'Badge',
    folderName: 'Badge',
    href: '/docs/components/badge',
    tag: false,
    deprecate: false,
    Icon: Notification,
  },

  {
    id: generatedID(),
    name: 'BreadCrumb',
    folderName: 'Breadcrumb',
    href: '/docs/components/breadcrumb',
    tag: false,
    deprecate: false,
    Icon: CaretDoubleRight,
  },
  {
    id: generatedID(),
    name: 'Button',
    folderName: 'Button',
    href: '/docs/components/button',
    tag: false,
    deprecate: false,
    Icon: RadioButton,
  },
  {
    id: generatedID(),
    name: 'Button Group',
    folderName: 'Button',
    href: '/docs/components/buttonGroup',
    tag: false,
    deprecate: false,
    Icon: DotsThreeCircle,
  },
  {
    id: generatedID(),
    name: 'Card',
    folderName: 'Card',
    href: '/docs/components/card',
    tag: false,
    deprecate: false,
    Icon: Cards,
  },
  {
    id: generatedID(),
    name: 'Carousel',
    folderName: 'Carousel',
    href: '/docs/components/carousel',
    tag: false,
    deprecate: false,
    Icon: SlidersHorizontal,
  },
  {
    id: generatedID(),
    name: 'Checkbox',
    folderName: 'Checkbox',
    href: '/docs/components/checkbox',
    tag: false,
    deprecate: false,
    Icon: CheckCircle,
  },
  {
    id: generatedID(),
    name: 'Divider',
    folderName: 'Divider',
    href: '/docs/components/divider',
    tag: false,
    deprecate: false,
    Icon: Minus,
  },
  {
    id: generatedID(),
    name: 'Date Picker',
    folderName: 'DatePicker',
    href: '/docs/components/datePicker',
    tag: false,
    deprecate: false,
    Icon: Calendar,
  },
  {
    id: generatedID(),
    name: 'Dropdown',
    folderName: 'Dropdown',
    href: '/docs/components/dropdown',
    tag: false,
    deprecate: false,
    Icon: Option,
  },
  {
    id: generatedID(),
    name: 'Drawer',
    folderName: 'Drawer',
    href: '/docs/components/drawer',
    tag: false,
    deprecate: false,
    Icon: Sidebar,
  },
  {
    id: generatedID(),
    name: 'Empty',
    folderName: 'Empty',
    href: '/docs/components/empty',
    tag: false,
    deprecate: false,
    Icon: BatteryWarning,
  },
  {
    id: generatedID(),
    name: 'Modal',
    folderName: 'Modal',
    href: '/docs/components/modal',
    tag: false,
    deprecate: false,
    Icon: PictureInPicture,
  },
  // {
  //   id: generatedID(),
  //   name: 'Navbar',
  //   folderName: 'Navbar',
  //   href: '/docs/components/navbar',
  //   tag: false,
  //   deprecate: false,
  //   Icon: Browser,
  // },
  {
    id: generatedID(),
    name: 'Notification',
    folderName: 'Notification',
    href: '/docs/components/notification',
    tag: false,
    deprecate: false,
    Icon: BellRinging,
  },
  {
    id: generatedID(),
    name: 'Number Input',
    folderName: 'FormControls',
    href: '/docs/components/numberInput',
    tag: false,
    deprecate: false,
    Icon: ListNumbers,
  },
  {
    id: generatedID(),
    name: 'Progress',
    folderName: 'Progress',
    href: '/docs/components/progress',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Pagination',
    folderName: 'Pagination',
    href: '/docs/components/pagination',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Popover',
    folderName: 'Popover',
    href: '/docs/components/popover',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Radio',
    folderName: 'FormControls',
    href: '/docs/components/radio',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Rating',
    folderName: 'Rating',
    href: '/docs/components/rating',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Sidebar',
    folderName: 'Sidebar',
    href: '/docs/components/sidebar',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Skeleton',
    folderName: 'Skeleton',
    href: '/docs/components/skeleton',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Slider',
    folderName: 'Slider',
    href: '/docs/components/slider',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Select',
    folderName: 'Select',
    href: '/docs/components/select',
    tag: true,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Spinner',
    folderName: 'Spinner',
    href: '/docs/components/spinner',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Steps',
    folderName: 'Steps',
    href: '/docs/components/steps',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Switch',
    folderName: 'FormControls',
    href: '/docs/components/switch',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Table',
    folderName: 'Table',
    href: '/docs/components/table',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Tabs',
    folderName: 'Tabs',
    href: '/docs/components/tabs',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Text Area',
    folderName: 'FormControls',
    href: '/docs/components/textArea',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Toast',
    folderName: 'Toast',
    href: '/docs/components/toast',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Input',
    folderName: 'Input',
    href: '/docs/components/input',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Input OTP',
    folderName: 'Input OTP',
    href: '/docs/components/inputOtp',
    tag: true,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Timeline',
    folderName: 'Timeline',
    href: '/docs/components/timeline',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Tooltip',
    folderName: 'Tooltip',
    href: '/docs/components/tooltip',
    tag: false,
    deprecate: false,
  },
  {
    id: generatedID(),
    name: 'Upload',
    folderName: 'Upload',
    href: '/docs/components/upload',
    tag: false,
    deprecate: false,
  },
]

export const gettingStartedRoutes: routerPath[] = [
  {
    id: generatedID(),
    name: 'Installation',
    href: '/docs/getting-started/installation',
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/docs/getting-started/typography',
  },
  {
    id: generatedID(),
    name: 'Colors',
    href: '/docs/getting-started/colors',
  },
  {
    id: generatedID(),
    name: 'Dark Mode',
    href: '/docs/getting-started/dark-mode',
  },
]

export const quickAccessRoute: routerPath[] = [
  {
    id: generatedID(),
    name: 'Installation',
    href: '/docs/getting-started/installation',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Figma',
    href: 'https://keepdesign.io/',
    target: '_blank',
  },
  {
    id: generatedID(),
    name: 'Typography',
    href: '/docs/getting-started/typography',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Colors',
    href: '/docs/getting-started/colors',
    target: '_self',
  },
  {
    id: generatedID(),
    name: 'Dark Mode',
    href: '/docs/getting-started/dark-mode',
    target: '_self',
  },
]

export const navbarRoutes: routerPath[] = [
  {
    id: generatedID(),
    href: 'https://keepdesign.io',
    name: 'Figma',
    redirect: true,
  },
  {
    id: generatedID(),
    href: '/docs/getting-started/installation',
    name: 'Documentation',
    redirect: false,
  },
  {
    id: generatedID(),
    href: '/blog',
    name: 'Blog',
    redirect: false,
  },
]
