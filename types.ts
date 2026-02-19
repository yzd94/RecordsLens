
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: string;
  description: string;
  image: string;
}

export interface TranslationResponse {
  original: string;
  translated: string;
  detectedLanguage: string;
  context: string;
}
