import warp from '../src/wrapAstTransformation'
import type { Context, ASTTransformation } from '../src/wrapAstTransformation'

export const transformAST: ASTTransformation = (context: Context) => {
  const { j, root } = context
  const listenersDecl = root.find(j.JSXAttribute, {
    name: {
      name: 'v-on'
    },
    value: {
      value: '$listeners'
    }
  })

  listenersDecl.replaceWith(() => {})
}

export default warp(transformAST)
export const parser = 'babylon'
