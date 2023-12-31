






const places = [
    {
        "id": "1",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Aerial_view_of_the_London_Eye._MOD_45146076.jpg",
        "title": "London Eye",
        "description": "One of the world's largest observation wheels offering stunning views of London.",
        "postcode": "SE1 7PB"
    },
    {
        "id": "2",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/1600_Aldgate.jpg",
        "title": "Tower of London",
        "description": "Historic castle on the north bank of the River Thames.",
        "postcode": "EC3N 4AB"
    },
    {
        "id": "3",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/1280px-Stonehenge2007_07_30.jpg",
        "title": "Stonehenge",
        "description": "Prehistoric monument in Wiltshire, England.",
        "postcode": "SP4 7DE"
    },
    {
        "id": "4",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/23/A_l%E2%80%99_int%C3%A9rieur_des_thermes.JPG",
        "title": "Roman Baths",
        "description": "A well-preserved Roman site for public bathing.",
        "postcode": "MGR 1502"
    },
    {
        "id": "7",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Braun_%26_Hogenberg_%27Castrum_Puellarum%27_%28Edinburgh_Castle%29_c.1581.jpg",
        "title": "Edinburgh Castle",
        "description": "Historic fortress which dominates the skyline of Edinburgh.",
        "postcode": "EH1 2NG"
    },
    {
        "id": "10",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Badgernet_Snowdonia_walks_1.JPG",
        "title": "Snowdonia National Park",
        "description": "Home to Snowdon, the highest mountain in Wales.",
        "postcode": "LL41 4TR"
    },
    {
        "id": "11",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/37/Aerial_view_of_Cardiff_Castle.jpg",
        "title": "Cardiff Castle",
        "description": "A medieval castle and Victorian Gothic revival mansion.",
        "postcode": "CF10 3FD"
    },
    {
        "id": "12",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Antrim_arms.svg",
        "title": "Giant's Causeway",
        "description": "An area of about 40,000 interlocking basalt columns.",
        "postcode": "BT57 8SU"
    },
    {
        "id": "13",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Opening_Day%2C_Titanic_Belfast%2C_31_March_2012_%2847%29.JPG",
        "title": "Titanic Belfast",
        "description": "Museum on the site of the former Harland & Wolff shipyard.",
        "postcode": "BT3 9DP"
    },
    {
        "id": "14",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/20/Cannon_of_Girona_1.JPG",
        "title": "Ulster Museum",
        "description": "Northern Ireland's treasure house of past and present.",
        "postcode": "BT9 5AB"
    },
    {
        "id": "15",
        "image": "https://upload.wikimedia.org/wikipedia/en/9/99/Question_book-new.svg",
        "title": "Derry's Walls",
        "description": "One of the best examples of a walled city in Europe.",
        "postcode": "BT52 1PQ"
    },
    {
        "id": "16",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a5/Dark_Hedge%2C_Bregagh_Road_Looking_from_the_%27Outside%27_-_geograph.org.uk_-_515098.jpg",
        "title": "Dark Hedges",
        "description": "A beautiful avenue of beech trees.",
        "postcode": "BT53 8TP"
    },
    {
        "id": "17",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Brecon_beacons_arp.jpg",
        "title": "Brecon Beacons National Park",
        "description": "Known for its remote reservoirs, waterfalls and mountain ranges.",
        "postcode": "LD3 8ER"
    },
    {
        "id": "18",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Annals_and_antiquities_of_the_counties_and_county_families_of_Wales%3B_containing_a_record_of_all_ranks_of_the_gentry_with_many_ancient_pedigrees_and_memorials_of_old_and_extinct_families_%281872%29_%2814778120971%29.jpg",
        "title": "Caernarfon Castle",
        "description": "A medieval fortress in Caernarfon, Gwynedd.",
        "postcode": "LL55 2PG"
    },
    {
        "id": "19",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Arms_of_the_Earl_of_Douglas_in_the_King%27s_Old_Building%2C_Stirling_Castle.jpg",
        "title": "Stirling Castle",
        "description": "One of the largest and most important castles in Scotland.",
        "postcode": "FK8 1EJ"
    },
    {
        "id": "22",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Anchor-close.jpg",
        "title": "The Royal Mile",
        "description": "The main artery of the Old Town of Edinburgh.",
        "postcode": "EH1 1QN"
    },
    {
        "id": "23",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/63/Bridges_Crossing_the_River_Avon%2C_geograph_7461717_by_Philip_Halling.jpg",
        "title": "Stratford-upon-Avon",
        "description": "A market town with more than 800 years of history.",
        "postcode": "England"
    },
    {
        "id": "24",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Annotated_Scafel_Pike_Panorama.jpg",
        "title": "Lake District",
        "description": "A popular holiday destination, it's known for its glacial ribbon lakes.",
        "postcode": "LA9 7RL"
    },
    {
        "id": "25",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/AHOTWgold_lama.JPG",
        "title": "British Museum",
        "description": "A public institution dedicated to human history, art and culture.",
        "postcode": "WC1B 3DG"
    },
    {
        "id": "26",
        "image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Arms_of_the_Archbishop_of_York.svg",
        "title": "York Minster",
        "description": "One of the largest of its kind in Northern Europe.",
        "postcode": "YO1 7HH"
    },
    {
        "id": "27",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Cliffs_of_Dover_erosion.jpg",
        "title": "White Cliffs of Dover",
        "description": "Famous for their white chalk face, a symbol of home and war time defense.",
        "postcode": "CT15 6DZ"
    },
    {
        "id": "28",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/070329jad_ukdor_01.jpg",
        "title": "Jurassic Coast",
        "description": "England\u2019s first natural World Heritage Site, covers 95 miles of coastline.",
        "postcode": "EX8 2DH"
    },
    {
        "id": "29",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/1e/20130808_Castle_End_from_Kings_Bridge.jpg",
        "title": "University of Cambridge",
        "description": "A collegiate research university in Cambridge, United Kingdom.",
        "postcode": "CB3 9DA"
    },
    {
        "id": "31",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/bf/%27Scottish_Highlands%27.jpg",
        "title": "Scottish Highlands",
        "description": "Renowned for its stunning scenery, it's a wilderness of sunlit peaks.",
        "postcode": " PH35 4HN"
    },
    {
        "id": "32",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Glasgow_Coat_of_Arms_1996.svg",
        "title": "Glasgow Science Centre",
        "description": "A visitor attraction located in the Clyde Waterfront Regeneration area.",
        "postcode": "G51 1DZ"
    },
    {
        "id": "33",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Aberdeenshire_UK_location_map.svg",
        "title": "Balmoral Castle",
        "description": "A large estate house in Royal Deeside, Aberdeenshire.",
        "postcode": "AB35 5TB"
    },
    {
        "id": "35",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b0/%2B_%22Silver_City%22_wird_Aberdeen_wegen_seiner_vielen_Granitgeb%C3%A4ude_genannt._04.jpg",
        "title": "City of Aberdeen",
        "description": "Scotland's third most populous city, known as 'The Granite City'.",
        "postcode": "DD9 6DL"
    },
    {
        "id": "36",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
        "title": "St Davids",
        "description": "A city and a community in Pembrokeshire.",
        "postcode": "SA62 6SE"
    },
    {
        "id": "37",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Conwy_UK_location_map.svg",
        "title": "Llandudno",
        "description": "A seaside resort, town and community in Conwy County Borough, Wales.",
        "postcode": "LL30 1AH"
    },
    {
        "id": "38",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/-SeneddSwansea_%2822524551390%29.jpg",
        "title": "City of Swansea",
        "description": "Known for its vibrant nightlife and sprawling marina.",
        "postcode": "SA1 3BN"
    },
    {
        "id": "40",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Christopher_Dawson.jpg",
        "title": "Hay-on-Wye",
        "description": "The 'town of books', with over twenty bookshops.",
        "postcode": "HR3 5BN"
    },
    {
        "id": "41",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/60/Dunluce_Castle._County_Antrim%2C_Ireland-LCCN2002717364.jpg",
        "title": "Dunluce Castle",
        "description": "The ruins of a medieval castle in Northern Ireland.",
        "postcode": "BT56 8NE"
    },
    {
        "id": "42",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Arms_of_Chichester.svg",
        "title": "Belfast Castle",
        "description": "A baronial style building located in Belfast.",
        "postcode": "BT15 5GP"
    },
    {
        "id": "44",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c6/Marble_Arch_Caves_%289484853047%29.jpg",
        "title": "Marble Arch Caves",
        "description": "One of Europe's finest show caves.",
        "postcode": "BT92 1DY"
    },
    {
        "id": "45",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/42/Bushmills_Distillery_July_06.jpg",
        "title": "Bushmills Distillery",
        "description": "Home of the famous Irish whiskey.",
        "postcode": "BT57 8XH"
    },
    {
        "id": "47",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/32nd_Indiana_Monument_Louisville.jpg",
        "title": "Cave Hill",
        "description": "Most famous for its striking basaltic columns, it's also known as Napoleon's Nose.",
        "postcode": "ME15 6DU"
    },
    {
        "id": "48",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/Bishops-palace.jpg",
        "title": "St Davids Cathedral",
        "description": "The cathedral is the final resting place of Saint David.",
        "postcode": "SA62 6RF"
    },
    {
        "id": "49",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/2006FACupFinal.JPG",
        "title": "Millennium Stadium",
        "description": "Also known as the Principality Stadium, a multi-purpose venue.",
        "postcode": "CF10 1NS"
    },
    {
        "id": "50",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/82/Area_around_Porth_Coch_Mawr_and_Porth_y_Ffynnon%2C_W_of_Porthclais%2C_Sir_Benfro_-_Pembrokeshire%2C_Wales_09.jpg",
        "title": "Pembrokeshire Coast National Park",
        "description": "Known for its stunning coastline and diverse wildlife.",
        "postcode": "SA72 6DY"
    },
    {
        "id": "51",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Gwynedd_UK_location_map.svg",
        "title": "Portmeirion",
        "description": "A unique and quirky coastal village.",
        "postcode": "LL48 6ER"
    },
    {
        "id": "52",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Boat_House_and_Skating_Pond%2C_Bodnant_Garden.jpg",
        "title": "Bodnant Garden",
        "description": "One of the most beautiful gardens in the UK.",
        "postcode": "LL28 5RD"
    },
    {
        "id": "53",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Aerial_view_of_Tintern_Abbey_50317199.jpg",
        "title": "Tintern Abbey",
        "description": "The ruins of an abbey, founded by Cistercian monks.",
        "postcode": "NP16 6SD"
    },
    {
        "id": "55",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Rope_Bridge%2C_Carrick-a-Rede._County_Antrim%2C_Ireland_LOC_4426684715.jpg",
        "title": "Carrick-a-Rede Rope Bridge",
        "description": "A famous rope bridge near Ballintoy.",
        "postcode": "BT54 6LX"
    },
    {
        "id": "57",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/5a/046CupolaSPietro.jpg",
        "title": "St Patrick's Cathedral",
        "description": "One of the oldest Christian sites in Ireland.",
        "postcode": "SG4 9FJ"
    },
    {
        "id": "58",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Section_of_Hadrian%27s_Wall_1.jpg/1280px-Section_of_Hadrian%27s_Wall_1.jpg",
        "title": "Hadrian's Wall",
        "description": "Roman defensive fortification in Northern England.",
        "postcode": "NE48 3EB"
    },
    {
        "id": "59",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/14/Aa_2006_05_10_okapis.jpg",
        "title": "Chester Zoo",
        "description": "One of the UK's largest zoos at 51 hectares.",
        "postcode": "CH2 1LH"
    },
    {
        "id": "60",
        "image": "https://upload.wikimedia.org/wikipedia/commons/7/74/2007-08-26-09095_GreatBritain_Warwick.jpg",
        "title": "Warwick Castle",
        "description": "A medieval castle developed from a wooden fort, originally built by William the Conqueror.",
        "postcode": "CV34 4QX"
    }
]


module.exports = places;












































