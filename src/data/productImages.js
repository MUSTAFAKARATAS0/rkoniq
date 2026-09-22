import image1 from '../assets/1.webp';
import image2 from '../assets/dunya.webp';
import image3 from '../assets/hero.webp';

const productImages = {
  1: image1,
  2: image2,
  3: image3,
};

export function getProductImage(product) {
  if (!product) return image1;
  if (typeof product.image === 'string' && product.image.startsWith('/')) {
    return product.image;
  }
  return productImages[product.image] || image1;
}
