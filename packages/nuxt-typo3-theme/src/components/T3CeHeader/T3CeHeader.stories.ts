import T3CeHeader from './index'

export default {
  title: 'TYPO3 Theme/Content Elements/T3CeHeader',
  component: T3CeHeader
}

export const standard = (args: any, types: any) => ({
  components: { T3CeHeader },
  template: `<div>
  <T3CeHeader header="Header 1" subheader="Subheader 1" :header-layout="1" />
  <T3CeHeader header="Header 2" subheader="Subheader 2" :header-layout="2" />
  <T3CeHeader header="Header 3" subheader="Subheader 3" :header-layout="3" />
  <T3CeHeader header="Header 4" subheader="Subheader 4" :header-layout="4" />
  <T3CeHeader header="Header 5" subheader="Subheader 5" :header-layout="5" />
  </div>
  `
})
