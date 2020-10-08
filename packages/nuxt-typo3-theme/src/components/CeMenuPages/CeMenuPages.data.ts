export const mockData = {
  header: 'Test Menupages',
  subheader: 'Subheader',
  headerLayout: 3,
  menu: [
    {
      title: 'Aktualności',
      link: '/aktualnosci',
      target: '',
      active: 0,
      current: 0,
      spacer: 0
    },
    {
      title: 'O nas',
      link: '/o-nas',
      target: '',
      active: 0,
      current: 0,
      spacer: 0
    },
    {
      title: 'Inwestycje Grupy',
      link: '/inwestycje-grupy',
      target: '',
      active: 1,
      current: 1,
      spacer: 0,
      children: [
        {
          title: 'Aktualności',
          link: '/aktualnosci',
          target: '',
          active: 0,
          current: 0,
          spacer: 0
        },
        {
          title: 'Test',
          link: '/aktualnosci',
          target: '',
          active: 0,
          current: 0,
          spacer: 0
        },
        {
          title: 'O nas',
          link: '/o-nas',
          target: '',
          active: 0,
          current: 0,
          spacer: 0
        }
      ]
    },
    {
      title: 'Kariera',
      link: 'http://google.com',
      target: '_blank',
      active: 0,
      current: 0,
      spacer: 0
    },
    {
      title: 'Kontakt',
      link: '/kontakt',
      target: '',
      active: 0,
      current: 0,
      spacer: 0
    }
  ]
}
