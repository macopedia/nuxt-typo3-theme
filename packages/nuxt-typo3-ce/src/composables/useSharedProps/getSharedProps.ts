import { T3CeSharedProps } from 'nuxt-typo3-ce/types'

export default function getSharedProps (props: T3CeSharedProps): T3CeSharedProps {
  const sharedProps: T3CeSharedProps = {
    id: props.id,
    type: props.type,
    header: props.header,
    headerLayout: props.headerLayout,
    headerPosition: props.headerPosition,
    date: props.date,
    headerLink: props.headerLink,
    subheader: props.subheader
  }
  return sharedProps
}
