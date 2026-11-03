// Formas del contenido que las páginas pasan a sus plantillas (FaqLista, PaginaFuncion).

export interface PreguntaFaq {
  pregunta: string
  // varios párrafos, separados por una línea en blanco
  respuesta: string
  // ancla estable (/pagina#id); si no, sale de la pregunta
  id?: string
}

export interface SeccionFuncion {
  titulo: string
  texto: string
  puntos?: string[]
  // una línea pequeña al final del bloque: un matiz o un requisito
  nota?: string
  // el paso siguiente, al pie del bloque: otra página de la web que lo cuenta entero
  enlace?: { texto: string, ruta: string }
}
