<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Implementación con #[em Matplotlib]
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.px-4.py-5
        p Esta librería se destaca por ser la más utilizada en la comunidad desarrolladora, particularmente, para los científicos de datos. Matplotlib, como ya se ha dicho, no es más que una biblioteca de Python para la visualización de gráficas dinámicas o estáticas. En este apartado, se tratará de explicar cómo es su implementación y cuáles son las gráficas resultantes.
    .row.justify-content-center.align-items-center
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img1.svg', style="width: 450px" ,alt='').m-auto
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Primer paso")
            .col-12
              p Correr el comando pip a través de Google Colab: pip install matplotlib
              p Una vez realizada la activación de la librería, utilizamos los parámetros adecuados para realizar una gráfica, estos parámetros pueden estar dados por una empresa que requiera visualizar el comportamiento de determinado producto en el tiempo o simplemente con fines estadísticos o de geolocalización.
          .row(numero="2" titulo="Segundo paso")
            .col-12
              p A continuación, veamos, a través de un ejemplo, la manera en que se utiliza la librería objeto de estudio:
              p Graficamos la siguiente función: f (x)=sin2(X-2)e-X2 sobre el intervalo [0,2], agregando la etiqueta de los ejes y un título apropiado, como vemos en la imagen.
          .row(numero="3" titulo="Tercer paso")
            .col-12
              p En el #[em script] que se observa a continuación, se comentarán todos los ajustes correspondientes; los parámetros son esenciales para darle la forma y función al gráfico, pero puede cambiar y jugar con estos valores para estudiar sus cambios.
          .row(numero="4" titulo="Cuarto paso")
            .col-12
              p Pero, a su vez, si lo necesitamos, al modificar los parámetros colocados, la gráfica debe cambiar, como podemos ver en la imagen.
    Separador
    #t_5_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Componentes de una figura
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .row.mb-3
          .col-12.bg-c6
            .p-4
              p.mb-0 La forma en que se puede realizar una gráfica puede variar según lo que se requiera representar, por lo tanto, existen diferentes formas con las que se puede representar una situación, siendo muy amplias y útiles, gracias a las librerías especializadas como Matplotlib.
        p.mb-0 Las gráficas que aportan estas librerías ofrecen información contundente frente a los datos ingresados, es posible categorizarlas bajo la premisa que se tenga para la organización de datos, tal y como se expone a continuación:
      .col-lg-4
        figure
          img(src='@/assets/curso/tema5/img2.svg', style="width: 450px" ,alt='').m-auto
    h3.mb-4 Al comparar datos
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1]. Gráfica de comparación de datos
    figure.mb-5
      img(src='@/assets/curso/tema5/img3.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 Los siguientes tipos de gráficos son muy útiles y suelen ser, también, frecuentemente usados:
    .row.mb-5
      .col-12.bg-c5
        .p-4
          SlyderB(:datos="datosSlyder1")
    h3.mb-4 Al comparar datos
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 2]. Gráfica de exploración de relaciones
    figure.mb-5
      img(src='@/assets/curso/tema5/img4.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 Cuando lo que se quiere es explorar la composición, por ejemplo, de una variable categórica y analizar relaciones del tipo part-to-whole, los siguientes tipos de visualizaciones son muy útiles:
    .row.mb-5
      .col-12.bg-c5
        .p-4
          SlyderB(:datos="datosSlyder2")
    h3.mb-4 Análisis en el tiempo
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 3]. Gráfica de análisis en el tiempo
    figure.mb-5
      img(src='@/assets/curso/tema5/img5.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 Cuando se busca analizar la relación entre una o más variables con un componente temporal como, por ejemplo, el analizar la evolución de los salarios de Uruguay, respecto del tiempo, los siguientes tipos de visualizaciones son los indicados:
    .row.mb-5
      .col-12.bg-c5
        .p-4
          SlyderB(:datos="datosSlyder3")
    h3.mb-4 Analizar distribución de un #[i dataset]
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 4]. Representación gráfica de datos estructurados (#[i dataset])
    figure.mb-5
      img(src='@/assets/curso/tema5/img6.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 Para analizar la distribución de una variable en un determinado dataset y comparar, por ejemplo, con otros datasets, encontrando relaciones y correlaciones, los siguientes tipos de gráficos son muy útiles:
    .row.mb-5
      .col-12.bg-c5
        .p-4
          SlyderB(:datos="datosSlyder4")
    h3.mb-4 Evaluar #[i performance] de un dato
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 5]. Gráfica de #[i performance]
    figure.mb-5
      img(src='@/assets/curso/tema5/img7.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 Cuando se quiere evaluar el rendimiento de una variable y comparar el valor real con valores KPI, se suele recurrir a los siguientes tipos de gráficos:
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones1.p-4(titulo="Gauge circular")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 El indicador circular o indicador angular es un tipo de gráfico de indicadores, con una escala radial, como velocímetro, voltímetro, amperímetro y otros.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img20.png', style="width: 350px" ,alt='').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Gauge lineal")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Linear Gauge es una visualización de herramientas de medición con una escala lineal, como termómetros, tanques, indicadores de color (LED), etc. Los valores de los datos se muestran en el eje del indicador, con la ayuda de uno o varios punteros: marcadores, rangos, etc.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img21.png', style="width: 350px" ,alt='').m-auto
      .tarjeta.color-acento-botones1.p-4(titulo="Bullet graph")
        .row.align-items-center
          .col-lg-8.mb-4.mb-lg-0
            p.mb-0 Los gráficos de viñetas están diseñados para superar los problemas fundamentales de los indicadores circulares y lineales, que a menudo están repletos de decoración inútil (y que distrae), mientras muestran muy poca información y requieren demasiado espacio. Los gráficos de viñetas pueden ser tanto verticales como horizontales.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema5/img22.png', style="width: 350px" ,alt='').m-auto
    h3.mb-4 Datos geográficos
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 6]. Gráfica de #[i performance] geográfico
    figure.mb-5
      img(src='@/assets/curso/tema5/img8.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 Muchas veces, la mejor forma de darle sentido a datos geográficos (georreferenciados) es utilizando visualizaciones en un mapa, teniendo en cuenta:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img9.svg', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Mapa de colores (choropleth map)")
            .col-12
              p permite identificar diferencias entre áreas geográficas.
          .row(titulo="Mapa de puntos (dot map)")
            .col-12
              p Proporciona una visualización accesible de la distribución geográfica de los fenómenos en las áreas geográficas en las que se encuentran.
          .row(titulo="Mapa de burbujas (bubble map)")
            .col-12
              p Similar a los gráficos de burbujas, permite agregar una tercera dimensión a la posición de un fenómeno, utilizando el tamaño de una burbuja. Son muy útiles para agregar la información de un mapa de puntos cuando se cuenta con tantos puntos que se hace difícil entender la visualización.
          .row(titulo="Mapa de conexiones (connector map)")
            .col-12
              p Permite representar relaciones entre los distintos puntos del mapa mediante líneas que unen los puntos.
          .row(titulo="Mapa de flujos (flow map)")
            .col-12
              p Útiles para explorar cómo los objetos se mueven entre ubicaciones, en especial cuando interesa mostrar la dirección del flujo.
    p Hasta este punto, se han presentado diferentes maneras para realizar una gráfica, según la necesidad que se quiera representar, sabiendo que se tiene una gran cantidad de opciones, según el fin que se busque.
    p.txt-c1.mb-5 #[b Algunos ejemplos de gráficas y representaciones de datos son:]
    .row
      .col-12.bg-c5
        .p-4
          SlyderB(:datos="datosSlyder5")
    Separador
    #t_5_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Definición de Pandas
    .row.bg-c13
      .col-12
        .p-5
          p Según Google Colaboratory (2022), “Es una API de análisis de datos en columnas, ideal para manipular y analizar datos de entrada”. Además, muchos marcos de trabajo de AA admiten las estructuras de datos Pandas como entradas. Pandas es muy popular, es una librería por preferencia dentro de la comunidad desarrolladora, es una de las más versátiles entre las de código abierto y más aún cuando se habla de temas como ciencia de datos y machine learning por su poderío en las estructuras que ofrece y la facilidad para manejar grandes cantidades de datos.
          .row.justify-content-between.mb-5
            .col-auto.bg-c6
              .p-3
                p.mb-0 Sobre pandas, se puede afirmar que:
            .col-auto
              figure
                img(src='@/assets/curso/tema5/img11.svg', style="width: 70px" ,alt='').m-auto
          .row.justify-content-center
            .col-10.col-md-8.col-lg-4.bg-c14
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema5/img12.svg', style="width: 120px" ,alt='').m-auto
                p.text-center.text-white.mb-0 Esta herramienta nace con la necesidad, de los analistas de datos, de unificar esfuerzos en una sola herramienta poderosa y facilitar la labor: analizar, depurar y seleccionar datos.
            .col-10.col-md-8.col-lg-4.bg-c15
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema5/img12.svg', style="width: 120px" ,alt='').m-auto
                p.text-center.mb-0 Hay dos estructuras poderosas dentro de la librería de datos Pandas: Series y DataFrame. Las Series hacen referencia a un array unidimensional que puede almacenar cualquier tipo de dato.
            .col-10.col-md-8.col-lg-4.bg-c14
              .p-4
                figure.mb-4
                  img(src='@/assets/curso/tema5/img12.svg', style="width: 120px" ,alt='').m-auto
                p.text-center.text-white.mb-0 Los DataFrame son bidimensionales, con estructuras que pueden albergar cualquier tipo de dato; a su vez, se pueden interpretar como series.
    h3.mb-4 Datos geográficos
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 7]. Series y #[i DataFrames]
    figure.mb-5
      img(src='@/assets/curso/tema5/img13.svg', style="width: 1250px" ,alt='').m-auto
    p.mb-5 ¿Qué se necesita para trabajar con Pandas a partir de ahora? Analice la información presentada en el siguiente video, la cual le indicará lo que necesitará:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_5_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Tipos de entradas para graficar funciones
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .row
          .col-12.bg-c6
            .p-4
              p.mb-0 Como se ha venido estudiando en este componente formativo, se observa que existen diversas gráficas que pueden ayudar a la proyección estadística de algo que se quiera visualizar de la mejor manera, utilizando las herramientas correspondientes y las técnicas adecuadas para conseguir el objetivo propuesto; no obstante, las librerías que suministra Python son la mejor opción en el mercado de la ciencia de datos. Por ese motivo, la librería Matplotlib es la más utilizada en la comunidad del Big Data, se trata de la librería más grande y más completa de Python, que además de eso contiene dos módulos principales: pyplot y pylab, ambos con diferencias puntuales.
      .col-lg-8
        figure
          img(src='@/assets/curso/tema5/img26.png', style="width: 775px" ,alt='').m-auto
    p.mb-5 Pyplot es muy versátil y permite crear gráficas automatizando sus ejes cuando son creados. Por otro lado, pylab no se queda atrás con sus bondades, ya que trae algo de pyplot para la creación de gráficos con la versatilidad de Numpy y realizar cálculos con arrays con una etiqueta muy particular de Matlab.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema5/img14.svg', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        .row
          .col-12.bg-c5
            .p-4
              p A continuación, se ilustrará cómo es posible trabajar con estas funciones que marcan la pauta para una estructuración correcta de las gráficas de visualización:
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 8]. Comenzando a graficar funciones
              figure.mb-5
                img(src='@/assets/curso/tema5/img27.png', style="width: 550px" ,alt='').m-auto
              p.mb-5 Luego, se procede a crear un gráfico de la manera más sencilla posible:
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 9]. Graficación
              figure
                img(src='@/assets/curso/tema5/img28.png', style="width: 650px" ,alt='').m-auto

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    datosSlyder1: [
      {
        titulo: 'Gráfico de barras',
        texto:
          'Permite comparar, de forma directa, valores cuantitativos por variable o categoría.',
        imagen: require('@/assets/curso/tema5/img2.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de pilas apliadas',
        texto:
          'Permite analizar valores cuantitativos por categoría y, a la vez, compararlos con diferentes muestras. Por ejemplo, analizar el PBI de diferentes países, teniendo en cuenta el aporte porcentual de cada sector.',
        imagen: require('@/assets/curso/tema5/img3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de radar',
        texto:
          'Es otra alternativa para comparar los valores cuantitativos de diferentes variables. Por ejemplo, mostrar el puntaje en diferentes habilidades de las destrezas de un jugador de fútbol, como conversión de goles, precisión en pases, etc.',
        imagen: require('@/assets/curso/tema5/img4.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Gráfico de torta',
        texto:
          'Permite analizar de forma básica la composición porcentual de una variable categórica.',
        imagen: require('@/assets/curso/tema5/img5.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico piramidal',
        texto:
          'Cuando los datos representan o responden a una "jerarquía", puede ser interesante utilizar este tipo de gráficos.',
        imagen: require('@/assets/curso/tema5/img6.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mapa de árbol',
        texto:
          'Permite representar relaciones jerárquicas complejas. Por ejemplo, la cantidad de ingresos anuales de una compañía agregados por unidades de negocio y para cada unidad de negocio por proyecto.',
        imagen: require('@/assets/curso/tema5/img7.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de embudo',
        texto:
          'Este tipo de gráfico se utiliza mucho para comparar variables cuantitativas que de alguna forma están relacionadas entre sí como parte de un proceso. Por ejemplo, se puede utilizar para analizar ventas de un sitio de e-commerce, ayudando a identificar los cuellos de botella del proceso.',
        imagen: require('@/assets/curso/tema5/img8.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder3: [
      {
        titulo: 'Gráfico de línea / curva',
        texto:
          'Es la representación gráfica más simple y utilizada para mostrar la evolución de una variable cuantitativa en función de otra variable.',
        imagen: require('@/assets/curso/tema5/img9.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de área',
        texto:
          'A diferencia de la anterior, utiliza áreas para representar una variable cuantitativa.',
        imagen: require('@/assets/curso/tema5/img10.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de velas o candela japonesa',
        texto:
          'Es muy útil cuando se quiere analizar una variable que puede tomar múltiples valores para un mismo momento, por ejemplo, analizar la evolución del precio de las acciones de una compañía frente a otras, tomando como referencia el precio de apertura y cierre de las acciones en la bolsa por día. Es una variante de las gráficas OHLC.',
        imagen: require('@/assets/curso/tema5/img11.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico Sparkline',
        texto:
          'Consiste en construir versiones simplificadas y pequeñas de otros gráficos temporales, como Line Charts o Area Charts, eliminando, por ejemplo, los ejes del gráfico. Son muy útiles para utilizar en tablas, donde, para cada fila, queremos hacer más visual una variable determinada. Por ejemplo, listar los montos totales de exportaciones de granos en Uruguay en un año entero utilizando Sparklines para mostrar, para cada grano, la variación mensual del precio de este.',
        imagen: require('@/assets/curso/tema5/img12.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder4: [
      {
        titulo: 'Histogramas',
        texto:
          'Un histograma es una representación de la estimación de la distribución de valores de un dataset numérico.',
        imagen: require('@/assets/curso/tema5/img13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de dispersión de puntos',
        texto:
          'Permite examinar las tendencias en distribución y correlación entre dos variables.',
        imagen: require('@/assets/curso/tema5/img14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de burbujas',
        texto:
          'Cada punto se grafica como un disco, expresando dos de los atributos/dimensiones del dato a través de la ubicación del disco en el sistema de ejes cartesianos y el tercero, a través de su tamaño.',
        imagen: require('@/assets/curso/tema5/img15.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico Box and Whisker',
        texto:
          'El diagrama de caja y bigotes es un tipo de gráfico que muestra un resumen de una gran cantidad de datos en cinco medidas descriptivas, además de intuir su morfología y simetría. Este tipo de gráficos nos permite identificar valores atípicos y comparar distribuciones.',
        imagen: require('@/assets/curso/tema5/img16.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico de errores',
        texto:
          'Los gráficos de barras de error representan la variabilidad de los datos e indican el error (o incertidumbre) en una medida notificada.',
        imagen: require('@/assets/curso/tema5/img17.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Mapa de calor',
        texto:
          'Es una representación visual bidimensional de los datos, donde los valores se codifican en colores.',
        imagen: require('@/assets/curso/tema5/img18.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Gráfico polar',
        texto:
          'Los gráficos polares son útiles para mostrar datos científicos. Son gráficos circulares, que usan valores y ángulos para mostrar información como coordenadas polares.',
        imagen: require('@/assets/curso/tema5/img19.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyder5: [
      {
        titulo: 'Gráfico de barras',
        texto:
          '<b>bar(x, y)</b>: grafica una barra vertical, donde x es una lista con la posición de las barras en el eje X, y y es una lista con la altura de las barras en el eje Y.',
        imagen: require('@/assets/curso/tema5/img23.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Histogramas',
        texto:
          '<b>hist(x, bins)</b>: diagrama un histograma con las frecuencias que resultan de agrupar los datos de la lista x en las clases definidas por la lista bins.',
        imagen: require('@/assets/curso/tema5/img24.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Diagrama de sectores',
        texto:
          'Diagramar una imagen de sectores con frecuencias de la lista X.',
        imagen: require('@/assets/curso/tema5/img25.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
