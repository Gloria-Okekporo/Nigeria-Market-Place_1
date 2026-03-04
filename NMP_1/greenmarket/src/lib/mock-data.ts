export interface Product {
    id: string | number;
    title: string;
    seller: string;
    sku: string;
    price: string | number;
    postedTime: string;
    image: string;
    category: string;
    images?: string[];
    description?: string;
    oldPrice?: number;
    location?: string;
    stock?: number;
    unitOptions?: string[];
    sellerInfo?: {
        name: string;
        area: string;
        rating: number;
        verified: boolean;
    };
}

export const CATEGORIES = [
    "All Produce",
    "Tubers & Grains",
    "Fresh Vegetables",
    "Proteins (Meat & Fish)",
    "Oils & Spices",
    "Fruits",
    "Packaged Items"
];

export const MOCK_PRODUCTS: Product[] = [
    {
        id: "1",
        title: "Fresh Scotch Bonnet Peppers",
        seller: "Ayo's Farm",
        sku: "SB-002",
        price: "₦2,500",
        postedTime: "2h ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzV8rxh8EdwkYfpbCqLox5AOiUYNkewLDLpOWam_fvF9pxoQnTDIR8Nm0lgFQg_2vT0YQg8jS_7e-xaOM-gevrAN_C_OGJcnWPA9XjhioHr2pag-7y9r93ekUJGsdCrdXSuOQ9_sn8nhdudfiH1FeLTNSp7sgLh-IvuzLDXsVy214rreKTzE7EaQuLmVUgUqOGS8iwpiYFG6BIGKH6fQDZAXEq30-tKXhJWv1LVhFiAVAN9rEbc5xozsbMhkeWWzEmxzxN3SVQxcw",
        category: "Fresh Vegetables",
        description: "Premium grade Scotch Bonnet peppers (Ata Rodo) harvested daily from our sustainable farm in Ikorodu. These peppers are known for their intense heat and fruity aroma. Perfect for traditional soups, stews, and hot sauces. Hand-picked and meticulously sorted to guarantee zero spoilage on delivery.",
        oldPrice: 3000,
        location: "Lagos State",
        stock: 50,
        unitOptions: ["1 Basket (2.5kg)", "1 Paint Bucket", "1 Custard Bucket (Medium)"],
        sellerInfo: {
            name: "Ayo's Farm",
            area: "Ikorodu Market",
            rating: 4.8,
            verified: true
        }
    },
    {
        id: "2",
        title: "Organic Yam Tubers",
        seller: "Enugu Roots",
        sku: "YM-115",
        price: "₦8,000",
        postedTime: "3h ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOrQlNEkfNJFJG0Xx-kJLGyfLWHq_uGcMiROGzFWidrySCxjxY0ZoxSYLuAud3ufpnPy1_B1ngmHMZxkjE9jsOG4DkO2jHl26E79Yzy7b2aqTI3Y_faHSyvce7OtH0VE3P-sd8k67vb6Tr53r5bmyGqB6lhC3m8WKdUbVQFV3KH3Gj2Su4vmlNR15dWjMsUyIBoI12wQ1qaM1HDwaqcjlFt0chl2Qpi5IiKsCC9seXq3QH3WabH1Z6UxcUXYT-0XuRx67Vtn7Sqw4",
        category: "Tubers & Grains",
        description: "Large, starch-rich organic yams directly from Enugu farms. Perfect for pounding, boiling, or frying. Long shelf life if kept in a cool, dry place.",
        location: "Enugu State",
        stock: 120,
        unitOptions: ["1 Large Tuber", "Set of 3 Tubers", "1 Bundle (12 Tubers)"],
        sellerInfo: {
            name: "Enugu Roots",
            area: "Mile 12 Market",
            rating: 4.5,
            verified: true
        }
    },
    {
        id: "3",
        title: "Smoked Catfish (Pack of 4)",
        seller: "Delta Catch",
        sku: "CF-900",
        price: "₦4,500",
        postedTime: "5h ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVuDlFtB6LeJk3p3pmFkZYC79ZEgLRtFcSEsROQhxjX8tOUuEHKzV1YaR8O-BwesAKyFY8eAqsgprzrV2H0b3S-gKdpR-VuBP9rffP4TCRSuPS8LMdJBNbRXVbwu-h0nWyQqdXBo3-O9naI6hnMiiZ5zfBGqBeG2Tv0qmaWSgiT4pmTkgFfDd5duGETPgr33gferS1sYUyleoY-ve6tvuKT7onXOWw-u1CjBg-bYrXZ0THvhPENXdZcB3GcFblbJ1XKA3caMpZr9s",
        category: "Proteins (Meat & Fish)",
        description: "Traditionally kiln-smoked catfish. Thoroughly dried to preserve flavor and ensure a long shelf life. Perfect for native soups and stews.",
        location: "Delta State",
        stock: 80,
        unitOptions: ["Pack of 4 (Large)", "Pack of 6 (Medium)", "1 Kilogram"],
        sellerInfo: {
            name: "Delta Catch",
            area: "Oyingbo Market",
            rating: 4.9,
            verified: true
        }
    },
    {
        id: "4",
        title: "Jollof Rice Spice Mix",
        seller: "Tasty Spices Ltd",
        sku: "JS-221",
        price: "₦1,200",
        postedTime: "6h ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhk54p4djKYdSV3gy-zJyzbfH_XeGTwiAHjFzI-oZrOtr4Bheq2-PgasQua-Ty-yDdu2_mBfOHNkMAdI_Z0V57M2mTWJVJxmx6e-TBkWt_BC0DqWujXAjejGVs9vDA2tAvi2toYItpscjwBmrork0IYQkLTTsIoPGefoeoEwCInMBJtDOiNeWMJzwlnkkP_55y3dL8nPsWMnKP3Uic6ZLsvZ2tpilV0Jb6a3QTXc2uzFaLHlWUdyZ-gjAS9bdML5mPJtDBnIrwYUE",
        category: "Oils & Spices",
        description: "Special blend of peppers, onions, ginger, and garlic for that authentic party Jollof taste. No artificial preservatives.",
        location: "Kano State",
        stock: 200,
        unitOptions: ["1 Sachet (50g)", "Box of 12 Sachets", "Bulk Bag (500g)"],
        sellerInfo: {
            name: "Tasty Spices Ltd",
            area: "Sabon Gari Market",
            rating: 4.7,
            verified: true
        }
    },
    {
        id: "5",
        title: "Red Palm Oil 5L",
        seller: "Ovia Farms",
        sku: "PO-334",
        price: "₦7,500",
        postedTime: "1d ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAougUwesw-pnR5s3dM7W4CC2lXPfpJS_muHAPqzCpRC4BCoGuW03wEW2DmidCr7AYsDgA4QAlydvp72DiJ9aDJw7Z70FIfSukQ7fm_YmyPqy7M1LahESSWvNezlU3GBtOnAJugkvG2Z_Y7vhV5hROriHOcqZGu_2-gegFY61g7-YVxXxAD0nUAri5ggseKw4IoZ3kp6niTMAU91qymLFlXgmXkszQRuKMVVSlgV0uO2AENPIT5hL8Jec4j5Rt4UlanIZu9BzuYnqE",
        category: "Oils & Spices",
        description: "Unadulterated, cholesterol-free red palm oil. Traditionally processed in Edo State. Grade A quality with no additives.",
        location: "Edo State",
        stock: 45,
        unitOptions: ["2 Liters", "5 Liters Gallon", "10 Liters Gallon"],
        sellerInfo: {
            name: "Ovia Farms",
            area: "Edoa Market",
            rating: 4.6,
            verified: true
        }
    },
    {
        id: "6",
        title: "Sweet Potatoes",
        seller: "Benue Harvest",
        sku: "SP-102",
        price: "₦3,000",
        postedTime: "1d ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrODU-IvvLOc8Tq4eyuPzYaEijYtg12gpomNrwOMH-5fXGJzr7v0thvb1ecKm1rt262Zy76fhr3O9uMBDZ1gErM7P-TvecFoOBQK3U0UIrm_aRetRO3CbQnr78kyoqWQv4y5GDPUbE2N-smo9Kai7Qq5xhkHauGHrVeenXtv1FBTUOy2A-30KPKgK0Qz6UQGku0ObPjdeX2-WKfKBouUhcDyw9KNmLeYSiJL4Rc2QJULGWhkJfUVWhP4Ghw2F9TM6G3i39Gxh8v58",
        category: "Tubers & Grains"
    },
    {
        id: "7",
        title: "Ugu Leaves (Large Bundle)",
        seller: "Mama G's Garden",
        sku: "UG-009",
        price: "₦500",
        postedTime: "2d ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkGa6U5ZnzDzZc1hQ8MDVbhyiRt20gAY0QHJz2lSKFOhFj3QnsYEF2JcKqAcpzI-4C1UXXuuzwm1UFMYh5LYyf_-kzfIf8DdRtvNIoedOMA2uJ9BI5ky3jic6CmfXLdNHvwxA8iR93_CBcbbvOLrAP_irYkJbb70Onl0o2aWv6tt4z60PCY_SjFZ0j2QzAYN07gjl4N08ahBonKmSLPdsn33diFdV4O0VslTEtEK9GKFqgV0Y6ekLzHG2ZGq476bMfhj4ENPyuUIM",
        category: "Fresh Vegetables"
    },
    {
        id: "8",
        title: "Brown Honey Beans 1kg",
        seller: "North Grain",
        sku: "BN-550",
        price: "₦1,800",
        postedTime: "2d ago",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCck1pGTs5Y4hFL42eoFWgej3loR7jt4TTnVYNyeIrhBcj8j5sVTfCN52Lb_7--GruuwKzOXqembXG8Y3dEuIXOGGo94F2-ffJajDHiUUruntzjT704POl2JXe1i9IsXmyrfx7CYmPRtbotud6TA8IbD25ECNFmqY7iUvgOiY1OhS5ydBcJQSfu5qrhXMciU-_i3H663EI1vHFem_EAl8_X4LZzFH2195i3lOlnTXeX_CWSEMa_ucHC3vh05axTHM-2HRUetD245ac",
        category: "Tubers & Grains"
    },
];
