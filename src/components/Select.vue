<template>
    <div id="custom-select-container" class="text-left">
        <div class="container-fluid text-left">
            <v-select
                :options="parentData"
                label="viewName"
                @input="loadSelection"
                :multiple="defaultMultiple"
                :placeholder="title"
                :clearable="clearable"
            />
        </div>
        
    </div>
</template>
<script>
import Vue from 'vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect)
export default {
    name: 'Select',
    components:{
        vSelect,
    },
    data: function(){
        return{
            defaultMultiple: false,
        }
    },
    props:{
        isMultiple: Boolean,
        parentData: Array,
        title: String,
        value: Number,
        clearable: Boolean,
        
    },
    created(){

    },

    methods:{
        loadSelection : function(value){           
            if( value ){
                this.$emit('codeSelected', { id: value.viewId, label: value.viewName });
            }
        },

    },

}
</script>
