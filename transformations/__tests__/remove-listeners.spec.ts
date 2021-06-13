import { defineInlineTest } from 'jscodeshift/src/testUtils'
const transform = require('../remove-listeners')

defineInlineTest(
  transform,
  {},
  `<input type="text" v-bind="$atttrs" v-on="$listeners" />`,
  `<input type="text" v-bind="$atttrs"  />`,
  'remove listeners'
)
