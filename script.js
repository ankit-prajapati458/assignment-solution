/* =========================================
   ASSIGNMENT SOLUTION PORTAL
   CLASS 9 + CLASS 10
   ========================================= */


/* =========================================
   CURRENT STATE
   ========================================= */

let currentClass = "Class 10";
let currentSubject = "All";


/* =========================================
   QUESTIONS DATABASE
   ========================================= */

const questions = [

    // =====================================================
    // ================= CLASS 10 ==========================
    // ================= SOCIAL SCIENCE ====================
    // =====================================================


    // ================= GEOGRAPHY =================

    {
        id: 1,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "What is biodiversity?",
        answer: "Biodiversity refers to the variety of living organisms found in a particular region or on Earth. It includes different plants, animals and microorganisms."
    },

    {
        id: 2,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "Why are forests important for maintaining ecological balance?",
        answer: "Forests maintain ecological balance by absorbing carbon dioxide, releasing oxygen, regulating climate, conserving soil and water, and providing habitats for wildlife."
    },

    {
        id: 3,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "What is meant by flora and fauna?",
        answer: "Flora refers to the plant species found in a particular region, while fauna refers to the animal species found in that region."
    },

    {
        id: 4,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "Distinguish between endangered and vulnerable species.",
        answer: "Endangered species are those whose population has declined to a level where they face a high risk of extinction. Vulnerable species are those whose population is declining and may become endangered if the threats continue."
    },

    {
        id: 5,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "What are normal species? Give examples.",
        answer: "Normal species are species whose population levels are considered sufficient for their survival. Examples include cattle, pine and sal in suitable regions."
    },

    {
        id: 6,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "What are endemic species?",
        answer: "Endemic species are plants or animals that are naturally found only in a particular geographical area and are not normally found elsewhere."
    },

    {
        id: 7,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "Mention any two causes of depletion of forests and wildlife.",
        answer: "Two major causes are expansion of agriculture and development activities such as mining, industries, roads and large projects."
    },

    {
        id: 8,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "What is the role of local communities in conservation of forests?",
        answer: "Local communities help conserve forests by protecting natural resources, participating in forest management and using forest resources in a sustainable manner."
    },

    {
        id: 9,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "Explain the importance of the Himalayan yew.",
        answer: "The Himalayan yew is a medicinal plant found in parts of the Himalayas. Its leaves and bark are used to produce medicines, including drugs used in cancer treatment."
    },

    {
        id: 10,
        subject: "Geography",
        chapter: "Forest and Wildlife Resources",
        question: "What is Project Tiger?",
        answer: "Project Tiger is a wildlife conservation programme launched in India in 1973 to protect tigers and conserve their natural habitats."
    },

    {
        id: 11,
        subject: "Geography",
        chapter: "Water Resources",
        question: "What is meant by water scarcity?",
        answer: "Water scarcity means a situation in which the availability of usable water is insufficient to meet the needs of people and other living organisms."
    },

    {
        id: 12,
        subject: "Geography",
        chapter: "Water Resources",
        question: "Mention any three causes of water scarcity in India.",
        answer: "Major causes include increasing population, intensive irrigation and industrialisation. Unequal rainfall and rapid urbanisation can also increase water stress."
    },

    {
        id: 13,
        subject: "Geography",
        chapter: "Water Resources",
        question: "Why is water conservation necessary?",
        answer: "Water conservation is necessary because freshwater is limited and unevenly distributed. It helps meet present needs, protect ecosystems and ensure water availability for future generations."
    },

    {
        id: 14,
        subject: "Geography",
        chapter: "Water Resources",
        question: "What is rainwater harvesting?",
        answer: "Rainwater harvesting is the collection and storage of rainwater for later use or for recharging groundwater."
    },

    {
        id: 15,
        subject: "Geography",
        chapter: "Water Resources",
        question: "Explain the importance of multipurpose river valley projects.",
        answer: "Multipurpose river valley projects provide irrigation, hydroelectric power, water supply and flood control. They can also support navigation, fisheries and recreation."
    },

    {
        id: 16,
        subject: "Geography",
        chapter: "Water Resources",
        question: "Name any two multipurpose river valley projects in India.",
        answer: "Bhakra-Nangal Project and Hirakud Project are two examples of multipurpose river valley projects in India."
    },

    {
        id: 17,
        subject: "Geography",
        chapter: "Water Resources",
        question: "What are the advantages of dams?",
        answer: "Dams store water and provide irrigation, hydroelectricity, drinking water and flood control. They can also support fisheries and other economic activities."
    },

    {
        id: 18,
        subject: "Geography",
        chapter: "Water Resources",
        question: "Mention any three problems associated with large dams.",
        answer: "Large dams can cause displacement of people, submergence of forests and agricultural land, and changes in river ecosystems. They may also create conflicts over water and rehabilitation."
    },

    {
        id: 19,
        subject: "Geography",
        chapter: "Water Resources",
        question: "Why has rainwater harvesting been traditionally practised in Rajasthan?",
        answer: "Rajasthan has an arid climate and receives limited and irregular rainfall. Traditional systems were therefore developed to collect and store rainwater for use during dry periods."
    },

    {
        id: 20,
        subject: "Geography",
        chapter: "Water Resources",
        question: "What is the role of rooftop rainwater harvesting?",
        answer: "Rooftop rainwater harvesting collects rainwater from roofs and directs it to storage tanks or recharge structures. It reduces dependence on groundwater and improves local water availability."
    },

    {
        id: 21,
        subject: "Geography",
        chapter: "Agriculture",
        question: "What is agriculture?",
        answer: "Agriculture is the practice of cultivating crops and rearing animals for food, raw materials and other economic purposes."
    },

    {
        id: 22,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Why is agriculture important to the Indian economy?",
        answer: "Agriculture provides food, raw materials for industries and employment to a large part of the population. It also supports trade and contributes to the overall economy."
    },

    {
        id: 23,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Distinguish between primitive subsistence farming and intensive subsistence farming.",
        answer: "Primitive subsistence farming is generally practised with simple tools and small plots, while intensive subsistence farming uses more labour and inputs on relatively small plots to obtain higher production."
    },

    {
        id: 24,
        subject: "Geography",
        chapter: "Agriculture",
        question: "What is shifting cultivation?",
        answer: "Shifting cultivation is a farming practice in which a piece of forest land is cleared and cultivated for a few years. When soil fertility declines, farmers move to another area."
    },

    {
        id: 25,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Mention the major features of plantation agriculture.",
        answer: "Plantation agriculture is generally practised on large farms, involves a single major crop, requires capital and organised management, and often produces crops for processing and commercial markets."
    },

    {
        id: 26,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Name the major food crops grown in India.",
        answer: "Major food crops include rice, wheat, millets, maize, pulses and other cereals."
    },

    {
        id: 27,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Describe the geographical conditions required for the cultivation of rice.",
        answer: "Rice requires a warm and humid climate, high temperature and sufficient rainfall. It grows well on level, fertile and water-retentive soils, especially in areas with adequate water supply."
    },

    {
        id: 28,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Describe the geographical conditions required for the cultivation of wheat.",
        answer: "Wheat requires a cool growing season and bright sunshine during ripening. It generally needs moderate rainfall and grows well in fertile, well-drained soils."
    },

    {
        id: 29,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Why is cotton known as a fibre crop?",
        answer: "Cotton produces natural fibres around its seeds. These fibres are used to make yarn and cloth, so cotton is classified as a fibre crop."
    },

    {
        id: 30,
        subject: "Geography",
        chapter: "Agriculture",
        question: "Explain the importance of agriculture in providing employment in India.",
        answer: "Agriculture provides direct employment to farmers and agricultural workers. It also creates indirect employment in transport, processing, storage, trade and agricultural industries."
    },


    // ================= CIVICS =================

    {
        id: 31,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Civics",
        answer: "Chapters: Power Sharing and Federalism."
    },

    {
        id: 32,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Chapters: 1. Power Sharing, 2. Federalism",
        answer: "The Civics section covers Power Sharing and Federalism."
    },

    {
        id: 33,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "What is power sharing?",
        answer: "Power sharing means distributing political power among different organs of government, levels of government, social groups and political parties or pressure groups."
    },

    {
        id: 34,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Why is power sharing desirable in a democracy?",
        answer: "Power sharing reduces the possibility of social conflict and political instability. It also gives different groups a voice and reflects the spirit of democracy."
    },

    {
        id: 35,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Explain the prudential reason for power sharing.",
        answer: "The prudential reason is that power sharing helps reduce conflicts between social groups and ensures political stability. Sharing power can prevent violence and division."
    },

    {
        id: 36,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Explain the moral reason for power sharing.",
        answer: "The moral reason is that power sharing is the very spirit of democracy. People affected by government decisions should have a voice in how they are governed."
    },

    {
        id: 37,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Describe the power-sharing arrangement in Belgium.",
        answer: "Belgium adopted arrangements such as equal representation of Dutch- and French-speaking ministers in the central government, regional governments with substantial powers, and a separate community government for language communities."
    },

    {
        id: 38,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "What were the major causes of tension between the Dutch-speaking and French-speaking communities in Belgium?",
        answer: "The communities differed in language, economic development and political influence. The French-speaking community was relatively wealthy and influential earlier, while the Dutch-speaking community later became economically stronger and demanded greater equality."
    },

    {
        id: 39,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "What is majoritarianism?",
        answer: "Majoritarianism is the belief that the majority community should rule in a way that ignores or dominates the interests and rights of minority communities."
    },

    {
        id: 40,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Explain the majoritarian measures adopted in Sri Lanka.",
        answer: "The Sri Lankan government adopted policies favouring the Sinhala majority, including making Sinhala the official language and giving Buddhism a special position. These measures reduced the political and cultural recognition of Tamils."
    },

    {
        id: 41,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "How did the policy of majoritarianism affect Sri Lankan Tamils?",
        answer: "Sri Lankan Tamils faced discrimination in language, education and government employment. Their demands for equality and autonomy were not adequately addressed, contributing to prolonged conflict."
    },

    {
        id: 42,
        subject: "Civics",
        chapter: "Power Sharing",
        question: "Describe any two forms of power sharing.",
        answer: "Power can be shared among different organs of government such as the legislature, executive and judiciary. It can also be shared among different levels of government such as the central, state and local governments."
    },

    {
        id: 43,
        subject: "Civics",
        chapter: "Federalism",
        question: "What is federalism?",
        answer: "Federalism is a system of government in which power is divided between a central authority and constituent units such as states or provinces, with each level having constitutionally assigned powers."
    },

    {
        id: 44,
        subject: "Civics",
        chapter: "Federalism",
        question: "Mention any four key features of federalism.",
        answer: "Key features include two or more levels of government, constitutional division of powers, constitutional supremacy, independent judiciary, and financial arrangements that support different levels of government."
    },

    {
        id: 45,
        subject: "Civics",
        chapter: "Federalism",
        question: "Distinguish between coming-together and holding-together federations.",
        answer: "Coming-together federations are formed when independent states join together and usually have equal powers, such as the USA. Holding-together federations divide power between a central government and states within an existing country, such as India."
    },

    {
        id: 46,
        subject: "Civics",
        chapter: "Federalism",
        question: "Explain the difference between a unitary system and a federal system.",
        answer: "In a unitary system, major powers are concentrated in the central government. In a federal system, powers are constitutionally divided between central and regional governments."
    },

    {
        id: 47,
        subject: "Civics",
        chapter: "Federalism",
        question: "What are the two levels of government in India?",
        answer: "The two main levels are the Union or Central Government and the State Governments."
    },

    {
        id: 48,
        subject: "Civics",
        chapter: "Federalism",
        question: "What is meant by the third tier of government?",
        answer: "The third tier refers to local self-government, such as Panchayats in rural areas and Municipalities in urban areas."
    },

    {
        id: 49,
        subject: "Civics",
        chapter: "Federalism",
        question: "How has decentralisation strengthened democracy in India?",
        answer: "Decentralisation brings government closer to people and allows local citizens to participate in decision-making. It also helps address local problems more effectively."
    },

    {
        id: 50,
        subject: "Civics",
        chapter: "Federalism",
        question: "Explain the importance of linguistic states in India.",
        answer: "Linguistic states allowed people speaking the same language to have their own state administration. This helped accommodate diversity and strengthened national unity rather than weakening it."
    },

    {
        id: 51,
        subject: "Civics",
        chapter: "Federalism",
        question: "What is the role of the judiciary in a federal system?",
        answer: "The judiciary interprets the Constitution and settles disputes between different levels of government. It ensures that constitutional powers are respected."
    },

    {
        id: 52,
        subject: "Civics",
        chapter: "Federalism",
        question: "How has federalism contributed to the unity of India?",
        answer: "Federalism has accommodated India's linguistic, cultural and regional diversity by giving states constitutional powers. This has helped different communities participate in governance while remaining part of one nation."
    },


    // ================= HISTORY =================

    {
        id: 53,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "History",
        answer: "Chapters: The Rise of Nationalism in Europe and Nationalism in India."
    },

    {
        id: 54,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "Chapters: 1. The Rise of Nationalism in Europe, 2. Nationalism in India",
        answer: "The History section covers the rise of nationalism in Europe and nationalism in India."
    },

    {
        id: 55,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "What is meant by nationalism?",
        answer: "Nationalism is a feeling of collective identity and loyalty towards a nation. It encourages people who share common political, cultural or historical identities to seek unity and self-rule."
    },

    {
        id: 56,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "Describe the political condition of Europe before the rise of nationalism.",
        answer: "Before nationalism became powerful, Europe consisted of many kingdoms, empires and territories ruled by monarchs. People were often divided by language, customs and local loyalties rather than belonging to modern nation-states."
    },

    {
        id: 57,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "What was the significance of the French Revolution in the development of nationalism?",
        answer: "The French Revolution introduced ideas of liberty, equality and fraternity and transferred sovereignty from the monarch to the people. It helped create the idea of a nation based on citizens and common political identity."
    },

    {
        id: 58,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "Explain the ideas promoted by liberal nationalism in Europe.",
        answer: "Liberal nationalism promoted individual freedom, equality before law, representative government and freedom of markets. It opposed autocratic rule and hereditary privileges."
    },

    {
        id: 59,
        subject: "History",
        chapter: "The Rise of Nationalism in Europe",
        question: "Who was Giuseppe Mazzini? What role did he play in the growth of nationalism?",
        answer: "Giuseppe Mazzini was an Italian revolutionary and nationalist. He founded organisations such as Young Italy and worked for a united and democratic Italian republic, inspiring nationalist movements in Europe."
    },


    // =====================================================
    // ================= CLASS 10 SCIENCE ==================
    // =====================================================


    // ================= CHAPTER 1 =========================

    {
        id: 101,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "MCQ",
        question: "Which gas is evolved when zinc reacts with dilute hydrochloric acid?",
        answer: "Hydrogen gas is evolved. Zn + 2HCl → ZnCl₂ + H₂."
    },

    {
        id: 102,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "MCQ",
        question: "Which indicator turns pink in a basic solution?",
        answer: "Phenolphthalein turns pink in a basic solution."
    },

    {
        id: 103,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "MCQ",
        question: "Which of the following is a combination reaction?",
        answer: "CaO + H₂O → Ca(OH)₂ is a combination reaction because two substances combine to form a single product."
    },

    {
        id: 104,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "MCQ",
        question: "Which acid is present in vinegar?",
        answer: "Acetic acid is present in vinegar."
    },

    {
        id: 105,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "MCQ",
        question: "The process of coating iron with zinc is called:",
        answer: "Galvanisation."
    },

    {
        id: 106,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Case-Based Study",
        question: "A student adds dilute hydrochloric acid to sodium carbonate. Name the gas evolved.",
        answer: "Carbon dioxide (CO₂) gas is evolved."
    },

    {
        id: 107,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Case-Based Study",
        question: "Write the balanced chemical equation for hydrochloric acid reacting with sodium carbonate.",
        answer: "2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂."
    },

    {
        id: 108,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Case-Based Study",
        question: "Why does lime water turn milky when carbon dioxide is passed through it?",
        answer: "Lime water turns milky because carbon dioxide reacts with calcium hydroxide to form insoluble calcium carbonate: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O."
    },

    {
        id: 109,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Case-Based Study",
        question: "Name the type of reaction when hydrochloric acid reacts with sodium carbonate.",
        answer: "It is an acid-carbonate reaction involving gas evolution."
    },

    {
        id: 110,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "Why is respiration considered an exothermic reaction? Explain.",
        answer: "Respiration is exothermic because glucose is oxidised in the presence of oxygen and releases energy. C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy."
    },

    {
        id: 111,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "Write the balanced equation for nitrogen reacting with hydrogen to form ammonia and identify the type of reaction.",
        answer: "N₂ + 3H₂ → 2NH₃. It is a combination reaction because two reactants combine to form one product."
    },

    {
        id: 112,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "Write the balanced equation for potassium bromide reacting with barium iodide.",
        answer: "2KBr + BaI₂ → 2KI + BaBr₂. It is a double displacement reaction."
    },

    {
        id: 113,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "What happens when silver chloride is exposed to sunlight?",
        answer: "Silver chloride decomposes in sunlight to form silver and chlorine gas. 2AgCl → 2Ag + Cl₂. It is a photochemical decomposition reaction."
    },

    {
        id: 114,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "Why do we apply paint on iron articles?",
        answer: "Paint prevents iron from coming into contact with oxygen and moisture. Therefore, it helps prevent rusting and corrosion."
    },

    {
        id: 115,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "A shiny brown coloured element X becomes black on heating in air. Identify X and the black compound.",
        answer: "X is copper. On heating in air, copper reacts with oxygen to form black copper(II) oxide. 2Cu + O₂ → 2CuO."
    },

    {
        id: 116,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "What is observed when potassium iodide is added to lead nitrate solution?",
        answer: "A bright yellow precipitate of lead iodide is formed. Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃. It is a double displacement and precipitation reaction."
    },

    {
        id: 117,
        subject: "Science",
        chapter: "Chapter 1 – Chemical Reactions and Equations",
        section: "Subjective",
        question: "What happens when lead nitrate is heated? Write the balanced equation and name the reaction.",
        answer: "On heating, lead nitrate decomposes to lead oxide, nitrogen dioxide and oxygen. The yellow lead oxide residue is formed and brown nitrogen dioxide fumes are observed. 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂. It is a thermal decomposition reaction."
    },


    // ================= CHAPTER 2 =========================

    {
        id: 118,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "MCQ",
        question: "Which of the following is a strong acid?",
        answer: "Hydrochloric acid (HCl) is a strong acid."
    },

    {
        id: 119,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "MCQ",
        question: "Which indicator turns red in an acidic solution?",
        answer: "Blue litmus turns red in an acidic solution."
    },

    {
        id: 120,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "MCQ",
        question: "The pH value of a neutral solution is:",
        answer: "The pH value of a neutral solution is 7."
    },

    {
        id: 121,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "MCQ",
        question: "Which gas is produced when an acid reacts with a metal?",
        answer: "Hydrogen gas is produced."
    },

    {
        id: 122,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "MCQ",
        question: "Baking soda is chemically known as:",
        answer: "Sodium hydrogen carbonate (NaHCO₃)."
    },

    {
        id: 123,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Case-Based Study",
        question: "Which solution is acidic if the measured pH values are 2, 12, 7 and 7?",
        answer: "The solution with pH 2 is acidic."
    },

    {
        id: 124,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Case-Based Study",
        question: "Which solution is basic if the measured pH values are 2, 12, 7 and 7?",
        answer: "The solution with pH 12 is basic."
    },

    {
        id: 125,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Case-Based Study",
        question: "What is the pH of a neutral solution?",
        answer: "The pH of a neutral solution is 7."
    },

    {
        id: 126,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Case-Based Study",
        question: "Name one natural indicator used to test acids and bases.",
        answer: "Turmeric is a natural indicator. Other examples include litmus obtained from lichens and red cabbage extract."
    },

    {
        id: 127,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "Define acids and bases with examples.",
        answer: "Acids are substances that produce H⁺ ions in aqueous solution. Examples include hydrochloric acid (HCl) and sulphuric acid (H₂SO₄). Bases produce OH⁻ ions in aqueous solution. Examples include sodium hydroxide (NaOH) and potassium hydroxide (KOH)."
    },

    {
        id: 128,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "What are indicators? Name any four indicators.",
        answer: "Indicators are substances that show whether a solution is acidic or basic by changing colour. Four indicators are litmus, methyl orange, phenolphthalein and turmeric."
    },

    {
        id: 129,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "Write the chemical reaction between hydrochloric acid and sodium hydroxide.",
        answer: "HCl + NaOH → NaCl + H₂O. This is a neutralisation reaction."
    },

    {
        id: 130,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "What is a neutralisation reaction? Give one example.",
        answer: "A neutralisation reaction occurs when an acid reacts with a base to form salt and water. Example: HCl + NaOH → NaCl + H₂O."
    },

    {
        id: 131,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "Why do acids conduct electricity in aqueous solution?",
        answer: "Acids conduct electricity in aqueous solution because they ionise to produce mobile ions such as H⁺ or H₃O⁺ and negative ions."
    },

    {
        id: 132,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "What is the difference between strong acids and weak acids?",
        answer: "Strong acids ionise almost completely in water, whereas weak acids ionise only partially. Hydrochloric acid is a strong acid, while acetic acid is a weak acid."
    },

    {
        id: 133,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "Write any four uses of baking soda.",
        answer: "Baking soda is used in baking, as an antacid, in some fire extinguishers and in making baking powder."
    },

    {
        id: 134,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "Explain the manufacture and uses of bleaching powder.",
        answer: "Bleaching powder is manufactured by passing chlorine over dry slaked lime. A commonly represented reaction is Ca(OH)₂ + Cl₂ → CaOCl₂ + H₂O. It is used for bleaching cotton and linen, bleaching wood pulp, disinfecting drinking water and sanitation."
    },

    {
        id: 135,
        subject: "Science",
        chapter: "Chapter 2 – Acids, Bases and Salts",
        section: "Subjective",
        question: "What is the composition and use of Plaster of Paris (POP)?",
        answer: "Plaster of Paris is calcium sulphate hemihydrate, CaSO₄·½H₂O. It is used for making casts for fractured bones, moulds, decorative articles and models."
    },


    // ================= CHAPTER 3 =========================

    {
        id: 136,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "MCQ",
        question: "Which metal does not react with cold or hot water but reacts with steam?",
        answer: "Iron does not react with cold or hot water but reacts with steam."
    },

    {
        id: 137,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "MCQ",
        question: "The ability of metals to be drawn into thin wires is known as:",
        answer: "Ductility."
    },

    {
        id: 138,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "MCQ",
        question: "Which of the following non-metals is a liquid at room temperature?",
        answer: "Bromine is a non-metal that is liquid at room temperature."
    },

    {
        id: 139,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "MCQ",
        question: "Cinnabar is an ore of which metal?",
        answer: "Cinnabar is an ore of mercury."
    },

    {
        id: 140,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "MCQ",
        question: "Which of the following is an amphoteric oxide?",
        answer: "Al₂O₃ (aluminium oxide) is an amphoteric oxide."
    },

    {
        id: 141,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Case-Based Study",
        question: "Name the gas evolved when metals react with dilute hydrochloric acid.",
        answer: "Hydrogen gas is evolved."
    },

    {
        id: 142,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Case-Based Study",
        question: "Arrange Zn, Cu, Fe and Mg in decreasing order of reactivity.",
        answer: "Mg > Zn > Fe > Cu."
    },

    {
        id: 143,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Case-Based Study",
        question: "Why did copper not produce gas when treated with dilute hydrochloric acid?",
        answer: "Copper is below hydrogen in the reactivity series, so it cannot displace hydrogen from dilute hydrochloric acid under normal conditions."
    },

    {
        id: 144,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Case-Based Study",
        question: "Write the balanced chemical equation for magnesium reacting with dilute hydrochloric acid.",
        answer: "Mg + 2HCl → MgCl₂ + H₂."
    },

    {
        id: 145,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "State two physical properties on the basis of which metals can be distinguished from non-metals.",
        answer: "Metals are generally lustrous and good conductors of heat and electricity, while non-metals are generally dull and poor conductors. These are general trends with some exceptions."
    },

    {
        id: 146,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Why is sodium kept immersed in kerosene oil?",
        answer: "Sodium is highly reactive and reacts rapidly with oxygen and moisture. Kerosene prevents contact with air and water, helping to keep sodium safe."
    },

    {
        id: 147,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Explain the term roasting with a suitable balanced chemical equation.",
        answer: "Roasting is the process of heating a sulphide ore strongly in excess air to convert it into an oxide. Example: 2ZnS + 3O₂ → 2ZnO + 2SO₂."
    },

    {
        id: 148,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "What are amphoteric oxides? Give two examples.",
        answer: "Amphoteric oxides react with both acids and bases to form salt and water. Examples are aluminium oxide (Al₂O₃) and zinc oxide (ZnO)."
    },

    {
        id: 149,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Describe the process of electrolytic refining of copper. Name the cathode, anode and electrolyte.",
        answer: "In electrolytic refining, impure copper is used as the anode and a thin sheet of pure copper is used as the cathode. Acidified copper sulphate solution is used as the electrolyte. Copper from the anode dissolves and pure copper gets deposited on the cathode. Insoluble impurities settle as anode mud."
    },

    {
        id: 150,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Why are platinum, gold and silver used to make jewellery?",
        answer: "They are lustrous, malleable and ductile and are comparatively less reactive, so they retain their appearance and can be shaped easily."
    },

    {
        id: 151,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Why is aluminium used to make cooking utensils although it is highly reactive?",
        answer: "Aluminium develops a thin protective layer of aluminium oxide on its surface. This layer prevents further reaction. Aluminium is also lightweight and a good conductor of heat."
    },

    {
        id: 152,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Differentiate between calcination and roasting.",
        answer: "Calcination involves heating an ore in limited or no air, commonly used for carbonate ores. Roasting involves heating a sulphide ore in excess air. Calcination often releases CO₂, while roasting commonly releases SO₂."
    },

    {
        id: 153,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "What is an alloy? How is it prepared? Name the constituents of brass and bronze.",
        answer: "An alloy is a homogeneous mixture of two or more metals or a metal and a non-metal. It is generally prepared by melting and mixing the constituents in suitable proportions. Brass contains copper and zinc, while bronze contains copper and tin."
    },

    {
        id: 154,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Why do ionic compounds generally have high melting and boiling points?",
        answer: "Ionic compounds have strong electrostatic forces of attraction between oppositely charged ions. A large amount of energy is therefore required to separate the ions."
    },

    {
        id: 155,
        subject: "Science",
        chapter: "Chapter 3 – Metals and Non-metals",
        section: "Subjective",
        question: "Explain the formation of sodium chloride (NaCl) from sodium and chlorine atoms by transfer of electrons.",
        answer: "A sodium atom loses one electron to form Na⁺. A chlorine atom gains that electron to form Cl⁻. The oppositely charged ions attract each other and form ionic sodium chloride (NaCl)."
    },


    // =====================================================
    // ================= CLASS 9 ===========================
    // ================= SOCIAL SCIENCE ====================
    // =====================================================


    // ================= CHAPTER 1 =========================

    {
        id: 901,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What is meant by the term ‘Social Science’?",
        answer: "Social Science is the systematic study of human society, social relationships, institutions, and human behaviour."
    },

    {
        id: 902,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "Why is the study of society important?",
        answer: "It helps us understand how people live together, how institutions work, and how social problems can be addressed."
    },

    {
        id: 903,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What are the major disciplines included in Social Science?",
        answer: "The major disciplines include History, Geography, Political Science, Economics, and Sociology."
    },

    {
        id: 904,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "How is History different from Geography?",
        answer: "History studies events and changes over time, while Geography studies places, people, environments, and their spatial relationships."
    },

    {
        id: 905,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What is the importance of evidence in the study of History?",
        answer: "Evidence helps historians establish facts, understand past events, and distinguish reliable accounts from unsupported claims."
    },

    {
        id: 906,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What do historians mean by primary sources?",
        answer: "Primary sources are original materials created during the period being studied, such as inscriptions, letters, coins, official records, and photographs."
    },

    {
        id: 907,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What are secondary sources? Give examples.",
        answer: "Secondary sources are later works that interpret or analyse primary sources. Examples include history textbooks, research books, and scholarly articles."
    },

    {
        id: 908,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "How does Geography help us understand human life?",
        answer: "Geography explains how location, climate, landforms, resources, and environment influence human activities and settlements."
    },

    {
        id: 909,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What is meant by the term ‘economy’?",
        answer: "An economy is the system through which goods and services are produced, distributed, exchanged, and consumed."
    },

    {
        id: 910,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "How does Political Science help us understand society?",
        answer: "Political Science helps us understand government, political institutions, power, citizenship, rights, and the processes of decision-making."
    },

    {
        id: 911,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "What is the relationship between society and environment?",
        answer: "Society depends on the environment for resources and living space, while human activities can also change and affect the environment."
    },

    {
        id: 912,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "Why is it important to study different perspectives in Social Science?",
        answer: "Different perspectives provide a broader understanding of an issue and help us recognise that people may experience and interpret events differently."
    },

    {
        id: 913,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "How can maps help in understanding historical events?",
        answer: "Maps show locations, boundaries, routes, territories, and movements, helping us understand where historical events occurred and how places changed."
    },

    {
        id: 914,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "Why should we examine sources critically?",
        answer: "Sources may contain bias, errors, or incomplete information. Critical examination helps us judge their reliability and context."
    },

    {
        id: 915,
        subject: "Social Science",
        chapter: "Chapter 1 — Social Science",
        question: "How are different branches of Social Science interconnected?",
        answer: "They study different aspects of human life but overlap. For example, geography can influence economies, politics, and historical developments."
    },


    // ================= CHAPTER 2 =========================

    {
        id: 917,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is meant by the Earth’s interior?",
        answer: "The Earth’s interior refers to the layers and materials beneath the Earth’s surface."
    },

    {
        id: 918,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "Name the major layers of the Earth.",
        answer: "The major layers are the crust, mantle, and core."
    },

    {
        id: 919,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What are the main characteristics of the crust?",
        answer: "The crust is the outermost and thinnest layer of the Earth. It is solid and forms the continents and ocean floors."
    },

    {
        id: 920,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is the mantle?",
        answer: "The mantle is the thick layer between the crust and the core. It consists mainly of hot, dense rock and behaves slowly over geological time."
    },

    {
        id: 921,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is the core of the Earth?",
        answer: "The core is the innermost layer of the Earth. It is mainly composed of iron and nickel and has very high temperatures and pressure."
    },

    {
        id: 922,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is meant by a rock?",
        answer: "A rock is a naturally occurring solid mass made up of one or more minerals."
    },

    {
        id: 923,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "Name the three major types of rocks.",
        answer: "The three major types are igneous, sedimentary, and metamorphic rocks."
    },

    {
        id: 924,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "How are igneous rocks formed?",
        answer: "Igneous rocks form when molten magma or lava cools and solidifies."
    },

    {
        id: 925,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What are sedimentary rocks?",
        answer: "Sedimentary rocks form when sediments are deposited, compacted, and cemented together over time."
    },

    {
        id: 926,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "How are metamorphic rocks formed?",
        answer: "Metamorphic rocks form when existing rocks are changed by heat, pressure, or both, without completely melting."
    },

    {
        id: 927,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is the rock cycle?",
        answer: "The rock cycle is the continuous process by which rocks change from one type to another through processes such as melting, cooling, weathering, deposition, heat, and pressure."
    },

    {
        id: 928,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is weathering?",
        answer: "Weathering is the breakdown of rocks at or near the Earth’s surface by physical, chemical, or biological processes."
    },

    {
        id: 929,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is erosion?",
        answer: "Erosion is the wearing away and removal of soil or rock by agents such as running water, wind, glaciers, and waves."
    },

    {
        id: 930,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "How does running water change the Earth’s surface?",
        answer: "Running water erodes, transports, and deposits materials, forming features such as valleys, gullies, floodplains, and deltas."
    },

    {
        id: 931,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "How do glaciers shape landforms?",
        answer: "Glaciers erode and transport rock and soil, creating landforms such as U-shaped valleys and depositing materials as they move and melt."
    },

    {
        id: 932,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What are the major effects of wind erosion?",
        answer: "Wind can remove and transport loose particles, causing deflation and abrasion and forming features such as sand dunes and some desert landforms."
    },

    {
        id: 933,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "How do sea waves modify coastal landforms?",
        answer: "Sea waves erode, transport, and deposit material along coasts, forming or changing features such as cliffs, beaches, caves, and beaches."
    },

    {
        id: 934,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is deposition?",
        answer: "Deposition is the laying down of sediments carried by agents such as water, wind, glaciers, or waves."
    },

    {
        id: 935,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "What is meant by geomorphic processes?",
        answer: "Geomorphic processes are natural processes that wear down, build up, or reshape the Earth’s surface."
    },

    {
        id: 936,
        subject: "Social Science",
        chapter: "Chapter 2 — The Earth and Its Surface",
        question: "Why is the Earth’s surface constantly changing?",
        answer: "The Earth’s surface changes because of internal forces such as tectonic activity and external processes such as weathering, erosion, and deposition."
    },


    // ================= CHAPTER 3 =========================

    {
        id: 938,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What is meant by democracy?",
        answer: "Democracy is a form of government in which people participate in choosing their representatives and have a role in governing."
    },

    {
        id: 939,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What are the essential features of a democratic government?",
        answer: "Important features include free and fair elections, popular participation, equality, rule of law, protection of rights, and accountable institutions."
    },

    {
        id: 940,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "Why is popular participation important in a democracy?",
        answer: "Participation allows citizens to express their views, influence decisions, and hold the government accountable."
    },

    {
        id: 941,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What is the importance of elections in a democracy?",
        answer: "Elections allow citizens to choose representatives and provide a peaceful way to change governments."
    },

    {
        id: 942,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What is universal adult franchise?",
        answer: "Universal adult franchise means that all adult citizens have the right to vote, subject to the law, without discrimination on grounds such as wealth or social status."
    },

    {
        id: 943,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "Why are institutions important in a democracy?",
        answer: "Institutions provide organised systems and procedures for making decisions, exercising authority, and maintaining accountability."
    },

    {
        id: 944,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What is meant by equality in a democratic society?",
        answer: "Equality means that citizens are treated equally before the law and have equal political rights and opportunities."
    },

    {
        id: 945,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "Why is the rule of law important?",
        answer: "The rule of law ensures that everyone, including those in power, is subject to the law and that decisions are made according to established laws."
    },

    {
        id: 946,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What are fundamental rights?",
        answer: "Fundamental rights are basic rights guaranteed to citizens by the Constitution and protected by law."
    },

    {
        id: 947,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "Why is freedom important for citizens?",
        answer: "Freedom allows citizens to express opinions, participate in public life, and make choices while respecting the rights of others."
    },

    {
        id: 948,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What is the role of the Constitution in a democracy?",
        answer: "The Constitution establishes the framework of government, defines powers and responsibilities, and protects citizens’ rights."
    },

    {
        id: 949,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "Why should citizens respect the rights of others?",
        answer: "Respecting others’ rights promotes equality, peaceful coexistence, and a healthy democratic society."
    },

    {
        id: 950,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What is meant by democratic decision-making?",
        answer: "Democratic decision-making is the process of making public decisions through participation, discussion, representation, and established rules."
    },

    {
        id: 951,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "How does democracy promote accountability?",
        answer: "Democracy promotes accountability through elections, laws, institutions, public scrutiny, and the ability of citizens to question those in power."
    },

    {
        id: 952,
        subject: "Social Science",
        chapter: "Chapter 3 — Democracy",
        question: "What are some challenges faced by democratic societies?",
        answer: "Challenges include inequality, discrimination, corruption, misinformation, low participation, and conflicts between different interests."
    }

];


/* =========================================
   CLASS DETECTION
   ========================================= */

/*
   Existing Class 10 questions:
   IDs 1–155

   New Class 9 questions:
   IDs 901–952

   We automatically assign className so you
   don't have to edit every old question.
*/

questions.forEach(q => {

    if (q.id >= 900) {

        q.className = "Class 9";

    } else {

        q.className = "Class 10";

    }

});


/* =========================================
   SUBJECT ICONS
   ========================================= */

const subjectIcons = {

    "Social Science": "🌍",

    "Geography": "🌍",

    "Civics": "🏛️",

    "History": "📜",

    "Science": "🔬",

    "Mathematics": "📐",

    "English": "📖",

    "Hindi": "📝"

};


/* =========================================
   GET SUBJECTS
   ========================================= */

function getSubjects() {

    const classQuestions =
        questions.filter(
            q => q.className === currentClass
        );


    return [
        ...new Set(
            classQuestions.map(
                q => q.subject
            )
        )
    ];

}


/* =========================================
   SHOW CLASS
   ========================================= */

function showClass(className) {

    currentClass = className;

    currentSubject = "All";


    const subtitle =
        document.getElementById(
            "assignmentSubtitle"
        );

    const title =
        document.getElementById(
            "assignmentTitle"
        );


    if (className === "Class 9") {

        subtitle.innerText =
            "CLASS 9 • SOCIAL SCIENCE";

        title.innerText =
            "Social Science Assignment";

    }

    else {

        subtitle.innerText =
            "CLASS 10 • ASSIGNMENTS";

        title.innerText =
            "Class 10 Assignment";

    }


    /*
       Clear search when switching class
    */

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    searchInput.value = "";


    createSubjectButtons();

    displayQuestions();


    /*
       Scroll to assignment section
    */

    document
        .getElementById("assignments")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   CREATE SUBJECT BUTTONS
   ========================================= */

function createSubjectButtons() {

    const container =
        document.getElementById(
            "subjectButtons"
        );


    container.innerHTML = "";


    const subjects =
        getSubjects();


    /*
       ALL BUTTON
    */

    const allButton =
        document.createElement("button");


    allButton.className =
        "subject-btn";


    if (currentSubject === "All") {

        allButton.classList.add(
            "active-btn"
        );

    }


    allButton.innerText =
        "📚 All";


    allButton.addEventListener(
        "click",
        () => {

            showSubject("All");

        }
    );


    container.appendChild(
        allButton
    );


    /*
       SUBJECT BUTTONS
    */

    subjects.forEach(subject => {

        const button =
            document.createElement("button");


        button.className =
            "subject-btn";


        if (
            currentSubject === subject
        ) {

            button.classList.add(
                "active-btn"
            );

        }


        const icon =
            subjectIcons[subject] || "📚";


        button.innerText =
            `${icon} ${subject}`;


        button.addEventListener(
            "click",
            () => {

                showSubject(subject);

            }
        );


        container.appendChild(
            button
        );

    });

}


/* =========================================
   SHOW SUBJECT
   ========================================= */

function showSubject(subject) {

    currentSubject = subject;


    createSubjectButtons();

    displayQuestions();

}


/* =========================================
   DISPLAY QUESTIONS
   ========================================= */

function displayQuestions() {

    const container =
        document.getElementById(
            "questionContainer"
        );


    container.innerHTML = "";


    const searchInput =
        document.getElementById(
            "searchInput"
        );


    const searchText =
        searchInput.value
            .toLowerCase()
            .trim();


    /*
       FILTER BY CLASS
    */

    let filteredQuestions =
        questions.filter(
            item =>
                item.className ===
                currentClass
        );


    /*
       FILTER BY SUBJECT
    */

    if (
        currentSubject !== "All"
    ) {

        filteredQuestions =
            filteredQuestions.filter(
                item =>
                    item.subject ===
                    currentSubject
            );

    }


    /*
       SEARCH
    */

    if (searchText !== "") {

        filteredQuestions =
            filteredQuestions.filter(
                item => {

                    const searchableText =
                        (
                            item.question +
                            " " +
                            item.answer +
                            " " +
                            item.chapter
                        ).toLowerCase();


                    return searchableText.includes(
                        searchText
                    );

                }
            );

    }


    /*
       QUESTION COUNT
    */

    const questionCount =
        document.getElementById(
            "questionCount"
        );


    questionCount.innerText =
        filteredQuestions.length +
        " Questions";


    /*
       NO RESULTS
    */

    if (
        filteredQuestions.length === 0
    ) {

        container.innerHTML = `

            <div class="question">

                <div class="question-header">

                    <span class="question-text">
                        😕 No question found.
                    </span>

                </div>

            </div>

        `;

        return;

    }


    /*
       GROUP BY SUBJECT
    */

    const subjects =
        getSubjects();


    subjects.forEach(subject => {

        /*
           Skip other subjects when
           a particular subject is selected
        */

        if (
            currentSubject !== "All" &&
            currentSubject !== subject
        ) {

            return;

        }


        const subjectQuestions =
            filteredQuestions.filter(
                q =>
                    q.subject === subject
            );


        if (
            subjectQuestions.length === 0
        ) {

            return;

        }


        /*
           SUBJECT HEADING
        */

        const title =
            document.createElement("h2");


        title.className =
            "subject-title";


        const icon =
            subjectIcons[subject] ||
            "📚";


        title.innerHTML =
            `${icon} ${subject}`;


        container.appendChild(
            title
        );


        /*
           GROUP QUESTIONS BY CHAPTER
        */

        const chapters = [];


        subjectQuestions.forEach(q => {

            if (
                !chapters.includes(
                    q.chapter
                )
            ) {

                chapters.push(
                    q.chapter
                );

            }

        });


        chapters.forEach(
            chapter => {

                const chapterQuestions =
                    subjectQuestions.filter(
                        q =>
                            q.chapter ===
                            chapter
                    );


                /*
                   CHAPTER TITLE
                */

                const chapterTitle =
                    document.createElement(
                        "h3"
                    );


                chapterTitle.className =
                    "subject-title";


                chapterTitle.style.fontSize =
                    "20px";


                chapterTitle.innerHTML =
                    `
                        📖 ${chapter}
                    `;


                container.appendChild(
                    chapterTitle
                );


                /*
                   QUESTIONS
                */

                chapterQuestions.forEach(
                    q => {

                        createQuestion(q);

                    }
                );

            }
        );

    });

}


/* =========================================
   CREATE QUESTION CARD
   ========================================= */

function createQuestion(q) {

    const question =
        document.createElement("div");


    question.className =
        "question";


    /*
       Class 9 numbering

       ID 901 = Q1
       ID 902 = Q2
       ...
       ID 917 = Q17
       ID 938 = Q38

       Class 10 numbering remains normal.
    */

    let questionNumber = q.id;


    if (
        q.className === "Class 9"
    ) {

        questionNumber =
            q.id - 900;

    }


    question.innerHTML = `

        <div class="question-header">

            <span class="question-number">
                Q${questionNumber}
            </span>

            <span class="question-text">
                ${q.question}
            </span>

            <span class="plus">
                +
            </span>

        </div>


        <div class="answer">

            <strong>Answer:</strong>

            <p>
                ${q.answer}
            </p>


            ${
                q.section
                ?
                `
                <span class="chapter">
                    📝 ${q.section}
                </span>
                `
                :
                ""
            }


            <br>


            <span class="chapter">
                📖 ${q.chapter}
            </span>

        </div>

    `;


    /*
       OPEN / CLOSE ANSWER
    */

    question
        .querySelector(
            ".question-header"
        )
        .addEventListener(
            "click",
            () => {

                question
                    .classList
                    .toggle("open");

            }
        );


    document
        .getElementById(
            "questionContainer"
        )
        .appendChild(
            question
        );

}


/* =========================================
   SEARCH
   ========================================= */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        displayQuestions
    );


/* =========================================
   DARK MODE
   ========================================= */

const darkBtn =
    document.getElementById(
        "darkBtn"
    );


darkBtn.addEventListener(
    "click",
    () => {

        document
            .body
            .classList
            .toggle("dark");


        const dark =
            document
                .body
                .classList
                .contains("dark");


        darkBtn.innerText =
            dark
            ? "☀️"
            : "🌙";


        /*
           Save dark mode preference
        */

        localStorage.setItem(
            "darkMode",
            dark
            ? "enabled"
            : "disabled"
        );

    }
);


/* =========================================
   LOAD DARK MODE
   ========================================= */

if (
    localStorage.getItem(
        "darkMode"
    ) === "enabled"
) {

    document
        .body
        .classList
        .add("dark");


    darkBtn.innerText =
        "☀️";

}


/* =========================================
   INITIAL LOAD
   ========================================= */

createSubjectButtons();

displayQuestions();