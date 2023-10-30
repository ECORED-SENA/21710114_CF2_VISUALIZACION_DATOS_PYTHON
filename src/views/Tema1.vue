<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Herramientas a utilizar
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.px-4.py-5
        p La comunidad de Python es muy grande, por lo tanto, es posible encontrar un gran número de librerías para visualizar datos. Al tener tanta variedad de opciones, a veces se hace realmente difícil determinar cuándo utilizar cada una de ellas.
    p.mb-5 Por consiguiente, a continuación, se relacionan las más utilizadas por la comunidad Python y que han demostrado ser las librerías más poderosas frente a los temas de interpretación de gráficas:
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img1.svg', style="width: 450px" ,alt='').m-auto
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Matplotlib")
            .col-12
              p Es la librería más antigua de todas y, asimismo, es la más potente; de hecho, de esta librería surgen muchas otras más. Se caracteriza por su gran posibilidad de hacer de todo con ella, pero de ahí viene también su complejidad y conseguir información de cómo hacer las cosas con esta librería no resulta tan fácil.
          .row(titulo="Bokeh")
            .col-12
              p Es una de las librerías más recientes o jóvenes, pero no por ello deja de ser una herramienta sofisticada y potente, ya que permite realizar gráficos interactivos al estilo de D3.js. Se caracteriza por su fácil trabajo con los navegadores actuales, ya que sus gráficas profesionales son congruentes con los grandes volúmenes de datos que puede manejar; es una gran herramienta para cualquier persona que quiera graficar de manera rápida y sencilla gráficos interactivos, como #[em dashboards]; sin embargo, esta librería es capaz de crear tanto gráficos estáticos como interactivos.
          .row(titulo="Seaborn")
            .col-12
              p Librería especializada en gráficos estadísticos. Como muchas otras, está basada en la librería madre de muchas, Matplotlib; con ella, se pueden elaborar visualizaciones complejas de manera sencilla. Una de las características de esta librería es el desarrollo de regresiones lineales, distribuciones de una o varias variables aleatorias, entre otras características que le dan más importancia para que sea una buena opción a la hora de graficar.
          .row(titulo="Folium")
            .col-12
              p Si se quiere realizar gráficos geográficos, esta librería es la indicada, ya que permite realizar gráficos de alta densidad e interactivos al estilo de leaflet.js., debido a que los gráficos de folium son interactivos, lo que hace que sea la herramienta ideal para realizar #[em dashboards].
    p.mb-5 Cuando se empieza un proyecto de visualización, la duda que se viene a la cabeza es cuál herramienta utilizar para poder realizar un trabajo que satisfaga las necesidades del usuario final. #[b.txt-c1 En ese orden de ideas, es bueno tener en cuenta la siguiente guía, que ayudará a la escogencia de la herramienta o librería indicada; no es obligatorio seguirla al pie de la letra, pero será de gran valor a la hora de elegir]:

    figure.mb-5
      img(src='@/assets/curso/tema4/img3.svg', style="" ,alt='Diagrama de decisión para guiar la elección de herramientas y librerías en Python para visualización de datos. El diagrama plantea la pregunta central ¿Qué quieres mostrar? y desglosa varias opciones y categorías, como: Comparación,Distribución y Relación, entre otras, para ayudar a determinar la mejor herramienta para cada necesidad específica.').m-auto

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
      .row(titulo="Dos variables (Relación)")
        .col-lg-4.mb-4.mb-lg-0
          p En la categoría de relación, si tienes dos variables, podrás usar un #[b gráfico de dispersión]:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img3.png', style="width: 850px" ,alt='Imagen de una gráfica de dispersión.').m-auto
      .row(titulo="Tres variables (Relación)")
        .col-lg-4.mb-4.mb-lg-0
          p En la categoría de relación, si tienes tres variables, podrás usar un #[b gráfico de burbujas]:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img4.png', style="width: 850px" ,alt='Imagen de una gráfica de burbujas.').m-auto
      .row(titulo="Variable única (Distribución)")
        .col-lg-4.mb-4.mb-lg-0
          p En la categoría de distribución, podemos tener una variable única, pero que, a su vez, tenga pocos o muchos ítems; para este caso, se recomiendan los siguientes gráficos:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img5.png', style="width: 850px" ,alt='Imagen de un histograma de columnas y de un histograma de línea.').m-auto
      .row(titulo="Dos o tres variables (Distribución)")
        .col-lg-4.mb-4.mb-lg-0
          p En la categoría de distribución, podemos tener dos o tres variables; para estos casos, se recomiendan los siguientes gráficos:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img6.png', style="width: 850px" ,alt='Imagen de un gráfico de dispersión y de un gráfico de área 3-D.').m-auto
      .row(titulo="Cambiantes en el tiempo (Composición)")
        .col-lg-4.mb-4.mb-lg-0
          p En esta categoría de composición, si tenemos datos cambiantes en el tiempo, podemos manejar los siguientes gráficos, según corresponda:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img7.png', style="width: 850px" ,alt='Imagen de un gráfico apilado 100% de columnas, un gráfico apilado de columnas, de un gráfico apilado de área 100% y de un gráfico apilado de área.').m-auto
      .row(titulo="Estático (Composición)")
        .col-lg-4.mb-4.mb-lg-0
          p En la categoría de composición, si tenemos datos estáticos, podemos manejar los siguientes gráficos, según corresponda:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img8.png', style="width: 850px" ,alt='Imagen de un gráfico de torta, un gráfico de cascada y un gráfico ampliado 100% de columnas con subcomponentes.').m-auto
      .row(titulo="Estático (Comparación)")
        .col-lg-4.mb-4.mb-lg-0
          p En esta categoría de comparación, si tenemos datos estáticos, podemos usar los siguientes gráficos, según corresponda:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img9.png', style="width: 850px" ,alt='Imagen de un gráfico de barras, un gráfico de anchos variables, un gráfico de barras múltiples y una tabla con gráficos embebidos.').m-auto
      .row(titulo="Cambiantes en el tiempo (Comparación)")
        .col-lg-4.mb-4.mb-lg-0
          p En esta categoría de comparación, si tenemos datos estáticos, podemos usar los siguientes gráficos, según corresponda:
        .col-lg-8
          figure
            img(src='@/assets/curso/tema4/img10.png', style="width: 850px" ,alt='Imagen de un gráfico de área circular, un gráfico de línea, un gráfico de columnas y un gráfico de líneas con muchos ítems.').m-auto
    p.mb-5 Como se observa, hay una división en cuatro partes principales, y estas, después, se subdividen en métodos de visualización, que representan las categorías iniciales, como se puede ver a continuación:
    .row.justify-content-center
      .col-11.col-md-7.col-lg.bg-c12.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema4/img5.svg', style="width: 80px" ,alt='').m-auto
          p.text-center #[b Distribuciones]
          p En esta parte, se intenta comprender la distribución de los datos, por lo tanto, se encuentran variables cuantitativas y categóricas; solo depende de las variables y la cantidad de ellas.
      .col-11.col-md-7.col-lg.bg-c12.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema4/img6.svg', style="width: 80px" ,alt='').m-auto
          p.text-center #[b Comparaciones]
          p Se comparan valores a través de diferentes categorías; los gráficos que se identifican con esta etapa son las barras, cuando se realiza una comparación de elementos y categorías, y los diagramas de puntos y líneas, para las variables cuantitativas.
      .col-11.col-md-7.col-lg.bg-c12.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema4/img7.svg', style="width: 80px" ,alt='').m-auto
          p.text-center #[b Relaciones]
          p Lo importante en este modelo es comprender la relación que hay entre las variables; su representación gráfica son las gráficas de dispersión.
      .col-11.col-md-7.col-lg.bg-c12.m-2
        .p-4
          figure.mb-4
            img(src='@/assets/curso/tema4/img8.svg', style="width: 80px" ,alt='').m-auto
          p.text-center #[b Composiciones]
          p En este modelo, lo importante es comprender cómo está compuesta una variable y sus relaciones frente a otras, ya sea en una proyección de tiempo o de manera estática. Las gráficas que las representan son las gráficas de barras y las tortas.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
