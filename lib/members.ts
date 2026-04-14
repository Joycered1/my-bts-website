export interface DiscographyItem {
  title: string;
  year: number;
  type: "Single" | "Mini Album" | "Studio Album" | "EP" | "Mixtape";
}

export interface Member {
  slug: string;
  name: string;
  hangul: string;
  stageName: string;
  born: string;
  age: number;
  positions: string[];
  nicknames: string[];
  bio: string;
  photoUrl: string;
  solo_discography: DiscographyItem[];
  group_highlights: string[];
  isBias: boolean;
}

export const members: Member[] = [
  {
    slug: "v",
    name: "Kim Taehyung",
    hangul: "김태형",
    stageName: "V",
    born: "December 30, 1995",
    age: 30,
    positions: ["Sub-Vocalist", "Visual", "Dancer"],
    nicknames: ["Taetae", "CGV", "Blank Tae", "Baby Bear", "Wooga"],
    bio:
      "Kim Taehyung, known by his stage name V, is celebrated for his deep baritone voice and soulful artistry. Born in Daegu, South Korea, he trained for four years before debuting with BTS in 2013. Known for his boxy smile and multifaceted personality, V has established himself as one of the most recognisable faces in the world, regularly topping global polls for the most handsome man. His debut solo album 'Layover' showcased his unique colour as an artist — warm, vintage, and emotionally raw.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/V.webp",
    solo_discography: [
      { title: "Christmas Tree", year: 2021, type: "Single" },
      { title: "Sweet Night", year: 2020, type: "Single" },
      { title: "Layover", year: 2023, type: "Mini Album" },
      { title: "FRI(END)S", year: 2024, type: "Single" },
    ],
    group_highlights: [
      "BTS Visual and Sub-Vocalist since debut in 2013",
      "First Korean solo artist to top Spotify Global Chart",
      "Layover debuted at #1 on Billboard World Albums",
      "Named one of TIME Magazine's 100 Most Influential People (2022)",
      "Known for iconic performances: Black Swan, Singularity, Fake Love",
    ],
    isBias: true,
  },
  {
    slug: "rm",
    name: "Kim Namjoon",
    hangul: "김남준",
    stageName: "RM",
    born: "September 12, 1994",
    age: 31,
    positions: ["Leader", "Main Rapper"],
    nicknames: ["Namjoon", "God of Destruction", "Dance Prodigy (joking)", "Koya"],
    bio:
      "Kim Namjoon, known as RM, is the leader of BTS and a self-taught English speaker. With an IQ of 148 and a love for art, literature, and philosophy, RM represents BTS's intellectual heart. He was the group's first member to be recruited as a trainee, joining Big Hit Entertainment in 2010. His 2022 solo album 'Indigo' was a critically acclaimed blend of introspection and genre-blending music.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/RM.webp",
    solo_discography: [
      { title: "RM (Mixtape)", year: 2015, type: "Mixtape" },
      { title: "mono.", year: 2018, type: "Mixtape" },
      { title: "Indigo", year: 2022, type: "Studio Album" },
      { title: "Right Place, Wrong Person", year: 2024, type: "Studio Album" },
    ],
    group_highlights: [
      "BTS Leader since 2013",
      "Delivered historic speech at the United Nations General Assembly (2018, 2021)",
      "Co-wrote and produced numerous BTS hits",
      "Passionate art collector and gallery visitor",
      "Fluent in Korean, English, and studying other languages",
    ],
    isBias: false,
  },
  {
    slug: "jin",
    name: "Kim Seokjin",
    hangul: "김석진",
    stageName: "Jin",
    born: "December 4, 1992",
    age: 33,
    positions: ["Sub-Vocalist", "Visual"],
    nicknames: ["Worldwide Handsome", "Jinnie", "Pink Princess", "Car Door Guy"],
    bio:
      "Kim Seokjin, known simply as Jin, is BTS's eldest member and one of the most beloved personalities in K-pop. Famous for his self-proclaimed title 'Worldwide Handsome', his dad jokes (Aww man!), and his incredible vocal clarity, Jin's presence in BTS is irreplaceable. He enrolled in acting school before becoming a K-pop idol and brings warmth and humour to the group. He completed mandatory military service and returned in 2025.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/Jin.webp",
    solo_discography: [
      { title: "Epiphany", year: 2018, type: "Single" },
      { title: "The Astronaut", year: 2022, type: "Single" },
      { title: "Happy", year: 2024, type: "Mini Album" },
    ],
    group_highlights: [
      "BTS oldest member (hyung line)",
      "Co-wrote 'The Astronaut' with Coldplay",
      "First BTS member to complete mandatory military service",
      "Known for 'eat Jin' VLIVE series loved by ARMY worldwide",
      "Performed at the 2022 FIFA World Cup closing ceremony",
    ],
    isBias: false,
  },
  {
    slug: "suga",
    name: "Min Yoongi",
    hangul: "민윤기",
    stageName: "Suga",
    born: "March 9, 1993",
    age: 33,
    positions: ["Lead Rapper", "Songwriter", "Producer"],
    nicknames: ["Agust D", "Min Suga", "Genius Min", "Lil Meow Meow"],
    bio:
      "Min Yoongi, known as Suga in BTS and Agust D in his solo work, is one of the most critically acclaimed songwriter-producers in K-pop. He joined Big Hit after winning a rap competition, working part-time jobs to fund his music career. Suga's storytelling through raw, autobiographical lyricism — tackling mental health, societal pressure, and personal growth — has resonated deeply with millions worldwide. He completed his alternative military service in 2024.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/Suga.webp",
    solo_discography: [
      { title: "Agust D (Mixtape)", year: 2016, type: "Mixtape" },
      { title: "D-2", year: 2020, type: "Mixtape" },
      { title: "D-DAY", year: 2023, type: "Studio Album" },
    ],
    group_highlights: [
      "Produced tracks for IU, Halsey, MAX, PSY and many others",
      "D-DAY world tour sold out arenas globally",
      "Co-wrote and produced dozens of BTS's most iconic songs",
      "Candid mental health advocacy through music",
      "2016 Agust D mixtape downloaded over 1 million times in days",
    ],
    isBias: false,
  },
  {
    slug: "jhope",
    name: "Jung Hoseok",
    hangul: "정호석",
    stageName: "j-hope",
    born: "February 18, 1994",
    age: 32,
    positions: ["Main Dancer", "Lead Rapper", "Sub-Vocalist"],
    nicknames: ["Hobi", "Your Hope", "Sunshine", "Hope on the Street"],
    bio:
      "Jung Hoseok, known as j-hope, is BTS's main dancer and sunshine. Before joining Big Hit Entertainment, he was a street dancer with a crew called Neuron. He brings an infectious energy and technical precision to every performance. As the first BTS member to headline a solo stage at a major Western festival (Lollapalooza 2022), j-hope marked a milestone for K-pop globally. His music oscillates between bold hip-hop and introspective pop.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/j-hope.webp",
    solo_discography: [
      { title: "Hope World", year: 2018, type: "Mixtape" },
      { title: "Chicken Noodle Soup", year: 2019, type: "Single" },
      { title: "Jack In The Box", year: 2022, type: "Studio Album" },
      { title: "Hope on the Street Vol. 1", year: 2024, type: "Mini Album" },
    ],
    group_highlights: [
      "First K-pop soloist to headline Lollapalooza (2022)",
      "BTS's primary choreography guide and on-stage energy leader",
      "Jack In The Box debuted at #2 on Billboard 200",
      "Completed mandatory military service in 2024",
      "Star of Netflix documentary 'Hope on the Street'",
    ],
    isBias: false,
  },
  {
    slug: "jimin",
    name: "Park Jimin",
    hangul: "박지민",
    stageName: "Jimin",
    born: "October 13, 1995",
    age: 30,
    positions: ["Main Dancer", "Lead Vocalist"],
    nicknames: ["Chim Chim", "Mochi", "Jiminie", "Baby Mochi"],
    bio:
      "Park Jimin is BTS's main dancer and lead vocalist, known for his graceful contemporary dance background and emotive vocal delivery. He studied contemporary dance at Busan Arts High School before being scouted. Jimin is deeply dedicated to perfection in performance and was the first Korean solo artist to debut at #1 on the Billboard Hot 100 with 'Like Crazy'. His solo work blends R&B, pop, and dance in a deeply personal way.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/Jimin.webp",
    solo_discography: [
      { title: "Promise", year: 2018, type: "Single" },
      { title: "FACE", year: 2023, type: "Mini Album" },
      { title: "MUSE", year: 2024, type: "Studio Album" },
    ],
    group_highlights: [
      "First Korean solo artist to debut at #1 on Billboard Hot 100 ('Like Crazy')",
      "FACE is the first Korean solo album to hit #1 on the Billboard 200",
      "Known for legendary performances: Serendipity, Lie, Filter",
      "Contemporary dance background from Busan Arts High School",
      "MUSE debuted #1 in over 60 countries on Spotify",
    ],
    isBias: false,
  },
  {
    slug: "jungkook",
    name: "Jeon Jungkook",
    hangul: "전정국",
    stageName: "Jungkook",
    born: "September 1, 1997",
    age: 28,
    positions: ["Main Vocalist", "Lead Dancer", "Center", "Sub-Rapper"],
    nicknames: ["Golden Maknae", "Jungkookie", "Bunny", "JK"],
    bio:
      "Jeon Jungkook, the youngest (maknae) member of BTS, is nicknamed the 'Golden Maknae' for his seemingly limitless talent — singing, dancing, rapping, painting, photography, and athletics. He auditioned for Big Hit at just 13 years old, choosing it over other companies because of RM. He is one of the best-selling solo K-pop artists of all time, with his debut album 'Golden' breaking numerous records. His voice is often described as warm, powerful, and effortlessly versatile.",
    photoUrl: "https://kprofiles.com/wp-content/uploads/2016/04/JungKook.webp",
    solo_discography: [
      { title: "Euphoria", year: 2018, type: "Single" },
      { title: "Still With You", year: 2020, type: "Single" },
      { title: "Left and Right", year: 2022, type: "Single" },
      { title: "Seven", year: 2023, type: "Single" },
      { title: "Golden", year: 2023, type: "Studio Album" },
    ],
    group_highlights: [
      "Best-selling debut album by a Korean solo artist ('Golden')",
      "'Seven' became one of the longest-charting K-pop songs on Hot 100",
      "Performed at the 2022 FIFA World Cup opening ceremony",
      "Youngest member, debuted at age 15",
      "Known for iconic fancams and athletic feats at BTS concerts",
    ],
    isBias: false,
  },
];

export function getMember(slug: string): Member | undefined {
  return members.find((m) => m.slug === slug);
}
