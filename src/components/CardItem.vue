<template>
    <li class="cardItem">
        <slot name="img">
            <img src="../../img/img01.png" alt="">
        </slot>
        <div class="text">
            <slot name="textContent">
                <h4>新北勢歡樂耶誕成</h4>
                <p><span>時間</span>2021/11/20-2021/12/30</p>
                <p><span>地點</span>新北市板橋區</p>
                <p>新北市歡樂耶誕城，是台灣新北市新板特區商圈的一系列耶誕節活動的總稱，首次舉辦是在2011......</p>
                <a href="">活動詳情</a>
            </slot>
        </div>
    </li>
</template>

<style lang="scss">
.cardItem {
    display: flex;
    background: #fff;
    width: calc(50% - 40px);
    margin: 0 20px 54px;

    img {
        width: 355px;
        height: 300px;
        object-fit: cover;
    }

    .text {
        padding: 16px 21px;
        display: flex;
        flex-direction: column;

        h4,
        span {
            font-weight: $fw-b;
        }

        span {
            padding-right: 7px;
        }

        a {
            display: inline-block;
            background: $secondary;
            border-radius: $radius-m;
            text-align: center;
            color: #fff;
            padding: 5px 34px;
            margin-top: auto;
            align-self: flex-end;
        }
    }
}</style>
