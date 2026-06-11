// Comprehensive Translation Dictionary
const translations = {
    en: {
        // Navbar
        nav_home: "Home",
        nav_detect: "Detect Disease",
        nav_history: "History",
        nav_how_it_works: "How It Works",
        nav_manual: "User Manual",
        nav_chat: "AI Chat",
        nav_logout: "Logout",
        nav_login: "Login",
        nav_hello: "Hello",

        // Home Page
        hero_badge: "AI-Powered Agriculture",
        hero_title: "Empower Your Crop Management",
        hero_desc: "Leaf Kabiraj is a digital agricultural assistant designed to instantly detect diseases in plant leaves. Simply snap a picture of a leaf to identify issues and access treatment tips instantly.",
        btn_hero_detect: "Diagnose Leaf Now",
        btn_hero_education: "How It Works",
        ai_engine_title: "AI Diagnostic Engine",
        ai_engine_sub: "Active & Ready",
        why_use_title_1: "Why Use",
        why_use_title_2: "Leaf Kabiraj",
        instant_diag_title: "Instant Diagnosis",
        instant_diag_desc: "Our deep learning algorithm analyzes leaf images in under two seconds, helping you take fast action to save your crops.",
        crops_supp_title: "14+ Crops Supported",
        crops_supp_desc: "Trained on thousands of real-world leaf samples, including tomatoes, potatoes, apples, corn, grapes, and more.",
        history_track_title: "History Tracking",
        history_track_desc: "Sign up or log in to keep a historical log of all your crop scans, monitoring disease outbreaks across seasons.",
        plants_we_title_1: "Plants We Can",
        plants_we_title_2: "Diagnose",
        plants_we_desc: "Our computer vision model recognizes 38 different health and disease categories across a wide range of common crops.",
        crop_tomato: "Tomato",
        tomato_cond: "10 Conditions",
        crop_potato: "Potato",
        potato_cond: "3 Conditions",
        crop_corn: "Corn / Maize",
        corn_cond: "4 Conditions",
        crop_apple: "Apple",
        apple_cond: "4 Conditions",
        crop_grape: "Grape",
        grape_cond: "4 Conditions",
        crop_peach: "Peach",
        peach_cond: "2 Conditions",
        crop_bell_pepper: "Bell Pepper",
        bell_pepper_cond: "2 Conditions",
        crop_strawberry: "Strawberry",
        strawberry_cond: "2 Conditions",
        crop_orange: "Orange",
        orange_cond: "Citrus Greening",
        crop_cherry: "Cherry",
        cherry_cond: "2 Conditions",
        crop_squash: "Squash",
        squash_cond: "Powdery Mildew",
        crop_blueberry: "Blueberry",
        blueberry_cond: "Healthy",

        // Manual Page
        manual_badge: "Step-by-Step Guide",
        manual_title: "How to Detect Diseases",
        manual_desc: "Follow these simple instructions to capture the highest-quality crop leaf photos for our AI analyzer, ensuring maximum accuracy.",
        step1_title: "Select the Leaf",
        step1_desc: "Find a single representative leaf showing symptoms of disease, color changes, or unusual spots. Try to isolate it from surrounding twigs.",
        step2_title: "Optimize Lighting",
        step2_desc: "Ensure the leaf is well-lit. Natural daylight is perfect. Avoid heavy shadows, glares, or using flashlight if it washes out the colors.",
        step3_title: "Focus & Snap",
        step3_desc: "Hold the camera steady, roughly 10-15 cm away. Tap to focus so leaf textures and spots are sharp. Take a high-resolution photo.",
        step4_title: "Upload & Analyze",
        step4_desc: "Go to the Detect page, drag your leaf photo into the drop-zone, and click Upload. Receive diagnosis results within seconds!",
        guide_title: "Photography Do's & Don'ts",
        guide_do_header: "What to Do (Success)",
        guide_dont_header: "What to Avoid",
        do_rule1: "Hold the leaf flat or lay it down on a plain, neutral background (such as dirt, paper, or concrete).",
        do_rule2: "Ensure only one leaf dominates the center of the photo.",
        do_rule3: "Keep the leaf in sharp focus so the AI can inspect tiny details like mold spores or bacterial spot lesions.",
        do_rule4: "Capture the leaf colors accurately under natural daylight conditions.",
        dont_rule1: "Do not cover leaf spots or margins with your fingers or hand while holding the leaf.",
        dont_rule2: "Do not take photos of the entire plant or multiple branches at a distance. The AI needs a close-up of a leaf.",
        dont_rule3: "Avoid severe blurs, camera shakes, or taking photos while moving.",
        dont_rule4: "Do not capture images with heavy glares, direct sunlight reflections, or pitch darkness.",
        btn_ready: "Ready? Start Diagnosing",

        // How It Works Page
        how_badge: "AI Made Simple",
        how_title: "How Does It Work?",
        how_desc: "Ever wondered how a computer can look at a leaf and know if it is sick? Let's explore the simple science behind our AI leaf detective!",
        analogy_title: "Meet the \"Leaf Detective\"",
        analogy_p1: "Imagine a smart detective who wants to learn to recognize plants. At first, they don't know what a healthy or sick leaf looks like. So, they study a massive photobook containing thousands of leaf photos: some labeled \"Healthy\", and others showing different spots or insect damage.",
        analogy_p2: "By studying these pictures day and night, the detective notices patterns—like \"early blight makes brown target-like rings\" or \"common rust makes orange bumps\". Our AI does the exact same thing, but at super-speed!",
        step_4_title_1: "The AI's",
        step_4_title_2: "4 Steps",
        step_4_title_3: "of Diagnosis",
        step1_header: "Leaf Image",
        step1_p: "You snap a picture and upload it. The computer receives the photo as a grid of millions of colorful dots called pixels.",
        step2_header: "Spotting Patterns",
        step2_p: "The AI looks at lines, colors, and textures. It checks if the leaf has holes, weird spots, or strange yellow edges.",
        step3_header: "Neural Network",
        step3_p: "Thousands of tiny virtual brain cells (called neurons) work together, passing information to vote on the result.",
        step4_header: "Final Verdict",
        step4_p: "The AI gives its best guess (e.g. \"Potato Late Blight\") along with a Confidence Score showing how sure it is!",
        brain_title: "Visualizing the AI's \"Brain\"",
        brain_desc: "Below is a live model of an artificial neural network. Watch how inputs (colors & shapes) pass through hidden layers of thinking nodes to generate the final prediction.",
        legend_in: "Input Features (Shapes/Colors)",
        legend_hid: "Thinking Neurons",
        legend_out: "Final Output Choices",
        q_title: "Common Questions",
        q1_q: "Q: Does the AI make mistakes?",
        q1_a: "Yes! Just like humans, the AI can sometimes guess wrong. That's why we show a Confidence Score. If the AI is only 55% sure, it means the photo might be blurry or confusing, and we should check it closely.",
        q2_q: "Q: How did the AI learn so much?",
        q2_a: "It went to \"school\"! Researchers fed the computer over 50,000 crop leaf photos from around the world. By adjusting internal settings, it slowly learned which details make up which plant diseases.",

        // Upload Page
        upload_title: "Disease Detector",
        upload_desc: "Upload a leaf photo below. Our neural network will analyze it for signs of infection.",
        drop_title: "Drag & Drop Leaf Photo",
        drop_desc: "Or click here to browse files on your device",
        file_default: "No file selected",
        btn_submit: "Start AI Diagnosis",
        btn_tips: "📖 Read Photo Tips (How to get accurate results)",
        loading_text: "Analyzing Leaf Patterns...",
        loading_sub: "Running deep learning classification",

        // Success Page
        report_badge: "Analysis Completed",
        report_title: "Diagnostic Report",
        status_healthy: "🟢 Plant is Healthy",
        status_diseased: "⚠️ Issue Detected",
        confidence_title: "Confidence Level",
        explain_p1: "Our Deep Learning Classifier studied the shapes, contours, and color hues on this leaf. It matches the symptoms of",
        explain_p2: "with a reliability rating of",
        btn_diag_new: "Diagnose New Leaf",
        btn_history: "View History Log",
        fail_title: "Prediction Failed",
        fail_desc: "We couldn't process the leaf photo. Please make sure the file is a valid image and try again.",
        btn_try_again: "Try Again",
        remedy_title: "Organic Remedies & Care",
        prevention_title: "Prevention & Protection",
        desc_section_title: "Leaf Condition Analysis",

        // History Page
        hist_title: "Scan History",
        hist_desc: "Review and filter past leaf scans and diagnosis results.",
        hist_search: "🔍 Filter by crop or disease...",
        hist_scanned: "Scanned",
        hist_match: "Match",
        hist_no_score: "No Score",
        btn_details: "View Details",
        empty_title: "No Scans Yet",
        empty_desc: "You haven't uploaded any leaf images for analysis yet. Your history log is empty.",
        btn_diag_first: "Diagnose First Leaf"
    },
    bn: {
        // Navbar
        nav_home: "হোম",
        nav_detect: "রোগ শনাক্তকরণ",
        nav_history: "স্ক্যান রেকর্ড",
        nav_how_it_works: "কার্যপ্রণালী",
        nav_manual: "ব্যবহার নির্দেশিকা",
        nav_chat: "এআই চ্যাট",
        nav_logout: "লগআউট",
        nav_login: "লগইন",
        nav_hello: "স্বাগতম",

        // Home Page
        hero_badge: "আধুনিক এআই-চালিত কৃষি",
        hero_title: "আপনার ফসলের সঠিক যত্ন ও সহজ ব্যবস্থাপনা",
        hero_desc: "লিফ কবিরাজ একটি ডিজিটাল কৃষি সহকারী, যা যা গাছের পাতার রোগ শনাক্ত করতে পারে। কেবল আক্রান্ত পাতার একটি ছবি তুলেই যেকোনো সমস্যা চিহ্নিত করুন এবং তা সমাধানের কার্যকর উপায় জেনে নিন।",
        btn_hero_detect: "পাতা পরীক্ষা করুন",
        btn_hero_education: "কীভাবে কাজ করে",
        ai_engine_title: "এআই রোগ শনাক্তকরণ ইঞ্জিন",
        ai_engine_sub: "সক্রিয় ও প্রস্তুত",
        why_use_title_1: "কেন ব্যবহার করবেন",
        why_use_title_2: "লিফ কবিরাজ?",
        instant_diag_title: "তাৎক্ষণিক রোগ নির্ণয়",
        instant_diag_desc: "আমাদের ডিপ লার্নিং প্রযুক্তি মাত্র ২ সেকেন্ডের মধ্যে পাতার ছবি বিশ্লেষণ করে সঠিক রোগ নির্ণয় করতে পারে, যা আপনার ফসল বাঁচাতে দ্রুত পদক্ষেপ নিতে সাহায্য করবে।",
        crops_supp_title: "১৪টিরও বেশি ফসল সমর্থিত",
        crops_supp_desc: "হাজার হাজার বাস্তব পাতার নমুনা বিশ্লেষণ করে আমাদের এআই-কে প্রশিক্ষিত করা হয়েছে; যার মধ্যে টমেটো, আলু, আপেল, ভুট্টা, আঙুরসহ আরও অনেক ফসল রয়েছে।",
        history_track_title: "স্ক্যান রেকর্ড সংরক্ষণ",
        history_track_desc: "আপনার করা সমস্ত ফসল পরীক্ষার ইতিহাস সংরক্ষণ করতে লগইন করুন, যা বিভিন্ন ঋতুতে ফসলের রোগের প্রাদুর্ভাব ও ধরণ বুঝতে সাহায্য করবে।",
        plants_we_title_1: "যেসব ফসলের রোগ",
        plants_we_title_2: "শনাক্ত করতে পারি",
        plants_we_desc: "আমাদের কম্পিউটার ভিশন মডেলটি সাধারণ ফসলের মধ্যে ৩৮টি ভিন্ন স্বাস্থ্য এবং রোগ বিভাগ সফলভাবে শনাক্ত করতে সক্ষম।",
        crop_tomato: "টমেটো",
        tomato_cond: "১০টি রোগ ও অবস্থা",
        crop_potato: "আলু",
        potato_cond: "৩টি রোগ ও অবস্থা",
        crop_corn: "ভুট্টা",
        corn_cond: "৪টি রোগ ও অবস্থা",
        crop_apple: "আপেল",
        apple_cond: "৪টি রোগ ও অবস্থা",
        crop_grape: "আঙুর",
        grape_cond: "৪টি রোগ ও অবস্থা",
        crop_peach: "পিচ",
        peach_cond: "২টি রোগ ও অবস্থা",
        crop_bell_pepper: "ক্যাপসিকাম",
        bell_pepper_cond: "২টি রোগ ও অবস্থা",
        crop_strawberry: "স্ট্রবেরি",
        strawberry_cond: "২টি রোগ ও অবস্থা",
        crop_orange: "কমলা",
        orange_cond: "সাইট্রাস গ্রীনিং রোগ",
        crop_cherry: "চেরি",
        cherry_cond: "২টি রোগ ও অবস্থা",
        crop_squash: "স্কোয়াশ",
        squash_cond: "পাউডারি মিলডিউ রোগ",
        crop_blueberry: "ব্লুবেরি",
        blueberry_cond: "সুস্থ ও রোগমুক্ত",

        // Manual Page
        manual_badge: "ধাপ-ভিত্তিক নির্দেশিকা",
        manual_title: "কীভাবে রোগ শনাক্ত করবেন",
        manual_desc: "নির্ভুল ফলাফল পেতে আমাদের এআই বিশ্লেষকের জন্য পাতার সঠিক ছবি তোলার সহজ নিয়মগুলো জেনে নিন।",
        step1_title: "সঠিক পাতা নির্বাচন",
        step1_desc: "গাছের এমন একটি পাতা বেছে নিন যাতে রোগের লক্ষণ (যেমন ছোপ ছোপ দাগ, সাদা ছাতা বা হলুদ কিনারা) স্পষ্টভাবে দেখা যাচ্ছে। ডালপালা থেকে পাতাটি আলাদা করে ধরুন।",
        step2_title: "পর্যাপ্ত আলো নিশ্চিতকরণ",
        step2_desc: "ছবি তোলার সময় পর্যাপ্ত আলো থাকা প্রয়োজন। দিনের স্বাভাবিক আলো সবচেয়ে ভালো। অতিরিক্ত ছায়া, কড়া রোদ বা ফ্ল্যাশলাইটের প্রতিফলন এড়িয়ে চলুন।",
        step3_title: "ফোকাস এবং ছবি তোলা",
        step3_desc: "ক্যামেরা স্থির রেখে পাতা থেকে আনুমানিক ১০-১৫ সেমি দূরে ধরুন। স্ক্রিনে ট্যাপ করে ফোকাস করুন যাতে পাতার দাগগুলো স্পষ্ট দেখা যায় এবং ছবি তুলুন।",
        step4_title: "আপলোড এবং বিশ্লেষণ",
        step4_desc: "শনাক্তকরণ পেজে গিয়ে পাতার ছবিটি আপলোড করুন। কয়েক সেকেন্ডের মধ্যেই আমাদের সিস্টেমে পেয়ে যাবেন বিস্তারিত ফলাফল ও সমাধান!",
        guide_title: "ছবি তোলার সঠিক ও ভুল নিয়ম",
        guide_do_header: "করণীয় বিষয়সমূহ (সঠিক ছবির জন্য)",
        guide_dont_header: "বর্জনীয় বিষয়সমূহ (যেসব ভুল এড়ানো উচিত)",
        do_rule1: "পাতাটি সোজা করে ধরুন অথবা একটি সাধারণ ব্যাকগ্রাউন্ডের (যেমন পরিষ্কার কাগজ বা মাটি) ওপর সমতলভাবে রাখুন।",
        do_rule2: "ছবির ঠিক মাঝখানে যেন একটিমাত্র পাতা স্পষ্টভাবে ফোকাসে থাকে।",
        do_rule3: "পাতাটি সম্পূর্ণ স্পষ্ট ও শার্প ফোকাসে রাখুন যাতে এআই ছোটখাটো লক্ষণ বা দাগও নিখুঁতভাবে পরীক্ষা করতে পারে।",
        do_rule4: "দিনের স্বাভাবিক আলোতে পাতার আসল রঙটি ক্যামেরায় ফুটিয়ে তুলুন।",
        dont_rule1: "ছবি তোলার সময় হাত বা আঙুল দিয়ে পাতার দাগ অথবা কিনারা ঢেকে রাখবেন না।",
        dont_rule2: "দূর থেকে পুরো গাছ বা ডালপালার ছবি তুলবেন না। এআই-এর জন্য শুধুমাত্র একটি পাতার স্পষ্ট ক্লোজ-আপ ছবি প্রয়োজন।",
        dont_rule3: "ঝাপসা, নড়ে যাওয়া বা চলন্ত অবস্থায় ছবি তোলা থেকে বিরত থাকুন। অস্পষ্ট ছবি রোগ নির্ণয়ে বিভ্রান্তি তৈরি করে।",
        dont_rule4: "কড়া রোদ, অতিরিক্ত আলো বা একদম অন্ধকারে ছবি তুলবেন না।",
        btn_ready: "প্রস্তুত? রোগ শনাক্ত করা শুরু করুন",

        // How It Works Page
        how_badge: "সহজ ভাষায় এআই",
        how_title: "এটি কীভাবে কাজ করে?",
        how_desc: "কখনও কি মনে প্রশ্ন জেগেছে—কীভাবে একটি কম্পিউটার পাতা দেখেই রোগের কথা বলে দেয়? চলুন আমাদের 'পাতা গোয়েন্দা' এআই-এর পেছনের বিজ্ঞানটি সহজ ভাষায় জেনে নিই!",
        analogy_title: "আমাদের 'পাতা গোয়েন্দা'র পরিচয়",
        analogy_p1: "কল্পনা করুন একজন বুদ্ধিমান গোয়েন্দার কথা যিনি ফসলের রোগ শনাক্ত করতে চান। শুরুতে তিনি জানতেন না কোন রোগ দেখতে কেমন হয়। তাই তিনি হাজার হাজার পাতার ছবি সম্বলিত একটি বই নিয়ে পড়ালেখা শুরু করলেন। সেখানে কিছু ছবি ছিল সুস্থ পাতার, আর কিছু ছিল রোগাক্রান্ত কিংবা পোকার আক্রমণ হওয়া পাতার।",
        analogy_p2: "ক্রমাগত এই ছবিগুলো দেখার ফলে গোয়েন্দা আস্তে আস্তে নির্দিষ্ট কিছু লক্ষণ চিনে ফেললেন—যেমন: 'আর্লি ব্লাইট রোগে পাতায় বাদামী বলয় তৈরি হয়' কিংবা 'মরিচা রোগে পাতায় কমলা রঙের দাগ দেখা যায়'। আমাদের এআই-টিও ঠিক একইভাবে মানুষের চেয়ে অনেক দ্রুত গতিতে শেখে!",
        step_4_title_1: "এআই যেভাবে রোগ",
        step_4_title_2: "শনাক্ত করে",
        step_4_title_3: "(৪টি সহজ ধাপ)",
        step1_header: "পাতার ছবি গ্রহণ",
        step1_p: "আপনি যখন একটি পাতার ছবি আপলোড করেন, কম্পিউটার ছবিটিকে লক্ষ লক্ষ রঙিন বিন্দুর (পিক্সেল) একটি গ্রিড হিসেবে গ্রহণ করে।",
        step2_header: "লক্ষণ বিশ্লেষণ",
        step2_p: "এআই ছবিটির রঙ, রেখা ও গঠন নিখুঁতভাবে বিশ্লেষণ করে। পাতায় কোনো গর্ত, ছোপ ছোপ দাগ বা হলুদ কিনারা আছে কি না তা খুঁজে বের করে.।",
        step3_header: "নিউরাল নেটওয়ার্ক",
        step3_p: "মস্তিষ্কের মতো কাজ করা হাজার হাজার কৃত্রিম কোষ (নিউরন) একসাথে কাজ করে তথ্য বিশ্লেষণ করে এবং যৌথভাবে সিদ্ধান্ত নেয়।",
        step4_header: "চূড়ান্ত সিদ্ধান্ত",
        step4_p: "সবশেষে এআই সম্ভাব্য রোগটি শনাক্ত করে (যেমন: 'আলুর লেট ব্লাইট') এবং এটি তার সিদ্ধান্তের নিশ্চয়তার হার বা কনফিডেন্স স্কোর জানায়।",
        brain_title: "এআই-এর কার্যপ্রণালী (মস্তিষ্ক)",
        brain_desc: "নিচে একটি কৃত্রিম নিউরাল নেটওয়ার্কের সচল অ্যানিমেশন দেওয়া হলো। পাতার তথ্যগুলো কীভাবে বিভিন্ন স্তরের মধ্য দিয়ে গিয়ে রোগ শনাক্ত করে তা দেখুন।",
        legend_in: "ইনপুট বৈশিষ্ট্য (আকার/রঙ)",
        legend_hid: "চিন্তাভাবনাকারী নিউরন",
        legend_out: "চূড়ান্ত ফলাফল",
        q_title: "সাধারণ প্রশ্নাবলী",
        q1_q: "প্রশ্ন: এআই কি ভুল করতে পারে?",
        q1_a: "হ্যাঁ, মানুষের মতো এআই-ও মাঝে মাঝে ভুল করতে পারে। এই কারণেই আমরা 'নিশ্চয়তার হার' বা কনফিডেন্স স্কোর দেখাই। যদি নিশ্চয়তার হার মাত্র ৫৫% হয়, তবে বুঝতে হবে ছবিটি হয়তো ঝাপসা বা অস্পষ্ট ছিল এবং পুনরায় পরীক্ষা করা প্রয়োজন।",
        q2_q: "প্রশ্ন: এআই কীভাবে এত কিছু শিখল?",
        q2_a: "এটি বিপুল প্রশিক্ষণের মাধ্যমে শিখেছে! বিশ্বজুড়ে ৫০,০০০-এরও বেশি বিভিন্ন ফসলের সুস্থ ও আক্রান্ত পাতার ছবি দিয়ে এআই মডেলটিকে প্রস্তুত করা হয়েছে। ছবিগুলো বারবার বিশ্লেষণ করে এটি নিজে নিজেই প্রতিটি রোগ চিনে নিয়েছে।",

        // Upload Page
        upload_title: "ফসল রোগ নির্ণয়",
        upload_desc: "নিচে আক্রান্ত পাতার ছবি আপলোড করুন। আমাদের এআই নিউরাল নেটওয়ার্কটি রোগ শনাক্ত করতে এটি বিশ্লেষণ করবে।",
        drop_title: "পাতার ছবি টেনে এনে এখানে ছাড়ুন",
        drop_desc: "অথবা আপনার ডিভাইস থেকে ফাইল সিলেক্ট করতে এখানে ক্লিক করুন",
        file_default: "কোনো ফাইল নির্বাচন করা হয়নি",
        btn_submit: "এআই রোগ শনাক্তকরণ শুরু করুন",
        btn_tips: "📖 ছবি তোলার সঠিক নিয়ম জেনে নিন",
        loading_text: "পাতার লক্ষণ বিশ্লেষণ করা হচ্ছে...",
        loading_sub: "মডেল দিয়ে রোগ খোঁজা হচ্ছে...",

        // Success Page
        report_badge: "বিশ্লেষণ সম্পন্ন হয়েছে",
        report_title: "রোগ নির্ণয় প্রতিবেদন",
        status_healthy: "🟢 পাতাটি সুস্থ ও রোগমুক্ত",
        status_diseased: "⚠️ রোগ শনাক্ত হয়েছে",
        confidence_title: "নিশ্চয়তার হার (Confidence)",
        explain_p1: "আমাদের ডিপ লার্নিং মডেলটি পাতার আকার, গঠন এবং রঙের পরিবর্তনগুলো বিশ্লেষণ করেছে। এই পাতার লক্ষণগুলো",
        explain_p2: "এর সাথে মিলে যায় এবং এর নিশ্চয়তার হার হলো",
        btn_diag_new: "নতুন পাতা পরীক্ষা করুন",
        btn_history: "পূর্ববর্তী স্ক্যান রেকর্ড",
        fail_title: "শনাক্তকরণ ব্যর্থ হয়েছে",
        fail_desc: "ছবিটি বিশ্লেষণ করা সম্ভব হয়নি। দয়া করে একটি সঠিক ও স্পষ্ট পাতার ছবি আপলোড করে আবার চেষ্টা করুন।",
        btn_try_again: "আবার চেষ্টা করুন",
        remedy_title: "জৈব প্রতিকার ও পরিচর্যা",
        prevention_title: "প্রতিরোধমূলক ব্যবস্থা",
        desc_section_title: "রোগ বা পাতার অবস্থা বিশ্লেষণ",

        // History Page
        hist_title: "স্ক্যান রেকর্ডস",
        hist_desc: "আপনার পূর্ববর্তী সকল স্ক্যান এবং রোগ শনাক্তকরণের রেকর্ড এখানে দেখুন।",
        hist_search: "🔍 ফসল বা রোগের নাম দিয়ে খুঁজুন...",
        hist_scanned: "স্ক্যান করার তারিখ",
        hist_match: "শনাক্ত হয়েছে",
        hist_no_score: "নিশ্চয়তাহীন",
        btn_details: "বিস্তারিত দেখুন",
        empty_title: "কোনো স্ক্যান রেকর্ড পাওয়া যায়নি",
        empty_desc: "আপনি এখনও কোনো পাতার ছবি পরীক্ষা করেননি। আপনার স্ক্যানের ইতিহাস এখানে জমা থাকবে।",
        btn_diag_first: "প্রথম পাতাটি পরীক্ষা করুন"
    }
};

// Crop translations dictionary
const plantTranslations = {
    "Pepper, bell": "মিষ্টি মরিচ (ক্যাপসিকাম)",
    "Pepper__bell": "মিষ্টি মরিচ (ক্যাপসিকাম)",
    "Pepper bell": "মিষ্টি মরিচ (ক্যাপসিকাম)",
    "Potato": "আলু",
    "Tomato": "টমেটো",
    "Apple": "আপেল",
    "Blueberry": "ব্লুবেরি",
    "Cherry": "চেরি",
    "Corn": "ভুট্টা",
    "Corn (maize)": "ভুট্টা",
    "Corn_(maize)": "ভুট্টা",
    "Grape": "আঙুর",
    "Orange": "কমলা",
    "Peach": "পিচ",
    "Raspberry": "রাসবেরি",
    "Soybean": "সয়াবিন",
    "Squash": "স্কোয়াশ",
    "Strawberry": "স্ট্রবেরি",
    "PlantVillage": "উদ্ভিদ গ্রাম"
};

// Disease translations dictionary
const diseaseTranslations = {
    "healthy": "সুস্থ ও রোগমুক্ত",
    "Apple scab": "আপেল স্ক্যাব রোগ",
    "Black rot": "কালো পচা রোগ",
    "Cedar apple rust": "সিডার আপেল মরিচা রোগ",
    "Powdery mildew": "পাউডারি মিলডিউ রোগ",
    "Cercospora leaf spot Gray leaf spot": "সারকোস্পোরা পাতার ধূসর দাগ রোগ",
    "Common rust": "সাধারণ মরিচা রোগ",
    "Northern Leaf Blight": "উত্তরাঞ্চলীয় পাতার ধসা রোগ",
    "Esca (Black Measles)": "এসকা (কালো দাগ)",
    "Leaf blight (Isariopsis Leaf Spot)": "পাতার ধসা রোগ (ইসারিওপসিস পাতার দাগ)",
    "Haunglongbing (Citrus greening)": "সাইট্রাস গ্রীনিং রোগ",
    "Bacterial spot": "ব্যাকটেরিয়াল স্পট (জীবাণুজনিত দাগ)",
    "Early blight": "আর্লি ব্লাইট (প্রাথমিক ধসা রোগ)",
    "Late blight": "লেট ব্লাইট (নাবি ধসা রোগ)",
    "Leaf Mold": "পাতার ছাতা রোগ (লিф মোল্ড)",
    "Septoria leaf spot": "সেপ্টোরিয়া পাতার দাগ রোগ",
    "Spider mites Two-spotted spider mite": "লাল মাকড়সার আক্রমণ",
    "Target Spot": "টার্গেট স্পট",
    "Tomato Yellow Leaf Curl Virus": "হলুদ পাতা কোঁকড়ানো ভাইরাস",
    "Tomato mosaic virus": "টমেটো মোজাইক ভাইরাস",
    "Leaf scorch": "পাতা ঝলসানো রোগ"
};

// Formats and translates the prediction string dynamically
function formatAndTranslatePrediction(rawText, lang) {
    if (!rawText || rawText.includes("Processing Error")) {
        return lang === 'bn' ? 'প্রক্রিয়াকরণ ত্রুটি' : 'Processing Error';
    }
    
    // Split key structures
    let parts = rawText.split(/___| — | - |-/);
    if (parts.length < 2) {
        parts = rawText.split('__');
    }
    if (parts.length < 2) {
        return rawText.replace(/_/g, ' ');
    }
    
    let plant = parts[0].replace(/_/g, ' ').replace(/\(including_sour\)/gi, '').trim();
    let disease = parts[1].replace(/_/g, ' ').trim();
    
    if (lang === 'bn') {
        let bnPlant = plantTranslations[plant] || plant;
        let bnDisease = diseaseTranslations[disease] || disease;
        
        // Custom partial lookups
        for (let key in plantTranslations) {
            if (plant.toLowerCase().includes(key.toLowerCase())) {
                bnPlant = plantTranslations[key];
                break;
            }
        }
        for (let key in diseaseTranslations) {
            if (disease.toLowerCase().includes(key.toLowerCase())) {
                bnDisease = diseaseTranslations[key];
                break;
            }
        }
        
        return `${bnPlant} — ${bnDisease}`;
    } else {
        return `${plant} — ${disease}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Integration
    const langToggleBtn = document.getElementById('lang-toggle-btn');
    
    // Set initial default language to 'bn' (Bangla) if none has been specified yet
    let currentLang = localStorage.getItem('leaf_kabiraj_lang');
    if (!currentLang) {
        currentLang = 'bn';
        localStorage.setItem('leaf_kabiraj_lang', 'bn');
    }

    // Apply translations on load
    applyLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const targetLang = currentLang === 'en' ? 'bn' : 'en';
            currentLang = targetLang;
            localStorage.setItem('leaf_kabiraj_lang', targetLang);
            applyLanguage(targetLang);
        });
    }

    function applyLanguage(lang) {
        // Toggle active language button text
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'en' ? 'বাংলা' : 'English';
        }

        // 1. Translate structural tags with data-translate-key attributes
        const elements = document.querySelectorAll('[data-translate-key]');
        elements.forEach(el => {
            const key = el.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                // Check if element is an input with a placeholder
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', translations[lang][key]);
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // 2. Translate leaf classification model outputs
        const predictTargets = document.querySelectorAll('.prediction-translate-target');
        predictTargets.forEach(el => {
            // Keep track of the original prediction label to translate on toggle
            let originalText = el.getAttribute('data-original-prediction');
            if (!originalText) {
                originalText = el.textContent.trim();
                el.setAttribute('data-original-prediction', originalText);
            }
            
            el.textContent = formatAndTranslatePrediction(originalText, lang);
        });

        // 3. Show/Hide remedies based on language
        const enElements = document.querySelectorAll('.lang-toggle-en');
        const bnElements = document.querySelectorAll('.lang-toggle-bn');
        if (lang === 'en') {
            enElements.forEach(el => {
                el.style.display = el.tagName === 'SPAN' ? 'inline' : (el.tagName === 'DIV' || el.tagName === 'P' || el.tagName === 'UL' ? 'block' : '');
            });
            bnElements.forEach(el => {
                el.style.display = 'none';
            });
        } else {
            enElements.forEach(el => {
                el.style.display = 'none';
            });
            bnElements.forEach(el => {
                el.style.display = el.tagName === 'SPAN' ? 'inline' : (el.tagName === 'DIV' || el.tagName === 'P' || el.tagName === 'UL' ? 'block' : '');
            });
        }
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }

    // 3. Drag and Drop File Upload Handling
    const dropzone = document.getElementById('upload-dropzone');
    const fileInput = document.getElementById('id_image');
    const fileNameDisplay = document.getElementById('file-name-display');
    const uploadIcon = document.getElementById('upload-icon');
    const uploadForm = document.getElementById('upload-form');
    const loadingOverlay = document.getElementById('loading-overlay');

    if (dropzone && fileInput) {
        // Click dropzone to select files
        dropzone.addEventListener('click', () => {
            fileInput.click();
        });

        ['dragenter', 'dragover'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.add('dragover');
            }, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            dropzone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                dropzone.classList.remove('dragover');
            }, false);
        });

        dropzone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length) {
                fileInput.files = files;
                updateFileName(files[0].name);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (fileInput.files.length) {
                updateFileName(fileInput.files[0].name);
            }
        });

        function updateFileName(name) {
            if (fileNameDisplay) {
                const label = currentLang === 'bn' ? `নির্বাচিত ফাইল: ${name}` : `Selected: ${name}`;
                fileNameDisplay.textContent = label;
                fileNameDisplay.style.display = 'block';
            }
            if (uploadIcon) {
                uploadIcon.style.stroke = 'var(--color-primary)';
            }
        }
    }

    if (uploadForm && loadingOverlay) {
        uploadForm.addEventListener('submit', (e) => {
            if (fileInput && fileInput.files.length === 0) {
                return;
            }
            loadingOverlay.style.display = 'flex';

            // Versatile loading text milestones rotation
            const textEl = loadingOverlay.querySelector('.loading-text');
            const subEl = loadingOverlay.querySelector('[data-translate-key="loading_sub"]');
            
            const milestones = currentLang === 'bn' ? [
                { title: "পাতার ছবি আপলোড করা হচ্ছে...", sub: "সার্ভারে ফাইল পাঠানো হচ্ছে" },
                { title: "পাতার পিক্সেল স্ক্যান করা হচ্ছে...", sub: "কম্পিউটার ভিশন ক্লাসিফায়ার শুরু করা হয়েছে" },
                { title: "লক্ষণ ও রোগ সনাক্ত করা হচ্ছে...", sub: "ডিজিটাল নিউরাল নেটওয়ার্ক চালিত হচ্ছে" },
                { title: "এআই মডেল (LLM) কল করা হচ্ছে...", sub: "জৈব প্রতিকার ও বিবরণ তৈরি করা হচ্ছে" },
                { title: "প্রতিবেদন তৈরি করা হচ্ছে...", sub: "আর মাত্র কয়েক সেকেন্ড..." }
            ] : [
                { title: "Uploading leaf image...", sub: "Sending file to server" },
                { title: "Scanning leaf pixels...", sub: "Initializing computer vision classifier" },
                { title: "Detecting crop symptoms...", sub: "Running digital neural network models" },
                { title: "Querying AI model (LLM)...", sub: "Generating organic remedies & descriptions" },
                { title: "Formatting diagnostic report...", sub: "Almost ready..." }
            ];
            
            let stage = 0;
            const updateLoadingMessage = () => {
                if (stage < milestones.length) {
                    if (textEl) textEl.textContent = milestones[stage].title;
                    if (subEl) subEl.textContent = milestones[stage].sub;
                    stage++;
                }
            };
            
            // Set initial message and transition interval
            updateLoadingMessage();
            setInterval(updateLoadingMessage, 1800);
        });
    }

    // 4. Neural Network Simulation Pulse Animation (for How It Works page)
    const nnNodes = document.querySelectorAll('.nn-node');
    const nnLines = document.querySelectorAll('.nn-line');

    if (nnNodes.length > 0) {
        let activeLayer = 0;
        
        function pulseLayers() {
            nnNodes.forEach(node => node.classList.remove('active'));
            nnLines.forEach(line => line.classList.remove('active'));
            
            if (activeLayer === 0) {
                document.querySelectorAll('.nn-node-input').forEach(n => n.classList.add('active'));
                document.querySelectorAll('.nn-line-input').forEach(l => l.classList.add('active'));
            } else if (activeLayer === 1) {
                document.querySelectorAll('.nn-node-hidden').forEach(n => n.classList.add('active'));
                document.querySelectorAll('.nn-line-hidden').forEach(l => l.classList.add('active'));
            } else if (activeLayer === 2) {
                document.querySelectorAll('.nn-node-output').forEach(n => n.classList.add('active'));
            }
            
            activeLayer = (activeLayer + 1) % 3;
        }
        
        pulseLayers();
        setInterval(pulseLayers, 2000);
    }

    // 5. Interactive Crop Card Click Details Modal
    const cropCards = document.querySelectorAll('.crop-card');
    cropCards.forEach(card => {
        card.addEventListener('click', () => {
            const cropId = card.getAttribute('data-crop-id');
            if (cropId) {
                openCropModal(cropId);
            }
        });
    });

    // Support Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCropModal();
        }
    });
});

// Interactive crop cards data dictionary for school kids
const cropDetailsData = {
    tomato: {
        emoji: "🍅",
        en: {
            name: "Tomato",
            count: "10 Conditions",
            info: "Tomatoes are delicious red fruits packed with Vitamin C and Lycopene. Although used as a vegetable in cooking, botanically it is a berry fruit!"
        },
        bn: {
            name: "টমেটো",
            count: "১০টি রোগ ও অবস্থা",
            info: "টমেটো হলো ভিটামিন সি এবং লাইকোপিন সমৃদ্ধ একটি সুস্বাদু লাল ফল। রান্নায় সবজি হিসেবে ব্যবহার করা হলেও উদ্ভিদের পরিভাষায় এটি আসলে একটি ফল!"
        }
    },
    potato: {
        emoji: "🥔",
        en: {
            name: "Potato",
            count: "3 Conditions",
            info: "Potatoes are starchy tubers grown underground. They are the world's fourth largest food crop and are incredibly versatile for making fries and snacks!"
        },
        bn: {
            name: "আলু",
            count: "৩টি রোগ ও অবস্থা",
            info: "আলু হলো মাটির নিচে জন্ম নেওয়া শর্করাসমৃদ্ধ টিউবার। এটি বিশ্বের চতুর্থ বৃহত্তম খাদ্য ফসল এবং চিপস বা ফ্রেঞ্চ ফ্রাই তৈরির জন্য খুবই জনপ্রিয়!"
        }
    },
    corn: {
        emoji: "🌽",
        en: {
            name: "Corn / Maize",
            count: "4 Conditions",
            info: "Corn is a cereal grain native to the Americas. An ear of corn always has an even number of rows, usually 16, and is a great source of fiber!"
        },
        bn: {
            name: "ভুট্টা",
            count: "৪টি রোগ ও অবস্থা",
            info: "ভুট্টা হলো আমেরিকার ঐতিহ্যবাহী একটি দানা শস্য। একটি ভুট্টার মোচায় সবসময় জোড় সংখ্যার সারি থাকে (সাধারণত ১৬টি) এবং এটি আঁশের চমৎকার উৎস!"
        }
    },
    apple: {
        emoji: "🍎",
        en: {
            name: "Apple",
            count: "4 Conditions",
            info: "Apples are crisp, sweet orchard fruits. An apple tree can live for over 100 years, and apples float in water because 25% of their volume is air!"
        },
        bn: {
            name: "আপেল",
            count: "৪টি রোগ ও অবস্থা",
            info: "আপেল হলো মিষ্টি ও সুস্বাদু ফল। একটি আপেল গাছ ১০০ বছরেরও বেশি বাঁচতে পারে এবং আপেলের ২৫% অংশ বাতাস থাকায় এরা পানিতে ভাসে!"
        }
    },
    grape: {
        emoji: "🍇",
        en: {
            name: "Grape",
            count: "4 Conditions",
            info: "Grapes are juicy berries growing in clusters. They are used to make raisins, juices, and jellies. Grapes come in green, red, black, and yellow!"
        },
        bn: {
            name: "আঙুর",
            count: "৪টি রোগ ও অবস্থা",
            info: "আঙুর হলো থোকায় থোকায় জন্মানো রসালো ফল। এগুলো দিয়ে কিশমিশ, জুস ও জেলি তৈরি করা হয়। আঙুর সবুজ, লাল, কালো ও হলুদ রঙের হয়!"
        }
    },
    peach: {
        emoji: "🍑",
        en: {
            name: "Peach",
            count: "2 Conditions",
            info: "Peaches are fuzzy-skinned stone fruits originating in China. They symbolize longevity and good luck, and have a sweet, aromatic flavor!"
        },
        bn: {
            name: "পিচ",
            count: "২টি রোগ ও অবস্থা",
            info: "পিচ ফল হলো নরম চামড়ার সুস্বাদু রসালো ফল যার উৎপত্তি চীনে। পিচ ফল দীর্ঘায়ু ও সৌভাগ্যের প্রতীক এবং এটি খুব মিষ্টি ও সুগন্ধযুক্ত!"
        }
    },
    bell_pepper: {
        emoji: "🫑",
        en: {
            name: "Bell Pepper",
            count: "2 Conditions",
            info: "Bell peppers are colorful, crunchy fruits that can be green, yellow, orange, or red. Red bell peppers are actually fully ripe green peppers!"
        },
        bn: {
            name: "মিষ্টি মরিচ (ক্যাপসিকাম)",
            count: "২টি রোগ ও অবস্থা",
            info: "ক্যাপসিকাম বা মিষ্টি মরিচ হলো লাল, হলুদ বা সবুজ রঙের মচমচে ফল। লাল ক্যাপসিকাম মূলত সম্পূর্ণ পেকে যাওয়া সবুজ ক্যাপসিকাম!"
        }
    },
    strawberry: {
        emoji: "🍓",
        en: {
            name: "Strawberry",
            count: "2 Conditions",
            info: "Strawberries are bright red, juicy berries. They are the only fruit that wears their seeds on the outside—around 200 seeds per fruit!"
        },
        bn: {
            name: "স্ট্রবেরি",
            count: "২টি রোগ ও অবস্থা",
            info: "স্ট্রবেরি হলো উজ্জ্বল লাল রঙের রসালো ফল। এটিই একমাত্র ফল যার বীজ ফলের বাইরে থাকে—প্রতিটি ফলে প্রায় ২০০টি বীজ থাকে!"
        }
    },
    orange: {
        emoji: "🍊",
        en: {
            name: "Orange",
            count: "Citrus Greening",
            info: "Oranges are sweet citrus fruits rich in Vitamin C. Orange trees are evergreen and their blossoms are white, smelling incredibly fresh and sweet!"
        },
        bn: {
            name: "কমলা",
            count: "সাইট্রাস গ্রীনিং রোগ",
            info: "কমলা হলো ভিটামিন সি সমৃদ্ধ অত্যন্ত জনপ্রিয় সাইট্রাস ফল। কমলা গাছ চিরসবুজ এবং এর সাদা ফুলের সুবাস অত্যন্ত মিষ্টি ও তাজা!"
        }
    },
    cherry: {
        emoji: "🍒",
        en: {
            name: "Cherry",
            count: "2 Conditions",
            info: "Cherries are small, round, red stone fruits. They belong to the rose family and are packed with antioxidants that help you sleep better!"
        },
        bn: {
            name: "চেরি",
            count: "২টি রোগ ও অবস্থা",
            info: "চেরি হলো ছোট, গোল ও লাল রঙের ফল। এটি গোলাপ গোত্রের উদ্ভিদ এবং এতে প্রচুর অ্যান্টিঅক্সিডেন্ট রয়েছে যা ভালো ঘুমাতে সাহায্য করে!"
        }
    },
    squash: {
        emoji: "🍃",
        en: {
            name: "Squash",
            count: "Powdery Mildew",
            info: "Squash belongs to the gourd family and includes pumpkins and zucchinis. They are technically fruits because they contain seeds!"
        },
        bn: {
            name: "স্কোয়াশ",
            count: "পাউডারি মিলডিউ রোগ",
            info: "স্কোয়াশ হলো লাউ গোত্রের সবজি যা কুমড়া ও ধুন্দুলের সমগোত্রীয়। বীজ থাকার কারণে উদ্ভিদবিজ্ঞানের পরিভাষায় এটি আসলে একটি ফল!"
        }
    },
    blueberry: {
        emoji: "🫐",
        en: {
            name: "Blueberry",
            count: "Healthy",
            info: "Blueberries are small, sweet blue berries. They are native to North America and are a superfood packed with brain-boosting nutrients!"
        },
        bn: {
            name: "ব্লুবেরি",
            count: "সুস্থ ও রোগমুক্ত",
            info: "ব্লুবেরি হলো ছোট ও মিষ্টি নীল রঙের ফল। এটি উত্তর আমেরিকার ফল এবং এটি মস্তিষ্কের কার্যক্ষমতা বৃদ্ধিকারী পুষ্টিগুণে ভরপুর একটি সুপারফুড!"
        }
    }
};

// Open crop details modal
function openCropModal(cropId) {
    const data = cropDetailsData[cropId];
    if (!data) return;

    const currentLang = localStorage.getItem('leaf_kabiraj_lang') || 'bn';
    const langData = data[currentLang];

    document.getElementById('modal-crop-emoji').textContent = data.emoji;
    document.getElementById('modal-crop-name').textContent = langData.name;
    document.getElementById('modal-crop-count').textContent = langData.count;
    document.getElementById('modal-crop-info').textContent = langData.info;

    const modal = document.getElementById('crop-modal');
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
}

// Close crop details modal
function closeCropModal() {
    const modal = document.getElementById('crop-modal');
    if (!modal) return;
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close when clicking overlay backdrop
function handleModalOverlayClick(event) {
    if (event.target.id === 'crop-modal') {
        closeCropModal();
    }
}

