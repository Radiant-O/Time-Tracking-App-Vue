<template>
  <body class="screen">
    <section class="boxes">
      <div class="profile box details">
        <div class="profile_info">
          <img class="avatar" src="../assets/images/image-jeremy.png" alt="" />
          <div class="name">
              <h4>Report for</h4>
              <h3>Jeremy Robson</h3>
          </div>
        </div>
        <div class="duration text-blue-100">
          <p 
          :class="{'text-white':clicked==true && clickValue == 'daily'}"
          @click="atClick('daily')">Daily</p>
          <p 
          :class="{'text-white':clicked==true && clickValue == 'weekly'}"
          @click="atClick('weekly')">Weekly</p>
          <p 
          :class="{'text-white':clicked==true && clickValue == 'monthly'}"
          @click="atClick('monthly')">Monthly</p>
        </div>
      </div>
      <div 
        class="work box" 
        v-for="(period, index) in moments"
        :item="period"
        :key="index">
        <div>
        <div class="img">
          <img class="icon" :src=period.img alt="" />
        </div>
        <div class="details xo">
          <div class="header">
            <h5 class="schedule">{{period.title}}</h5>
            <span class="un">...</span>
          </div>
          <div class="moment">
              <p class="hrs">{{
              clickValue == 'daily' ? period.timeframes.daily.current :
              clickValue == 'weekly' ? period.timeframes.weekly.current :
              clickValue == 'monthly' ? period.timeframes.monthly.current : null }} hrs</p>
              
          </div>
          <p class="when">
            {{clickValue == 'daily' ? 'Yesterday':
            clickValue == 'weekly' ? 'Weekly':
            clickValue == 'monthly' ? 'Monthly': null}}-
            <span class="days">{{clickValue == 'daily' ? period.timeframes.daily.previous : 
          clickValue == 'weekly' ? period.timeframes.weekly.previous :
          clickValue == 'monthly' ? period.timeframes.monthly.previous : null}}hrs</span></p>
          <!-- <div class="moment" v-else-if="weekly">
              <p class="hrs">{{period.timeframes.weekly.current}}hrs</p>
              <p class="when">Lastweek-<span class="days">{{period.timeframes.weekly.previous}}days</span></p>
          </div>
          <div class="moment" v-else-if="monthly">
              <p class="hrs">{{period.timeframes.monthly.current}}hrs</p>
              <p class="when">Lastmonth-<span class="days">{{period.timeframes.monthly.previous}}days</span></p>
          </div> -->
        </div>
        </div>
        </div>
    </section>
  </body>
</template>

<script>
import data from '../data.json'
export default {
  data(){
    return{
      img: [
        {
          id:1,
          iconsrc: require("../assets/images/icon-work.svg")
        },
        {
          id:2,
          iconsrc: require("../assets/images/icon-play.svg")
        },
        {
          id:3,
          iconsrc: require("../assets/images/icon-study.svg")
        },
        {
          id:4,
          iconsrc: require("../assets/images/icon-exercise.svg")
        },
        {
          id:5,
          iconsrc: require("../assets/images/icon-social.svg")
        },
        {
          id:6,
          iconsrc: require("../assets/images/icon-self-care.svg")
        },
      ],
      moments: data,
      time:"All",
      clickValue: 'daily',
      clicked:false,
     
    }
  },
  methods:{
    atClick(value){
      this.clickValue = value;
      this.clicked=true;
    },
  }
};
</script>

<style></style>
