import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product } from "@/components/products/ProductCard";

export interface CartItem extends Product {
    quantity: number;
    selectedPresentation: string;
    selectedPrice: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, quantity: number, presentation: string, price: number) => void;
    removeFromCart: (productId: string, presentation: string) => void;
    updateQuantity: (productId: string, presentation: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "anka-web-studio-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to parse cart", e);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
        // Trigger event for any legacy components (though we should migrate them)
        window.dispatchEvent(new Event("cart-updated"));
    }, [items]);

    const addToCart = (product: Product, quantity: number, presentation: string, price: number) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(
                (item) => item.id === product.id && item.selectedPresentation === presentation
            );

            if (existingItemIndex > -1) {
                const newItems = [...prevItems];
                newItems[existingItemIndex].quantity += quantity;
                return newItems;
            }

            return [...prevItems, { ...product, quantity, selectedPresentation: presentation, selectedPrice: price }];
        });
    };

    const removeFromCart = (productId: string, presentation: string) => {
        setItems((prevItems) =>
            prevItems.filter((item) => !(item.id === productId && item.selectedPresentation === presentation))
        );
    };

    const updateQuantity = (productId: string, presentation: string, quantity: number) => {
        if (quantity < 1) return;
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId && item.selectedPresentation === presentation
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => setItems([]);

    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = items.reduce((acc, item) => acc + item.selectedPrice * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalPrice,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
};
