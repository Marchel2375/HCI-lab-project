// Add Product Function
function addProducts(name, type) {
    let card = $('<a href="#" class= "link-text card-container"></a>');
    card.append('<img src="asset/skincare/' + (type + '/' + name) + '.webp" class="icon-card">');
    card.append('<h4 class="card-text">' + name + '</h4>');
    card.append('<h4 class="card-text ">Rp. ' + ((Math.floor(Math.random() * 141) + 10) + '.000') + '</h4>');
    $("#" + type).append(card);
}

// Moisturizer
addProducts("CAUDALIE Vinoperfect Overnight Cream", "Moisturizer");
addProducts("CAUDALIE Vinosource Moisturizing Matifying", "Moisturizer");
addProducts("CAUDALIE Vinoperfect Radiance Moisturizer", "Moisturizer");
addProducts("MARIO BADESCU Facial Spray with Aloe, Herbs, and Rosewater", "Moisturizer");
addProducts("SEPHORA COLLECTION Hand Balm", "Moisturizer");
addProducts("MARIO BADESCU Facial Spray with Aloe, Chamomile, and Lavender", "Moisturizer");
addProducts("CAUDALIE Vinopure Skin Perfecting Mattifying Moisturizer", "Moisturizer");
addProducts("CAUDALIE Beauty Elixir", "Moisturizer");
addProducts("MARIO BADESCU Buffering Lotion", "Moisturizer");
addProducts("MARIO BADESCU Facial Spray Travel Trio", "Moisturizer");

// Toner
addProducts("ALPHA-H Liquid Gold", "Toner");
addProducts("MARIO BADESCU Glycolic Acid Toner", "Toner");
addProducts("MARIO BADESCU Special Cucumber Lotion", "Toner");
addProducts("LANCOME Tonique Confort Re-Hydrating", "Toner");
addProducts("DR. JART+ New Ceramidin Liquid", "Toner");
addProducts("NUXE Aquabella Beauty-Revealing Essence-Lotion", "Toner");
addProducts("DR. JART+ V7 Emulsion", "Toner");
addProducts("LANEIGE Water Bank Hydro Essence Set", "Toner");
addProducts("CAUDALIE Beauty Elixir Bubble 2019", "Toner");
addProducts("CAUDALIE Moisturizing Toner", "Toner");

// Treatments
addProducts("MARIO BADESCU Drying Lotion", "Treatments");
addProducts("SEPHORA COLLECTION Lip Mask", "Treatments");
addProducts("SEPHORA COLLECTION Lip Scrub", "Treatments");
addProducts("SEPHORA COLLECTION The Blue Mask (Limited Edition)", "Treatments");
addProducts("SEPHORA COLLECTION Eye Mask", "Treatments");
addProducts("SEPHORA COLLECTION Lip Balm", "Treatments");
addProducts("ALPHA-H Liquid Gold", "Treatments");
addProducts("SEPHORA COLLECTION Face Mask", "Treatments");
addProducts("KORA ORGANICS Noni Glow Face Oil", "Treatments");
addProducts("SEPHORA COLLECTION Frosted Party Freezing & Peeling Mask Duo", "Treatments");

// Cleanser
addProducts("MARIO BADESCU Acne Facial Cleanser", "Cleanser");
addProducts("SEPHORA COLLECTION The Charcoal Kit (Limited Edition)", "Cleanser");
addProducts("SEPHORA COLLECTION Triple Action Cleansing Water", "Cleanser");
addProducts("MARIO BADESCU Seaweed Cleansing Soap", "Cleanser");
addProducts("PETER THOMAS Roth Irish Moor Mud Purifying Cleanser Gel", "Cleanser");
addProducts("CAUDALIE Micellar Cleansing Water", "Cleanser");
addProducts("SEPHORA COLLECTION Charcoal Exfoliating Wipes", "Cleanser");
addProducts("SEPHORA COLLECTION Exfoliating Wipes", "Cleanser");
addProducts("LANEIGE Moist Cream Cleanser Set C", "Cleanser");
addProducts("CAUDALIE Instant Foaming Cleanser", "Cleanser");