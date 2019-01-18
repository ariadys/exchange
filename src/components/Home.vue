<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 box">
        <div class="box-header">
          <div class="row">
          <div class="col-md-8 col-12 box-header-left">
            <h4>USD - United States Dollars</h4>
            <h4 class="bold">USD</h4>
          </div>
          <div class="col-md-4 col-12 box-header-right">
            <input type="number" value="10" class="currency-usd" v-model="countUsd" min="0">
          </div>
          </div>
        </div>
        <div class="box-body">

          <div class="card-currency" v-show="isShowingIdr">
            <div class="row ml-0 mr-0">
            <div class="col-5 card-currency-info">
              <h3>IDR</h3>
              <p class="about-currency">IDR - Indonesian Rupiah</p>
              <p class="ex-currency">1 USD = IDR {{ currData['IDR'] | toCurrency }}</p>
            </div>
            <div class="col-md-6 total-currency">
              <h3 v-if="idr">IDR {{ idr | toCurrency }}</h3>
              <h3 v-else>IDR {{ idrTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingIdr = false"><img src="/static/img/delete.png" width="20"></a>
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
              <a class="delete" v-on:click="isShowingEur = false"><img src="/static/img/delete.png" width="20"></a>
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
              <a class="delete" v-on:click="isShowingGbp = false"><img src="/static/img/delete.png" width="20"></a>
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
              <a class="delete" v-on:click="isShowingSgd = false"><img src="/static/img/delete.png" width="20"></a>
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
              <a class="delete" v-on:click="isShowingJpy = false"><img src="/static/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingMyr">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>MYR</h3>
              <p class="about-currency">MYR - Malaysian Ringgit</p>
              <p class="ex-currency">1 USD = MYR {{ currData['MYR'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="myr">MYR {{ myr | toCurrency }}</h3>
              <h3 v-else>MYR {{ myrTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingMyr = false"><img src="/static/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingChf">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>CHF</h3>
              <p class="about-currency">CHF - Switzerland Franc</p>
              <p class="ex-currency">1 USD = CHF {{ currData['CHF'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="chf">CHF {{ chf | toCurrency }}</h3>
              <h3 v-else>CHF {{ chfTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingChf = false"><img src="/static/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingCad">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>CAD</h3>
              <p class="about-currency">CAD - Canadian Dollars</p>
              <p class="ex-currency">1 USD = CAD {{ currData['CAD'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="cad">CAD {{ cad | toCurrency }}</h3>
              <h3 v-else>CAD {{ cadTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingCad = false"><img src="/static/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingKrw">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>KRW</h3>
              <p class="about-currency">KRW - South Korean Won</p>
              <p class="ex-currency">1 USD = KRW {{ currData['KRW'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="krw">KRW {{ krw | toCurrency }}</h3>
              <h3 v-else>KRW {{ krwTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingKrw = false"><img src="/static/img/delete.png" width="20"></a>
            </div>
            </div>
          </div>

          <div class="card-currency" v-show="isShowingInr">
            <div class="row ml-0 mr-0">
            <div class="col-md-4 card-currency-info">
              <h3>INR</h3>
              <p class="about-currency">INR - Indian Rupee</p>
              <p class="ex-currency">1 USD = INR {{ currData['INR'] | toCurrency }}</p>
            </div>
            <div class="col-md-7 total-currency">
              <h3 v-if="inr">INR {{ inr | toCurrency }}</h3>
              <h3 v-else>INR {{ inrTotal | toCurrency }}</h3>
            </div>
            <div class="col-md-1 card-currency-delete">
              <a class="delete" v-on:click="isShowingInr = false"><img src="/static/img/delete.png" width="20"></a>
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
                  <option value="IDR">IDR</option>
                  <option value="SGD">SGD</option>
                  <option value="JPY">JPY</option>
                  <option value="CAD">CAD</option>
                  <option value="GBP">GBP</option>
                  <option value="CHF">CHF</option>
                  <option value="MYR">MYR</option>
                  <option value="KRW">KRW</option>
                  <option value="INR">INR</option>
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
      isShowingChf: false,
      isShowingMyr: false,
      isShowingCad: false,
      isShowingKrw: false,
      isShowingInr: false,
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
    krwTotal: function() {
      return this.currData['KRW'] * 10;
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
    krw: function () {
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
      if(this.addCurrency == 'JPY') {
        this.isShowingJpy = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'MYR'){
        this.isShowingMyr = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'INR'){
        this.isShowingInr = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'CAD'){
        this.isShowingCad = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'CHF'){
        this.isShowingChf = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'EUR'){
        this.isShowingEur = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'IDR'){
        this.isShowingIdr = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'KRW'){
        this.isShowingKrw = true
        this.isHide = false
        this.isShowing = true
      }else if(this.addCurrency == 'GBP'){
        this.isShowingGbp = true
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
<style scoped>
</style>
