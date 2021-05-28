import runTransformation from '../../dist/src/runTransformation'

const transfrom = process.argv[2]
const options = JSON.parse(process.argv[4] || '{}')

let input = ''
let filename = process.argv[3]
process.stdin.on('data', (e) => {
  input += e.toString()
})

process.stdin.on('end', () => {
  try {
    console.log(
      runTransformation(
        {
          source: input,
          path: filename,
        },
        require(`../../transformations/${transfrom}.ts`),
        options
      )
    )
  } catch (e) {
    console.error(e)
  }
})
