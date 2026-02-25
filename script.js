const countries = [
    // --- Africa ---
    {
        name: "Egypt", continent: "Africa", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["koshary", "falafel", "hummus", "tahini"],
        languages: ["arabic"],
        landmarks: ["pyramids", "sphinx", "nile", "luxor"],
        animals: ["camel", "crocodile", "scarab"],
        colors: ["red", "white", "black", "gold"],
        symbols: ["pharaoh", "hieroglyphics", "ankh"],
        hints: ["Land of the Pharaohs", "Home to the Nile River", "Famous for ancient pyramids"]
    },
    {
        name: "South Africa", continent: "Africa", island: false, hot: true, cold: false, ocean: true, big: true,
        food: ["biltong", "bobotie", "braai"],
        languages: ["english", "zulu", "afrikaans"],
        landmarks: ["table mountain", "kruger park", "cape of good hope"],
        animals: ["lion", "elephant", "rhino", "leopard", "buffalo"],
        colors: ["green", "yellow", "black", "red", "white", "blue"],
        symbols: ["springbok", "protea", "rainbow nation"],
        hints: ["Known as the Rainbow Nation", "Has Table Mountain", "Famous for safaris"]
    },
    {
        name: "Kenya", continent: "Africa", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["ugali", "sukuma wiki", "nyama choma"],
        languages: ["swahili", "english"],
        landmarks: ["maasai mara", "mount kenya", "rift valley"],
        animals: ["giraffe", "zebra", "lion", "elephant"],
        colors: ["black", "red", "green", "white"],
        symbols: ["maasai shield", "spears"],
        hints: ["Famous for the Maasai Mara", "Great for viewing wildlife", "Produces world-class marathon runners"]
    },
    {
        name: "Morocco", continent: "Africa", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["couscous", "tagine", "mint tea"],
        languages: ["arabic", "berber", "french"],
        landmarks: ["marrakech", "atlas mountains", "sahara"],
        animals: ["barbary macaque", "fennec fox"],
        colors: ["red", "green"],
        symbols: ["pentagram", "mosaic", "bazaar"],
        hints: ["Famous for its colorful markets", "Located in North Africa", "Known for the Sahara Desert"]
    },
    {
        name: "Nigeria", continent: "Africa", island: false, hot: true, cold: false, ocean: true, big: true,
        food: ["jollof rice", "suya", "egusi"],
        languages: ["english", "igbo", "yoruba", "hausa"],
        landmarks: ["zuma rock", "lekki", "osun-osogbo"],
        animals: ["eagle"],
        colors: ["green", "white"],
        symbols: ["eagle", "horses"],
        hints: ["Most populous country in Africa", "Famous for Nollywood movies", "Known for its vibrant music scene"]
    },

    // --- Asia ---
    {
        name: "Japan", continent: "Asia", island: true, hot: false, cold: false, ocean: true, big: false,
        food: ["sushi", "ramen", "tempura", "miso"],
        languages: ["japanese"],
        landmarks: ["mount fuji", "tokyo tower", "kyoto"],
        animals: ["snow monkey", "shiba inu", "koi"],
        colors: ["white", "red"],
        symbols: ["sun", "cherry blossom", "katana"],
        hints: ["Known as the Land of the Rising Sun", "Famous for Cherry Blossoms", "Excellent high-speed trains"]
    },
    {
        name: "China", continent: "Asia", island: false, hot: false, cold: false, ocean: true, big: true,
        food: ["dim sum", "peking duck", "dumplings", "tea"],
        languages: ["chinese", "mandarin", "cantonese"],
        landmarks: ["great wall", "forbidden city", "shanghai"],
        animals: ["panda", "dragon", "crane"],
        colors: ["red", "yellow", "gold"],
        symbols: ["great wall", "calligraphy", "silk"],
        hints: ["The Great Wall is here", "Famous for Giant Pandas", "Largest population in the world"]
    },
    {
        name: "India", continent: "Asia", island: false, hot: true, cold: false, ocean: true, big: true,
        food: ["curry", "naan", "biryani", "samosa", "chai"],
        languages: ["hindi", "english"],
        landmarks: ["taj mahal", "ganges", "himalayas"],
        animals: ["tiger", "elephant", "peacock", "cow"],
        colors: ["saffron", "white", "green", "blue", "orange"],
        symbols: ["lotus", "ashoka chakra", "yoga"],
        hints: ["Home of the Taj Mahal", "Famous for spicy curry", "Second most populous country"]
    },
    {
        name: "Thailand", continent: "Asia", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["pad thai", "tom yum", "mango sticky rice"],
        languages: ["thai"],
        landmarks: ["grand palace", "wat arun", "phuket"],
        animals: ["elephant", "tiger"],
        colors: ["red", "white", "blue"],
        symbols: ["garuda", "orchid", "tuk-tuk"],
        hints: ["Known as the Land of the Smiles", "Famous for its tropical beaches", "Street food is very popular here"]
    },
    {
        name: "South Korea", continent: "Asia", island: false, hot: false, cold: false, ocean: true, big: false,
        food: ["kimchi", "bibimbap", "bulgogi"],
        languages: ["korean"],
        landmarks: ["seoul tower", "gyeongbokgung palace", "jeju island"],
        animals: ["tiger", "magpie"],
        colors: ["white", "black", "red", "blue"],
        symbols: ["taegeuk", "k-pop", "hanbok"],
        hints: ["Home of K-Pop and K-Dramas", "Famous for Kimchi", "Hosts major tech companies"]
    },
    {
        name: "Vietnam", continent: "Asia", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["pho", "banh mi", "spring rolls"],
        languages: ["vietnamese"],
        landmarks: ["ha long bay", "hoi an", "cu chi tunnels"],
        animals: ["water buffalo"],
        colors: ["red", "yellow"],
        symbols: ["star", "lotus"],
        hints: ["Famous for Ha Long Bay", "Known for its delicious Pho", "Motorbikes are everywhere here"]
    },

    // --- Europe ---
    {
        name: "France", continent: "Europe", island: false, hot: false, cold: false, ocean: true, big: false,
        food: ["croissant", "baguette", "cheese", "crepe", "wine"],
        languages: ["french"],
        landmarks: ["eiffel tower", "louvre", "notre dame"],
        animals: ["rooster"],
        colors: ["blue", "white", "red"],
        symbols: ["tricolour", "fleur-de-lis", "liberty"],
        hints: ["Famous for the Eiffel Tower", "Has a blue, white, and red flag", "Neighbor to Spain and Germany"]
    },
    {
        name: "Italy", continent: "Europe", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["pizza", "pasta", "gelato", "lasagna", "espresso"],
        languages: ["italian"],
        landmarks: ["colosseum", "leaning tower of pisa", "venice", "vatican"],
        animals: ["wolf", "boar"],
        colors: ["green", "white", "red"],
        symbols: ["boot", "renaissance", "fashion"],
        hints: ["Shaped like a boot", "Birthplace of pizza and pasta", "Home to the Colosseum"]
    },
    {
        name: "Iceland", continent: "Europe", island: true, hot: false, cold: true, ocean: true, big: false,
        food: ["skyr", "fermented shark", "lamb"],
        languages: ["icelandic"],
        landmarks: ["blue lagoon", "gullfoss", "geysir"],
        animals: ["puffin", "arctic fox", "whale"],
        colors: ["blue", "white", "red"],
        symbols: ["volcano", "glacier", "viking"],
        hints: ["Land of fire and ice", "Has many volcanoes and glaciers", "You can see Aurora Borealis here"]
    },
    {
        name: "Spain", continent: "Europe", island: false, hot: true, cold: false, ocean: true, big: false,
        food: ["paella", "tapas", "churros"],
        languages: ["spanish"],
        landmarks: ["sagrada familia", "alhambra", "ibiza"],
        animals: ["bull", "lynx"],
        colors: ["red", "yellow"],
        symbols: ["flamenco", "siesta", "football"],
        hints: ["Famous for flamenco dancing", "Known for sunny weather", "Home to many beautiful beaches"]
    },
    {
        name: "Greece", continent: "Europe", island: true, hot: true, cold: false, ocean: true, big: false,
        food: ["moussaka", "souvlaki", "feta cheese", "olives"],
        languages: ["greek"],
        landmarks: ["acropolis", "santorini", "delphi"],
        animals: ["dolphin", "owl"],
        colors: ["blue", "white"],
        symbols: ["columns", "olympian", "ancient"],
        hints: ["Birthplace of the Olympic Games", "Famous for ancient history and islands"]
    },
    {
        name: "Germany", continent: "Europe", island: false, hot: false, cold: false, ocean: true, big: false,
        food: ["pretzel", "bratwurst", "sauerkraut"],
        languages: ["german"],
        landmarks: ["neuschwanstein castle", "brandenburg gate", "black forest"],
        animals: ["eagle"],
        colors: ["black", "red", "gold"],
        symbols: ["eagle", "beer", "cars"],
        hints: ["Famous for its highways and cars", "Host of the Oktoberfest", "Known for Neuschwanstein Castle"]
    },
    {
        name: "United Kingdom", continent: "Europe", island: true, hot: false, cold: false, ocean: true, big: false,
        food: ["fish and chips", "roast beef", "afternoon tea"],
        languages: ["english"],
        landmarks: ["big ben", "stonehenge", "london eye"],
        animals: ["lion", "bulldog"],
        colors: ["red", "white", "blue"],
        symbols: ["union jack", "crown", "double decker bus"],
        hints: ["Home of Big Ben and the Queen", "An island nation in Europe", "Famous for afternoon tea"]
    },

    // --- Americas ---
    {
        name: "Canada", continent: "North America", island: false, hot: false, cold: true, ocean: true, big: true,
        food: ["poutine", "maple syrup", "nanaimo bar"],
        languages: ["english", "french"],
        landmarks: ["cn tower", "niagara falls", "rocky mountains"],
        animals: ["moose", "beaver", "polar bear", "loon"],
        colors: ["red", "white"],
        symbols: ["maple leaf", "hockey", "canoe"],
        hints: ["Famous for maple syrup", "Has two national languages", "Known for being very polite"]
    },
    {
        name: "USA", continent: "North America", island: false, hot: false, cold: false, ocean: true, big: true,
        food: ["hamburger", "hot dog", "apple pie"],
        languages: ["english", "spanish"],
        landmarks: ["statue of liberty", "grand canyon", "hollywood"],
        animals: ["bald eagle", "bison"],
        colors: ["red", "white", "blue"],
        symbols: ["stars and stripes", "liberty bell"],
        hints: ["Home of Hollywood", "Famous for the Statue of Liberty", "Has 50 states"]
    },
    {
        name: "Mexico", continent: "North America", island: false, hot: true, cold: false, ocean: true, big: true,
        food: ["tacos", "burrito", "guacamole", "chili"],
        languages: ["spanish"],
        landmarks: ["chichen itza", "teotihuacan", "cancun"],
        animals: ["axolotl", "jaguar", "eagle"],
        colors: ["green", "white", "red"],
        symbols: ["cactus", "sombrero", "mariachi"],
        hints: ["Famous for its spicy food", "Home of ancient Maya ruins", "Celebrates Day of the Dead"]
    },
    {
        name: "Brazil", continent: "South America", island: false, hot: true, cold: false, ocean: true, big: true,
        food: ["feijoada", "pao de queijo", "acai", "barbecue"],
        languages: ["portuguese"],
        landmarks: ["christ the redeemer", "sugarloaf mountain", "amazon"],
        animals: ["toucan", "jaguar", "macaw", "sloth"],
        colors: ["green", "yellow", "blue", "white"],
        symbols: ["soccer", "carnival", "coffee"],
        hints: ["Famous for the Amazon Rainforest", "Speaks Portuguese", "Hosts a huge Carnival"]
    },
    {
        name: "Argentina", continent: "South America", island: false, hot: false, cold: false, ocean: true, big: true,
        food: ["steak", "empanadas", "mate"],
        languages: ["spanish"],
        landmarks: ["iguazu falls", "patagonia", "buenos aires"],
        animals: ["puma", "penguin"],
        colors: ["light blue", "white", "gold"],
        symbols: ["tango", "gaucho", "sun of may"],
        hints: ["Famous for tango dancing", "Known for high-quality stake", "Located at the tip of South America"]
    },
    {
        name: "Peru", continent: "South America", island: false, hot: false, cold: false, ocean: true, big: false,
        food: ["ceviche", "lomo saltado"],
        languages: ["spanish", "quechua"],
        landmarks: ["machu picchu", "lima", "nazca lines"],
        animals: ["llama", "alpaca", "condor"],
        colors: ["red", "white"],
        symbols: ["vicuna", "machu picchu symbol"],
        hints: ["Home of Machu Picchu", "Famous for llamas and alpacas", "Known for being part of the Inca Empire"]
    },

    // --- Oceania ---
    {
        name: "Australia", continent: "Oceania", island: true, hot: true, cold: false, ocean: true, big: true,
        food: ["vegemite", "meat pie", "barbecue", "tim tam"],
        languages: ["english"],
        landmarks: ["sydney opera house", "uluru", "great barrier reef"],
        animals: ["kangaroo", "koala", "wombat", "emu", "platypus"],
        colors: ["green", "gold", "blue", "white"],
        symbols: ["southern cross", "boomerang", "didgeridoo"],
        hints: ["Home to kangaroos and koalas", "Great Barrier Reef is here", "The 'Outback' is its large dry area"]
    },
    {
        name: "New Zealand", continent: "Oceania", island: true, hot: false, cold: false, ocean: true, big: false,
        food: ["kiwi fruit", "pavlova", "hangi"],
        languages: ["english", "maori"],
        landmarks: ["milford sound", "hobbiton", "rotorua"],
        animals: ["kiwi bird", "sheep"],
        colors: ["black", "white", "silver", "red", "blue"],
        symbols: ["silver fern", "kiwi symbol", "haka"],
        hints: ["Famous for the silver fern", "Filming location for Lord of the Rings", "Known for its beautiful mountains"]
    }
];

let mysteryCountry = null;
let questionsAsked = 0;
let flowersGrown = 0;
let usedCountries = []; // Track countries already used in this session
const flowerEmojis = ["🌸", "🌼", "🌻", "🌺", "🌹", "🌷", "💐"];

// Elements
const speechBubble = document.getElementById('speech-bubble');
const qInput = document.getElementById('question-input');
const gInput = document.getElementById('guess-input');
const qLog = document.getElementById('question-log');
const qLeftText = document.getElementById('q-left');
const hintText = document.getElementById('hint-text');
const flowerCountSpan = document.getElementById('flower-count');
const wateringCan = document.getElementById('watering-can');
const gardenDiv = document.getElementById('garden');

// --- Audio ---
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playMeow() {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.1);
    osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + 0.3);
}

function playSuccessSound() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.1);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.1 + 0.2);
        osc.connect(gain); gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + i * 0.1); osc.stop(audioCtx.currentTime + i * 0.1 + 0.2);
    });
}

// --- Logic ---
function startRound() {
    if (audioCtx.state === 'suspended') { audioCtx.resume(); }

    // Filter out used countries
    const availableCountries = countries.filter(c => !usedCountries.includes(c.name));

    // If we somehow run out of countries (unlikely with 26), reset the list
    if (availableCountries.length === 0) {
        usedCountries = [];
        mysteryCountry = countries[Math.floor(Math.random() * countries.length)];
    } else {
        mysteryCountry = availableCountries[Math.floor(Math.random() * availableCountries.length)];
    }

    usedCountries.push(mysteryCountry.name);

    questionsAsked = 0;
    qLog.innerHTML = '<div style="color: #ff69b4; font-weight: bold; margin-bottom: 10px;">Question Log:</div>';
    qLeftText.textContent = '15';
    hintText.textContent = '';
    qInput.value = '';
    gInput.value = '';
    speechBubble.textContent = "I've picked a country! Ask me anything about it.";
    playMeow();
}

function handleQuestion() {
    if (questionsAsked >= 15) {
        speechBubble.textContent = "You're out of questions! Time to guess!";
        return;
    }

    const q = qInput.value.trim().toLowerCase();
    if (!q) return;

    questionsAsked++;
    qLeftText.textContent = 15 - questionsAsked;

    let answer = analyzeQuestion(q);
    addToLog(q, answer);
    speechBubble.textContent = answer + "!";
    playMeow();

    // Check for hints (4, 8, 12)
    if (questionsAsked === 4) {
        hintText.textContent = "Hint 1: " + mysteryCountry.hints[0];
    } else if (questionsAsked === 8) {
        hintText.textContent = "Hint 2: " + mysteryCountry.hints[1];
    } else if (questionsAsked === 12) {
        hintText.textContent = "Hint 3: " + mysteryCountry.hints[2];
    }

    qInput.value = '';
}

function analyzeQuestion(q) {
    // 1. Geography/Weather/Size - Specific logic for Booleans and Continents
    const lowCont = mysteryCountry.continent.toLowerCase();

    if (q.includes("europe")) return lowCont === "europe" ? "Yes" : "No";
    if (q.includes("asia")) return lowCont === "asia" ? "Yes" : "No";
    if (q.includes("africa")) return lowCont === "africa" ? "Yes" : "No";
    if (q.includes("oceania")) return lowCont === "oceania" ? "Yes" : "No";

    // North/South America separately
    if (q.includes("north america")) return lowCont === "north america" ? "Yes" : "No";
    if (q.includes("south america")) return lowCont === "south america" ? "Yes" : "No";
    // General America catch
    if (q.includes("america")) return lowCont.includes("america") ? "Yes" : "No";

    if (q.includes("island")) return mysteryCountry.island ? "Yes" : "No";
    if (q.includes("ocean") || q.includes("water") || q.includes("coast")) return mysteryCountry.ocean ? "Yes" : "No";
    if (q.includes("hot") || q.includes("sun") || q.includes("warm")) return mysteryCountry.hot ? "Yes" : "No";
    if (q.includes("cold") || q.includes("snow") || q.includes("ice")) return mysteryCountry.cold ? "Yes" : "No";
    if (q.includes("big") || q.includes("large") || q.includes("huge")) return mysteryCountry.big ? "Yes" : "No";
    if (q.includes("small") || q.includes("tiny")) return !mysteryCountry.big ? "Yes" : "No";

    // 2. Catch-All Scan for Strings and Arrays
    for (let key in mysteryCountry) {
        let val = mysteryCountry[key];

        if (Array.isArray(val)) {
            for (let item of val) {
                if (q.includes(item.toLowerCase())) return "Yes";
            }
        }
        if (typeof val === 'string') {
            if (q.includes(val.toLowerCase())) return "Yes";
        }
    }

    // 3. Flags/Colors Specific
    if (q.includes("flag") || q.includes("color")) {
        for (let c of mysteryCountry.colors) {
            if (q.includes(c)) return "Yes";
        }
    }

    return "No";
}

function addToLog(q, a) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="log-q">Q: ${q}</span><br><span class="log-a">A: ${a}</span>`;
    qLog.appendChild(entry);
    qLog.scrollTop = qLog.scrollHeight;
}

function handleGuess() {
    const guess = gInput.value.trim().toLowerCase();
    if (!guess) return;

    if (guess === mysteryCountry.name.toLowerCase()) {
        handleCorrect();
    } else {
        speechBubble.textContent = "Not quite! Try another question or guess again.";
        gInput.value = '';
    }
}

function handleCorrect() {
    speechBubble.textContent = `Correct! It was ${mysteryCountry.name}!`;

    // Watering animation
    wateringCan.classList.add('pouring');

    setTimeout(() => {
        playSuccessSound();
        const slot = document.getElementById(`slot-${flowersGrown}`);
        addFlower(slot);

        flowersGrown++;
        flowerCountSpan.textContent = flowersGrown;

        setTimeout(() => {
            wateringCan.classList.remove('pouring');
            if (flowersGrown < 5) {
                setTimeout(startRound, 500); // Small pause before new round
            } else {
                showEndScreen();
            }
        }, 2000);
    }, 800);
}

function addFlower(container) {
    const unit = document.createElement('div');
    unit.className = 'flower-unit';
    unit.innerHTML = `
        <div class="bloom">${flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]}</div>
        <div class="stem"></div>
        <div class="sprout"></div>
    `;
    container.appendChild(unit);
}

function showEndScreen() {
    document.getElementById('final-garden').innerHTML = gardenDiv.innerHTML;
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('end-screen').classList.add('active');
}

// --- Listeners ---
document.getElementById('start-btn').addEventListener('click', () => {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    startRound();
});

document.getElementById('ask-btn').addEventListener('click', handleQuestion);
document.getElementById('guess-btn').addEventListener('click', handleGuess);
document.getElementById('restart-btn').addEventListener('click', () => location.reload());

[qInput, gInput].forEach(inp => {
    inp.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            if (inp === qInput) handleQuestion();
            else handleGuess();
        }
    });
});
