<template>
    <Page actionBarHidden="true">
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image class="logo" src="~/assets/images/logo.png"></Image>
                <Label class="header" text="Recharge U"></Label>

                <GridLayout rows="auto, auto, auto">
                    <StackLayout row="0" class="input-field">
                        <TextField class="input" hint="Email" :isEnabled="!processing"
                            keyboardType="email" autocorrect="false"
                            autocapitalizationType="none" v-model="user.email"
                            returnKeyType="next" @returnPress="focusPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="1" class="input-field">
                        <TextField class="input" ref="password" :isEnabled="!processing"
                            hint="Password" secure="true" v-model="user.password"
                            :returnKeyType="isLoggingIn ? 'done' : 'next'"
                            @returnPress="focusConfirmPassword"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                        <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                            hint="Confirm password" secure="true" v-model="user.confirmPassword"
                            returnKeyType="done"></TextField>
                        <StackLayout class="hr-light"></StackLayout>
                    </StackLayout>

                    <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator>
                </GridLayout>

                <Button :text="isLoggingIn ? 'Log In' : 'Sign Up'" :isEnabled="!processing"
                    @tap="handleFormSubmit" class="btn btn-primary m-t-20 button-text"></Button>
                <Label *v-show="isLoggingIn" text="Forgot your password?"
                    class="login-label" @tap="forgotPassword()"></Label>
            </StackLayout>

            <Label class="login-label sign-up-label" @tap="toggleForm">
                <FormattedString>
                    <Span :text="isLoggingIn ? 'Don’t have an account? ' : 'Back to Login'"></Span>
                    <Span :text="isLoggingIn ? 'Sign up' : ''" class="bold"></Span>
                </FormattedString>
            </Label>
        </FlexboxLayout>
    </Page>
</template>

<script>
    import { fetch } from 'tns-core-modules/fetch';
    import Home from "./Home";
    import {loginUrl, userUrl, getHeader} from './../config';
    import {clientId, clientSecret} from './../env';
    import {mapState} from 'vuex';
    import {setString, getString} from 'tns-core-modules/application-settings';

    export default {
        data() {
            return {
                isLoggingIn: true,
                processing: false,
                user: {
                    email: "iankamisama@gmail.com",
                    password: "123123",
                    confirmPassword: ""
                }
            };
        },
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        },

        methods: {
            isLogin () {
                if (this.userStore.authUser !== null) {
                    // this.$router.push({name: 'home'})
                    this.processing = false;
                    this.$navigateTo(Home, { clearHistory: true });
                }
            },

            handleFormSubmit() {
                if (!this.user.email || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                if (this.isLoggingIn) {
                    this.handleLogin();
                } else {
                    this.handleRegister();
                }
            },

            handleLogin () {
                this.processing = true;
                const authUser = {};
                fetch(loginUrl, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        grant_type: 'password',
                        client_id: clientId,
                        client_secret: clientSecret,
                        username: this.user.email,
                        password: this.user.password,
                        scope: ''
                    })
                }).then((res) => {
                        if (res.status === 200) {
                            // console.log('Oauth token', res)
                            return res.json();
                        }
                    })
                    .then((response) => {
                        // console.log('Oauth token', response.refresh_token)
                        authUser.access_token = response.access_token;
                        authUser.refresh_token = response.refresh_token;
                        setString("authUser", response.access_token);

                        fetch(userUrl, {
                            headers: getHeader()
                        }).then((res) => {
                                if (res.status === 200) {
                                    // console.log('Oauth token', res)
                                    return res.json();
                                }
                            }).then(response => {
                                    // console.log('user object', response)
                                    authUser.email = response.email;
                                    authUser.name = response.name;
                                    this.$store.dispatch('setUserObject', authUser);
                                    this.processing = false;
                                    this.$navigateTo(Home, { clearHistory: true });
                                })
                            .catch((err) => {
                                if (res.status === 404) {
                                    this.alert(
                                        "Active la cuenta en su correo"
                                    );
                                }
                            });
                    }).catch((err) => {
                        if (res.status === 401) {
                            this.alert(
                                "Usuario o contraseña incorrecto"
                            );
                        }
                    });

                this.processing = false;
            },

            handleRegister() {
                if (this.user.password != this.user.confirmPassword) {
                    this.alert("Your passwords do not match.");
                    this.processing = false;
                    return;
                }

                this.$backendService
                    .register(this.user)
                    .then(() => {
                        this.processing = false;
                        this.alert(
                            "Your account was successfully created.");
                        this.isLoggingIn = true;
                    })
                    .catch(() => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we were unable to create your account."
                        );
                    });
            },

            toggleForm() {
                this.isLoggingIn = !this.isLoggingIn;
            },

            forgotPassword() {
                prompt({
                    title: "Forgot Password",
                    message: "Enter the email address you used to register for Recharge U to reset your password.",
                    inputType: "email",
                    defaultText: "",
                    okButtonText: "Ok",
                    cancelButtonText: "Cancel"
                }).then(data => {
                    if (data.result) {
                        this.$backendService
                            .resetPassword(data.text.trim())
                            .then(() => {
                                this.alert(
                                    "Your password was successfully reset. Please check your email for instructions on choosing a new password."
                                );
                            })
                            .catch(() => {
                                this.alert(
                                    "Unfortunately, an error occurred resetting your password."
                                );
                            });
                    }
                });
            },

            focusPassword() {
                this.$refs.password.nativeView.focus();
            },

            focusConfirmPassword() {
                if (!this.isLoggingIn) {
                    this.$refs.confirmPassword.nativeView.focus();
                }
            },
          
            alert(message) {
                return alert({
                    title: "Recharge U",
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #762889;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .button-text {
        background-color: #762889;
        color: #fff;
        border-radius: 100px;
    }

    .bold {
        color: #000000;
    }
</style>
