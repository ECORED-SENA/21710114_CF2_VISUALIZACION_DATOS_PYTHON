<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    //.tarjeta.bg-azulclaro.mb-5
      .row.justify-content-center
        .col-11
          .row.justify-content-center.align-items-center
            .col-auto
              figure
                img(src='@/assets/curso/intro/img3.svg', style="max-width: 260px" ,alt='').m-auto

            .col
              .py-5
                .tarjeta.bg-white.p-4.mb-4
                  p A medida que la ciencia de datos se introduce cada vez más en la cotidianidad de las predicciones en las empresas, se torna indispensable para el futuro de estas, dándoles sentido a los millones de datos que circulan diariamente por la red, pero, para esto, es necesario el buen uso de las herramientas de visualización de datos.

                p #[strong A continuación, le invitamos a ver explorar el siguiente video, el cual introduce los temas de este componente formativo:]


    .row.bg-c1
      .col-12
        .px-5.pt-5
          .row.align-items-center.mb-5(data-aos="fade-right")
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/intro/img3.svg', style="width: 260px" ,alt='').m-auto
            .col
              .mn-40
                .tarjeta.bg-white.py-2.px-4.mb-4
                  p.mb-0 A medida que la ciencia de datos se introduce cada vez más en la cotidianidad de las predicciones en las empresas, se torna indispensable para el futuro de estas, dándoles sentido a los millones de datos que circulan diariamente por la red, pero, para esto, es necesario el buen uso de las herramientas de visualización de datos.
                p #[strong A continuación, le invitamos a ver explorar el siguiente video, el cual introduce los temas de este componente formativo:]
          figure(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
