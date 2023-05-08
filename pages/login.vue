<template>
    <div class="window-container">
        <div class="login-window">
            
            <div class="login-text" @click="">
                Login
            </div>
            
            <input class="text-input" placeholder="Username/Email" v-model="username">
            <input class="text-input" placeholder="Password" v-model="password">
            
            <div class="click-button" @click="attemptLogin">
                Login
            </div>

            <a href="/signup" class="signup-text">Not yet a member? Signup Here</a>
        </div>
    </div>
</template>


<script lang="ts">



export default {
    data(){
        return {
            username:"",
            password:"",
            client: useSupabaseClient()
        }
    },
    methods:{
        attemptLogin(){
            
            this.client.auth.signInWithPassword({'email':this.username, 'password':this.password}).then(async (response:any) => {
                
                if(response['error'] != null){
                    console.log(response['error'])
                    return 
                }
                window.location.href = '/dashboard'
            
            }).catch((error) => {
            
                console.log("SUPABASE IS DOWN SHIT IS OFFICALLY HITTING THE FAN")
            
            });
                
        }   
    }
}

</script>

<style scoped lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap')

$black: #000000
$grey: #18181B
$border-grey: #2c2c2e
$outline-blue: #4d6ab8
.window-container
    height: 100vh
    display: flex
    justify-content: center
    align-items: center


.login-window
    background-color: $grey
    display: flex
    flex-direction: column
    width: 25%
    max-width: 300px
    gap: 10px
    height: fit-content
    padding: 20px
    border-radius: 10px
    box-shadow: 0px 1px 33px 0px rgba(0,0,0,0.63)
    border: thin $border-grey solid

.login-text
    text-align: center
    padding: 10px
    color: #e6e6e6
    font-family: 'Roboto', sans-serif
    user-select: none

.text-input
    background-color: $grey
    outline: none
    border: none
    padding: 10px
    border-radius: 5px
    color: #F4EEE0
    border: thin $border-grey solid
    font-family: 'Roboto', sans-serif
.text-input:focus
    outline: thin solid $outline-blue  

.signup-login-container
    display: flex
    justify-content: space-between
    padding-right: 10px
    padding-left: 10px
    padding-top: 5px

.click-button
    background-color: #242424
    color: #e6e6e6
    padding: 10px
    border-radius: 5px
    font-family: 'Roboto', sans-serif
    text-align: center
    width: 30%
    user-select: none
    border: thin #242424 solid
    transition: border-color 0.1s ease
    align-self: center
    margin-top: 10px
.click-button:hover
    border-color: $outline-blue

.signup-text
    color: #e6e6e6
    text-decoration: none
    font-family: 'Roboto', sans-serif
    font-size: 12px
    text-align: center
    padding-top: 20px
</style>

