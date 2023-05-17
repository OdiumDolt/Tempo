<template>
    <div class="body" :class="[style_theme]">
        <ToolsPopup v-if="add_tracker_window" @closePopUp = "closeAddWindow">
            <WebsiteHtmlAddWindow :style_theme="style_theme" @closePopUp = "closeAddWindow" @validation_check="AddWebsiteTracker" ref='add_window'>

            </WebsiteHtmlAddWindow> 
        </ToolsPopup>
        
        <div class="dashboard-container">
            
            <side-bar @addTracker="add_tracker_window = true">
            </side-bar>
            <ToolsTicker :options="['light-mode', 'dark-mode']" v-model="style_theme"></ToolsTicker>
            <info-pannel>

            </info-pannel>
        </div>
    </div>

</template>

<script lang="ts">


export default {
    data() {
        return {
            user: useSupabaseUser(),
            client: useSupabaseClient(),
            add_tracker_window: false,
            style_theme: useTheme(),
            trackers: []

        };
    },
    methods: {
        closeAddWindow(){
            (this.$refs.add_window as any).$destroy()
            this.add_tracker_window = false
        },
        AddWebsiteTracker(website_data: Tracker){
            // add_tracker(this.user, this.client, )
        }

    },
    async mounted() {
        // if there is no user_id, try to creat one
        if (this.user == null) {
            window.location.href = "/login";
        }
        var data = get_user_trackers(this.client, this.user)
            .then(data => {
            this.trackers = data['website_trackers']
            useState("web_trackers", () => this.trackers);
        })
            .catch(error => {
            console.error(error);
        });
        // TODO, currently assumes that creating a new row for user_id worked
        // TODO, currently assumes that a user exists, should redirect back to /login if not.

        window.addEventListener("mousemove", mouse_move_func, false)
        window.addEventListener("mouseup", mouse_up_func, false)
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

.body
    position: absolute
    width: 100%
    height: 100vh

.body.light-mode
    background-color: $grey-8
.body.dark-mode
    background-color: #111111

</style>