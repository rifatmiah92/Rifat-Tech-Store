export interface TechGadget {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  category: string;
  rating: number;
  imageUrl: string;
}

export const initialMockData: TechGadget[] = [
  {
    id: "1",
    title: "ChromaPhone 15 Pro",
    shortDescription: "Vibrant smartphone with edge-to-edge super AMOLED.",
    fullDescription: "Experience color like never before. The ChromaPhone features a stunning 120Hz display with absolute color accuracy, wrapped in a shimmering iridescent glass body. Its quad-lens system captures the world precisely as you see it.",
    price: 1099.99,
    category: "Mobile",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "AuraBook Max",
    shortDescription: "Ultra-portable laptop with RGB aesthetic.",
    fullDescription: "Designed for creatives and gamers alike, the AuraBook Max combines raw performance with a striking, customizable RGB chassis. Features a 16-inch mini-LED display and advanced vapor chamber cooling.",
    price: 2199.00,
    category: "Laptop",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "CanvasPad Neon",
    shortDescription: "The ultimate tablet for digital artists.",
    fullDescription: "With edge-to-edge glass and zero latency pen input, the CanvasPad Neon feels like drawing on future-paper. Its vibrant, high-refresh display ensures every stroke is captured smoothly in millions of colors.",
    price: 799.00,
    category: "Tablet",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "PulseWatch Sport",
    shortDescription: "Smartwatch with vibrant OLED and fitness tracking.",
    fullDescription: "Track every heartbeat in perfect clarity. The PulseWatch Sport comes with colorful, interchangeable bands, blood-oxygen monitoring, and a face that stays bright even in direct sunlight.",
    price: 349.99,
    category: "Watch",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "5",
    title: "TitanRig Desktop",
    shortDescription: "Stationary PC powerhouse for gaming & rendering.",
    fullDescription: "Housed in a tempered glass case with infinite-mirror RGB cooling, the TitanRig Desktop is as beautiful as it is powerful. Features a multi-core processor and a high-end dedicated GPU.",
    price: 3499.00,
    category: "Desktop",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "6",
    title: "Lumia Cam 4K",
    shortDescription: "Retro-styled digital camera with modern specs.",
    fullDescription: "Capture moments in stunning 4K. The Lumia blends classic colorful aesthetics with state-of-the-art mirrorless technology, featuring an APS-C sensor and incredible low-light performance.",
    price: 1249.50,
    category: "Camera",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "7",
    title: "SonicBass Studio",
    shortDescription: "Over-ear headphones with active noise cancellation.",
    fullDescription: "Block the noise, soak in the color. These over-ear headphones deliver studio-monitor precision in a vibrant, comfortable package. Enjoy up to 40 hours of spatial audio playback.",
    price: 299.99,
    category: "Audio",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "8",
    title: "AstroBuds Mini",
    shortDescription: "True wireless earbuds with punchy bass.",
    fullDescription: "Tiny footprint, massive sound. The AstroBuds Mini come in a colorful charging case and fit securely for intense workouts, delivering clear highs and deep lows.",
    price: 149.00,
    category: "Audio",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "9",
    title: "MacBook Pro M3 Max",
    shortDescription: "Mind-blowing speed with the new M3 Max chip.",
    fullDescription: "The MacBook Pro blasts forward with the M3 Max chip. Built for extreme workflows, it offers unmatched CPU and GPU performance, up to 128GB unified memory, and up to 22 hours of battery life. The 16-inch Liquid Retina XDR display is phenomenal.",
    price: 3499.00,
    category: "Laptop",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "10",
    title: "QuantumTV 65\"",
    shortDescription: "Smart TV with quantum dot technology.",
    fullDescription: "Transform your living room with billions of vibrant colors. The QuantumTV supports HDR10+, extremely low input lag for gaming, and features near-invisible transparent bezels.",
    price: 1499.00,
    category: "TV & Video",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "11",
    title: "CinemaBeam Pro",
    shortDescription: "Portable 4K laser projector.",
    fullDescription: "Turn any blank wall into a massive theater screen. Featuring colorful a laser light source that never fades, auto-keystone correction, and built-in smart apps.",
    price: 899.00,
    category: "TV & Video",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "12",
    title: "StudioMic RGB",
    shortDescription: "Condenser microphone for streaming and recording.",
    fullDescription: "Pick up every detail of your voice while looking stylish on camera. The StudioMic features dynamic RGB lighting and multiple polar patterns for versatile recording.",
    price: 129.99,
    category: "Audio",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "13",
    title: "OpticCurve 34\"",
    shortDescription: "Ultrawide gaming monitor.",
    fullDescription: "Gain a competitive edge with this vividly colorful 144Hz curved monitor. Its VA panel provides deep contrast and immersive viewing angles for seamless gameplay.",
    price: 649.00,
    category: "Accessories",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "14",
    title: "MechKeys Prism",
    shortDescription: "Mechanical keyboard with per-key RGB.",
    fullDescription: "Tactile, responsive, and beautifully illuminated. MechKeys Prism offers custom linear switches and an anodized aluminum frame for durability and style.",
    price: 169.99,
    category: "Accessories",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "15",
    title: "XREAL 1S AR Glasses",
    shortDescription: "Immersive augmented reality eyewear.",
    fullDescription: "Experience a 130-inch virtual display anywhere you go. The XREAL 1S AR Glasses offer mind-bending clarity for gaming and productivity without the bulk.",
    price: 399.00,
    category: "Wearable",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "16",
    title: "Plaud NotePin",
    shortDescription: "AI-powered wearable voice recorder.",
    fullDescription: "Never miss a detail. The Plaud NotePin magnetically attaches anywhere, recording and instantly summarizing your meetings with ChatGPT integration.",
    price: 149.00,
    category: "Accessories",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "17",
    title: "Titanium Smartphone Ultra",
    shortDescription: "Pro-level camera system and aerospace-grade titanium.",
    fullDescription: "Forged in titanium, this smartphone features an incredibly strong and lightweight design. It packs a 48MP main camera, a 5x telephoto lens, and the fastest mobile chip ever created, delivering console-level gaming and incredible battery life.",
    price: 1199.00,
    category: "Mobile",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "18",
    title: "Vault SSD 2TB",
    shortDescription: "Rugged external solid state drive.",
    fullDescription: "Lightning-fast transfers with USB 3.2 Gen 2x2. The Vault SSD comes in a brightly colored, drop-resistant silicone casing so you never lose your important files.",
    price: 219.00,
    category: "Storage",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "19",
    title: "Vastnaut One Exoskeleton",
    shortDescription: "Consumer-grade mobility exoskeleton.",
    fullDescription: "Enhance your strength and stamina. The Vastnaut One is a lightweight wearable exoskeleton designed for hiking, heavy lifting, and effortless mobility.",
    price: 2499.00,
    category: "Wearable",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "20",
    title: "Insta360 Flow 2 Pro",
    shortDescription: "AI tracking smartphone gimbal.",
    fullDescription: "Shoot like a pro. The Flow 2 Pro features deep-track AI, built-in extension rod, and flawless 3-axis stabilization to make every smartphone video cinematic.",
    price: 159.99,
    category: "Camera",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "21",
    title: "Aura SoundBox Pro",
    shortDescription: "High-fidelity portable Bluetooth speaker.",
    fullDescription: "Experience room-filling acoustics with the Aura SoundBox Pro. It blends classic vintage aesthetics with modern wireless audio engineering, boasting 80W of power, deep resonant bass, and 20 hours of portable playtime.",
    price: 379.00,
    category: "Audio",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "22",
    title: "LEGO Smart Brick",
    shortDescription: "Programmable robotics logic brick.",
    fullDescription: "Bring your builds to life. This next-gen Smart Brick integrates with Python, featuring built-in motors, sensors, and endless coding possibilities.",
    price: 199.99,
    category: "Smart Home",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "23",
    title: "DJI Osmo Pocket 4",
    shortDescription: "Pocket-sized 8K gimbal camera.",
    fullDescription: "Unmatched stabilization meets 8K resolution. The Osmo Pocket 4 features a 1-inch sensor, perfect low-light capabilities, and active subject tracking.",
    price: 549.00,
    category: "Camera",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "24",
    title: "BassCannon X",
    shortDescription: "Massive party speaker with synchronized light show.",
    fullDescription: "Bring the concert to your backyard. The BassCannon X delivers booming 360-degree sound and chest-thumping bass, perfectly synchronized with dynamic LED rings that pulse to your music. Water-resistant and ready for any party.",
    price: 499.00,
    category: "Audio",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=2000&auto=format&fit=crop"
  }
];
