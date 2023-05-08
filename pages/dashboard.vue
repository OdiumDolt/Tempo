<template>
    <add-tracker-window v-if="add_tracker_window" @closeTrackerWindow = "add_tracker_window = false" :style_theme="style_theme"></add-tracker-window>
    <div class="dashboard-container">
        <side-bar @addTracker="add_tracker_window = true">
        </side-bar>
        <info-pannel>

        </info-pannel>
    </div>

</template>

<script lang="ts">

export default {
    data(){
        return {
            user: useSupabaseUser(),
            client: useSupabaseClient(),
            add_tracker_window:false,
            style_theme:"dark-mode"
        }
    },
    methods:{

    },
    async mounted(){
        // if there is no user_id, try to creat one
        var data = get_user_trackers(this.client, this.user)
        .then(data => {
            useState('web_trackers', () => data["website_trackers"])
        })
        .catch(error => {
            console.error(error)
        })
        // TODO, currently assumes that creating a new row for user_id worked
        

    },
}
</script>

<style lang="sass">
@import '@/assets/styles/colors.sass'

.dashboard-container
    display: flex
    flex-direction: row
    margin: 10px
    height: calc(100vh - 20px)
    gap: 20px

</style>