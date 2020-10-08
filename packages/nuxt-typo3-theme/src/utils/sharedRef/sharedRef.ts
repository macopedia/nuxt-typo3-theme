/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref, Ref } from '@vue/composition-api'

const sharedMap = new Map()

function sharedRef (value: any, key: string): Ref {
  const givenKey = key || value

  if (sharedMap.has(givenKey)) {
    return sharedMap.get(givenKey)
  }

  const newRef = ref(value || null)

  sharedMap.set(givenKey, newRef)
  return newRef
}

export default sharedRef
