import os
import re
import json
import requests
import logging

logger = logging.getLogger(__name__)

# Fallback remedies dictionary for offline/error states
FALLBACK_REMEDIES = {
    # Tomato
    "Tomato___healthy": {
        "description_en": "The tomato leaf is healthy, showing a vibrant green color and clean margins without any signs of spots, lesions, or mold. This indicates that the plant is receiving optimal nutrients, water, and sunlight, and its cell structures are functioning efficiently.",
        "description_bn": "টমেটো পাতাটি সম্পূর্ণ সুস্থ ও স্বাভাবিক রয়েছে। এতে কোনো ধরনের রোগ-জীবাণু, দাগ, ক্ষত বা ছত্রাকের আক্রমণ নেই। পাতাটির উজ্জ্বল সবুজ রঙ এবং মসৃণ কিনারাই প্রমাণ করে যে গাছটি মাটি থেকে সঠিক পুষ্টি উপাদান, আর্দ্রতা এবং পর্যাপ্ত সূর্যালোক শোষণ করতে পারছে।",
        "remedies_en": [
            "Balanced Soil Nutrition: Incorporate organic vermicompost, well-rotted cow dung, or composted leaf mulch monthly to sustain trace minerals and feed the soil microbiome.",
            "Micro-Nutrient Supplement: Use crushed eggshells for calcium (prevents blossom end rot) and occasional Epsom salt (magnesium sulfate) to keep foliage green and robust.",
            "Organic Mulching: Spread straw or organic compost mulch around the plant base to conserve soil moisture and prevent weed competition.",
            "Bio-fertilizer boost: Use diluted mustard cake liquid fertilizer or compost tea every 15 days to enhance leaf development and crop yield."
        ],
        "remedies_bn": [
            "মাটির পুষ্টি ও জৈব সার: মাটিতে প্রয়োজনীয় খনিজ বজায় রাখতে প্রতি মাসে কেঁচো সার (ভার্মিকম্পোস্ট), শুকনো পাতা পচা জৈব সার বা পচা গোবর প্রয়োগ করুন।",
            "ক্যালসিয়াম ও ম্যাগনেসিয়ামের যোগান: ক্যালসিয়ামের ঘাটতি মেটাতে ও ফল পচা রোগ রোধে ডিমের খোসা গুঁড়ো এবং পাতা গাঢ় সবুজ রাখতে ইপসম লবণ ব্যবহার করুন।",
            "জৈব মালচিং ব্যবহার: মাটির আর্দ্রতা ধরে রাখতে এবং অতিরিক্ত আগাছা জন্মানো প্রতিরোধ করতে গাছের গোড়ার চারপাশে খড় বা শুকনো পাতার মালচিং দিন।",
            "জৈব তরল তরল খাবার: গাছের দ্রুত বৃদ্ধি ও রোগ প্রতিরোধ ক্ষমতা বাড়াতে ১৫ দিন পর পর খৈল পচা পানি অথবা কম্পোস্ট চা গাছের গোড়ায় দিন।"
        ],
        "preventions_en": [
            "Ensure optimal sunlight: Place or grow tomato plants where they receive at least 6-8 hours of direct daylight daily.",
            "Proper watering technique: Water deeply at the base of the plant. Avoid overhead watering to keep leaf surfaces dry and minimize the risk of airborne fungal spores.",
            "Spacing & air circulation: Space plants at least 2 feet apart and prune lower branches to encourage clean airflow, keeping humidity levels down around the foliage.",
            "Companion planting: Plant companion crops like marigolds or basil nearby to naturally repel insect pests like nematodes, whiteflies, and hornworms."
        ],
        "preventions_bn": [
            "পর্যাপ্ত সূর্যালোক নিশ্চিত করুন: টমেটো গাছগুলোকে এমন জায়গায় রাখুন বা রোপণ করুন যেখানে প্রতিদিন কমপক্ষে ৬-৮ ঘণ্টা সরাসরি রোদ পায়।",
            "সঠিক উপায়ে সেচ দিন: পাতার ওপর পানি ছিটানো এড়িয়ে শুধুমাত্র গাছের গোড়ায় পানি দিন যাতে পাতা শুকনো থাকে এবং ছত্রাকের আক্রমণ না হয়।",
            "গাছের দূরত্ব ও বাতাস চলাচল: প্রতিটি টমেটো গাছকে কমপক্ষে ২ ফুট দূরত্বে রোপণ করুন এবং নিচের অপ্রয়োজনীয় ডালপালা কেটে ফেলুন যাতে পর্যাপ্ত বাতাস চলাচল করতে পারে।",
            "সহচর উদ্ভিদ রোপণ: ক্ষতিকারক পোকা এবং কৃমি প্রাকৃতিকভাবে দূর করার জন্য টমেটো গাছের পাশে সহচর উদ্ভিদ হিসেবে গাঁদা ফুল বা তুলসী গাছ রোপণ করতে পারেন।"
        ]
    },
    "Tomato___Early_blight": {
        "description_en": "Early Blight is caused by the fungus Alternaria solani. It starts as dark spots on older leaves, developing target-like concentric rings.",
        "description_bn": "আর্লি ব্লাইট বা আগাম ধসা রোগ অল্টারনারিয়া সোলানি নামক ছত্রাক দ্বারা ঘটে। এটি বয়স্ক পাতায় কালো দাগ দিয়ে শুরু হয় এবং লক্ষ্যবস্তুর মতো বৃত্তাকার বলয় তৈরি করে।",
        "remedies_en": [
            "Baking Soda Spray: Spray a homemade organic baking soda solution (1 tbsp baking soda, 1 tsp liquid soap, 1 gallon water) weekly to alter surface pH and halt fungal growth.",
            "Neem Oil Treatment: Apply organic neem oil spray (diluted with mild soap water) to leaves early in the morning to disrupt fungal spore germination."
        ],
        "remedies_bn": [
            "বেকিং সোডা স্প্রে: সাপ্তাহিক ভিত্তিতে ঘরে তৈরি বেকিং সোডা দ্রবণ (১ টেবিল চামচ বেকিং সোডা, ১ চা চামচ তরল সাবান, ১ গ্যালন পানি) স্প্রে করুন।",
            "নিম তেল প্রয়োগ: ছত্রাকের বিস্তার রোধ করতে ভোরবেলা সাবান জল মেশানো জৈব নিম তেল পাতায় স্প্রে করুন।"
        ],
        "preventions_en": [
            "Prune lower leaves close to the ground to improve air circulation and prevent splash-back of soil-borne spores.",
            "Mulch the soil around the tomato plants to prevent soil-borne spores from splashing onto leaves."
        ],
        "preventions_bn": [
            "বাতাস চলাচল বাড়াতে এবং মাটি থেকে ছত্রাক ছড়ানো রোধ করতে মাটির কাছাকাছি থাকা নিচের পাতাগুলো ছেঁটে ফেলুন।",
            "মাটি থেকে ছত্রাকের স্পোর যেন পাতায় ছিটকে না আসে সেজন্য গাছের চারপাশে মালচিং করুন।"
        ]
    },
    "Tomato___Late_blight": {
        "description_en": "Late Blight is a highly destructive disease caused by Phytophthora infestans. It shows dark, water-soaked lesions that quickly turn brown/black.",
        "description_bn": "লেট ব্লাইট বা নাবি ধসা রোগ ফাইটোফথোরা ইনফেসট্যান্স দ্বারা সৃষ্ট একটি মারাত্মক রোগ। এটি পাতায় ভেজা কালচে দাগ তৈরি করে যা দ্রুত বাদামী বা কালো বর্ণ ধারণ করে।",
        "remedies_en": [
            "Immediate Removal: Carefully remove and destroy infected plant debris (do not compost) to stop the rapid spread of Phytophthora spores.",
            "Organic Copper Spray: Apply copper-based organic fungicides early in the morning at the first sign of local blight warnings."
        ],
        "remedies_bn": [
            "আক্রান্ত অংশ অপসারণ: আক্রান্ত গাছের অংশগুলো অবিলম্বে সরিয়ে পুড়িয়ে ফেলুন (সার তৈরিতে ব্যবহার করবেন না)।",
            "তামা-ভিত্তিক ছত্রাকনাশক: রোগ দেখা দেওয়া মাত্রই ভোরবেলা তামা-ভিত্তিক (copper-based) জৈব ছত্রাকনাশক স্প্রে করুন।"
        ],
        "preventions_en": [
            "Improve plant spacing to ensure leaves dry rapidly after rain, reducing the wet period required for spore germination.",
            "Avoid planting tomatoes near potatoes to minimize the cross-infection potential of this pathogen."
        ],
        "preventions_bn": [
            "বৃষ্টির পর পাতা যেন দ্রুত শুকিয়ে যায় সেজন্য গাছের মাঝে পর্যাপ্ত ফাঁকা জায়গা (কমপক্ষে ২-৩ ফুট) রাখুন।",
            "পারস্পরিক সংক্রমণ এড়াতে টমেটো এবং আলু গাছ কাছাকাছি রোপণ করা থেকে বিরত থাকুন।"
        ]
    },
    "Tomato___Septoria_leaf_spot": {
        "description_en": "Septoria Leaf Spot is a fungal disease causing numerous tiny, circular spots with dark borders and grey centers on lower leaves.",
        "description_bn": "সেপ্টোরিয়া পাতার দাগ রোগ হলো একটি ছত্রাকজনিত রোগ যা নিচের পাতায় ছোট ছোট, বৃত্তাকার বাদামী বর্ডার এবং ধূসর কেন্দ্রের দাগ তৈরি করে।",
        "remedies_en": [
            "Neem Oil Spray: Apply organic neem oil spray to reduce fungal spore germination on the lower leaves.",
            "Tool Sanitization: Sanitize garden tools after pruning to prevent spreading the pathogen to other healthy plants."
        ],
        "remedies_bn": [
            "নিম তেল স্প্রে: ছত্রাকের বিস্তার ও স্পোর অঙ্কুরোদগম কমাতে জৈব নিম তেল স্প্রে করুন।",
            "সরঞ্জাম জীবাণুমুক্তকরণ: ছাঁটাই করার পর বাগানের সরঞ্জামগুলো জীবাণুমুক্ত করুন যেন জীবাণু অন্য গাছে ছড়াতে না পারে।"
        ],
        "preventions_en": [
            "Avoid overhead watering; use drip irrigation or water at the soil level to keep leaf surfaces dry.",
            "Practice crop rotation: Avoid planting Solanaceous crops in the same bed for at least 3 years."
        ],
        "preventions_bn": [
            "উপর থেকে সেচ দেওয়া এড়িয়ে চলুন; পাতার উপরিভাগ শুকনো রাখতে ড্রিপ সেচ বা গাছের গোড়ায় সেচ ব্যবহার করুন।",
            "ফসল আবর্তন: অন্তত ৩ বছর একই জমিতে বা টবে একই গোত্রের (টমেটো, বেগুন, আলু) ফসল চাষ করবেন না।"
        ]
    },
    # Potato
    "Potato___healthy": {
        "description_en": "The potato leaf is healthy and clean, exhibiting robust growth with green, intact leaflets and no signs of spots or wilting.",
        "description_bn": "আলুর পাতাটি সুস্থ ও পরিষ্কার রয়েছে, কোনো দাগ বা শুকিয়ে যাওয়ার লক্ষণ ছাড়াই এটি সবুজ ও সুন্দরভাবে বেড়ে উঠছে।",
        "remedies_en": [
            "Maintain loose, well-draining soil to prevent root and tuber rot.",
            "Ensure balanced fertilization with well-decomposed organic manure or vermicompost."
        ],
        "remedies_bn": [
            "মূল ও আলু পচা রোধ করতে আলগা ও নিকাশ উপযোগী মাটি ব্যবহার করুন।",
            "ভালোভাবে পচানো গোবর সার বা কেঁচো সার ব্যবহার করে সুষম পুষ্টি নিশ্চিত করুন।"
        ],
        "preventions_en": [
            "Water regularly but avoid soggy conditions; let the top inch of soil dry out between waterings.",
            "Hilling: Heap soil around the base of potato plants (hilling) to protect growing tubers from sunburn and pests."
        ],
        "preventions_bn": [
            "নিয়মিত পানি দিন তবে মাটি ভেজা বা কাদাকাদা রাখবেন না; সেচের মাঝে মাটির উপরিভাগ শুকিয়ে যেতে দিন।",
            "গোড়ায় মাটি তুলে দেওয়া: রোদ ও পোকার আক্রমণ থেকে আলু বাঁচাতে গাছের গোড়ায় চারপাশে নিয়মিত মাটি উঁচু করে দিন।"
        ]
    },
    "Potato___Early_blight": {
        "description_en": "Early Blight in potatoes causes dark, concentric, target-like spots on leaves, which can lead to yellowing and premature leaf drop.",
        "description_bn": "আলুর আগাম ধসা রোগ পাতায় ঘন কালো ও গোল গোল রিং তৈরি করে, যার ফলে পাতা হলুদ হয়ে অকালে ঝরে যেতে পারে।",
        "remedies_en": [
            "Foliar Spray: Spray compost tea or a diluted milk solution to boost natural foliar immunity and slow fungal spread.",
            "Debris clean-up: Remove and destroy infected lower leaves as soon as black target spots appear."
        ],
        "remedies_bn": [
            "রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি: প্রাকৃতিক রোগ প্রতিরোধ ক্ষমতা বাড়াতে পাতায় কম্পোস্ট চা বা পাতলা দুধের দ্রবণ স্প্রে করুন।",
            "আক্রান্ত অংশ ধ্বংস: কালো রিংযুক্ত আক্রান্ত নিচের পাতাগুলো দেখা মাত্রই কেটে ধ্বংস করে ফেলুন।"
        ],
        "preventions_en": [
            "Plant certified disease-free potato seeds in clean, sterile beds.",
            "Practice crop rotation: Avoid planting potatoes or tomatoes in the same spot consecutively."
        ],
        "preventions_bn": [
            "রোগমুক্ত বিছানা বা টবে শংসাপত্রপ্রাপ্ত (certified) রোগমুক্ত আলুর বীজ রোপণ করুন।",
            "ফসল আবর্তন করুন: একই স্থানে পরপর আলু বা টমেটো চাষ করা এড়িয়ে চলুন।"
        ]
    },
    "Potato___Late_blight": {
        "description_en": "Potato Late Blight is a devastating pathogen that causes dark lesions on leaves, often with white mildew growth underneath during humid weather.",
        "description_bn": "আলুর নাবি ধসা রোগ পাতায় বড় কালচে দাগ তৈরি করে এবং আর্দ্র আবহাওয়ায় পাতার নিচে সাদা তুলার মতো ছত্রাক দেখা যায়। এটি খুব দ্রুত পুরো ক্ষেতে ছড়িয়ে পড়ে।",
        "remedies_en": [
            "Organic Copper Fungicides: Spray organic copper fungicides immediately at the first sign of local blight warnings.",
            "Clean Harvest: Harvest crops during dry weather to prevent tuber infection from active spores on the soil."
        ],
        "remedies_bn": [
            "জৈব ছত্রাকনাশক স্প্রে: প্রথম লক্ষণ দেখা দেওয়া মাত্রই তামা-ভিত্তিক জৈব ছত্রাকনাশক স্প্রে করুন।",
            "শুষ্ক ফসল সংগ্রহ: আলু সংগ্রহ করার সময় আবহাওয়া শুষ্ক থাকতে হবে যেন মাটি থেকে ছত্রাক আলুতে না ছড়ায়।"
        ],
        "preventions_en": [
            "Destroy volunteer potato plants that sprout from leftover tubers in the off-season.",
            "Avoid overhead irrigation; schedule watering for early morning so foliage dries quickly."
        ],
        "preventions_bn": [
            "পরবর্তী মৌসুমের জন্য জমিতে বা মাটিতে রয়ে যাওয়া আলু থেকে গজানো অতিরিক্ত গাছগুলো ধ্বংস করুন।",
            "উপর থেকে সেচ দেওয়া এড়িয়ে চলুন; ভোরবেলা পানি দিন যেন দুপুরের আগেই পাতা সম্পূর্ণ শুকিয়ে যায়।"
        ]
    },
    # Apple
    "Apple___healthy": {
        "description_en": "The apple leaf is healthy, showing a glossy green surface, sturdy stem, and uniform structure free of blemishes.",
        "description_bn": "আপেল পাতাটি সম্পূর্ণ সুস্থ, এটি চকচকে সবুজ পৃষ্ঠ এবং সমরূপ গঠন প্রদর্শন করছে।",
        "remedies_en": [
            "Apply organic mulch around the tree drip line to retain soil moisture and regulate soil temperature.",
            "Feed the tree with composted organic manure in early spring to boost seasonal vegetative growth."
        ],
        "remedies_bn": [
            "মাটির আর্দ্রতা ধরে রাখতে এবং তাপমাত্রা নিয়ন্ত্রণে রাখতে গাছের চারপাশে জৈব মালচিং ব্যবহার করুন।",
            "ঋতুভিত্তিক বৃদ্ধির জন্য বসন্তের শুরুতে গাছে ভালো মানের পচা জৈব সার ও খনিজ প্রয়োগ করুন।"
        ],
        "preventions_en": [
            "Prune tree branches annually during winter dormancy to maximize sunlight penetration and airflow.",
            "Rake and clear fallen leaves around the tree trunk to prevent overwintering fungal spores and pests."
        ],
        "preventions_bn": [
            "সূর্যালোকের প্রবেশ ও বাতাস চলাচল বাড়াতে প্রতি বছর শীতকালীন সুপ্তাবস্থায় গাছের ডালপালা ছাঁটাই করুন।",
            "রোগের জীবাণু বা পোকা মাটিতে থেকে যাওয়া রোধ করতে গাছের গোড়া থেকে ঝরে পড়া পাতাগুলো ঝেঁটিয়ে পরিষ্কার করুন।"
        ]
    },
    # Generic Default Template Builder for missing classes
    "default": {
        "description_en": "This leaf scan indicates symptoms matching {name}. Maintaining proper hygiene and plant care can contain the spread.",
        "description_bn": "এই পাতার স্ক্যানে {name} রোগের লক্ষণ দেখা যাচ্ছে। সঠিক পরিচর্যা ও পরিচ্ছন্নতা বজায় রাখলে রোগ ছড়ানো রোধ করা সম্ভব।",
        "remedies_en": [
            "Isolate the affected plant to protect nearby crops and reduce potential spread.",
            "Apply organic neem oil spray or horticultural soap weekly to protect healthy foliage."
        ],
        "remedies_bn": [
            "আশেপাশের ফসলে সংক্রমণ ছড়ানো আটকাতে আক্রান্ত গাছটিকে দ্রুত আলাদা বা আইসোলেট করুন।",
            "পাতার সুরক্ষায় ও পোকা তাড়াতে সাপ্তাহিক ভিত্তিতে জৈব নিম তেল বা ঔষধি সাবান পানি স্প্রে করুন।"
        ],
        "preventions_en": [
            "Remove diseased leaves carefully and sanitize your gardening tools with isopropyl alcohol.",
            "Ensure adequate spacing and clean airflow around the plants."
        ],
        "preventions_bn": [
            "আক্রান্ত পাতাগুলো সাবধানে কেটে ধ্বংস করুন এবং ছাঁটাইয়ের পর সরঞ্জামগুলো অ্যালকোহল দিয়ে জীবাণুমুক্ত করুন।",
            "গাছগুলোর মাঝে পর্যাপ্ত দূরত্ব বজায় রাখুন যেন বাতাস ও আলো সহজে চলাচল করতে পারে।"
        ]
    }
}

def ensure_preventions(data):
    """Ensure that data contains preventions_en and preventions_bn keys, splitting remedies if missing."""
    if not data:
        return data
    if "preventions_en" not in data or not data["preventions_en"]:
        remedies = data.get("remedies_en", [])
        if len(remedies) >= 4:
            data["remedies_en"] = remedies[:2]
            data["preventions_en"] = remedies[2:]
        elif len(remedies) >= 2:
            data["remedies_en"] = remedies[:1]
            data["preventions_en"] = remedies[1:]
        else:
            data["remedies_en"] = remedies
            data["preventions_en"] = ["Maintain overall plant hygiene and soil nutrition."]
    if "preventions_bn" not in data or not data["preventions_bn"]:
        remedies = data.get("remedies_bn", [])
        if len(remedies) >= 4:
            data["remedies_bn"] = remedies[:2]
            data["preventions_bn"] = remedies[2:]
        elif len(remedies) >= 2:
            data["remedies_bn"] = remedies[:1]
            data["preventions_bn"] = remedies[1:]
        else:
            data["remedies_bn"] = remedies
            data["preventions_bn"] = ["সামগ্রিক উদ্ভিদের পরিচ্ছন্নতা এবং মাটির পুষ্টি বজায় রাখুন।"]
    return data

def clean_label_name(label):
    """Clean the internal class name for displaying to user/LLM"""
    if not label:
        return ""
    cleaned = label.replace("___", " — ").replace("_", " ")
    cleaned = cleaned.replace("(including sour)", "").replace("  ", " ").strip()
    return cleaned

def get_disease_details(disease_label):
    """
    Fetch description, remedies, and preventions from Local LLM API, Gemini API,
    or fallback to the local static dictionary database.
    """
    cleaned_name = clean_label_name(disease_label)
    
    prompt = f"""
    Analyze the plant leaf disease class: "{disease_label}" (Formatted name: "{cleaned_name}").
    Provide a brief description of the leaf condition, exactly 3 organic home remedies/care tips, and exactly 3 prevention tips.
    You MUST respond with ONLY a valid, raw JSON object matching the following structure without markdown code blocks:
    {{
        "description_en": "Simple 3-sentence description of the leaf/disease in English.",
        "description_bn": "Simple 3-sentence description of the leaf/disease in Bangla.",
        "remedies_en": [
            "First organic remedy/care tip in English.",
            "Second organic remedy/care tip in English.",
            "Third organic remedy/care tip in English."
        ],
        "remedies_bn": [
            "First organic remedy/care tip in Bangla.",
            "Second organic remedy/care tip in Bangla.",
            "Third organic remedy/care tip in Bangla."
        ],
        "preventions_en": [
            "First prevention tip in English.",
            "Second prevention tip in English.",
            "Third prevention tip in English."
        ],
        "preventions_bn": [
            "First prevention tip in Bangla.",
            "Second prevention tip in Bangla.",
            "Third prevention tip in Bangla."
        ]
    }}
    """

    # 1. Try Local OpenAI-compatible LLM (e.g. LM Studio / Ollama / Custom API) if URL exists
    local_llm_url = os.environ.get("LOCAL_LLM_URL")
    if local_llm_url:
        logger.info(f"Local LLM URL detected: {local_llm_url}. Querying for: {cleaned_name}...")
        try:
            local_model = os.environ.get("LOCAL_LLM_MODEL", "local-model")
            headers = {"Content-Type": "application/json"}
            
            # If they are using an external OpenAI-compatible service requiring authentication
            auth_token = os.environ.get("LOCAL_LLM_API_KEY")
            if auth_token:
                headers["Authorization"] = f"Bearer {auth_token}"
                
            payload = {
                "model": local_model,
                "messages": [
                    {
                        "role": "system", 
                        "content": "You are a plant pathology assistant. You must respond with ONLY a valid, raw JSON object matching the requested schema. Do not write any conversational intro/outro or markdown backticks."
                    },
                    {
                        "role": "user", 
                        "content": prompt
                    }
                ],
                "temperature": 0.2
            }
            
            response = requests.post(local_llm_url, headers=headers, json=payload, timeout=12)
            if response.status_code == 200:
                resp_json = response.json()
                text = resp_json['choices'][0]['message']['content']
                
                # Extract JSON using Regex
                match = re.search(r'\{.*\}', text, re.DOTALL)
                if match:
                    parsed_data = json.loads(match.group(0))
                    required_keys = ["description_en", "description_bn", "remedies_en", "remedies_bn"]
                    if all(key in parsed_data for key in required_keys):
                        logger.info("Successfully fetched and validated remedies from Local LLM.")
                        return ensure_preventions(parsed_data)
            else:
                logger.warning(f"Local LLM returned status code {response.status_code}: {response.text}")
        except Exception as e:
            logger.error(f"Failed to query Local LLM: {e}. Proceeding to next option.")

    # 2. Try Live Gemini API call if key exists
    api_key = os.environ.get("GEMINI_API_KEY")
    if api_key:
        logger.info(f"Gemini API key detected. Querying LLM for: {cleaned_name}...")
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
            headers = {"Content-Type": "application/json"}
            
            payload = {
                "contents": [{
                    "parts": [{
                        "text": prompt
                    }]
                }]
            }
            
            response = requests.post(url, headers=headers, json=payload, timeout=8)
            
            if response.status_code == 200:
                resp_json = response.json()
                text = resp_json['candidates'][0]['content']['parts'][0]['text']
                
                # Extract JSON from response text using Regex
                match = re.search(r'\{.*\}', text, re.DOTALL)
                if match:
                    parsed_data = json.loads(match.group(0))
                    # Validate keys existence
                    required_keys = ["description_en", "description_bn", "remedies_en", "remedies_bn"]
                    if all(key in parsed_data for key in required_keys):
                        logger.info("Successfully fetched and validated remedies from Gemini API.")
                        return ensure_preventions(parsed_data)
            else:
                logger.warning(f"Gemini API returned status code {response.status_code}: {response.text}")
                
        except Exception as e:
            logger.error(f"Failed to query Gemini API: {e}. Falling back to local dictionary.")

    # 2. Fallback to Local Dictionary
    logger.info(f"Using local fallback dictionary for disease: {disease_label}")
    if disease_label in FALLBACK_REMEDIES:
        return ensure_preventions(FALLBACK_REMEDIES[disease_label])
        
    # Build a generic response for items not specifically defined
    generic = FALLBACK_REMEDIES["default"]
    name_bn = cleaned_name
    # Translate some common crop names to Bangla in the generic string
    crop_mappings = {
        "Tomato": "টমেটো", "Potato": "আলু", "Apple": "আপেল", "Grape": "আঙুর", 
        "Corn": "ভুট্টা", "Maize": "ভুট্টা", "Orange": "কমলা", "Peach": "পিচ",
        "Pepper": "মরিচ", "Squash": "স্কোয়াশ", "Strawberry": "স্ট্রবেরি"
    }
    for eng, bng in crop_mappings.items():
        if eng in name_bn:
            name_bn = name_bn.replace(eng, bng)
            
    name_bn = name_bn.replace("healthy", "সুস্থ")
            
    return ensure_preventions({
        "description_en": generic["description_en"].format(name=cleaned_name),
        "description_bn": generic["description_bn"].format(name=name_bn),
        "remedies_en": generic["remedies_en"],
        "remedies_bn": generic["remedies_bn"],
        "preventions_en": generic.get("preventions_en", []),
        "preventions_bn": generic.get("preventions_bn", [])
    })

def is_bangla(text):
    """Checks if the string contains Bangla characters."""
    if not text:
        return False
    return bool(re.search(r'[\u0980-\u09ff]', text))

def query_llm_chat(user_message, chat_history=None):
    """
    Sends user message and chat history to Local LLM or Gemini API, returning the response text.
    Includes a bilingual offline fallback message if AI endpoints are unreachable.
    """
    system_prompt = (
        "You are a helpful, knowledgeable agricultural expert and plant doctor for the Leaf Kabiraj website. "
        "Your goal is to answer user questions about plant health, soil nutrition, gardening, farming tips, crop diseases, and general botany. "
        "If the user asks in Bangla, reply in Bangla. If they ask in English, reply in English. "
        "Keep your answers friendly, practical, concise, and structured (using bullet points or numbers where helpful)."
    )

    # 1. Try Local OpenAI-compatible LLM
    local_llm_url = os.environ.get("LOCAL_LLM_URL")
    if local_llm_url:
        logger.info("Querying Local LLM for agricultural chat...")
        try:
            local_model = os.environ.get("LOCAL_LLM_MODEL", "local-model")
            headers = {"Content-Type": "application/json"}
            auth_token = os.environ.get("LOCAL_LLM_API_KEY")
            if auth_token:
                headers["Authorization"] = f"Bearer {auth_token}"

            messages = [{"role": "system", "content": system_prompt}]
            if chat_history:
                for h in chat_history:
                    if h.get("user"):
                        messages.append({"role": "user", "content": h["user"]})
                    if h.get("bot"):
                        messages.append({"role": "assistant", "content": h["bot"]})
            messages.append({"role": "user", "content": user_message})

            payload = {
                "model": local_model,
                "messages": messages,
                "temperature": 0.7
            }
            response = requests.post(local_llm_url, headers=headers, json=payload, timeout=12)
            if response.status_code == 200:
                resp_json = response.json()
                return resp_json['choices'][0]['message']['content'].strip()
        except Exception as e:
            logger.error(f"Failed to query Local LLM for chat: {e}")

    # 2. Try Gemini API
    api_key = os.environ.get("GEMINI_API_KEY")
    if api_key:
        logger.info("Querying Gemini API for agricultural chat...")
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
            headers = {"Content-Type": "application/json"}

            prompt_content = f"System Instruction: {system_prompt}\n\n"
            if chat_history:
                for h in chat_history:
                    if h.get("user") or h.get("bot"):
                        prompt_content += f"User: {h.get('user', '')}\nBot: {h.get('bot', '')}\n"
            prompt_content += f"User: {user_message}\nBot:"

            payload = {
                "contents": [{
                    "parts": [{
                        "text": prompt_content
                    }]
                }]
            }
            response = requests.post(url, headers=headers, json=payload, timeout=8)
            if response.status_code == 200:
                resp_json = response.json()
                return resp_json['candidates'][0]['content']['parts'][0]['text'].strip()
        except Exception as e:
            logger.error(f"Failed to query Gemini API for chat: {e}")

    # 3. Offline Bilingual Fallback
    if is_bangla(user_message):
        return (
            "আমি বর্তমানে অফলাইন মোডে রয়েছি কারণ কোনো এআই চ্যাট সার্ভার সংযোগ পাওয়া যায়নি। "
            "আমি আপনার ফসলের রোগ সনাক্ত করতে সাহায্য করতে পারি! দয়া করে আমাদের 'রোগ সনাক্তকরণ' পেজে "
            "আপনার পাতার একটি ছবি আপলোড করুন যাতে আমি অফলাইন নিউরাল নেটওয়ার্ক ব্যবহার করে রোগ নির্ণয় ও সমাধান দিতে পারি।"
        )
    else:
        return (
            "I'm currently running in offline fallback mode because no AI chat server connectivity was detected. "
            "I can help you diagnose crop diseases! Please upload a photo of your leaf on our 'Detect Disease' "
            "page so that I can analyze it using our offline deep learning models."
        )
