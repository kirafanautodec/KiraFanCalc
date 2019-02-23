var trans = {
  lang: { j: 0, e: 1, z: 2, k: 3 },
  きらファン計算機: ['きらファン計算機', 'KiraFanCalc', 'KiraFan 计算器', '키라판 계산기'],

  ホーム: ['ホーム', 'Home', '主页', 'Home'],
  ダメージ: ['ダメージ', 'Damage', '伤害', '대미지'],
  クリ率: ['クリ率', 'Critical', '暴击', '크리티컬 확률'],
  タイムライン: ['タイムライン', 'Timeline', '行动条', '타임라인'],
  ステータス: ['ステータス', 'Status', '角色数值', '스테이터스'],

  ダメージ計算: ['ダメージ計算', 'Damage Calculation', '伤害计算', '대미지 계산'],

  味方攻撃: ['味方攻撃', 'ATK', '我方攻击', '공격자의 공격력'],
  敵防御: ['敵防御', 'DEF', '敌方防御', '적의 방어력'],
  スキル: ['スキル', 'Skill', '技能', '스킬의 배율'],
  一度バフ: ['一度バフ', 'Next-turn buff', '一度buff', '공격자의 한 번만 버프'],
  味方攻撃バフ: ['味方攻撃バフ', 'ATK buff', '我方攻击buff', '공격자의 공격 버프'],
  敵防御バフ: ['敵防御バフ', 'DEF buff', '敌方防御buff', '적의 방어 버프'],
  味方有利属性バフ: ['味方有利属性バフ', 'Effective element buff', '我方有利属性buff', '공격자의 속성 버프'],
  敵属性耐性バフ: ['敵属性耐性バフ', 'Element resistance buff', '敌方属性耐性buff', '적의 속성 버프'],
  クリティカルダメージバフ: ['クリティカルダメージバフ', 'Critical damage buff', '暴击伤害buff', '크리티컬 데미지 버프'],
  'ダメージ＝': ['ダメージ＝', 'Damage =', '伤害 =', '대미지 ='],

  スタン計算: ['スタン計算', 'Stun Calculation', '眩晕计算', '기절(스턴) 계산'],
  敵最大HP: ['敵最大HP', "Enemy's maximum HP", '敌方最大HP', '적의 초기 HP'],
  スタン係数: ['スタン係数', 'Stun Coefficient', '眩晕系数', '스턴 계수'],
  'スタンゲージ＝': ['スタンゲージ＝', 'Stun Gauge =', '眩晕条 =', '스턴 게이지 ='],
  'スタン必要ダメージ＝': ['スタン必要ダメージ＝', 'Stun Necessity =', '眩晕必要伤害 =', '스턴에 필요한 대미지 ='],

  クリティカル: ['クリティカル', 'Critical', '暴击', '크리티컬'],
  有利: ['有利', 'Effective', '克制', '유리'],
  普通: ['普通', 'Normal', '普通', '보통'],
  不利: ['不利', 'Uneffective', '被克制', '불리'],

  クリティカル率計算: [
    'クリティカル率計算',
    'Critical Probability Calculation',
    '暴击率计算',
    '크리티컬 확률 계산'
  ],

  味方幸運: ['味方幸運', 'LUK', '我方幸运', '공격자의 LUK'],
  敵幸運: ['敵幸運', "Enemy's LUK", '敌方幸运', '적의 LUK'],
  味方幸運バフ: ['味方幸運バフ', 'LUK buff', '我方幸运buff', '공격자의 LUK 버프'],
  敵幸運バフ: ['敵幸運バフ', "Enemy's LUK buff", '敌方幸运buff', '적의 LUK 버프'],

  'クリティカル率＝': [
    'クリティカル率＝',
    'Critical Probability =',
    '暴击率 =',
    '크리티컬 확률 ='
  ],

  硬直値計算: ['硬直値計算', 'Order Value Calculation', '行动值计算', '지연 게산 '],
  スキル硬直: ['スキル硬直', 'Skill load factor', '技能行动系数', '스길의 지연 게수'],
  SPDバフ: ['SPDバフ', 'SPD buff', 'SPD buff', 'SPD 버브'],
  クイックドロウ: ['クイックドロウ', 'Quick Draw', 'Quick Draw', 'Quick Draw'],

  '硬直値＝': ['硬直値＝', 'Order Value =', '行动值 =', '지연 ='],

  タイムライン模擬: ['タイムライン模擬', 'Timeline Simulation', '行动条模拟', '타임라인 시뮬레이션'],

  ステータス計算: ['ステータス計算', 'Status Calculation', '角色数值计算', '캐릭터 스테터스 게산'],

  せんし: ['せんし', 'Fighter', '战士', '전사'],
  まほうつかい: ['まほうつかい', 'Magician', '魔法使', '마법사'],
  そうりょ: ['そうりょ', 'Priest', '僧侣', '승려'],
  ナイト: ['ナイト', 'Knight', '骑士', '기사'],
  アルケミスト: ['アルケミスト', 'Alchemist', '炼金术士', '연금술사'],

  開発中: ['開発中', 'Coming soon', '咕咕咕', 'WIP']
};

function range(val, min, max) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

function elementrange(element, val) {
  if (element == 0.5) return range(val, 0.1, 0.9);
  if (element == 1.0) return range(val, 0.6, 1.4);
  if (element == 2.0) return range(val, 1.6, 2.4);
}

Vue.component('trans', {
  props: ['t'],
  methods: {
    trans: function(t) {
      lang = 0;
      for (i in navigator.languages) {
        console.log(i, navigator.languages[i][0]);
        if (navigator.languages[i][0] in trans.lang) {
          lang = trans.lang[navigator.languages[i][0]];
          break;
        }
      }
      try {
        return trans[t][lang]; //this.text[t][lang]
      } catch (e) {
        return t;
      }
    }
  },
  template: '<span>{{trans(t)}}</span>'
});

var header = new Vue({
  el: '#header',
  data: {}
});

var home = new Vue({
  el: '#home',
  data: {
    lang: navigator.languages
  }
});

Vue.filter('prettifyNum', function(a) {
  if (isNaN(a)) {
    return 0;
  }
  a = a.toString();
  let l = a.length;
  let i = a.length - 1;
  let res = '';
  for (i; i >= 0; i--) {
    res = a[i] + res;
    if ((l - i) % 3 === 0 && i > 0) {
      res = ',' + res;
    }
  }
  return res;
});

var damagecalc = new Vue({
  el: '#damagecalc',
  data: {
    render: 1, 
    ATK: null,
    DEF: null,
    skill: null,
    ATKbuff: 0,
    DEFbuff: 0,
    oncebuff: 0,
    ATKElement: 0,
    ATKElement0: 0,
    DEFElement: 0,
    element: 1.0,
    critical: false,
    jump: 1.0,
    HP: null,
    stunCoef: 0.8,
    averageDamage: 0,
    CriticalUp: 0,
  },
  computed: {
    elementCoef: function() {
      return (
        (this.element==2.0 && this.ATKElement ? this.ATKElement : 0) / 100
        + elementrange(this.element, this.element * (1.0 - (this.DEFElement ? this.DEFElement : 0) / 100))
      );
    },
    damage: function() {
      ans = parseInt(1.0 / 6.0
          * Math.floor(1.0 * this.ATK * range(this.ATKbuff ? 1 + this.ATKbuff / 100 : 1, 0.50, 2.5))
          / Math.floor(1.0 * this.DEF * range(this.DEFbuff ? 1 + this.DEFbuff / 100 : 1, 0.33, 2.0))
          * this.skill
          * this.elementCoef
          * (this.oncebuff ? 1 + this.oncebuff / 100 : 1) 
          * (this.critical ? 1.5 * range(1 + this.CriticalUp / 100, 1.0/1.5, 2) : 1.0) 
          * (this.jump ? this.jump : 1)
      );
      if (ans) this.averageDamage = parseInt(0.925 * ans);
      return ans;
    },
    stun: function() {
      return (
        range(
          (this.averageDamage / this.HP) * this.stunCoef * this.elementCoef,
          0,
          1
        ) * 100
      );
    },
    stunDamage: function() {
      return this.HP / this.stunCoef / this.elementCoef
    }
  },
  methods: {
    test: function() {
      alert('hello');
      return;
    },
    rerender: function() {
      render = false;
      render = true;
      return;
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
      return parseInt(
        this.element == 0.5
          ? 0
          : range(
              this.luck0 *
                1.2 *
                (this.element == 2.0 ? 1.1 : 1.0) *
                (1 + this.buff0 / 100) -
                this.luck1 * (1 + this.buff1 / 100),
              0,
              100
            )
      );
    }
  }
});

var ordercalc = new Vue({
  el: '#ordercalc',
  data: {
    spd: null,
    load: 75,
    buff: 0,
    lfrbuff: 0,
    party: [null, null, null, null, null, null],
    enemy: [null, null, null],
    init: false
  },
  computed: {
    order: function() {
      return range(
        (100 - Math.floor(((this.spd < 50 ? NaN : this.spd) - 50) / 2) - 1) *
          this.load * (1 - this.lfrbuff * 0.01) * 
          0.01 *
          (1 - this.buff * 0.01),
        15,
        500
      );
    }
  },
  methods: {
    initialize: function() {
      //init = true;
      return;
    }
  }
});

var statuscalc = new Vue({
  el: '#statuscalc',
  data: {
    characlass: 0,
    table: [
      [0.052, 0.055, 0.04, 0.08, 0.071, 0.001],
      [0.052, 0.04, 0.055, 0.071, 0.08, 0.001],
      [0.06, 0.04, 0.04, 0.08, 0.088, 0.001],
      [0.045, 0.04, 0.04, 0.097, 0.088, 0.001],
      [0.047, 0.04, 0.05, 0.071, 0.097, 0.001]
    ],
    initlv: null,
    init: [null, null, null, null, null, null],
    lv: null
  },
  computed: {
    result: function() {
      ans = [null, null, null, null, null, null];
      for (var i = 0; i < 6; i++) {
        var a0 = Math.floor(
          this.init[i] /
            (1 + (this.initlv - 1) * this.table[this.characlass][i])
        );
        var a1 = Math.ceil(
          a0 * (1 + (this.lv - 1) * this.table[this.characlass][i])
        );

        if (this.initlv && this.lv && this.init[i] && a1) ans[i] = a1;
        else ans[i] = ' ';
      }
      return ans;
    }
  }
});
