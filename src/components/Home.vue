<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 box">
        <div class="box-header">
          <div class="row">
          <div class="col-md-8 box-header-left">
            <h4>USD - United States Dollars</h4>
            <h4 class="bold">USD</h4>
          </div>
          <div class="col-md-4 box-header-right">
            <input type="number" value="10" class="currency-usd" v-model="countUsd" min="0">
          </div>
          </div>
        </div>
        <div class="box-body">

          <div class="card-currency" v-show="isShowingIdr">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>IDR</h3>
              <p class="about-currency">IDR - Indonesian Rupiah</p>
              <p class="ex-currency">1 USD = IDR {{ currData['IDR'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="idr">IDR {{ idr | toCurrency }}</h3>
              <h3 v-else>IDR {{ idrTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingIdr = false"><img src="../assets/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingEur">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>EUR</h3>
              <p class="about-currency">EUR - Euro</p>
              <p class="ex-currency">1 USD = EUR {{ currData['EUR'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="eur">EUR {{ eur | toCurrency }}</h3>
              <h3 v-else>EUR {{ eurTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingEur = false"><img src="../assets/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingGbp">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>GBP</h3>
              <p class="about-currency">GBP - British Pound</p>
              <p class="ex-currency">1 USD = GBP {{ currData['GBP'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="gbp">GBP {{ eur | toCurrency }}</h3>
              <h3 v-else>GBP {{ gbpTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingGbp = false"><img src="../assets/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingSgd">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>SGD</h3>
              <p class="about-currency">SGD - Singapore Dollars</p>
              <p class="ex-currency">1 USD = SGD {{ currData['SGD'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="sgd">SGD {{ sgd | toCurrency }}</h3>
              <h3 v-else>SGD {{ sgdTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingSgd = false"><img src="../assets/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingJpy">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>JPY</h3>
              <p class="about-currency">JPY - Japanese Yen</p>
              <p class="ex-currency">1 USD = JPY {{ currData['JPY'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="jpy">JPY {{ jpy | toCurrency }}</h3>
              <h3 v-else>JPY {{ jpyTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingJpy = false"><img src="../assets/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="clearfix"></div>
          <div class="row">
            <button @click="isHide ^= true" v-on:click="isShowing = !isShowing" v-show="isShowing" id="toggle" class="col-md-3 col-md-offset-5 add-currency col-centered">
              <span class="add"> Add More Currency </span>
            </button>
            <div v-show="isHide" id="currency" class="col-md-4 col-md-offset-5 col-centered">
              <div class="form-inline">
                <select class="add-option" name="add-currency" v-model="addCurrency">
                  <option value="JPY">JPY</option>
                  <option value="IDR">IDR</option>
                  <option value="CHF">CHF</option>
                  <option value="JPN">JPN</option>
                  <option value="JPN">JPN</option>
                </select>
                <button type="submit" @click='addMore()' class="btn-add">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      currData: [],
      addCurrency: '',
      countUsd: 10,
      idr: '',
      eur: '',
      gbp: '',
      sgd: '',
      jpy: '',
      chf: '',
      myr: '',
      cad: '',
      krw: '',
      inr: '',
      isHide: false,
      isShowing: true,
      isShowingIdr: true,
      isShowingEur: true,
      isShowingGbp: true,
      isShowingSgd: true,
      isShowingJpy: true,
      isShowingChf: true,
      isShowingMyr: true,
      isShowingCad: true,
      isShowingKwr: true,
      isShowingInr: true,
    }
  },
  filters: {
    toCurrency: function(value) {
      if(typeof value !== "number"){
        return value;
      }
      var formatter = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        minimumFractionDigits: 0
      });
      return formatter.format(value);
    }
  },
  mounted() {
    var home = this
     axios.get('https://api.exchangeratesapi.io/latest?base=USD')
            .then(function(response) {
              home.currData = response.data.rates
            })
            .catch(function(error) {
              home.currData = error
            })
  },
  computed: {
    idrTotal: function() {
      return this.currData['IDR'] * 10;
    },
    eurTotal: function() {
      return this.currData['EUR'] * 10;
    },
    gbpTotal: function() {
      return this.currData['GBP'] * 10;
    },
    sgdTotal: function() {
      return this.currData['SGD'] * 10;
    },
    jpyTotal: function() {
      return this.currData['JPY'] * 10;
    },
    chfTotal: function() {
      return this.currData['CHF'] * 10;
    },
    myrTotal: function() {
      return this.currData['MYR'] * 10;
    },
    cadTotal: function() {
      return this.currData['CAD'] * 10;
    },
    kwrTotal: function() {
      return this.currData['KWR'] * 10;
    },
    inrTotal: function() {
      return this.currData['INR'] * 10;
    },
    idr: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    eur: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    gbp: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    sgd: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    jpy: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    chf: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    myr: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    cad: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    kwr: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
    inr: function () {
      if (this.countUsd.length > 0) {
       this.lookupCountUsd()
      } 
    },
  },
  watch: {
    countUsd: function() {
      if(this.countUsd.length > 0) {
        this.lookupCountUsd()
      }
    }
  },
  methods: {
    addMore() {
      if(this.addCurrency == 'JPN') {
        this.isShowingEur = true
        this.isHide = false
        this.isShowing = true
      }
    },
    lookupCountUsd: _.debounce(function() {
      var home = this
      home.idr = 'Searching..'
      home.eur = 'Searching..'
      home.gbp = 'Searching..'
      home.sgd = 'Searching..'
      home.jpy = 'Searching..'
      home.chf = 'Searching..'
      home.myr = 'Searching..'
      home.cad = 'Searching..'
      home.kwr = 'Searching..'
      home.inr = 'Searching..'
      axios.get('https://api.exchangeratesapi.io/latest?base=USD')
            .then(function(response) {
              home.idr = response.data.rates['IDR'] * home.countUsd
              home.eur = response.data.rates['EUR'] * home.countUsd
              home.gbp = response.data.rates['GBP'] * home.countUsd
              home.sgd = response.data.rates['SGD'] * home.countUsd
              home.jpy = response.data.rates['JPY'] * home.countUsd
              home.chf = response.data.rates['CHF'] * home.countUsd
              home.myr = response.data.rates['MYR'] * home.countUsd
              home.cad = response.data.rates['CAD'] * home.countUsd
              home.kwr = response.data.rates['KWR'] * home.countUsd
              home.inr = response.data.rates['INR'] * home.countUsd
            })
            .catch(function(error) {
              home.idr = "Invalid response"
              home.eur = "Invalid response"
              home.gbp = "Invalid response"
              home.sgd = "Invalid response"
              home.jpy = "Invalid response"
              home.chf = "Invalid response"
              home.myr = "Invalid response"
              home.cad = "Invalid response"
              home.kwr = "Invalid response"
              home.inr = "Invalid response"
            })
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  background-color: #6CE2CE !important;
}

h4 {
  color: #fff;
  font-size: 20px;
  font-weight: normal;
}

h3 {
  color: #5A5A5A;
  font-size: 49px;
  font-weight: 700;
  margin-bottom: 2px;
  margin-top: -3px;
}

a:hover {
  opacity: 0.8;
  -webkit-transition: all 0.3s ease-in-out;
  text-decoration: none;
}

select > option {
  padding:10px;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

::-webkit-scrollbar-thumb {
  background: #4A9AE9; 
  border-radius: 10px;
  opacity: 0.8;
}

::-webkit-scrollbar-thumb:hover {
  background: #4A9AE9; 
  opacity: 1;
}

.box {
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  z-index:99;
  margin:auto;
  height:720px;
  width:70%;
  background: #fff;
  border-radius: 40px;
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);
}

.box-header {
  height: 125px;
  background: #4A9AE9;
  border-radius: 40px 40px 0 0;
  margin-left: -15px;
  margin-right: -15px;
}

.box-header-left {
  padding: 30px 0 30px 67px;
}

.box-header-right {
  padding: 40px 67px 30px 0;
}

.bold {
  font-weight: 700;
}

.currency-usd {
  width: 268px;
  height: 40px;
  padding: 15px 15px 15px;
  padding-left:30px;
  background-image: url(../assets/img/dollars.png);
  background-position: 12px 7px;
  background-size: 10px;
  background-repeat: no-repeat;
  background-color: #fff;
  color: #5A5A5A;
  border-radius: 20px;
  border: none;
  outline: none;
  -webkit-appearance: none;
  float: right;
  font-weight: 600;
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);
}

.box-body {
  padding:20px 40px;
  margin-top: 20px;
  width:100%;
  height: 550px;
  overflow-y: scroll;
}

.card-currency {
  width: 100%;
  background-color: #F1F1F1;
  height: 150px;
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  margin-bottom: 20px;
}

.card-currency-info {
  width: auto;
  height: 100%;
  float: left;
  padding: 20px 30px;
}

.about-currency {
  color:#5A5A5A;
  font-size: 18px;
  margin-bottom: 0px;
  font-weight: 500;
}

.total-currency {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.ex-currency {
  color:#5A5A5A;
  font-size: 18px;
  margin-bottom: 0px;
  font-style: italic;
  font-weight: bold;
}

.card-currency-delete {
  background-color: #fff;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete:hover {
  -webkit-transition: all 0.3s ease-in-out;
  opacity: 0.5;
  cursor: pointer;
}

.add-currency {
  height: 75px;
  background-color: #D6D6D6;
  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);
  color:#5A5A5A;
  justify-content: center;
  display: flex;
  align-items:center;
  border-radius: 20px;
  border:none;
  outline: none;
  -webkit-appearance: none;
  cursor: pointer;
}

.add-currency:hover {
  border:none;
  outline: none;
  -webkit-appearance: none;
}

.col-centered{
  float: none;
  margin: 0 auto;
}

.add {
  font-weight: 600;
  font-size: 18px;
}

.hide {
  display: none;
}

.add-option {
  background: #fff;
  width:70%;
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #5A5A5A;
  border-radius: 20px 0 0 20px;
  border:2px solid #4A9AE9;
  outline: none;
  -webkit-appearance: none;
}

.btn-add {
  width:30%;
  background: #4A9AE9;
  color: #fff;
  font-size: 18px;
  padding: 15px;
  font-weight: 600;
  border:2px solid #4A9AE9;
  outline: none;
  -webkit-appearance: none;
  border-radius: 0 20px 20px 0;
}

.btn-add:hover {
  cursor: pointer;
  outline: none;
}
</style>
