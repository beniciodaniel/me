// arquivo de configuração de conexão com a API do Prismic

import Prismic from "prismic-javascript";

export const apiEndPoint = "https://beniblog.cdn.prismic.io/api/v2";

export const client = (req = null) => {
  const options = req ? { req } : null;

  return Prismic.client(apiEndPoint, options);
};
