"use client";

import { create } from "zustand";
import type { Product } from "@/lib/design-system";

type CartLine = {
  product: Product;
  quantity: number;
  selectedColor: string;
};

type CommerceState = {
  cart: CartLine[];
  wishlistIds: string[];
  selectedCategory: string;
  addToCart: (product: Product, selectedColor?: string) => void;
  toggleWishlist: (productId: string) => void;
  setCategory: (category: string) => void;
  cartTotal: () => number;
  cartCount: () => number;
};

export const useCommerceStore = create<CommerceState>((set, get) => ({
  cart: [],
  wishlistIds: ["mx-watch-02"],
  selectedCategory: "وصل حديثاً",
  addToCart: (product, selectedColor = product.colors[0] ?? "#211a15") =>
    set((state) => {
      const existing = state.cart.find((line) => line.product.id === product.id && line.selectedColor === selectedColor);
      if (existing) {
        return {
          cart: state.cart.map((line) =>
            line.product.id === product.id && line.selectedColor === selectedColor
              ? { ...line, quantity: line.quantity + 1 }
              : line
          )
        };
      }
      return { cart: [...state.cart, { product, quantity: 1, selectedColor }] };
    }),
  toggleWishlist: (productId) =>
    set((state) => ({
      wishlistIds: state.wishlistIds.includes(productId)
        ? state.wishlistIds.filter((id) => id !== productId)
        : [...state.wishlistIds, productId]
    })),
  setCategory: (category) => set({ selectedCategory: category }),
  cartTotal: () => get().cart.reduce((total, line) => total + line.product.price * line.quantity, 0),
  cartCount: () => get().cart.reduce((total, line) => total + line.quantity, 0)
}));
