<template>
  <div class="container">
    <h1 class="title has-text-centered">Preços</h1>

    <div class="content">
      <p>
        O SmartKwanza conta com duas versões, a versão Pessoal (ideal para a gestão
        das finanças pessoal ou familiar) completamente gratuito e a versão
        Empresarial (ideal para a gestão de pequenas e médias empresas), a ser
        disponibilizado brevemente.
      </p>
    </div>

    <div class="columns has-text-centered">
      <div class="column">

    <div class="box">
      <h2 class="subtitle personal">Versão Pessoal</h2>
      <h2>GRATUITO</h2>
      <p>-//-</p>
      <div class="content">
        <p>Ideal para gerir as suas finanças e da sua família</p>
        <p>Lançamentos ilimitados</p>
        <p>Contas ilimitadas</p>
        <p>Categorias ilimitadas</p>
        <p>Moeda Única (AKZ)</p>
        <p>Metas</p>
        <p>Gráficos</p>
        <p>Versão Móvel <span class="tag is-danger">brevemente</span></p>
      </div>

      <a href="//app.smartkwanza.com/signup" class="button is-primary">
        COMECE AGORA
      </a>
    </div>

  </div>
  <div class="column">

    <div class="box">
      <h2 class="subtitle business">Versão Empresarial <span class="tag is-danger">brevemente</span></h2>

      <div class="content">
        <br>
        <p>Ideal para gerir as finanças da sua Empresa</p>
        <p>Contas do POC &#x1F1E6;&#x1F1F4;</p>
        <p>Emissão de Facturas</p>
        <p>Gestão de Orçamentos</p>
        <p>Multi-Moedas</p>
        <p>Multi Utilizadores</p>
        <p>Relatórios Completos (com gráficos)</p>
        <p>Gestão de Activos</p>
        <p>Versão Móvel</p>
      </div>

      <a href="#" class="button is-info">
        BREVEMENTE...
      </a>
    </div>
  </div>
</div>

<div class="content">
  <p>Caso tenha alguma dúvida, não hesite em nos contactar: <a href="mailto:contacto@smartkwanza.com">contacto@smartkwanza.com</a>.</p>
</div>


  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}

.box {
  padding-top: 0;
  padding-left: 0;
  padding-right: 0;
}
.box .subtitle {
  border-radius: 4px 4px 0 0;
  font-size: 28px;
  padding: 15px 0;
}

.box h2 {
  font-size: 24px;
  font-weight: bold;
}

.personal {
  background-color: hsl(171, 100%, 41%);
  color: #fff;
}

.business {
  background-color: hsl(217, 71%, 53%);
  color: #fff;
}
</style>