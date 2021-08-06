<template>
    <div class="cadastro-info">
        <div class="logo">
            <div class="logo-title-top">ADM</div>
            <div class="logo-title-botton">P - e - s - s - o - a - l</div>
            <div class="logo-title-image"></div>
        </div>
        <div class="cadastro-image-mobile"></div>
        <p class="text-cadastro-info">Administre suas finanças pessoais e monitore todos seus gastos, investimentos e muito mais com ADM Pessoal.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.cadastro-info {
    background-image: url('../../assets/hero-financas.png');
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: right;
    width: 100%;
    height: 100%;
}
.text-cadastro-info {
    position: absolute;
    bottom: 50px;
    font-size: small;
    color: #262525b8;
    width: 47%;
}
.logo {
    position: absolute;
    top: 160px;
    right: 310px;
}
.logo-title-top {
    font-size: 65px;
    margin: 0;
    font-family: -webkit-body;
    font-weight: 600;
    color: #0e0f0ec9;
}
.logo-title-botton {
    line-height: 0px;
    margin-top: 20px;
    color: black;
}
.logo-title-image {
    background-image: url('../../assets/unnamed.png');
    background-repeat: no-repeat;
    background-size: 30%;
    background-position: right;
    width: 50%;
    height: 50%;
    position: absolute;
    left: 65px;
    top: 35px;
}
@media (max-width: 1169px) {
    .logo {
        display: none;
    }
    .text-cadastro-info {
        font-size: small;
        color: #262525b8;
        width: 100%;
        position: unset;
        margin-left: 10px;
        text-align: center;
    }
    .cadastro-info {
        background-image: none;
    }
    .cadastro-image-mobile {
        background-image: url('../../assets/hero-financas.png');
        background-repeat: no-repeat;
        background-size: 30%;
        background-position: center;
        width: 100%;
        height: 100%;
    }
}
</style>