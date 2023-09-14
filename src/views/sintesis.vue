<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .tarjeta.bg-azulclaro.p-4.mb-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/curso/temas/img1.svg", alt="")

        .col
          p.mb-0 Aquí finaliza el estudio de los temas de este componente formativo; en este punto, analice el esquema que se muestra enseguida y realice su propia síntesis de los contenidos estudiados. #[strong ¡Adelante!]


    .row.justify-content-center.mb-5
      .col-xl-11
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")

    .row.justify-content-center.mb-5
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
