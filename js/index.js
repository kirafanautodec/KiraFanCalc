function range(val, min, max) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

function elementrange(element, val) {
  if (element==0.5) return range(val, 0.1, 0.9);
  if (element==1.0) return range(val, 0.6, 1.4);
  if (element==2.0) return range(val, 1.6, 2.4);
}

var damagecalc = new Vue({
  el: '#damagecalc',
  data: {
    ATK: null,
    DEF: null,
    skill: null,
    ATKbuff: 0,
    DEFbuff: 0,
    oncebuff: 0, 
    ATKElement: 0, 
    DEFElement: 0,
    element: 1.0,
    critical: false,
    jump: 1.0
  },
  computed: {
    damage: function() {
      return parseInt(1.0
        * this.ATK / this.DEF * this.skill / 6 
        * range(this.ATKbuff?1+this.ATKbuff/100:1, 0.5, 2.5)
        / range(this.DEFbuff?1+this.DEFbuff/100:1, 0.33, 2.0)
        * elementrange(this.element, (this.element + (this.ATKElement?this.ATKElement:0)/100 - (this.DEFElement?this.DEFElement:0)/100))
        * (this.oncebuff?1+this.oncebuff/100:1) 
        * (this.critical?1.5:1.0) 
        * (this.jump?this.jump:1) 
      )
    }
  }
});

var criticalcalc = new Vue({
  el: '#criticalcalc',
  data: {
    luck0: null,
    luck1: 30,
    buff0: 0,
    buff1: 0,
    element: 1.0
  },
  computed: {
    critical: function() {
      return parseInt(this.element==0.5?0:range(this.luck0*1.2*(this.element==2.0?1.1:1.0)*(1+this.buff0/100)-this.luck1*(1+this.buff1/100), 0, 100))
    }
  }
});

var ordercalc = new Vue({
  el: '#ordercalc',
  data: {
    spd: null,
    load: 75,
    buff: 0
  },
  computed: {
    order: function() {
      return range((100-Math.floor(((this.spd<50?NaN:this.spd)-50)/2)-1)*this.load*0.01*(1-this.buff*0.01), 15, 500)
    }
  }
});

var statuscalc = new Vue({
  el: '#statuscalc',
  data: {
    characlass: 0,
    table: [[0.052, 0.055, 0.040, 0.080, 0.071, 0.001], [0.052, 0.040, 0.055, 0.071, 0.080, 0.001], [0.060, 0.040, 0.040, 0.080, 0.088, 0.001], [0.045, 0.040, 0.040, 0.097, 0.088, 0.001], [0.047, 0.040, 0.050, 0.071, 0.097, 0.001]],
    initlv: null,
    init: [null, null, null, null, null, null],
    lv: null
  },
  computed: {
    result: function() {
      ans = [null, null, null, null, null, null];
      for (var i=0; i<6; i++)
      {
        var a0 = Math.floor(this.init[i]/(1+(this.initlv-1)*this.table[this.characlass][i]));
        var a1 = Math.ceil(a0*(1+(this.lv-1)*this.table[this.characlass][i]));

        if (this.initlv && this.lv && this.init[i] && a1) ans[i] = a1;
        else ans[i] = " ";
      }
      return ans;
    }
  }
});