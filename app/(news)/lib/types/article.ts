// app/(news)/lib/types/article.ts
export interface Article {
  $id: string
  $createdAt?: string
  $updatedAt?: string
  title?: string
  articleTitle?: string
  excerpt?: string
  category?: string
  featuredImage?: string
  publishedAt?: string
  introductionSubheading?: string
  introductionContent?: string
  pexelImgLink?: string
  pexelImgLink2?: string
  contentOneSubheadingTitle?: string
  contentOneParagraph?: string
  contentTwoSubheadingTitle?: string
  contentTwoParagraph?: string
  contentThreeSubheadingTitle?: string
  contentThreeParagraph?: string
  conclusionSubheading?: string
  conclusionParagraph?: string
  extraSubheading?: string
  extraContentParagraph?: string
}
