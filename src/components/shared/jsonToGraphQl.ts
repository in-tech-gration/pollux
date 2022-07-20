// @ts-ignore
import { jsonToSchema } from '@walmartlabs/json-to-simple-graphql-schema/lib'
// @ts-ignore
import { formatSdl } from 'format-graphql'
import { FakerProp } from 'components/shared'
import {
  generate,
  relationsGetter,
  relationsPropsGetter,
} from 'components/generate/components/Controller/util'
import { FakerPropMap, Model, RelationsMap } from './types'
import { Alert } from 'rsuite'

const toModelTypeName = (modelName: string) =>
  modelName.charAt(0).toUpperCase() + modelName.slice(1)

export const toGraphQl = (
  modelProps: FakerProp[] | null | undefined,
  modelName: string
) => {
  if (!modelProps || !modelProps.length) {
    Alert.warning('Pelase add some attributes to the model.')
    return ''
  }

  // prettier-ignore
  const [fakeObj] = generate(modelProps, 'TO_GRAPH_QL', 1, [], {}, true, '') as {}[]
  const fakeJSON = JSON.stringify({ [modelName]: fakeObj })
  const graphQlStr: string = formatSdl(
    jsonToSchema({ jsonInput: fakeJSON }).value
  )
  const modelTypeName = toModelTypeName(modelName)

  return graphQlStr
    .replaceAll('id: String', 'id: ID')
    .replaceAll(
      `type AutogeneratedMainType {\n  ${modelName}: ${modelTypeName}\n}`,
      ''
    )
    .trim()
}

export const toGraphQlManyModels = (
  models: Model[],
  prop: FakerPropMap,
  relations: RelationsMap
) => {
  const fakeData = models.reduce(
    (prev, { name, id }) => ({
      ...prev,
      // fuck me that's ugly
      [name]: generate(
        prop[id],
        name,
        1,
        relationsGetter({ relations, models }, id),
        relationsPropsGetter({ relations, prop }, id),
        true,
        id,
        false,
        1
      ),
    }),
    {}
  )

  if (!Object.keys(fakeData).length) {
    Alert.warning('Pelase add some models first.')
    return ''
  }
  const fakeJSON = JSON.stringify(fakeData)
  const graphqlStr: string = formatSdl(
    jsonToSchema({ jsonInput: fakeJSON }).value
  ).replaceAll('id: String', 'id: ID')

  // for anyone in the future this package will generate this type

  // type AutogeneratedMainType {
  //   posts: [Posts]
  //   users: [Users]
  // }

  // I don't want that, and the model names should be sorted so the builded string
  // is equal to the one generated from the package.

  let autogeneratedMainType = `type AutogeneratedMainType {`

  models
    .map<string>(({ name }) => name)
    .sort()
    .forEach((name: string) => {
      const modelTypeName = toModelTypeName(name)
      autogeneratedMainType += `\n  ${name}: [${modelTypeName}]`
    })
  autogeneratedMainType += `\n}`

  return graphqlStr.replace(autogeneratedMainType.trim(), '').trim()
}