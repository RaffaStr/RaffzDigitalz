/**
 * ====================================================================
 * PROJECT: RAFFA STORE - ENTERPRISE DATABASE
 * FILE: database.js
 * VERSION: 200.1 (EXPANDED FORMAT - EASY EDIT)
 * AUTHOR: RAFFA DEV TEAM
 * ====================================================================
 */

const DATABASE = {

    // =================================================================
    // 1. KONFIGURASI HARGA DASAR (JOKI CALCULATOR)
    // =================================================================
    pricing: {
        "Grandmaster": 4000,
        "Epic": 5000,
        "Legend": 7000,
        "Mythic": 10000,
        "Mythic Honor": 15000,
        "Mythic Glory": 20000
    },

    // =================================================================
    // 2. KODE VOUCHER DISKON
    // =================================================================
    vouchers: {
        "RAFFA2025": 1000,
        "MEMBERBARU": 500,
        "SULTAN": 5000,
        "GAJIAN": 2000,
        "PROMO50": 500,
        "FLASHALE": 1500,
        "GRATISONGKIR": 100
    },

    // =================================================================
    // 3. KATEGORI MENU (TABS NAVIGASI)
    // =================================================================
    categories: [
        {
            id: "games",
            name: "Top Up Game",
            items: [
                { id: "ml", name: "Mobile Legends", img: "data:image/jpeg;base64,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", status: "⚡ Instan" },
                { id: "ff", name: "Free Fire", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXqGhGiXr2c1iSru0bpwURTD67NN4N5ZlBw&s", status: "⚡ Instan" },
                { id: "pubg", name: "PUBG Mobile", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PUBG_Mobile_simple_logo_black.svg/640px-PUBG_Mobile_simple_logo_black.svg.png", status: "🟢 Ready" },
                { id: "hok", name: "Honor of Kings", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Honor_of_Kings_Wordmark_Logo.png/640px-Honor_of_Kings_Wordmark_Logo.png", status: "🔥 Promo" },
                { id: "genshin", name: "Genshin Impact", img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Genshin_Impact_logo.svg/1200px-Genshin_Impact_logo.svg.png", status: "🌙 Slow" },
                { id: "codm", name: "Call of Duty", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5jYDywvDoME1BZZH2WP9l4ibEE1OklJSVg&s", status: "🔫 Fast" },
                { id: "sausage", name: "Sausage Man", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5g6xuVZ2Kej7QJwjEIfR-BX2dFI_vDE5DzQ&s", status: "🌭 Unik" },
                { id: "supersus", name: "Super Sus", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZxw-8vbUuCLISvqeYQrcV8qSMBKs1iCNJg&s", status: "🚀 Viral" }
            ]
        },
        {
            id: "pulsa",
            name: "Pulsa & PPOB",
            items: [
                { id: "pulsa_telkomsel", name: "Telkomsel", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Telkomsel_2021_icon.svg/1200px-Telkomsel_2021_icon.svg.png", status: "🔴 Sinyal Kuat" },
                { id: "pulsa_indosat", name: "Indosat Ooredoo", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Indosat_Ooredoo_logo_%282019%29.svg/640px-Indosat_Ooredoo_logo_%282019%29.svg.png", status: "🟡 Kuning" },
                { id: "pulsa_xl", name: "XL Axiata", img: "https://upload.wikimedia.org/wikipedia/en/5/55/XL_logo_2016.svg", status: "🔵 Biru" },
                { id: "pulsa_axis", name: "AXIS", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Axis_logo_2015.svg/2560px-Axis_logo_2015.svg.png", status: "🟣 Ungu" },
                { id: "pulsa_tri", name: "Tri (3)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHaVnZbBwBxdB1A93JBRGo_o4vvRGkBL-19Q&s", status: "⚪ Hemat" },
                { id: "pulsa_smartfren", name: "Smartfren", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Smartfren-white.jpg/640px-Smartfren-white.jpg", status: "💗 4G LTE" },
                { id: "token_pln", name: "Token Listrik", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_PLN.svg/1200px-Logo_PLN.svg.png", status: "⚡ PLN" }
            ]
        },
        {
            id: "pc",
            name: "Voucher PC",
            items: [
                { id: "valorant", name: "Valorant", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1200px-Valorant_logo_-_pink_color_version.svg.png", status: "⚡ Instan" },
                { id: "steam", name: "Steam Wallet", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png", status: "💸 IDR" },
                { id: "roblox", name: "Roblox", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Roblox_Logo_Black.svg/640px-Roblox_Logo_Black.svg.png", status: "🧱 Robux" },
                { id: "minecraft", name: "Minecraft", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Minecraft_Key-art.png/640px-Minecraft_Key-art.png", status: "⛏️ Coins" },
                { id: "gta", name: "GTA V", img: "https://upload.wikimedia.org/wikipedia/id/a/a5/Grand_Theft_Auto_V.png", status: "🚓 Shark Card" },
                { id: "point_blank", name: "Point Blank", img: "https://upload.wikimedia.org/wikipedia/id/5/57/Pointblanklogo.jpg", status: "🔫 Cash" },
                { id: "easports", name: "EA Sports", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/EA_Sports_FC_logo.svg/500px-EA_Sports_FC_logo.svg.png", status: "🏆 Points" }
            ]
        },
        {
            id: "joki",
            name: "Joki Rank",
            items: [
                { id: "joki_ml", name: "Joki Rank ML", img: "data:image/jpeg;base64,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", status: "🏆 cepat" },
                { id: "joki_ff", name: "Joki Rank FF", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZXqGhGiXr2c1iSru0bpwURTD67NN4N5ZlBw&s", status: "🔥 GM" },
                { id: "joki_gendong", name: "Joki Gendong", img: "https://cdn-icons-png.flaticon.com/512/2622/2622056.png", status: "🤝 Mabar" }
            ]
        },
        {
            id: "akun",
            name: "Jual Akun",
            items: [
                { id: "stok_akun", name: "Stok Akun Sultan", img: "https://cdn-icons-png.flaticon.com/512/1041/1041883.png", status: "🔥 Rare" }
            ]
        },
        {
            id: "digital",
            name: "Produk Digital",
            items: [
                { id: "panel_bot", name: "Panel Bot WA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Sn2i5WDynd9UmhLUxxXdVa6eXmlmZgzqwg&s", status: "🤖 Canggih" },
                { id: "domain", name: "Domain & Hosting", img: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png", status: "🌐 Web" },
                { id: "webtraf", name: "Web Traffic", img: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png", status: "📈 Tertinggi" },
                { id: "vps", name: "VPS", img: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png", status: "⚡ Cepat" },
                { id: "ssl", name: "SSL", img: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png", status: "🔒 Aman" },
                { id: "hosting", name: "Hosting", img: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png", status: "💾 Besar" },
                { id: "website", name: "jasa buat website", img: "https://cdn-icons-png.flaticon.com/512/3059/3059531.png", status: "🕸 Profesional" },
                { id: "script", name: "Script Bot WA", img: "https://cdn-icons-png.flaticon.com/512/2111/2111728.png", status: "📜 Lengkap" },
                { id: "jasa_install", name: "Jasa Install Panel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Sn2i5WDynd9UmhLUxxXdVa6eXmlmZgzqwg&s", status: "🛠 Mudah" },
                { id: "sewa_bot", name: "Sewa Bot Wa",img: "https://cdn-icons-png.flaticon.com/512/2111/2111728.png", status: "🤖 Praktis" }
            ]
        },
        {
            id: "sosmed",
            name: "Sosial Media",
            items: [
                { id: "ig", name: "Instagram", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png", status: "📸 Murah" },
                { id: "tiktok", name: "TikTok", img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/2560px-TikTok_logo.svg.png", status: "🎵 Viral" },
                { id: "youtube", name: "YouTube", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png", status: "▶️ Subs" },
                { id: "fb", name: "Facebook", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2560px-Facebook_f_logo_%282019%29.svg.png", status: "👥 Terpopuler" },
                { id: "twitter", name: "Twitter", img: "data:image/png;base64,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", status: "🐦 Trending" },
                { id: "shopee", name: "shopee", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/640px-Shopee.svg.png", status: "🛒 Murah" },
                { id: "spotify", name: "Spotify", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Spotify_logo_Square.svg/640px-Spotify_logo_Square.svg.png", status: "🎧 Lengkap"},
                { id: "telegram", name: "Telegram", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/640px-Telegram_2019_Logo.svg.png", status: "💬 Aman" },
                { id: "google", name: "Google", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/640px-Google_logo_%282013-2015%29.svg.png", status: "🔍 Lengkap" },
                { id: "discord", name: "Discord", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa4W0-BI5CUx35ovhgfEqbeDo9obGXOMgEtg&s", status: "🎮 Seru" },
                { id: "twitch", name: "Twitch", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Twitch_Glitch_Logo_Purple.svg/640px-Twitch_Glitch_Logo_Purple.svg.png", status: "📺 Live" }
            ]
        },
        {
            id: "murid",
            name: "Join Murid",
            items: [
                { id: "join_murid", name: "Daftar Murid", img: "https://cdn-icons-png.flaticon.com/512/3413/3413535.png", status: "👨‍🏫 Open" }
            ]
        },
        {
            id: "dana",
            name: "TopUp E-Wallet",
            items: [
                { id: "dana", name: "dana", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/640px-Logo_dana_blue.svg.png", status: "Murah"}
            ]
        },
        {
            id: "entertainment",
            name: "Entertainment",
            items: [
                { id: "netflix", name: "Netflix", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png", status: "🎬 Seru" },
                { id: "disney", name: "Disney+ Hotstar", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/2560px-Disney%2B_logo.svg.png", status: "🏰 Lengkap" },
                { id: "spotify", name: "Spotify", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Spotify_logo_Square.svg/640px-Spotify_logo_Square.svg.png", status: "🎧 Hits" },
                { id: "joox", name: "JOOX", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/JOOX_logo_2021.png/640px-JOOX_logo_2021.png", status: "🎵 Populer" },
                { id: "vivo", name: "VIVO TV", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vivo_TV_wordmark.svg/640px-Vivo_TV_wordmark.svg.png", status: "📱 Seru" },
                { id: "vision+", name: "Vision+", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo-VISION%2B-black-new.png/640px-Logo-VISION%2B-black-new.png", status: "📺 Lengkap" },
                { id: "weTV", name: "WeTV", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Logo_WeTV_fullscreen.png/640px-Logo_WeTV_fullscreen.png", status: "🎥 Seru"},
                { id: "viu", name: "Viu", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Viu_logo.svg/640px-Viu_logo.svg.png", status: "📽 Populer" },
                { id: "iflix", name: "iflix", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Iflix_vector_logo.svg/640px-Iflix_vector_logo.svg.png", status: "🎞 Lengkap" },
                { id: "amazon", name: "Amazon Prime Video", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Prime_Video.png/2560px-Prime_Video.png", status: "⭐ Hits" },
                { id: "paramount+", name: "Paramount+", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Streaming_on_Paramount%2B.svg/640px-Streaming_on_Paramount%2B.svg.png", status: "🎬 Seru" },
                { id: "hbo_go", name: "HBO GO", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/HBOGO.svg/640px-HBOGO.svg.png", status: "🎥 Populer"},
                { id: "peacock", name: "Peacock", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/NBCUniversal_Peacock_Logo.svg/640px-NBCUniversal_Peacock_Logo.svg.png", status: "📺 Hits" },
                { id: "vidio_primer", name: "Vidio Primer", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo_Vidio.png/640px-Logo_Vidio.png", status: "🎞 Seru" },
                { id: "apple_tv", name: "Apple TV+", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Apple_TV_logo.svg/640px-Apple_TV_logo.svg.png", status: "⭐ Lengkap" }
            ]
        }
    ],

    // =================================================================
    // 4. METODE PEMBAYARAN
    // =================================================================
    paymentMethods: [
        {
            code: "QRIS",
            name: "QRIS (All Payment)",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/QRIS_logo.svg/960px-QRIS_logo.svg.png?20201215043119",
            type: "qris",
            details: { name: "Raffa Store", number: "N/A", image: "qris.jpg" }
        },
        {
            code: "DANA",
            name: "DANA",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/640px-Logo_dana_blue.svg.png",
            type: "ewallet",
            details: { name: "Raffa Store Official", number: "0895-6224-94773" }
        },
        {
            code: "GOPAY",
            name: "GoPay",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png",
            type: "ewallet",
            details: { name: "Raffa Store Official", number: "0813-8543-5612" }
        },
        {
            code: "OVO",
            name: "OVO",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png",
            type: "ewallet",
            details: { name: "Raffa Store Official", number: "0813-8543-5612" }
        },
        {
            code: "SHOPEE",
            name: "ShopeePay",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png",
            type: "ewallet",
            details: { name: "Raffa Store Official", number: "0813-8543-5612" }
        },
        {
            code: "BCA",
            name: "Bank BCA",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png",
            type: "bank",
            details: {
                name: "PT Raffa Store Indonesia",
                number: "70001081385435612"
            }
        },
        {
            code: "BRI",
            name: "Bank BRI",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png",
            type: "bank",
            details: {
                name: "PT Raffa Store Indonesia",
                number: "30135081385435612"
            }
        },
        {
            code: "ALFAMART",
            name: "Alfamart",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Alfamart_logo.svg/2560px-Alfamart_logo.svg.png",
            type: "retail",
            details: { name: "Top Up Gopay Admin", number: "0813-8543-5612" }
        }
    ],

    // =================================================================
    // 5. DATABASE PRODUK (FULL LISTING & PPOB)
    // =================================================================
    products: {
        
        // --- MOBILE LEGENDS ---
        "ml": [
            { name: "3 Diamond", price: 1500 },
            { name: "5 Diamond", price: 2000 },
            { name: "12 Diamond", price: 4000 },
            { name: "19 Diamond", price: 5500 },
            { name: "28 Diamond", price: 8000 },
            { name: "36 Diamond", price: 10000 },
            { name: "44 Diamond", price: 11000 },
            { name: "56 Diamond", price: 14500 },
            { name: "59 Diamond", price: 15000 },
            { name: "74 Diamond", price: 19500 },
            { name: "85 Diamond", price: 22500 },
            { name: "86 Diamond", price: 22600 },
            { name: "100 Diamond", price: 25500 },
            { name: "112 Diamond", price: 29000 },
            { name: "144 Diamond", price: 37500 },
            { name: "172 Diamond", price: 44600 },
            { name: "170 Diamond", price: 44500 },
            { name: "185 Diamond", price: 48000 },
            { name: "229 Diamond", price: 60000 },
            { name: "240 Diamond", price: 62500 },
            { name: "257 Diamond", price: 66000 },
            { name: "264 Diamond", price: 74000 },
            { name: "278 Diamond", price: 73000 },
            { name: "284 Diamond", price: 74000 },
            { name: "296 Diamond", price: 76000 },
            { name: "301 Diamond", price: 78500 },
            { name: "344 Diamond", price: 88000 },
            { name: "345 Diamond", price: 90000 },
            { name: "355 Diamond", price: 92000 },
            { name: "374 Diamond", price: 98000 },
            { name: "370 Diamond", price: 98000 },
            { name: "381 Diamond", price: 99000 },
            { name: "384 Diamond", price: 103500 },
            { name: "408 Diamond", price: 106000 },
            { name: "429 Diamond", price: 110000 },
            { name: "425 Diamond", price: 111000 },
            { name: "448 Diamond", price: 129000 },
            { name: "460 Diamond", price: 129500 },
            { name: "500 Diamond", price: 136500 },
            { name: "514 Diamond", price: 132000 },
            { name: "512 Diamond", price: 133000 },
            { name: "518 Diamond", price: 138000 },
            { name: "522 Diamond", price: 136000 },
            { name: "568 Diamond", price: 142000 },
            { name: "600 Diamond", price: 155000 },
            { name: "601 Diamond", price: 154000 },
            { name: "642 Diamond", price: 172000 },
            { name: "706 Diamond", price: 181000 },
            { name: "712 Diamond", price: 181500 },
            { name: "717 Diamond", price: 183000 },
            { name: "875 Diamond", price: 219000 },
            { name: "965 Diamond", price: 246500 },
            { name: "963 Diamond", price: 246000 },
            { name: "977 Diamond", price: 248000 },
            { name: "1050 Diamond", price: 267000 },
            { name: "1136 Diamond", price: 288000 },
            { name: "1134 Diamond", price: 288000 },
            { name: "1139 Diamond", price: 290000 },
            { name: "1159 Diamond", price: 294000 },
            { name: "1164 Diamond", price: 295000 },
            { name: "1183 Diamond", price: 300000 },
            { name: "1230 Diamond", price: 312000 },
            { name: "1220 Diamond", price: 313000 },
            { name: "1368 Diamond", price: 348000 },
            { name: "1412 Diamond", price: 361000 },
            { name: "1413 Diamond", price: 364000 },
            { name: "1453 Diamond", price: 369000 },
            { name: "1507 Diamond", price: 380000 },
            { name: "1672 Diamond", price: 423000 },
            { name: "1704 Diamond", price: 431000 },
            { name: "1750 Diamond", price: 440000 },
            { name: "2010 Diamond", price: 478000 },
            { name: "2180 Diamond", price: 522000 },
            { name: "2199 Diamond", price: 527000 },
            { name: "2195 Diamond", price: 531000 },
            { name: "2350 Diamond", price: 566000 },
            { name: "2578 Diamond", price: 521000 },
            { name: "2625 Diamond", price: 634000 },
            { name: "3453 Diamond", price: 841000 },
            { name: "3738 Diamond", price: 919000 },
            { name: "4020 Diamond", price: 955000 },
            { name: "4588 Diamond", price: 1098000 },
            { name: "4830 Diamond", price: 1146000 },
            { name: "5398 Diamond", price: 1289000 },
            { name: "6030 Diamond", price: 1432000 },
            { name: "6840 Diamond", price: 1623000 },
            { name: "8040 Diamond", price: 1910000 },
            { name: "9660 Diamond", price: 2291000 },
            { name: "10050 Diamond", price: 2387000 },
            { name: "14490 Diamond", price: 3437000 },
            { name: "16080 Diamond", price: 3819000 },
            { name: "18090 Diamond", price: 4296000 },
            { name: "19320 Diamond", price: 4582000 },
            { name: "20100 Diamond", price: 4773000 },
            { name: "21330 Diamond", price: 5059000 },
            { name: "23340 Diamond", price: 5537000 },
            { name: "24150 Diamond", price: 5728000 },
            { name: "26160 Diamond", price: 6205000 },
            { name: "228170 Diamond", price: 6682000 },
            { name: "Weekly Diamond Pass", price: 28000 },
            { name: "Weekly Pass (x2)", price: 56000 },
            { name: "Weekly Pass (x3)", price: 84000 },
            { name: "Weekly Pass (4x)", price: 111999},
            { name: "Weekly Pass (5x)", price: 139000},
            { name: "Twilight Pass", price: 145000 },
            { name: "Starlight Member (Gangguan)", price: 150000 },
            { name: "Starlight Premium (Gangguan)", price: 300000 }
        ],

        // --- FREE FIRE ---
        "ff": [
            { name: "5 Diamonds", price: 1000 },
            { name: "10 Diamonds", price: 1900 },
            { name: "12 Diamonds", price: 2000 },
            { name: "15 Diamonds", price: 2800 },
            { name: "20 Diamonds", price: 3500 },
            { name: "25 Diamonds", price: 4700 },
            { name: "30 Diamonds", price: 5500 },
            { name: "40 Diamonds", price: 6500 },
            { name: "50 Diamonds", price: 6900 },
            { name: "55 Diamonds", price: 7300 },
            { name: "70 Diamonds", price: 9000 },
            { name: "80 Diamonds", price: 10500 },
            { name: "90 Diamonds", price: 12500 },
            { name: "95 Diamonds", price: 13300 },
            { name: "100 Diamonds", price: 13100 },
            { name: "140 Diamonds", price: 17800 },
            { name: "145 Diamonds", price: 18800 },
            { name: "150 Diamonds", price: 19600 },
            { name: "160 Diamonds", price: 21000 },
            { name: "180 Diamonds", price: 23500 },
            { name: "190 Diamonds", price: 24500 },
            { name: "200 Diamonds", price: 25800 },
            { name: "210 Diamonds", price: 26500 },
            { name: "250 Diamonds", price: 32500 },
            { name: "260 Diamonds", price: 33400 },
            { name: "280 Diamonds", price: 35300 },
            { name: "300 Diamonds", price: 38600 },
            { name: "355 Diamonds", price: 44000 },
            { name: "375 Diamonds", price: 47300 },
            { name: "405 Diamonds", price: 50300 },
            { name: "425 Diamonds", price: 53100 },
            { name: "475 Diamonds", price: 59100 },
            { name: "500 Diamonds", price: 62000 },
            { name: "510 Diamonds", price: 64000 },
            { name: "512 Diamonds", price: 64500 },
            { name: "520 Diamonds", price: 66300 },
            { name: "545 Diamonds", price: 68300 },
            { name: "565 Diamonds", price: 70000 },
            { name: "720 Diamonds", price: 86500 },
            { name: "1000 Diamonds", price: 122000 },
            { name: "1450 Diamonds", price: 173000 },
            { name: "2180 Diamonds", price: 256000 },
            { name: "3640 Diamonds", price: 434000 },
            { name: "Member Mingguan", price: 26900 },
            { name: "Member Bulanan", price: 79600 },
            { name: "Level Up Pass", price: 14000 },
            { name: "Booyah Pass", price: 40500 }
        ],

        // --- PULSA & PPOB (Expanded) ---
        
        // 1. TELKOMSEL
        "pulsa_telkomsel": [
            { name: "Pulsa 5.000", price: 7000 },
            { name: "Pulsa 10.000", price: 12000 },
            { name: "Pulsa 20.000", price: 22000 },
            { name: "Pulsa 25.000", price: 27000 },
            { name: "Pulsa 50.000", price: 52000 },
            { name: "Pulsa 100.000", price: 102000 },
            { name: "Data OMG! 10GB", price: 60000 },
            { name: "Data Combo Sakti 15GB", price: 75000 },
            { name: "Data Orbit 30GB", price: 135000 }
        ],

        // 2. INDOSAT
        "pulsa_indosat": [
            { name: "Pulsa 5.000", price: 7000 },
            { name: "Pulsa 10.000", price: 12000 },
            { name: "Pulsa 20.000", price: 22000 },
            { name: "Pulsa 25.000", price: 27000 },
            { name: "Pulsa 50.000", price: 52000 },
            { name: "Pulsa 100.000", price: 102000 },
            { name: "Freedom Internet 3GB", price: 15000 },
            { name: "Freedom Internet 10GB", price: 40000 },
            { name: "Freedom Internet 20GB", price: 70000 }
        ],

        // 3. XL AXIATA
        "pulsa_xl": [
            { name: "Pulsa 5.000", price: 7000 },
            { name: "Pulsa 10.000", price: 12000 },
            { name: "Pulsa 25.000", price: 27000 },
            { name: "Pulsa 50.000", price: 52000 },
            { name: "Pulsa 100.000", price: 102000 },
            { name: "Xtra Combo Flex S", price: 40000 },
            { name: "Xtra Combo Flex M", price: 60000 },
            { name: "Xtra Combo Flex L", price: 90000 }
        ],

        // 4. AXIS
        "pulsa_axis": [
            { name: "Pulsa 5.000", price: 7000 },
            { name: "Pulsa 10.000", price: 12000 },
            { name: "Pulsa 25.000", price: 27000 },
            { name: "Pulsa 50.000", price: 52000 },
            { name: "Bronet 3GB 24Jam", price: 18000 },
            { name: "Bronet 5GB 24Jam", price: 25000 },
            { name: "Bronet 10GB 24Jam", price: 45000 }
        ],

        // 5. TRI (3)
        "pulsa_tri": [
            { name: "Pulsa 5.000", price: 7000 },
            { name: "Pulsa 10.000", price: 12000 },
            { name: "Pulsa 20.000", price: 22000 },
            { name: "Pulsa 50.000", price: 52000 },
            { name: "Happy 3GB", price: 15000 },
            { name: "Happy 9GB", price: 35000 },
            { name: "Happy 18GB", price: 60000 }
        ],

        // 6. SMARTFREN
        "pulsa_smartfren": [
            { name: "Pulsa 5.000", price: 7000 },
            { name: "Pulsa 10.000", price: 12000 },
            { name: "Pulsa 20.000", price: 22000 },
            { name: "Pulsa 50.000", price: 52000 },
            { name: "Unlimited Nonstop 6GB", price: 35000 },
            { name: "Unlimited Harian 1GB/Hari", price: 80000 },
            { name: "Data 30GB", price: 60000 }
        ],

        // 7. TOKEN PLN
        "token_pln": [
            { name: "Token 20.000", price: 22000 },
            { name: "Token 50.000", price: 52000 },
            { name: "Token 100.000", price: 102000 },
            { name: "Token 200.000", price: 202000 },
            { name: "Token 500.000", price: 502000 },
            { name: "Token 1.000.000", price: 1002000 }
        ],

        // --- GAME LAINNYA ---
        "pubg": [
            { name: "60 UC", price: 14000 },
            { name: "325 UC", price: 72000 },
            { name: "660 UC", price: 145000 },
            { name: "1800 UC", price: 350000 },
            { name: "3850 UC", price: 700000 },
            { name: "8100 UC", price: 1400000 }
        ],
        "hok": [
            { name: "8 Token", price: 2000 },
            { name: "16 Token", price: 3500 },
            { name: "88 Token", price: 13000 },
            { name: "256 Token", price: 45000 },
            { name: "432 Token", price: 75000 },
            { name: "608 Token", price: 100000 }
        ],
        "valorant": [
            { name: "125 Points", price: 15000 },
            { name: "420 Points", price: 50000 },
            { name: "700 Points", price: 80000 },
            { name: "1375 Points", price: 150000 },
            { name: "2400 Points", price: 250000 },
            { name: "4000 Points", price: 400000 }
        ],
        "genshin": [
            { name: "60 Genesis", price: 15000 },
            { name: "300 Genesis", price: 75000 },
            { name: "980 Genesis", price: 230000 },
            { name: "1980 Genesis", price: 450000 },
            { name: "3280 Genesis", price: 750000 },
            { name: "6480 Genesis", price: 1450000 },
            { name: "Welkin Moon", price: 80000 }
        ],

        // --- JOKI & GRADING ---
        "joki_ml": [
            { name: "Joki Grading (10 Win)", price: 90000 },
            { name: "Paket GM ke Epic", price: 125000 },
            { name: "Paket Epic ke Legend", price: 150000 },
            { name: "Paket Legend ke Mythic", price: 200000 }
        ],
        "joki_ff": [
            { name: "Gold - Platinum", price: 15000 },
            { name: "Platinum - Diamond", price: 25000 },
            { name: "Diamond - Master", price: 50000 },
            { name: "Master - GM", price: 100000 }
        ],

        // --- STOK AKUN ---
        "stok_akun": [
            { name: "Akun ML Sultan Ex-Glory", price: 500000, img: "https://i.pinimg.com/736x/8a/a8/9a/8aa89a1955c425095037d00f68285526.jpg", status: "🔥 Rare" },
            { name: "Akun FF Old Season 1", price: 350000, img: "https://i.pinimg.com/736x/2c/3c/30/2c3c306563f82e814529329706797505.jpg", status: "🌵 Old" },
            { name: "Akun Genshin Impact AR 58", price: 800000, img: "https://wallpapers.com/images/hd/hu-tao-genshin-impact-portrait-c7x8y5z9w1a2b3c4.jpg", status: "❄️ Mahal" },
            { name: "Akun PUBG Mobile", price: 1200000, img: "https://i.pinimg.com/originals/1a/2b/3c/1a2b3c4d5e6f7g8h9i0j.jpg", status: "🔫 Sultan" }
        ],

        // --- PRODUK DIGITAL ---
        "panel_bot": [
            { name: "Panel Pterodactyl 1GB", price: 5000 },
            { name: "Panel Pterodactyl 2GB", price: 10000 },
            { name: "Panel Pterodactyl 4GB", price: 20000 },
            { name: "Panel Unlimited", price: 50000 },
            { name: "Script Bot WA V5 (No Enc)", price: 50000 },
            { name: "Source Code Web Topup", price: 150000 }
        ],
        "domain": [
            { name: "Domain .COM (1 Tahun)", price: 165000 },
            { name: "Domain .MY.ID (1 Tahun)", price: 15000 },
            { name: "Domain .ID (1 Tahun)", price: 250000 },
            { name: "Domain .XYZ (1 Tahun)", price: 25000 }
        ],

        // --- SOSIAL MEDIA ---
        "ig": [
            { name: "100 Followers", price: 5000 },
            { name: "500 Followers", price: 20000 },
            { name: "1000 Followers", price: 38000 }
        ],
        "tiktok": [
            { name: "1000 Views", price: 1000 },
            { name: "100 Followers", price: 15000 },
            { name: "1000 Followers", price: 120000 }
        ],
        "youtube": [
            { name: "100 Subs", price: 50000 },
            { name: "1000 Subs", price: 450000 },
            { name: "4000 Jam Tayang", price: 800000 }
        ],

        // --- JOIN MURID ---
        "join_murid": [ 
            { name: "Murid Suntik Sosmed", price: 10000 }, 
            { name: "Murid Install Panel (Lengkap)", price: 15000 }, 
            { name: "Murid Buat web (Full Bimbingan)", price: 100000 },
            { name: "Murid CRate Bot WA", price: 30000 },
            { name: "Murid Full Paket (Sosmed + Panel + Web + Bot)", price: 220000 }
        ],

        // --- VOUCHER PC ---
        "steam": [
            { name: "IDR 12.000", price: 15000 },
            { name: "IDR 45.000", price: 50000 },
            { name: "IDR 90.000", price: 98000 }
        ],
        "roblox": [
            { name: "80 Robux", price: 15000 },
            { name: "400 Robux", price: 75000 },
            { name: "800 Robux", price: 145000 }
        ],
        "higgs": [
            { name: "30M Koin", price: 5000 },
            { name: "60M Koin", price: 10000 },
            { name: "200M Koin", price: 25000 },
            { name: "1B Koin", price: 65000 }
        ],

        // --- E-WALLET ----
        "dana": [
            { name: "1.000 dana", price: 1500 },
            { name: "2.000 dana", price: 2500 },
            { name: "3.000 dana", price: 3500 },
            { name: "4.000 dana", price: 4500 },
            { name: "5.000 dana", price: 5500 },
            { name: "6.000 dana", price: 6500 },
            
        ]
    },

    // =================================================================
    // 6. GALERI TESTIMONI PELANGGAN
    // =================================================================
    proofs: [
        { img: "https://i.pinimg.com/736x/28/23/d5/2823d517852a36214213d297924e5436.jpg", caption: "Done 86 Diamond ⚡" },
        { img: "https://i.pinimg.com/736x/8a/53/7c/8a537c0411a76203a298539074092497.jpg", caption: "Amanah 100% 🔥" },
        { img: "https://i.pinimg.com/736x/d6/3c/65/d63c650170a41d068407425178972175.jpg", caption: "Joki Mythic Full Win" },
        { img: "https://i.pinimg.com/736x/44/2c/80/442c8038753235339396791783307267.jpg", caption: "Respon Admin Cepat" },
        { img: "https://i.pinimg.com/736x/21/5d/0f/215d0f19904944917534438317d74026.jpg", caption: "Proses 1 Detik" }
    ],

    // =================================================================
    // 7. POPUP INFO / PENGUMUMAN ADMIN
    // =================================================================
    infoPopup: {
        active: true, // Ubah ke 'false' jika ingin mematikan popup
        img: "https://img.freepik.com/free-vector/gradient-breaking-news-background_23-2151122765.jpg", // Gambar Header
        title: "📢 INFO PENTING!",
        message: "Selamat datang di Raffa Store. <br> Server Mobile Legends sedang <b>padat/delay</b> <br>Untuk kendala proses pesanan anda di invoice silahkan hubungi admin untuk konfirmasi manual karena database server sedang error. Mohon bersabar ya!",
        btnText: "SIAP, PAHAM"
    }

};
