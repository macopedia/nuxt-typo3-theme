<template>
  <ValidationProvider
    v-slot="state"
    :vid="field.identifier"
    :name="field.label"
    :rules="rules"
    slim
  >
    <div class="field-row">
      <label :for="field.identifier">
        <span class="label">{{ field.label }}</span>
         <slot :state="state">
           <input
            v-if="!$slots.default"
            :id="field.identifier"
            v-model="innerValue"
            :type="field.type"
            :label="field.label"
            :name="field.name || field.identifier"
            :class="state.classes"
            :placeholder="placeholder"
            :required="required"
            @input="(event) => $emit('input', event.target.value)"
          >
         </slot>
       </label>
      <ul v-if="state.errors.length" class="errors">
        <li v-for="(error, key) in state.errors" :key="key">
          <small>{{ error }}</small>
        </li>
      </ul>
    </div>
  </ValidationProvider>
</template>
<script src="~typo3/components/T3Form/T3FormField/T3FormField.vue"/>
<style lang="scss" scoped>
@import '../../../styles/shared';

label {
  display: block;
  width: 100%;
}

ul {
  margin: var(--space-2) 0 0;
  padding: 0;
  list-style: none;
  color: var(--color-danger);
}

li {
  padding: 0;
  margin: 0;
}

.failed {
  border-color: var(--color-danger);
}

.passed {
  border-color: var(--color-success);
}

.field-row {
  margin-bottom: var(--space-4);

  input {
    width: 100%;
    @include media-query(max md) {

    }
  }
}

.label {
  display: block;
  margin-bottom: var(--space-2);
}

</style>
