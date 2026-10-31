// All the jokes live here. Edit freely: each list is just data.

// Map center for the home screen and the minigame (Flatiron, W 23 St & 6 Ave).
// Change this to your party's location to show the stations around it.
window.CONFIG = {
  center: [40.7429, -73.9927],
  gameSeconds: 30,
};

// "Give a tip" button. Zelle has no web payment link, so the tip sheet copies
// this email and tells people to paste it into Zelle in their bank app.
window.TIP = {
  zelle: "jellevhaasteren@gmail.com",
  name: "Jelle",
};

// Shown when someone "unlocks" a bike. t = title, b = body, c = error code.
window.REASONS = [
  { t: "This bike is drunk", b: "It's had four beers and a tequila shot. For everyone's safety, it's locked until brunch tomorrow.", c: "BAC-012" },
  { t: "Bike possessed", b: "Our sensors detected a demonic presence in the rear wheel. A priest has been dispatched. ETA: 45 min.", c: "ERR-666" },
  { t: "On a smoke break", b: "The bike said it'd be five minutes. That was forty minutes ago. It's still outside, talking to a vampire.", c: "BRB-005" },
  { t: "Waiting for the bathroom", b: "This bike is in line for the bathroom. There are 14 people ahead of it, and one of them is a two-person horse.", c: "WC-0014" },
  { t: "Battery at 2%", b: "Last charged with one Red Bull and pure optimism. It's looking for an iPhone charger at this party.", c: "PWR-002" },
  { t: "Bike is texting its ex", b: "We've paused this bike until it puts the phone down. Nothing good gets sent after midnight on Halloween.", c: "TXT-1031" },
  { t: "Reserved", b: "This bike is reserved for a guy in an inflatable T-Rex costume. He can't reach the handlebars, but he insists.", c: "RAWR-01" },
  { t: "Dance-off in progress", b: "This bike was challenged to a dance-off and won't leave until it wins. It's currently losing to a sexy pumpkin.", c: "DNC-099" },
  { t: "Waiting for the L train", b: "This bike is waiting for the L train. Estimated wait: unknown. Possibly forever.", c: "MTA-000" },
  { t: "Blocked by a van", b: "A double-parked delivery van is blocking this bike. The driver said \"two minutes\" in 2023.", c: "BLK-2023" },
  { t: "Bodega run", b: "This bike went out for a chopped cheese. The bodega cat is now riding it. We have no jurisdiction over the cat.", c: "CAT-001" },
  { t: "You've been ghosted", b: "This bike saw your request and left you on read. 👻 Seasonal feature, not a bug.", c: "BOO-031" },
  { t: "Seat stuck", b: "The seat is stuck at \"NBA player\" height. Lowering seat… lowering… nope. Still stuck.", c: "SEAT-7FT" },
  { t: "Surge pricing", b: "Due to high demand, this ride now costs 3 Twix and one full-size Snickers. Fun-size will not be accepted.", c: "CNDY-03" },
  { t: "Bluetooth error", b: "Couldn't connect. The bike is paired to someone's speaker and is playing Mr. Brightside for the fourth time.", c: "BT-0004" },
  { t: "Bike is under 21", b: "This bike tried to get into the party with a fake ID. It's been confiscated, along with its dignity.", c: "ID-FAKE" },
  { t: "Bike is in Hoboken", b: "This bike went to Hoboken and refuses to talk about it. Please respect its privacy during this difficult time.", c: "NJ-0070" },
  { t: "Dock is haunted", b: "Every time we unlock it, it locks itself again and whispers \"get off my lawn.\" We're looking into it.", c: "HNT-1031" },
  { t: "Low vibes detected", b: "Our diagnostics detected critically low vibes. Compliment the bike's costume and try again.", c: "VIB-LOW" },
  { t: "Wardrobe malfunction", b: "This bike's costume is falling apart. Anyone with duct tape, please report to the kitchen.", c: "TAPE-911" },
  { t: "Filming a TikTok", b: "Please don't walk into the shot. It's take 37. The bike knows exactly what it's doing.", c: "TOK-037" },
  { t: "Ride limit reached", b: "You've already unlocked this bike 0 times tonight. Unfortunately, that's the limit.", c: "LIM-000" },
  { t: "Bike on strike", b: "This bike wants to be paid in compliments and Halloween candy. Negotiations are ongoing.", c: "STK-001" },
  { t: "Parking ticket", b: "This bike was ticketed for being too attractive in a bike lane. It's contesting it in traffic court.", c: "TKT-HOT" },
  { t: "Flat tire", b: "Someone sat on it during the limbo contest. That someone was dressed as a hot dog. We have photos.", c: "PSI-002" },
  { t: "Monster Mash detected", b: "This bike is doing the Monster Mash and cannot be interrupted mid-mash. Union rules.", c: "MASH-01" },
  { t: "Under maintenance", b: "This bike is getting maintenance. \"Maintenance\" means it's at the bar ordering another drink.", c: "MNT-BAR" },
  { t: "It's past midnight", b: "After midnight on Halloween, every Citi Bike turns into a pumpkin. Please try again in the morning.", c: "PMPK-00" },
  { t: "Gone for pizza", b: "This bike went to the 99¢ slice place. It's not 99¢ anymore. The bike is having a crisis.", c: "PZA-099" },
  { t: "Identity crisis", b: "This bike is dressed as a person dressed as a Citi Bike. We're not sure which one to unlock.", c: "WHO-AMI" },
];

window.UNLOCK_STEPS = ["Connecting to bike…", "Talking to the dock…", "Releasing the lock…", "Hmm…"];

window.HISTORY = [
  { d: "Oct 31 · 11:58 PM", from: "Sleepy Hollow", to: "Your ex's apartment", dur: "1h 12m", cost: "$13.13", note: "Ride ended in tears" },
  { d: "Oct 30 · 2:14 AM", from: "The bar", to: "The same bar", dur: "3 min", cost: "$4.99", note: "Ended 4 feet from where it started" },
  { d: "Oct 28 · 3:33 AM", from: "Unknown", to: "Green-Wood Cemetery", dur: "6h 6m", cost: "$66.60", note: "Rider did not appear in mirrors" },
  { d: "Oct 27 · 6:30 PM", from: "Times Square", to: "Literally anywhere else", dur: "8 min", cost: "$4.79", note: "Best ride of the year" },
  { d: "Oct 26 · 10:10 PM", from: "Bodega", to: "Other bodega (better cat)", dur: "7 min", cost: "$4.79", note: "" },
  { d: "Oct 24 · 5:00 PM", from: "Midtown", to: "Every full dock in Midtown", dur: "3h 12m", cost: "$96.40", note: "Circled 34 stations" },
  { d: "Oct 22 · 7:45 AM", from: "Your bed", to: "Your bed", dur: "8h 0m", cost: "$0.00", note: "Snoozed. Ride never started" },
  { d: "Oct 19 · 1:20 PM", from: "Williamsburg", to: "Williamsburg (got lost)", dur: "2h 46m", cost: "$48.20", note: "Asked 3 people with mustaches for help" },
  { d: "Oct 13 · 9:41 AM", from: "Hoboken", to: "", dur: "", cost: "", note: "We don't talk about this ride" },
];

window.TRANSIT = [
  { line: "L", color: "#A7A9AC", rows: [["Manhattan", "lol"], ["Canarsie", "weekend shutdown"]] },
  { line: "G", color: "#6CBE45", rows: [["Court Sq", "eventually"], ["Church Av", "47 min"]] },
  { line: "👻", color: "#1d1b2c", rows: [["Ghost train to Sleepy Hollow", "now"], ["Back from Sleepy Hollow", "never"]] },
  { line: "6", color: "#00933C", rows: [["Uptown", "pumpkin on tracks"], ["Downtown", "vampire delays"]] },
];

window.TOASTS = {
  search: "Directions unavailable. The bike is also lost.",
  locate: "📍 You are at a party. Probably near the snacks.",
  price: "Prices subject to vibes. Candy accepted.",
  manual: "Typing is hard at a party. Try scanning instead.",
  wallet: "Balance: $0.00 and 3 fun-size Kit Kats",
  angels: "Bike Angel status revoked. You know what you did.",
  help: "Help is on the way. ETA: after the party.",
};

// Minigame copy
window.MISS_LINES = [
  "Full. Like every dock in Midtown at 6 PM.",
  "0 open docks. Shocking, truly.",
  "That dock is full of ghosts 👻",
  "Nope. Someone parked a moped there.",
  "Full! That cost you 2 seconds.",
  "Dock full. A bike dressed as a person is in it.",
];
window.SNATCHERS = [
  "Shrek", "a sexy pumpkin", "a two-person horse", "Spider-Man", "three Barbies", "a guy dressed as a Citi Bike (rude)",
];
window.RANKS = [
  [0, "Lost Tourist", "You rode the wrong way down 6th Ave and asked a pigeon for directions."],
  [3, "Sunday Cruiser", "Lovely pace. Everyone behind you in the bike lane is screaming."],
  [6, "Daily Commuter", "You know which docks are always full. You resent every one of them."],
  [10, "Delivery Legend", "Red lights are a suggestion. Your thighs are a weapon."],
  [15, "Bike Angel", "The city thanks you for your service. Here are 0 points."],
  [20, "Ghost Rider", "Nobody docks that fast. Are you even alive? 👻"],
];
