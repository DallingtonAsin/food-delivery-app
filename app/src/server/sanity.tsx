import { createClient } from '@sanity/client'
import imageBuilder from '@sanity/image-url'
import { SANITY_PROJECT_ID } from '@env'

const sanityClient = createClient({
    projectId: SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03'
})

const builder = imageBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

export default sanityClient

//  https://pivosoft-delivery-app-test0.sanity.studio/