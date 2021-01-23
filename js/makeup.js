// Add Product Function
function addProducts(name, body, type) {
    let card = $('<a href="#" class= "link-text card-container ' + body + '"></a>');
    card.append('<img src="asset/makeup/' + (body + '/' + name) + '.webp" class="icon-card">');
    card.append('<h4 class="card-text">' + name + '</h4>');
    card.append('<h4 class="card-text ">Rp. ' + ((Math.floor(Math.random() * 141) + 10) + '.000') + '</h4>');
    $("#" + type).append(card);
}

// Eyes
addProducts("35 Colors Eye Shadow Palette Eyeshadows Makeup Palette Beauty Accessories Ladies", "eyes", "Powder");
addProducts("COD CmaaDu 16 Warna Shiny Eyeshadow Makeup Mattel Waterproof Flash Palet Eyeshadow", "eyes", "Powder");
addProducts("ETUDE HOUSE BLEND FOR 4 EYES EYESHADOW EYE SHADOW PALETTE NATURAL SHIMMER", "eyes", "Powder");
addProducts("EYESHADOW FOCALLURE 9COLOR PALETTE (FA36)", "eyes", "Powder");
addProducts("EYESHADOW LAMEILA PLAY COLOR EYES EYESHADOW MAKE UP TIPE 3596 ADA 6 WARNA", "eyes", "Powder");
addProducts("FC Beauty Glazed 6 Colors Glitter Pressed Eyeshadow Diamond Makeup Eye Shadow", "eyes", "Powder");
addProducts("Focallure Luminous Eyes Makeup Liner Pen Eyeshadow Pencil Sticker Easy To Wear Long-Lasting Shimmer", "eyes", "Serum");
addProducts("HOJO Long-lasting Anti-smudge Eyeshadow Tray Eye Makeup", "eyes", "Powder");
addProducts("LA MEI LA PLAY COLOR EYES  or LAMEILA EYESHADOW or LA MEI LA EYESHADOW PALATTE", "eyes", "Powder");
addProducts("MAKE OVER Trivia Eye Shadow", "eyes", "Powder");

// Lips
addProducts("LANCOME L'absolu Rouge Cream", "lips", "Moisturizer");
addProducts("ESQA Satin Lip Crayon", "lips", "Moisturizer");
addProducts("SEPHORA COLLECTION Color Lip Last Lipstick", "lips", "Moisturizer");
addProducts("TOO FACED Melted Matte", "lips", "Serum");
addProducts("MARC JACOBS BEAUTY Le Marc Lip Creme", "lips", "Moisturizer");
addProducts("LANCOME L'absolu Rouge Matte", "lips", "Moisturizer");
addProducts("MAKE UP FOR EVER Artist Rouge Lipstick", "lips", "Moisturizer");
addProducts("LANCOME Matte Shaker", "lips", "Serum");
addProducts("SEPHORA COLLECTION Cream Lip Stain", "lips", "Serum");
addProducts("STILA Stay All Day Liquid Lipstick", "lips", "Serum");

// Face
addProducts("[FENTY BEAUTY] Match Stix Matte Skinstick", "face", "Serum");
addProducts("BIOAQUA Concealer dengan 3Pilihan Warna Tahan Air", "face", "Serum");
addProducts("CATRICE FOundation Cair HD dengan Botol Dropper Tahan 24 jam", "face", "Serum");
addProducts("Focallure Concealer Perfect Face Concealer Makeup", "face", "Balm");
addProducts("Kryolan Professional Make Up Supracolor Foundation 15 ml", "face", "Powder");
addProducts("MAKEOVER Camouflage Cream Face Concealer", "face", "Powder");
addProducts("MakeOver Perfect Cover Two Way Cake", "face", "Powder");
addProducts("NATURACTOR Cover Face Foundation ORI Japan", "face", "Balm");
addProducts("TG0061 Focallure concealer tahan 24 jam", "face", "Serum");
addProducts("Y.O.U The Simplicity Color Corrector CC Cushion", "face", "Powder");

// Cheek
addProducts("ADDICTION Cheek Polish", "cheek", "Serum");
addProducts("BENEFIT Cheekleaders Bronze Squad Cheek Palette", "cheek", "Powder");
addProducts("BLUSH & HIGHLIGHTER FOCALLURE FACE MAKEUP PALETTE LIMITED EDITION", "cheek", "Powder");
addProducts("CANMAKE Cream Cheek", "cheek", "Balm");
addProducts("Essence Hey Cheeks", "cheek", "Powder");
addProducts("FOCALLURE FACE 3 IN 1 CONTOUR PALLETE BLUSH ON CONTOUR AND HIGHLIGER", "cheek", "Powder");
addProducts("focallure face mineral pigment blush", "cheek", "Powder");
addProducts("MAKEUP Revolution Ultra Blush Palette - Sugar and Spice", "cheek", "Powder");
addProducts("SEPHORA COLLECTION Colorful Brush", "cheek", "Powder");
addProducts("YOU SIMPLICITY FLUSH BLUSH ON", "cheek", "Powder");

// Filter Selection
function filterSelection(c) {
    $(".card-container").each(function() {
        $(this).removeClass("show");
        if ($(this).attr("class").indexOf(c) > -1)
            $(this).addClass("show");
    });
};
filterSelection("");