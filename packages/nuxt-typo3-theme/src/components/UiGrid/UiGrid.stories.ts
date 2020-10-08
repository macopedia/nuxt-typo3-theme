import {
  UiContainer,
  UiRow,
  UiCol
} from 'nuxt-typo3-theme/src/components/UiGrid'

export const Standard = (args: any, { argTypes }: { argTypes: any }) => {
  return {
    components: { UiContainer, UiRow, UiCol },
    props: Object.keys(argTypes),
    data() {
      return {
        border: {
          border: "1px solid #888"
        },
        margin: {
          marginBottom: "2rem"
        }
      }
    },
    template: `
    <UiContainer>
      <UiRow :style="margin">
        <UiCol :style="border" md="4">md="4"</UiCol>
        <UiCol :style="border" md="4">md="4"</UiCol>
        <UiCol :style="border" md="4">md="4"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" col="md">col="md"</UiCol>
        <UiCol :style="border" col="md">col="md"</UiCol>
        <UiCol :style="border" col="md">col="md"</UiCol>
        <UiCol :style="border" col="md">col="md"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" lg="3" md="6">lg="3" md="6"</UiCol>
        <UiCol :style="border" lg="3" md="6">lg="3" md="6"</UiCol>
        <UiCol :style="border" lg="3" md="6">lg="3" md="6"</UiCol>
        <UiCol :style="border" lg="3" md="6">lg="3" md="6"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="1">md="1"</UiCol>
        <UiCol :style="border" md="11">md="11"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="2">md="2"</UiCol>
        <UiCol :style="border" md="10">md="10"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="3">md="3"</UiCol>
        <UiCol :style="border" md="9">md="9"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="4">md="4"</UiCol>
        <UiCol :style="border" md="8">md="8"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="5">md="5"</UiCol>
        <UiCol :style="border" md="7">md="7"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="6">md="6"</UiCol>
        <UiCol :style="border" md="6">md="6"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="7">md="7"</UiCol>
        <UiCol :style="border" md="5">md="5"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" col="md" offset="2">col="md" offset="2"</UiCol>
        <UiCol :style="border" col="md">col="md"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="4" offset="3">md="4" offset="3"</UiCol>
        <UiCol :style="border" md="4">md="4"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" col="md" offset="2">col="md" offset="2"</UiCol>
        <UiCol :style="border" col="md">col="md"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="4" offset="4">md="4" offset="4"</UiCol>
        <UiCol :style="border" md="4">md="4"</UiCol>
      </UiRow>
      <UiRow :style="margin">
        <UiCol :style="border" md="6" order="2">md="6" order="2"</UiCol>
        <UiCol :style="border" md="6" order="1">md="6" order="1"</UiCol>
      </UiRow>
    </UiContainer>
    `
  }
}

export default {
  title: 'TYPO3 Theme/UI/UiGrid'
}
