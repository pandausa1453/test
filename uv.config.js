self.__uv$config = {
  prefix: '/service/',
  bare: 'https://uv.bare.workers.dev/',
  encodeUrl: (url) => __uv$config.prefix + __uv$config.codec.encode(url),
  decodeUrl: (url) => __uv$config.codec.decode(url),
  codec: new Codec(),
  tab: {
    title: "Google Docs",
    icon: "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png"
  }
};

class Codec {
  encode(input) {
    return btoa(input);
  }
  decode(input) {
    return atob(input.replace(__uv$config.prefix, ''));
  }
}
