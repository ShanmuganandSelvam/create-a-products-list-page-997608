import { Search, SlidersHorizontal } from 'lucide-react';
import { products } from '../../data/products';
import { ProductCard } from './product-card';
import { bayerSansClasses } from '../../lib/bayer-sans';
import { useThemeColors } from '../../hooks/use-cloudfront-theme';

export function ProductsList() {
  const colors = useThemeColors();

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className={bayerSansClasses.heading.h1}>Products</h1>
            <p className={`${bayerSansClasses.body.large} text-gray-600`}>
              Browse our collection of premium products
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex gap-4">
            <div className="relative flex-1 md:min-w-[300px]">
              <Search 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={20} 
              />
              <input
                type="search"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2"
                style={{ 
                  focusRing: colors.primary('200')
                }}
              />
            </div>
            
            <button
              className="px-4 py-2 rounded-lg border flex items-center gap-2"
              style={{ 
                borderColor: colors.secondary('200'),
                color: colors.secondary('700')
              }}
            >
              <SlidersHorizontal size={20} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}