<template>
  <div id="app">
    <fieldset class="container">
      <div class="row" style="border: solid 1px #888;">
          <div class="col-md-6 text-left">
              <b-spinner label="Spinning" v-if="accountsLoadStatus != 2"></b-spinner>
              <v-select v-if = "accountsLoadStatus === 2"
                v-on:codeSelected="loadAccount"
                :isMultiple=false
                :parentData="accounts"
                title="Select an account"
                v-model="viewId"
                :clearable="true"
              />
              <span>{{ viewName }}</span>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-2">
                <b-button :disabled="disabled">SAVE</b-button>
              </div>
              <div class="col-md-2">
                <b-button :disabled="disabled">NEW</b-button>
              </div>
              <div class="col-md-2">
              <b-button :disabled="disabled" @click="delAccount()">DELETE</b-button>
              </div>
            </div>
          </div>
      </div>
    </fieldset>
  
        <div class="container-fluid">
            <b-table striped hover :items="options" v-if="optionsLoadStatus === 2"></b-table>
        </div>
  </div>
</template>

<script>
import vSelect from '@/components/Select';
export default {
  name: 'App',
  components: {
    vSelect
  },
  data: function(){
    return{
      accounts:[],
      options:[],
      disabled: true,
      viewName: null,
      viewId: null,
    }
  },
  created(){
    this.$store.dispatch( 'initAccounts' );
    this.$store.dispatch( 'loadAccounts' );
  },

  mounted(){

  },

  methods:{
    delAccount: function(){
    },

    loadAccount: function( value ){
      if( value ){
        this.viewId=value.id;
        this.viewName = value.label;
        this.disabled = false;
        this.$store.dispatch( 'initOptions' );
        this.$store.dispatch( 'loadOptions', {
          id: this.viewId
        });
      }else{
        this.viewId = null;
        this.viewName = null;
        this.disabled=true;
      }
    }
  },

  watch: {
    accountsLoadStatus: function ( newVal ){
      if( newVal === 2 ){
        this.accounts = this.$store.getters.getAccounts.data;
      }else if( newVal === 3 ){
        alert('API err');
      }
    },

    optionsLoadStatus: function( newVal ){
      if ( newVal === 2 ){
        this.options = this.$store.getters.getOptions.data;
      }else if( newVal === 3 ){
        let err = this.$store.getters.getErrMsg;
        alert( err );
      }
    }
  },

  computed: {
    accountsLoadStatus(){
      return this.$store.getters.getAccountsLoadStatus;
    },

    optionsLoadStatus(){
      return this.$store.getters.getOptionsLoadStatus;
    },


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
