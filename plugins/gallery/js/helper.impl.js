$(() => {
    const galleryContainer = $(".gamma-gallery")
    const list = [
        new Picture('BMW Branca', 'bmw-branca.jpg', 1280, 994),
        new Picture('Lavagem detalhada', 'lavagem-detalhada.jpg', 768, 1024),
        new Picture('Limpeza Técnica Detalhada', 'antes-depois-01.jpg', 1280, 1280),
        new Picture('Resultado', 'carro-antigo.jpg', 1280, 960),
        new Picture('Pintura Vitrificada', 'pintura-vitrificada.jpg', 471, 471),
        new Picture('Limpeza de Motor', 'antes-depois-04.jpg', 386, 386),
        new Picture('Lavagem detalhada - Mitsubishi', 'limpeza-04.jpg', 1024, 768),
        new Picture('Limpeza de Motor', 'antes-depois-05.jpg', 416, 416),
        new Picture('Resultado', 'antes-depois-06.jpg', 1024, 1024),
        new Picture('Revitalização de Pneu', 'antes-depois-07.jpg', 424, 424),
        new Picture('Resultado', 'antes-depois-08.jpg', 494, 494),
        new Picture('Polimento', 'antes-depois-09.jpg', 626, 626),
        new Picture('Polimento', 'antes-depois-03.jpg', 715, 715),
        new Picture('Polimento', 'antes-depois-10.jpg', 763, 763),
        new Picture('Limpeza de Motor', 'antes-depois-11.jpg', 960, 960),
        new Picture('BMWs saindo novas', 'bmws.jpg', 551, 551),
        new Picture('Detalhe', 'duplow-detalhe.jpg', 1280, 1280),
        new Picture('Higienização Interna', 'higienizacao-01.jpg', 607, 607),
        new Picture('Higienização em estofados', 'higienizacao-02.jpg', 618, 618),
        new Picture('Higienização e Limpeza em Bancos de couro', 'higienizacao-03.jpeg', 1024, 1024),
        new Picture('Antes e depois de limpeza detalhada em bancos de couro', 'higienizacao-03.jpg', 1280, 1280),
        new Picture('Lavagem técnica detalhada', 'lavagem-detalhada-02.jpg', 1080, 1080),
        new Picture('Lavagem técnica detalhada', 'lavagem-detalhada-03.jpg', 1024, 1024),
        new Picture('Lavagem detalhada', 'limpeza-01.jpg', 1280, 960),
        new Picture('Lavagem detalhada - Antes', 'limpeza-02.jpg', 1280, 960),
        new Picture('Lavagem detalhada - Depois', 'limpeza-03.jpg', 1280, 960),
        new Picture('Lavagem detalhada Ford - Antes', 'limpeza-05.jpg', 768, 1024),
        new Picture('Lavagem detalhada Ford - Depois', 'limpeza-06.jpg', 768, 1024),
        new Picture('A importância da higienização - Matéria', 'materia-higienizacao.jpeg', 680, 888),
        new Picture('Resultados - Mitsubishi', 'mitsu.jpg', 499, 499),
        new Picture('Oxi-Sanitização', 'oxi-sanitização-01.jpg', 800, 800),
        new Picture('Oxi-Sanitização', 'oxi-sanitização-02.jpg', 800, 800),
        new Picture('Oxi-Sanitização', 'oxi-sanitização-03.jpg', 800, 800),
        new Picture('Oxi-Sanitização', 'oxi-sanitização-04.jpg', 800, 800),
        new Picture('Polimento', 'polimento-01.jpg', 798, 798),
        new Picture('Polimento', 'polimento-02.jpg', 692, 692),
        new Picture('Polimento no Parabrisa', 'polimento-parabrisa.jpg', 646, 969),
        new Picture('Polimento Técnico Cristalizado', 'polimento-tecnico-cristalizacao.jpg', 1280, 960),
        new Picture('Remoção de chuva ácida', 'remocao-chuva-acida.jpg', 1024, 768),
        new Picture('Resultado - Mitsubishi', 'resultados.jpg', 1024, 768),
        new Picture('Resultado - Mitsubishi', 'resultados-02.jpg', 768, 1024),
        new Picture('Resultado - Nissan', 'resultados-03.jpg', 768, 1024),
        new Picture('Revitalização de Farol', 'revitalizacao-farol-01.jpg', 376, 376),
        new Picture('Serviços', 'servicos.jpg', 960, 1280),
        new Picture('Revitalização de Farol', 'revitalizacao-farol-02.jpg', 1280, 1280),
        new Picture('Revitalização de Farol', 'revitalizacao-farol-03.jpg', 436, 436),
        new Picture('Revitalização de Lanterna', 'revitalizacao-lanterna-01.jpg', 497, 497),
        new Picture('Revitalização dos plásticos traseiros', 'revitalizacao-plasticos.jpg', 470, 470),
    ]

    fillGallery(galleryContainer, list)
})

function Picture(title, src, maxWidth, maxHeight) {
    this.title = title;
    this.src = src;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
}

function fillGallery(container, list) {
    var txt = ''
    list.forEach(item => {
        txt += '<li>' +
        '   <div data-alt="'+ item.title + '" data-description="<h3>' + item.title + '</h3>" data-max-width="' + item.maxWidth + '" data-max-height="' + item.maxHeight + '">' +
        '       <div data-src="plugins/gallery/images/xxxlarge/' + item.src + '" data-min-width="1300"></div>' +
        '       <div data-src="plugins/gallery/images/xxlarge/' + item.src + '" data-min-width="1000"></div>' +
        '       <div data-src="plugins/gallery/images/xlarge/' + item.src + '" data-min-width="700"></div>' +
        '       <div data-src="plugins/gallery/images/large/' + item.src + '" data-min-width="300"></div>' +
        '       <div data-src="plugins/gallery/images/medium/' + item.src + '" data-min-width="200"></div>' +
        '       <div data-src="plugins/gallery/images/small/' + item.src + '" data-min-width="140"></div>' +
        '       <div data-src="plugins/gallery/images/xsmall/' + item.src + '"></div>' +
        '       <noscript>' +
        '           <img src="images/gallery/xsmall/' + item.src + '" alt="' + item.title + '"/>' +
        '       </noscript>' +
        '   </div>' +
        '</li>'
    });

    container.html(txt);
}