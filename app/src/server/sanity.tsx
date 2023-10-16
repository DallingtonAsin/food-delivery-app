import { createClient } from '@sanity/client'
import imageBuilder from '@sanity/image-url'

const sanityClient = createClient({
    projectId: '3ffx6ucl',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03'
})

const builder = imageBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

export default sanityClient

//  https://pivosoft-delivery-app-test0.sanity.studio/