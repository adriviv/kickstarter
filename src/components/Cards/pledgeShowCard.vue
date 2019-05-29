<template>
    <div @click='showDetails'class='pledgeShowCard'>
        <p class='title1'>Pledge US$ {{pledgeAmount}} or more</p>
        <p class='title2'>{{rewardTitle}}</p>
        <p class='title3'>{{rewardDescription}}</p>
        <p class='title4'>ESTIMATED DELIVERY</p>
        <p class='title5'>{{deliveryDate}}</p>
        <p class='title6'>{{backersNumber}} backers</p>
        <div v-if='seen  === false' class="overlay">
            <div class="text">Select this reward</div>
        </div>
        <div v-if="seen" class='pledgePayment'>
            <p class='title3'>Pledge amount</p>
            <input type="number" v-bind:placeholder="pledgeAmount">
            <button class='continue-btn'>Continue</button>
        </div>
    </div>
</template>

<script>
import { isDate } from 'util';
export default {
    name: 'pledgeShowCard',
    data() {
        return {
        pledgeAmount: 25,
        rewardTitle: 'Social Media Shout Out',
        rewardDescription: 'I will acknowledge your support on Instagram and Facebook.',
        deliveryDate: 'Jun 2019',
        backersNumber: 36,
        seen: false
        };
    },
    methods: {
        showDetails () {
            this.seen = true
        },
    },
}
</script>

<style>

.overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color:  #4b9f75;;
}

.pledgeShowCard:hover .overlay {
    opacity: 0.9;
}
.text {
    color: white;
    font-size: calc(8px + 1vw);
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}
.pledgeShowCard{
    border: 1px solid #bfbfbf;
    max-width: 250px;
    padding: 1em;
    background: white;
    position: absolute;

}

.title1 {
    color: #282828;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 20px;
}
.title2 {
    font-size: 0.9rem;
    font-weight: 400;
    color: #282828;
    line-height: 1.4;
    margin-bottom: 10px;
}
.title3 {
  font-size: 0.8rem;
}
.title4 {
    color: #656969;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 1.4;
    text-transform: uppercase;
    margin-bottom: -2px;
}
.title5 {
    color: #020621;
    font-size: 0.8rem;

}
.title6 {
  color: #656969; 
  font-size: 0.7rem; 
}

.pledgePayment{
    margin-top: 1.5em;
}
.pledgePayment p {
    margin-bottom: 0.6em;
}
.pledgePayment input {
    width: 100%
}

.continue-btn {
    color: white;
    background-color: #4b9f75; 
    margin-top: 0.7em;
    padding: 7px;
    width: 100%
}

.continue-btn:hover {
    background-color: #377766; 
}

</style>


