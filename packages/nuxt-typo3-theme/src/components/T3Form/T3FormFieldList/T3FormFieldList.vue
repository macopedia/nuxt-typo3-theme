<template>
  <div class="t3-form-fieldlist">
    <div
      v-for="field in elements"
      :key="field.identifier"
      :class="[`t3-form-field-${field.identifier}`, getCssClass(field, classes)]"
    >
      <component
        :is="getComponentField(field)"
        v-model="model[field.name]"
        :field="field"
      >
        <T3FormFieldList
          v-if="field.fieldlist"
          ref="nested"
          :elements="field.elements"
          :components="components"
          :classes="classes"
          @input="updateModel"
        />
      </component>
    </div>
  </div>
</template>
<script src="~typo3/components/T3Form/T3FormFieldList/T3FormFieldList.vue"/>
<style>
.t3-form-fieldlist {
  flex: 1;
}
</style>
