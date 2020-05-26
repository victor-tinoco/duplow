$(() => {
    const galleryContainer = $(".gamma-gallery")
    const list = [
        new Picture('', 'polimento-03.jpeg', 1280, 959),
        new Picture('', 'polimento-04.jpeg', 1280, 959),
        new Picture('Serviços', 'servicos.jpeg', 778, 1280),
        new Picture('Polimento técnico', 'polimento-tecnico.jpeg', 1280, 640),
        new Picture('Limpeza e higienização dos bancos de couro', 'limpeza-higienizacao-banco.jpeg', 1280, 641),
        new Picture('Polimento técnico', 'antes-depois-12.jpeg', 1280, 640),
        new Picture('Revitalização de farol', 'revitalizacao-farol-04.jpeg', 1280, 640),
        new Picture('', 'audi.jpeg', 1280, 960),
        new Picture('', 'roda.jpeg', 960, 1280),
        new Picture('', 'bmw-preta.jpeg', 1280, 960),
        new Picture('', 'civic-preto-1.jpeg', 960, 720),
        new Picture('', 'civic-preto-2.jpeg', 960, 720),
        
        new Picture('', 'bmw-branca.jpg', 1280, 994),
        new Picture('Lavagem detalhada', 'lavagem-detalhada.jpg', 768, 1024),
        new Picture('Limpeza Técnica Detalhada', 'antes-depois-01.jpg', 1280, 1280),
        new Picture('', 'carro-antigo.jpg', 1280, 960),
        new Picture('Pintura Vitrificada', 'pintura-vitrificada.jpg', 471, 471),
        new Picture('Limpeza de Motor', 'antes-depois-04.jpg', 386, 386),
        new Picture('Lavagem detalhada', 'limpeza-04.jpg', 1024, 768),
        new Picture('Limpeza de Motor', 'antes-depois-05.jpg', 416, 416),
        new Picture('', 'antes-depois-06.jpg', 1024, 1024),
        new Picture('Descontaminação ferrosa das rodas', 'antes-depois-07.jpg', 424, 424),
        new Picture('', 'antes-depois-08.jpg', 494, 494),
        new Picture('Polimento', 'antes-depois-09.jpg', 626, 626),
        new Picture('Polimento', 'antes-depois-03.jpg', 715, 715),
        new Picture('Polimento', 'antes-depois-10.jpg', 763, 763),
        new Picture('Limpeza de Motor', 'antes-depois-11.jpg', 960, 960),
        new Picture('', 'bmws.jpg', 551, 551),
        new Picture('Detalhe', 'duplow-detalhe.jpg', 1280, 1280),
        new Picture('Higienização Interna', 'higienizacao-01.jpg', 607, 607),
        new Picture('Higienização em estofados', 'higienizacao-02.jpg', 618, 618),
        new Picture('Limpeza e Hidratação em bancos de couro', 'higienizacao-03.jpeg', 1024, 1024),
        new Picture('Limpeza e Hidratação em bancos de couro', 'higienizacao-03.jpg', 1280, 1280),
        new Picture('Lavagem técnica detalhada', 'lavagem-detalhada-02.jpg', 1080, 1080),
        new Picture('Lavagem técnica detalhada', 'lavagem-detalhada-03.jpg', 1024, 1024),
        new Picture('Lavagem detalhada', 'limpeza-01.jpg', 1280, 960),
        new Picture('Lavagem detalhada - Antes', 'limpeza-02.jpg', 1280, 960),
        new Picture('Lavagem detalhada - Depois', 'limpeza-03.jpg', 1280, 960),
        new Picture('Lavagem detalhada Ford - Antes', 'limpeza-05.jpg', 768, 1024),
        new Picture('Lavagem detalhada Ford - Depois', 'limpeza-06.jpg', 768, 1024),
        new Picture('A importância da higienização - Matéria', 'materia-higienizacao.jpeg', 680, 888),
        new Picture('', 'mitsu.jpg', 499, 499),
        new Picture('Oxi-Sanitização', 'oxi-sanitizacao-01.jpg', 800, 800),
        new Picture('Oxi-Sanitização', 'oxi-sanitizacao-02.jpg', 800, 800),
        new Picture('Oxi-Sanitização', 'oxi-sanitizacao-03.jpg', 800, 800),
        new Picture('Oxi-Sanitização', 'oxi-sanitizacao-04.jpg', 800, 800),
        new Picture('Polimento', 'polimento-01.jpg', 798, 798),
        new Picture('Polimento', 'polimento-02.jpg', 692, 692),
        new Picture('Polimento no Parabrisa', 'polimento-parabrisa.jpg', 646, 969),
        new Picture('Polimento Técnico Cristalizado', 'polimento-tecnico-cristalizacao.jpg', 1280, 960),
        new Picture('Remoção de chuva ácida', 'remocao-chuva-acida.jpg', 1024, 768),
        new Picture('', 'resultados.jpg', 1024, 768),
        new Picture('', 'resultados-02.jpg', 768, 1024),
        new Picture('', 'resultados-03.jpg', 768, 1024),
        new Picture('Revitalização de Farol', 'revitalizacao-farol-01.jpg', 376, 376),
        new Picture('Revitalização de Farol', 'revitalizacao-farol-02.jpg', 1280, 1280),
        new Picture('Revitalização de Farol', 'revitalizacao-farol-03.jpg', 436, 436),
        new Picture('Revitalização de Lanterna', 'revitalizacao-lanterna-01.jpg', 497, 497),
        new Picture('Revitalização dos plásticos traseiros', 'revitalizacao-plasticos.jpg', 470, 470)
    ]

    galleryContainer.html(parseToHtml(list));
})

function Picture(title, src, maxWidth, maxHeight) {
    this.title = title;
    this.src = src;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
}

function parseToHtml(list) {
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

    return txt
}