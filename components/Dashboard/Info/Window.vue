<template>
    <div class="container">
        <div class="flex-container">
            <div class="top-bar">
                <ToolsPanel class="status-bar">
                    
                </ToolsPanel>
                
                <ToolsPanel>
                    
                </ToolsPanel>
            </div>
            <div class="bottom-bar">
                <ToolsPanel>
                
                </ToolsPanel>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {    
    data(){
        return {
            style_theme: useTheme()
        }
    }
    

}
</script>

<style scoped lang="sass">
@import '@/assets/styles/public/colors.sass'

.container
    height: 100%
    width: 100%
    overflow-y: scroll

.container::-webkit-scrollbar
    display: none

.flex-container
    display: flex
    width: 100%
    flex-direction: column
    gap: 20px
    height: 200%

.top-bar
    display: flex
    gap: 10px

.bottom-bar
    height: 100%

.status-bar
    width: 500px
    aspect-ratio: 1/1.5
</style>