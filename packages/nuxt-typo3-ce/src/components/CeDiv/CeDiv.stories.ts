import CeDiv from './CeDiv.vue'

export const Standard = (args: any, { argTypes }: {argTypes: any}) => {
  return {
    components: { CeDiv },
    props: Object.keys(argTypes),
    template: `<CeDiv v-bind="$props" />`,
  };
};

Standard.parameters = {
  design: {
     type: 'figma',
     url: 'https://www.figma.com/file/egwoQef4CmM23GTkco39pw/Design-System-VUE-TYPO3?node-id=588%3A0'
  }
}

export default {
  title: 'CeDiv',
  component: CeDiv
}
