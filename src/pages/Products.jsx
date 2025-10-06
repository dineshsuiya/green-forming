import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  const categories = ['all', 'vegetables', 'fruits', 'grains', 'dairy'];

  useEffect(() => {
    // Simulate API call
    const fetchProducts = () => {
      const mockProducts = [
        {
          id: 1,
          name: 'Organic Tomatoes',
          category: 'vegetables',
          price: 3.99,
          description: 'Fresh, juicy organic tomatoes grown in our greenhouses',
          image: 'https://images.unsplash.com/photo-1546470427-e212b7d31075?w=400&h=300&fit=crop',
          imagePlaceholder: '🍅 Tomatoes'
        },
        {
          id: 2,
          name: 'Sweet Corn',
          category: 'vegetables',
          price: 2.49,
          description: 'Sweet and tender corn, perfect for summer meals',
          image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop',
          imagePlaceholder: '🌽 Corn'
        },
        {
          id: 3,
          name: 'Organic Apples',
          category: 'fruits',
          price: 4.99,
          description: 'Crisp and sweet organic apples from our orchards',
          image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop',
          imagePlaceholder: '🍎 Apples'
        },
        {
          id: 4,
          name: 'Fresh Berries',
          category: 'fruits',
          price: 6.99,
          description: 'Mixed organic berries packed with antioxidants',
          image: 'https://images.unsplash.com/photo-1487377330420-46c3a2da86a1?w=400&h=300&fit=crop',
          imagePlaceholder: '🫐 Berries'
        },
        {
          id: 5,
          name: 'Whole Wheat',
          category: 'grains',
          price: 5.99,
          description: 'Organic whole wheat flour, stone-ground',
          image: 'https://images.unsplash.com/photo-1558961360-f4be8bb17c67?w=400&h=300&fit=crop',
          imagePlaceholder: '🌾 Wheat'
        },
        {
          id: 6,
          name: 'Fresh Milk',
          category: 'dairy',
          price: 4.49,
          description: 'Farm-fresh organic milk from grass-fed cows',
          image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
          imagePlaceholder: '🥛 Milk'
        },
        {
          id: 7,
          name: 'Organic Carrots',
          category: 'vegetables',
          price: 2.99,
          description: 'Sweet and crunchy organic carrots',
          image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
          imagePlaceholder: '🥕 Carrots'
        },
        {
          id: 8,
          name: 'Fresh Oranges',
          category: 'fruits',
          price: 5.49,
          description: 'Juicy oranges packed with vitamin C',
          image: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=300&fit=crop',
          imagePlaceholder: '🍊 Oranges'
        }
      ];

      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    };

    setTimeout(fetchProducts, 1000); // Simulate loading delay
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-green-800 text-xl">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">Our Products</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize transition duration-300 ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-600 text-xl mt-12">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;