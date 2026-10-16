// Fabric images live in public/products/.
export const fabrics = [
  { id: 1, name: "Lana Fabric 2", price: 8000, category: "lana", image: "/products/lana-02.jpg", description: "Solid Lana fabric — premium quality.", featured: true },
  { id: 2, name: "Lana Fabric 3", price: 8000, category: "lana", image: "/products/lana-03.jpg", description: "Solid Lana fabric — premium quality.", featured: true },
  { id: 3, name: "Lana Fabric 4", price: 8000, category: "lana", image: "/products/lana-04.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 4, name: "Lana Fabric 5", price: 8000, category: "lana", image: "/products/lana-05.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 5, name: "Lana Fabric 6", price: 8000, category: "lana", image: "/products/lana-06.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 6, name: "Lana Fabric 7", price: 8000, category: "lana", image: "/products/lana-07.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 7, name: "Lana Fabric 8", price: 8000, category: "lana", image: "/products/lana-08.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 8, name: "Lana Fabric 9", price: 8000, category: "lana", image: "/products/lana-09.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 9, name: "Lana Fabric 10", price: 8000, category: "lana", image: "/products/lana-10.jpg", description: "Solid Lana fabric — premium quality.", featured: false },
  { id: 10, name: "Stock Wool 1", price: 8000, category: "stock", image: "/products/stock-01.jpg", description: "Premium stock wool fabric.", featured: true },
  { id: 11, name: "Stock Wool 2", price: 8000, category: "stock", image: "/products/stock-02.jpg", description: "Premium stock wool fabric.", featured: true },
  { id: 12, name: "Stock Wool 3", price: 8000, category: "stock", image: "/products/stock-03.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 13, name: "Stock Wool 4", price: 8000, category: "stock", image: "/products/stock-04.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 14, name: "Stock Wool 5", price: 8000, category: "stock", image: "/products/stock-05.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 15, name: "Stock Wool 6", price: 8000, category: "stock", image: "/products/stock-06.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 16, name: "Stock Wool 7", price: 8000, category: "stock", image: "/products/stock-07.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 17, name: "Stock Wool 8", price: 8000, category: "stock", image: "/products/stock-08.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 18, name: "Stock Wool 9", price: 8000, category: "stock", image: "/products/stock-09.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 19, name: "Stock Wool 10", price: 8000, category: "stock", image: "/products/stock-10.jpg", description: "Premium stock wool fabric.", featured: false },
  { id: 20, name: "Swiss Wool 1", price: 8000, category: "swiss", image: "/products/swiss-01.jpg", description: "Fine swiss wool fabric.", featured: true },
  { id: 21, name: "Swiss Wool 2", price: 8000, category: "swiss", image: "/products/swiss-02.jpg", description: "Fine swiss wool fabric.", featured: true },
  { id: 22, name: "Swiss Wool 3", price: 8000, category: "swiss", image: "/products/swiss-03.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 23, name: "Swiss Wool 4", price: 8000, category: "swiss", image: "/products/swiss-04.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 24, name: "Swiss Wool 5", price: 8000, category: "swiss", image: "/products/swiss-05.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 25, name: "Swiss Wool 6", price: 8000, category: "swiss", image: "/products/swiss-06.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 26, name: "Swiss Wool 7", price: 8000, category: "swiss", image: "/products/swiss-07.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 27, name: "Swiss Wool 8", price: 8000, category: "swiss", image: "/products/swiss-08.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 28, name: "Swiss Wool 9", price: 8000, category: "swiss", image: "/products/swiss-09.jpg", description: "Fine swiss wool fabric.", featured: false },
  { id: 29, name: "Swiss Wool 10", price: 8000, category: "swiss", image: "/products/swiss-10.jpg", description: "Fine swiss wool fabric.", featured: false },
];

export const categories = [
  { id: "lana", label: "Lana Fabrics", image: "/products/lana-02.jpg" },
  { id: "stock", label: "Stock Wools", image: "/products/stock-01.jpg" },
  { id: "swiss", label: "Swiss Wools", image: "/products/swiss-01.jpg" },
];

export const gallery = fabrics.map((fabric) => ({
  id: fabric.id,
  image: fabric.image,
  caption: fabric.name,
}));
