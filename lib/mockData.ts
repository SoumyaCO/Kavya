export type User = {
    id: string;
    name: string;
    username: string;
    avatar: string;
    bio: string;
    followers: number;
    following: number;
    posts: number;
};

export type Comment = {
    id: string;
    user: User;
    content: string;
    timestamp: string;
    likes: number;
    replies?: Comment[];
};

export type Poem = {
    id: string;
    title: string;
    content: string;
    excerpt: string;
    author: User;
    image: string;
    category: "Ghazal" | "Nazm" | "Shayari" | "Haiku" | "Free Verse";
    language: "Hindi" | "Urdu" | "English";
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    tags: string[];
};

export const MOCK_USERS: User[] = [
    {
        id: "u1",
        name: "Aarya Sharma",
        username: "@aarya_writes",
        avatar: "https://i.pravatar.cc/150?u=aarya",
        bio: "Weaving emotions into words. 🌙 | Hindi Poetry",
        followers: 1250,
        following: 120,
        posts: 45,
    },
    {
        id: "u2",
        name: "Zainab Ali",
        username: "@zainab_poetry",
        avatar: "https://i.pravatar.cc/150?u=zainab",
        bio: "Soulful Urdu Shayaris. ✒️",
        followers: 3400,
        following: 200,
        posts: 112,
    },
    {
        id: "u3",
        name: "Rohan Das",
        username: "@rohan_poet",
        avatar: "https://i.pravatar.cc/150?u=rohan",
        bio: "English & Hindi Poet. Lover of sunsets.",
        followers: 890,
        following: 150,
        posts: 32,
    },
];

export const MOCK_POEMS: Poem[] = [
    {
        id: "p1",
        title: "The Color of Dusk",
        content: "The sky bleeds saffron,\nA memory of your touch,\nFading into the velvet night.\nStars awaken, one by one,\nWitnesses to my silent plight.",
        excerpt: "The sky bleeds saffron, a memory of your touch...",
        author: MOCK_USERS[0],
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
        category: "Free Verse",
        language: "English",
        timestamp: "2 hours ago",
        likes: 234,
        comments: 45,
        shares: 12,
        tags: ["#Sunset", "#Longing", "#Poetry"],
    },
    {
        id: "p2",
        title: "Adhoori Khwahish",
        content: "Ret ki tarah phisal gayi woh,\nJo kabhi haathon mein thi kismet ban kar.\nAb bas yadein hain, aur ye khamosh raat,\nJo kaati hai humne, teri tasveer ban kar.",
        excerpt: "Ret ki tarah phisal gayi woh...",
        author: MOCK_USERS[1],
        image: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=800&q=80",
        category: "Shayari",
        language: "Hindi",
        timestamp: "5 hours ago",
        likes: 890,
        comments: 120,
        shares: 56,
        tags: ["#HindiShayari", "#Love", "#Heartbreak"],
    },
    {
        id: "p3",
        title: "Ishq ka Safar",
        content: "Manzil ki khabar nahi,\nBas raaston se pyaar hai.\nTere saath chalna hai,\nChahe kitna bhi intezaar hai.",
        excerpt: "Manzil ki khabar nahi, bas raaston se pyaar hai...",
        author: MOCK_USERS[1],
        image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&q=80",
        category: "Ghazal",
        language: "Urdu",
        timestamp: "1 day ago",
        likes: 1500,
        comments: 300,
        shares: 200,
        tags: ["#UrduPoetry", "#Ishq", "#Safar"],
    },
];

export const TRENDING_TAGS = [
    "#HindiShayari",
    "#UrduPoetry",
    "#LoveQuotes",
    "#Ghalib",
    "#ModernPoetry",
    "#SpokenWord",
];

export type Blog = {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Full content for the individual page
    author: User;
    image: string;
    category: string;
    readTime: string;
    timestamp: string;
};

export const MOCK_BLOGS: Blog[] = [
    {
        id: "1",
        title: "The Evolution of Urdu Poetry: From Ghalib to Modern Day",
        excerpt: "Urdu poetry has always been a reflection of society, love, and revolution. But how has it changed in the digital age?",
        content: "Full content here...", // truncated for mock
        author: MOCK_USERS[0],
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
        category: "History",
        readTime: "5 min read",
        timestamp: "Oct 12, 2023",
    },
    {
        id: "2",
        title: "Mastering the Art of Haiku",
        excerpt: "Learn how to capture a moment in just 17 syllables. A guide for beginners.",
        content: "Full content here...",
        author: MOCK_USERS[2],
        image: "https://images.unsplash.com/photo-1519681393798-38e43269d877?w=800&q=80",
        category: "Guide",
        readTime: "3 min read",
        timestamp: "Nov 05, 2023",
    },
    {
        id: "3",
        title: "Why Poetry Matters More Than Ever",
        excerpt: "In a world of noise, poetry offers silence and solace. Explore the psychological benefits of reading and writing verse.",
        content: "Full content here...",
        author: MOCK_USERS[1],
        image: "https://images.unsplash.com/photo-1470549638415-0a0755be0619?w=800&q=80",
        category: "Opinion",
        readTime: "7 min read",
        timestamp: "Dec 01, 2023",
    },
];
