import { groq } from 'next-sanity'

export const allProductsQuery = groq`
  *[_type == "product"] | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    name,
    "brand": brand->name,
    "brandSlug": brand->slug.current,
    gender,
    category,
    price,
    originalPrice,
    promotionPercent,
    description,
    "images": images[].asset->url,
    "variants": sizes[] {
      "size": @,
      "color": ^.colors[0],
      "stock": ^.stock
    },
    "isLocalDesigner": brand->isLocalDesigner,
    isNewArrival,
    isFeatured,
    isOnPromotion,
    tags
  }
`

export const allBrandsQuery = groq`
  *[_type == "brand"] {
    "id": _id,
    "slug": slug.current,
    name,
    "logo": logo.asset->url,
    shortBio,
    isLocalDesigner,
    website
  }
`
