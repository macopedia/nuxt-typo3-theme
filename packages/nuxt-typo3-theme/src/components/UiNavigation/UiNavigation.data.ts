import type { UiNavigationLinks } from './UiNavigation.types'

export const menuData: UiNavigationLinks = [
  {
    title: 'Homepage',
    link: '/',
    target: '',
    active: 1,
    current: 0,
    spacer: 0
  },
  {
    title: 'About us',
    link: '/about-us',
    target: '',
    active: 0,
    current: 0,
    spacer: 0,
    children: [
      {
        title: 'Our team',
        link: '/blog',
        target: '',
        active: 1,
        current: 0,
        spacer: 0
      },
      {
        title: 'Blog',
        link: '/blog',
        target: '',
        active: 1,
        current: 0,
        spacer: 0
      }
    ]
  },
  {
    title: 'Contact',
    link: '/contact',
    target: '',
    active: 0,
    current: 0,
    spacer: 0
  },
  {
    title: 'Career',
    link: '/career',
    target: '_blank',
    active: 0,
    current: 0,
    spacer: 0
  }
]
