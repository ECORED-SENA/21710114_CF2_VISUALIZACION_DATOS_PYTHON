<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Simulación de la herramienta mediante caso práctico

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/img1.png')})`}"
      )
      .bloque-texto-g__texto.px-4.py-5
        p Para poder trabajar y poner en práctica los conceptos adquiridos, se verán dos ejemplos a continuación, para que, a través de la visualización de estos, pueda identificar lo visto hasta este momento y que sirva, a su vez, para su aplicación, teniendo en cuenta todo lo aprendido.


    p.mb-5 Las aplicaciones son muchas, pero vea las siguientes simulaciones donde es posible ver el código utilizado y el resultado:


    .row.justify-content-center.mb-5
      .col-xl-12
        .tarjeta.color-acento-botones1.p-4.mb-5
          h4 Ejemplo 1
          p.mb-0 Se digita un código donde se le pregunta a un usuario por las ventas en un intervalo de años y que muestra, mediante un diagrama, el incremento o decremento, dado el caso, de las ventas de la empresa:

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 9.
              span Simulación de caso 1

            figure
              img(src="@/assets/curso/tema6/img2.png", alt="Imagen de la simulación del caso, que muestra el código señalado y el diagrama con el incremento o decremento de ventas, citado.")

    .row.justify-content-center.mb-5
      .col-xl-12
        .tarjeta.color-acento-botones1.p-4.mb-5
          h4 Ejemplo 2
          p.mb-0 Se digita un código para obtener un diccionario de notas con las materias de un salón de clase y además una cadena con la palabra de algún color y que retorne un diagrama de barras con las notas y también en el color que se indicó.

        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-4
              h5 Figura 10.
              span Simulación de caso 2

            figure
              img(src="@/assets/curso/tema6/img3.png", alt="Imagen de la simulación del caso, que muestra el código señalado y el diagrama de barras con las materias y notas.")

    .row
      .col-auto
        figure
          img(src="@/assets/curso/tema6/img4.svg", alt="")
      .col
        p.mb-0 Los datos están cambiando la forma de ver los problemas y las decisiones, las empresas que están en la cúspide del mercado emplean sus habilidades para utilizar todo lo que esté a su alcance para la recolección de estos datos y así poder incursionar con nuevas tendencias en todos los campos; los datos están cambiando la base de las competencias.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
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
