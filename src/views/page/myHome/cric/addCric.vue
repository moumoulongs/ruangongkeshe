<template>
    <div>
        <input type="text" v-model="form.title">
        <input type="text" v-model="form.content">
        <button @click="submit">提交</button>
    </div>
</template>

<script>
import {apiAddCric} from '../../../../request/api'

export default {
    components: {
        apiAddCric
    },
    data () {
        return {
            form: {
                "title": "",
                "content": ""
            }
        }
    },
    methods: {
        submit() {
            let submitData = {
                "title": this.form.title,
                "content": this.form.content
            };
            apiAddCric(submitData).then(res => {
                console.log(res);
            })
        },
    }
}
</script>

<style>

</style>