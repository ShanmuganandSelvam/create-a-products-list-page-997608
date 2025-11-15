import { Product } from '../../types/product';
import { Star } from 'lucide-react';
import { bayerSansClasses } from '../../lib/bayer-sans';
import { useThemeColors } from '../../hooks/use-cloudfront-theme';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const colors = useThemeColors();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {product.stock < 10 && (
          <span 
            className="absolute top-2 right-2 px-2 py-1 rounded text-xs font-medium"
            style={{ 
              backgroundColor: colors.danger('100'),
              color: colors.danger('700')
            }}
          >
            Low Stock: {product.stock} left
          </span>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className={bayerSansClasses.heading.h5}>{product.name}</h3>
          <span 
            className={`${bayerSansClasses.heading.h5} text-lg`}
            style={{ color: colors.primary('600') }}
          >
            ${product.price}
          </span>
        </div>
        
        <p className={`${bayerSansClasses.body.small} text-gray-600`}>
          {product.description}
        </p>
        
        <div className="flex justify-between items-center pt-2">
          <span 
            className="px-2 py-1 rounded text-sm"
            style={{ 
              backgroundColor: colors.secondary('100'),
              color: colors.secondary('700')
            }}
          >
            {product.category}
          </span>
          
          <div className="flex items-center gap-1">
            <Star 
              size={16} 
              fill={colors.primary('400')}
              color={colors.primary('400')}
            />
            <span className={`${bayerSansClasses.body.small} font-medium`}>
              {product.rating}
            </span>
          </div>
        </div>
        
        <button
          className="w-full mt-4 px-4 py-2 rounded font-medium transition-colors"
          style={{ 
            backgroundColor: colors.primary('500'),
            color: 'white',
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}