<template>

    <main class="learn_container">
        <div class="learn_head">
            <h4>QUERO<span> APRENDER</span></h4>
        </div>
        <div class="learn_body">

            <div class="learn_card card_red">
                <div class="card_header">
                    <h2 class="green_title">HUB<span>Tech</span></h2>
                    <span class="right_span span_red">Lorem Ipsum</span>
                </div>
                <div class="card_body">
                    <span class="span_red">QUANDO QUISER!!</span>
                    <h2>DEV. <br> FRONT-END</h2>
                </div>
                <div class="card_footer">
                    <span class="span_red">10 Artigos disponíveis!!</span>
                </div>
                <!-- image -->
                <img src="/learn_design.svg" alt="">
                <div class="card_infos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum deleniti assumenda quos reprehenderit corporis non dolores eius alias eaque, autem commodi recusandae iste iure accusamus tempora minima sapiente ipsa!</p>
                </div>
            </div>

            <div class="learn_card card_blue">
                <div class="card_header">
                    <h2 class="yellow_title">HUB<span>Tech</span></h2>
                    <span class="right_span span_blue">Lorem Ipsum</span>
                </div>
                <div class="card_body">
                    <span class="span_blue">QUANDO QUISER!!</span>
                    <h2>DEV. <br> BACK-END</h2>
                </div>
                <div class="card_footer">
                    <span class="span_blue">10 Artigos disponíveis!!</span>
                </div>
                <!-- image -->
                <img src="/learn_computing.svg" alt="">
                <div class="card_infos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum deleniti assumenda quos reprehenderit corporis non dolores eius alias eaque, autem commodi recusandae iste iure accusamus tempora minima sapiente ipsa!</p>
                </div>
            </div>

            <div class="learn_card card_white">
                <div class="card_header">
                    <h2 class="grey_title">HUB<span>Tech</span></h2>
                    <span class="right_span span_white">Lorem Ipsum</span>
                </div>
                <div class="card_body">
                    <span class="span_white">QUANDO QUISER!!</span>
                    <h2 class="grey_title">DEV. <br> CLOUD</h2>
                </div>
                <div class="card_footer">
                    <span class="span_white">10 Artigos disponíveis!!</span>
                </div>
                <!-- image -->
                <img class="alter_height_image" src="/learn_cloud.svg" alt="">
                <div class="card_infos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum deleniti assumenda quos reprehenderit corporis non dolores eius alias eaque, autem commodi recusandae iste iure accusamus tempora minima sapiente ipsa!</p>
                </div>
            </div>

            <div class="learn_card card_grey">
                <div class="card_header">
                    <h2 class="">HUB<span>Tech</span></h2>
                    <span class="right_span span_white">Lorem Ipsum</span>
                </div>
                <div class="card_body">
                    <span class="span_white">QUANDO QUISER!!</span>
                    <h2>WEB <br> DESIGN</h2>
                </div>
                <div class="card_footer">
                    <span class="span_white">10 Artigos disponíveis!!</span>
                </div>
                <!-- image -->
                <img class="alter_height_image" src="/learn_web_design.svg" alt="">
                <div class="card_infos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum deleniti assumenda quos reprehenderit corporis non dolores eius alias eaque, autem commodi recusandae iste iure accusamus tempora minima sapiente ipsa!</p>
                </div>
            </div>

            <div class="learn_card card_white_blue">
                <div class="card_header">
                    <h2 class="white_title">HUB<span>Tech</span></h2>
                    <span class="right_span span_blue">Lorem Ipsum</span>
                </div>
                <div class="card_body">
                    <span class="span_blue">QUANDO QUISER!!</span>
                    <h2>DEV. <br> MOBILE</h2>
                </div>
                <div class="card_footer">
                    <span class="span_blue">10 Artigos disponíveis!!</span>
                </div>
                <!-- image -->
                <img class="alter_height_image" src="/learn_mobile.svg" alt="">
                <div class="card_infos">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolorum deleniti assumenda quos reprehenderit corporis non dolores eius alias eaque, autem commodi recusandae iste iure accusamus tempora minima sapiente ipsa!</p>
                </div>
            </div>

        </div>
    </main>

</template>

<script>
    export default {
        layout: "site/default",
        head() {
            return {
                title: "learn",
            };
        }
    };

</script>

<style src="~/assets/css/pages/Learn.css" scoped></style>

<style scoped>

    .card_infos {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -100%;
        left: 0;
        background: #1c1c1e;
        transition: .7s;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 40px;
        justify-content: center;
        opacity: 0;
    }

    .card_infos p {
        font-size: 13px;
        color: white;
    }

    .learn_card {
        width: 433px;
        height: 433px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        position: relative;
        overflow: hidden;
        transition: .6s ease-in-out;
        cursor: pointer;
    }

    .learn_card:hover {
        transform: translateY(-10px);
    }

    .learn_card:hover .card_infos {
        top: 0;
        opacity: 1;
    }

    /* types of bg */

    .card_blue {
        background: #303197;
    }

    .card_white_blue {
        background: #2B79FF;
    }

    .card_red {
        background: #ff3a3e;
    }

    .card_white {
        background: #fff;
    }

    .card_grey {
        background: #1c1c1e;
    }

    /* types of span */

    .span_red {
        font-weight: 700;
        color: #ffc6c7;
        font-size: 14px;
    }
    
    .span_blue {
        font-weight: 700;
        color: #cdc6ff;
        font-size: 14px;
    }
    
    .span_white {
        font-weight: 600;
        color: #9b9b9b;
        font-size: 14px;
    }

    /* types of header title */

    .yellow_title {
        color: #ffd445;
    }

    .green_title {
        color: #39f290;
    }

    .grey_title {
        color: #2a2a2a;
    }

    .grey_title span {
        color: #2a2a2a !important;
    }

    .white_title {
        color: #fff !important;
    }

    /* types of  body_titles */

    .grey_title {
        color: #2a2a2a !important;
    }

    /* card_header */

    .learn_card .card_header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .learn_card .card_header h2 {
        /* color: #aa3436; */
        font-weight: 900;
        font-size: 20px;
    }

    .learn_card .card_header h2 span {
        color: white;
        font-weight: 700;
    }

    .learn_card .card_header .right_span {
        font-weight: 600;
        font-size: 12px;
    }

    /* card_body */

    .learn_card .card_body {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    .learn_card .card_body span {
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .learn_card .card_body h2 {
        font-size: 50px;
        font-weight: 900;
        color: white;
        line-height: 48px;
    }

    /* card_footer */

    .learn_card .card_footer {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }

    .learn_card .card_footer span {
        font-weight: 700;
        font-size: 14px;
        margin-bottom: 10px;
    }






    /* float img */

    .learn_card img {
        position: absolute;
        bottom: -100px;
        right: -100px;
        width: 300px;
    }

    .learn_card .alter_height_image {
        position: absolute;
        bottom: -30px;
        right: -100px;
        width: 300px;
    }




</style>