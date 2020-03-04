$(() => {
    const galleryContainer = $(".gamma-gallery")
    const list = [
        new Picture('Limpeza Técnica Detalhada', 'Limpeza', 'antes-depois-01.jpg', 1280, 1280),
        new Picture('Outra', 'other', '3.jpg', 1800, 1350),
        new Picture('Honda Civic', 'Civic', 'civic.jpg', 768, 1024),
        new Picture('Outra', 'other', '3.jpg', 1800, 1350)
    ]

    fillGallery(galleryContainer, list)
})

function Picture(title, alt, src, maxWidth, maxHeight) {
    this.title = title;
    this.alt = alt;
    this.src = src;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
}

function fillGallery(container, list) {
    var txt = ''
    list.forEach(item => {
        txt += '<li>' +
        '   <div data-alt="'+ item.alt + '" data-description="<h3>' + item.title + '</h3>" data-max-width="' + item.maxWidth + '" data-max-height="' + item.maxHeight + '">' +
        '       <div data-src="plugins/gallery/images/xxxlarge/' + item.src + '" data-min-width="1300"></div>' +
        '       <div data-src="plugins/gallery/images/xxlarge/' + item.src + '" data-min-width="1000"></div>' +
        '       <div data-src="plugins/gallery/images/xlarge/' + item.src + '" data-min-width="700"></div>' +
        '       <div data-src="plugins/gallery/images/large/' + item.src + '" data-min-width="300"></div>' +
        '       <div data-src="plugins/gallery/images/medium/' + item.src + '" data-min-width="200"></div>' +
        '       <div data-src="plugins/gallery/images/small/' + item.src + '" data-min-width="140"></div>' +
        '       <div data-src="plugins/gallery/images/xsmall/' + item.src + '"></div>' +
        '       <noscript>' +
        '           <img src="images/gallery/xsmall/' + item.src + '" alt="' + item.alt + '"/>' +
        '       </noscript>' +
        '   </div>' +
        '</li>'
    });

    container.html(txt);
}