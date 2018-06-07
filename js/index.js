var damate = new Vue({
  el: '#damage',
  data: {
    ATK: null,
    DEF: null,
    skill: null,
    ATKbuff: null,
    DEFbuff: null,
    oncebuff: null, 
    ATKElement: null, 
    DEFElement: null,
    element: 1.0,
    critical: false,
    jump: 1
  },
  computed: {
    damage: function() {
      return parseInt(1.0
        * this.ATK / this.DEF * this.skill / 6 
        * (this.ATKbuff?1+this.ATKbuff/100:1) 
        * (this.oncebuff?1+this.oncebuff/100:1) 
        * (this.critical?1.5:1.0) 
        * (this.jump?this.jump:1) 
        * (Number(this.element) + (this.ATKElement?this.ATKElement:0)/100 - (this.DEFElement?this.DEFElement:0)/100) 
        / (this.DEFbuff?1+this.DEFbuff/100:1)
      )
    }
  }
});