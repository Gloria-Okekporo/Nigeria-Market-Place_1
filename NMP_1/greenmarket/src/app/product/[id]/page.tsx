"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { SellerCard } from "@/components/ui/SellerCard";
import { useState } from "react";
import { toast } from "sonner";

import { MOCK_PRODUCTS } from "@/lib/mock-data";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = MOCK_PRODUCTS.find(p => String(p.id) === params.id);

    if (!product) {
        notFound();
    }

    const [activeImage, setActiveImage] = useState(0);
    const images = product.images || [product.image];
    const unitOptions = product.unitOptions || ["1 Unit"];
    const [selectedUnit, setSelectedUnit] = useState(unitOptions[0]);
    const [quantity, setQuantity] = useState(1);
    const seller = product.sellerInfo || { name: product.seller, area: "Local Market", rating: 4.5, verified: false };
    const price = typeof product.price === 'string' ? parseInt(product.price.replace(/[^\d]/g, '')) : product.price;

    const handleAddToCart = () => {
        toast.success(`Added ${quantity} ${selectedUnit} of ${product.title} to cart`);
    };

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-900 dark:text-slate-100">
            <Header />
            <main className="flex-1 max-w-[1280px] w-full mx-auto px-6 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                    <a href="/" className="hover:text-primary transition-colors">Home</a>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <a href={`/search?category=${encodeURIComponent(product.category)}`} className="hover:text-primary transition-colors">{product.category}</a>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                    <span className="text-slate-900 dark:text-slate-300 font-medium truncate">{product.title}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Gallery */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-4">
                        <div className="aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                            <img src={images[activeImage]} alt={product.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImage(i)}
                                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-2">
                        <div className="flex gap-2 mb-3">
                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">In Stock ({product.stock || 10})</span>
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold rounded uppercase">{product.location || "Lagos State"}</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-black mb-2">{product.title}</h1>
                        <p className="text-slate-500 text-sm mb-6">SKU: {product.sku}</p>

                        <div className="flex items-end gap-4 mb-8">
                            <h2 className="text-4xl font-black text-primary">₦{price.toLocaleString()}</h2>
                            {product.oldPrice && (
                                <span className="text-xl text-slate-400 line-through mb-1">₦{product.oldPrice.toLocaleString()}</span>
                            )}
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                            {product.description || "Fresh produce available from various markets."}
                        </p>

                        <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 mb-8 bg-white dark:bg-slate-900/50">
                            <h3 className="font-bold mb-4">Select Unit Size</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                {unitOptions.map((unit) => (
                                    <button
                                        key={unit}
                                        onClick={() => setSelectedUnit(unit)}
                                        className={`py-3 px-4 border rounded-xl text-sm font-bold transition-all ${selectedUnit === unit
                                            ? 'border-primary bg-primary/5 text-primary'
                                            : 'border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-600 dark:text-slate-300'
                                            }`}
                                    >
                                        {unit}
                                    </button>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 items-end">
                                <div className="flex flex-col gap-2 w-full sm:w-auto">
                                    <span className="font-bold text-sm">Quantity</span>
                                    <QuantityStepper
                                        initialQuantity={quantity}
                                        min={1}
                                        max={product.stock || 100}
                                        onChange={setQuantity}
                                    />
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-4 bg-primary text-slate-900 font-black text-lg rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20 flex justify-center items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">add_shopping_cart</span>
                                    Add to Cart • ₦{(price * quantity).toLocaleString()}
                                </button>
                            </div>
                        </div>

                        {/* Seller Info Component */}
                        <div className="mt-auto pt-8 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold mb-4">About the Seller</h3>
                            <SellerCard {...seller} />
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
