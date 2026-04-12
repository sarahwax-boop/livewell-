import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  id:          string;
  name:        string;
  price:       number;
  bottleClass: string;
  image:       string;
  qty:         number;
}

interface CartState {
  items:        CartItem[];
  isOpen:       boolean;
  redirectOpen: boolean;
  addItem:      (product: Omit<CartItem, "qty">) => void;
  removeItem:   (id: string) => void;
  updateQty:    (id: string, qty: number) => void;
  openDrawer:   () => void;
  closeDrawer:  () => void;
  toggleDrawer: () => void;
  openRedirect:  () => void;
  closeRedirect: () => void;
  checkout:     (affiliateUrl: string) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items:        [],
      isOpen:       false,
      redirectOpen: false,

      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { ...product, qty: 1 }], isOpen: true };
        }),

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      updateQty: (id, qty) =>
        set((state) => {
          if (qty <= 0) return { items: state.items.filter((i) => i.id !== id) };
          return { items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)) };
        }),

      openDrawer:   () => set({ isOpen: true }),
      closeDrawer:  () => set({ isOpen: false }),
      toggleDrawer: () => set((s) => ({ isOpen: !s.isOpen })),
      openRedirect:  () => set({ redirectOpen: true }),
      closeRedirect: () => set({ redirectOpen: false }),

      checkout: (affiliateUrl) => {
        set({ isOpen: false, redirectOpen: true });
        setTimeout(() => {
          window.open(affiliateUrl, "_blank", "noopener,noreferrer");
          set({ redirectOpen: false });
        }, 2200);
      },
    }),
    {
      name:    "livewell-cart-v2",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export const useCartItems      = () => useCartStore((s) => s.items);
export const useCartCount      = () => useCartStore((s) => s.items.reduce((a, i) => a + i.qty, 0));
export const useCartTotal      = () => useCartStore((s) => s.items.reduce((a, i) => a + i.price * i.qty, 0));
export const useCartIsOpen     = () => useCartStore((s) => s.isOpen);
export const useRedirectIsOpen = () => useCartStore((s) => s.redirectOpen);

export const useAddItem      = () => useCartStore((s) => s.addItem);
export const useRemoveItem   = () => useCartStore((s) => s.removeItem);
export const useUpdateQty    = () => useCartStore((s) => s.updateQty);
export const useToggleDrawer = () => useCartStore((s) => s.toggleDrawer);
export const useCloseDrawer  = () => useCartStore((s) => s.closeDrawer);
export const useCheckout     = () => useCartStore((s) => s.checkout);
export const useCloseRedirect= () => useCartStore((s) => s.closeRedirect);

export const useCartActions = () => ({
  addItem:       useCartStore.getState().addItem,
  removeItem:    useCartStore.getState().removeItem,
  updateQty:     useCartStore.getState().updateQty,
  openDrawer:    useCartStore.getState().openDrawer,
  closeDrawer:   useCartStore.getState().closeDrawer,
  toggleDrawer:  useCartStore.getState().toggleDrawer,
  openRedirect:  useCartStore.getState().openRedirect,
  closeRedirect: useCartStore.getState().closeRedirect,
  checkout:      useCartStore.getState().checkout,
});

export const FREE_SHIPPING_THRESHOLD = 60;

export function formatEur(n: number, locale: "fr" | "nl" = "fr"): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-BE" : "nl-BE", {
    style: "currency", currency: "EUR",
  }).format(n);
}