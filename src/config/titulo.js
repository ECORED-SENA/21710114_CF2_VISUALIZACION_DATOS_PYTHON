module.exports = 'Herramientas de visualización de datos'export default {
  global: {
    componenteFormativo: 'Herramientas de visualización de datos',
    descripcionCurso: 'Este componente formativo aborda aspectos generales y claves de las herramientas de visualización, mismas que han ayudado a interpretar los datos que pretenden guiar tendencias y que, realizando una serie de métodos, permiten sacarles el mejor provecho definiendo objetivos específicos. Estas herramientas se trasladan al lenguaje de programación preferido por la comunidad de desarrolladores (Python), gracias también a las librerías que permiten hacer análisis científico de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Herramientas a utilizar',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Implementación con Matplotlib',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Componentes de una figura',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Definición de Pandas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de entradas para graficar funciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Simulación de la herramienta mediante caso práctico',
        desarrolloContenidos: true,
      },
      /*{
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas a utilizar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Implementación con Matplotlib',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Componentes de una figura',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Definición de Pandas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Tipos de entradas para graficar funciones',
            hash: 't_5_3',
          },
        ],
      },*/
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Herramientas a utilizar.',
      referencia: 'Credenciales Alternativas TEC. (2020). <em>Las gráficas más populares para visualización de datos</em>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OTtN0gu1-UA',
    },
    {
      tema: '1. Herramientas a utilizar.',
      referencia: 'Comunicación Numérica. (2021). <em>Crea Reportes con Impacto, con visualización de datos</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TYp2lJhuE6A',
    },
    {
      tema: '1. Herramientas a utilizar.',
      referencia: 'Comunicación Numérica. (2020). <em>Fundamentos del Análisis de Datos para Toma de Decisiones</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=qvZxvMWMvDo',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado: 'son los algoritmos que mediante una serie de datos identifican distintas etiquetas. Por ejemplo, se pueden hacer dos grupos y diferenciar clientes que están cercanos a la compra en una página web de clientes que no lo están. Clientes muy rentables, poco rentables y no rentables.',
    },
    {
      termino: 'Centroides',
      significado: 'es la ubicación real o imaginaria que representa el centro del grupo. Cada punto de datos se asigna a cada uno de los grupos mediante la reducción de la suma de cuadrados en el grupo.',
    },
    {
      termino: 'Dataset',
      significado: 'no es más que un conjunto de datos tabulados en cualquier sistema de almacenamiento de datos estructurados.',
    },
    {
      termino: 'Google Colaboratory',
      significado: 'Colaboratory, o "Colab" para abreviar, es un producto de Google Research. Permite a cualquier usuario escribir y ejecutar código arbitrario de Python en el navegador. Es especialmente adecuado para tareas de aprendizaje automático, análisis de datos y educación.',
    },
    {
      termino: 'IPython',
      significado: 'es un <em>shell</em> interactivo que añade funcionalidades extra al modo interactivo incluido con Python, como resaltado de líneas y errores mediante colores, una sintaxis adicional para el <i>shell</i>, autocompletado mediante tabulador de variables, módulos y atributos.',
    },
    {
      termino: 'Jupyter',
      significado: 'Jupyter Notebook es una aplicación cliente-servidor lanzada en 2015 por la organización sin ánimo de lucro Proyecto Jupyter. Permite crear y compartir documentos web en formato JSON que siguen un esquema versionado y una lista ordenada de celdas de entrada y de salida. Estas celdas albergan, entre otras cosas, código, texto (en formato <i>Markdown</i>), fórmulas matemáticas y ecuaciones, o también contenido multimedia (<i>Rich Media</i>). El programa se ejecuta desde la aplicación web cliente que funciona en cualquier navegador estándar.',
    },
    {
      termino: '<em>Machine Learning</em>',
      significado: '<em>Machine Learning</em> es una forma de la IA que permite a un sistema aprender de los datos en lugar de aprender mediante la programación explícita. Sin embargo, machine learning no es un proceso sencillo. Conforme el algoritmo ingiere datos de entrenamiento, es posible producir modelos más precisos basados en datos. Un modelo de machine learning es la salida de información que se genera cuando entrena su algoritmo de <i>machine learning</i> con datos. Después del entrenamiento, al proporcionar un modelo con una entrada, se le dará una salida.',
    },
  ],
  referencias: [
    {
      referencia: 'Aprende IA. (2020). <em>¿Qué es el Aprendizaje no Supervisado?.</em>',
      link: 'https://aprendeia.com/aprendizaje-no-supervisado-machine-learning/',
    },
    {
      referencia: 'Chacón, J. (2021). <em>Introducción a Pandas, la librería de Python para trabajar con datos. Profile.</em>',
      link: 'https://profile.es/blog/pandas-python/',
    },
    {
      referencia: 'De la Fuente, Ó. (2019). <em>Google Colab: Python y Machine Learning en la nube. Adictos al trabajo.</em>',
      link: 'https://www.adictosaltrabajo.com/2019/06/04/google-colab-python-y-machine-learning-en-la-nube/',
    },
    {
      referencia: 'IDATHA. (s. f.).<em>05 - DS - Visualizacion de Datos - Python.ipynb.</em>',
      link: 'https://colab.research.google.com/github/efviodo/idatha-data-science-course/blob/master/notebooks/05%20-%20DS%20-%20Visualizacion%20de%20Datos%20-%20Python.ipynb#scrollTo=RQftWD90aHmb',
    },
    {
      referencia: 'Kumar, A. (2020). <em> Tensor Explained with Python NumPy Examples. Data Analytics.</em>',
      link: '',
    },
    {
      referencia: 'Mariños, J. (2015). <em>Listas en Python. DevCode.</em>',
      link: 'https://devcode.la/tutoriales/listas-python/',
    },
    {
      referencia: 'Na8. (2019). <em>Análisis Exploratorio de Datos con Pandas en Python. Aprende Machine Learning.</em>',
      link: 'https://www.aprendemachinelearning.com/analisis-exploratorio-de-datos-pandas-python/',
    },
    {
      referencia: 'Python Software Foundation. (s. f.). <em>5. Estructuras de datos. Python.</em>',
      link: 'https://docs.python.org/es/3/tutorial/datastructures.html#more-on-lists',
    },
    {
      referencia: 'Rodríguez, D. (2020). <em>Formatos condicionales en Pandas. Analytics Lane.</em>',
      link: 'https://www.analyticslane.com/2020/04/17/formatos-condicionales-en-pandas/',
    },
    {
      referencia: 'Tableau Software. (2019). <em>Guía de visualización de datos para principiantes: definición, ejemplos y recursos de aprendizaje. Salesforce.</em>',
      link: 'https://www.tableau.com/es-mx/learn/articles/data-visualization',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'José Luis Bastidas Pérez',
          cargo: 'Experto Temático',
          centro: 'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Zvi Daniel Grosman Landáez',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes: 'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons: 'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
};

