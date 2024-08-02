"use client"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { fetchProducts } from '@/redux/slice/productsSlice';
import {ProductsProps} from "@/data/index"

const SearchResultPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { products, search, loading, error } = useSelector((state: RootState) => state.products);
  const [filteredItems, setFilteredItems] = useState<ProductsProps[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (products.length) {
      const searchedItems = products.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredItems(searchedItems);
    }
  }, [products, search]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-screen">
      {filteredItems.map(item => (
        <div className="itemCard" key={item.id}>
          <img className='w-96 h-96' src={item.images[0]} alt={item.title} />
          <div className="itemText">
            <h4>{item.category}</h4>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <h3><strong>${item.price}</strong></h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResultPage;
