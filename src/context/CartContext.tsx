"use client"

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = {
  cartId: string
  id: number
  title: string
  img: string
  optionTitle?: string
  unitPrice: number
  quantity: number
}

type AddToCartInput = {
  id: number
  title: string
  img: string
  unitPrice: number
  quantity?: number
  optionTitle?: string
}

type CartContextValue = {
  items: CartItem[]
  totalItems: number
  subtotal: number
  addToCart: (input: AddToCartInput) => void
  removeFromCart: (cartId: string) => void
  clearCart: () => void
}

const STORAGE_KEY = "massimo_cart_v1"

const CartContext = createContext<CartContextValue | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        setItems(Array.isArray(parsed) ? parsed : [])
      }
    } catch {
      setItems([])
    } finally {
      setHydrated(true)
    }
  }, [])

  useEffect(() => {
    if (!hydrated) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items, hydrated])

  const addToCart = (input: AddToCartInput) => {
    const safeQty = Math.max(1, Math.min(99, input.quantity ?? 1))
    const optionTitle = input.optionTitle?.trim() || undefined
    const cartId = `${input.id}-${optionTitle ?? "default"}`

    setItems((prev) => {
      const existing = prev.find((item) => item.cartId === cartId)
      if (existing) {
        return prev.map((item) =>
          item.cartId === cartId
            ? { ...item, quantity: Math.min(99, item.quantity + safeQty) }
            : item,
        )
      }

      return [
        ...prev,
        {
          cartId,
          id: input.id,
          title: input.title,
          img: input.img,
          optionTitle,
          unitPrice: input.unitPrice,
          quantity: safeQty,
        },
      ]
    })
  }

  const removeFromCart = (cartId: string) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId))
  }

  const clearCart = () => setItems([])

  const value = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
    const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
    return { items, totalItems, subtotal, addToCart, removeFromCart, clearCart }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider")
  }
  return ctx
}
