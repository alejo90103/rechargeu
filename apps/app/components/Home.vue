<template>
    <Page class="page">

        <ActionBar backgroundColor="#762889" flat="true">
            <StackLayout orientation="vertical" width="100%" height="100%"
                backgroundColor="#762889">
                <StackLayout backgroundColor="#762889">
                    <StackLayout #searchRow orientation="horizontal"
                        marginTop="5">
                        <TextField backgroundColor="white" paddingLeft="20"
                            borderRadius="20" v-model="textFieldValue" width="80%"
                            height="40" fontSize="14" hint="Search"></TextField>
                        <!-- <Image src="~/assets/images/shape4@3x.png" height="30"
                            width="30" marginLeft="10"></Image> -->
                    </StackLayout>
                </StackLayout>
            </StackLayout>
        </ActionBar>


        <GridLayout orientation="vertical" width="100%" height="100%" columns="*"
            rows="*,auto">

            <StackLayout col="0" row="0" backgroundColor="#f8f8f8">
                <StackLayout orientation="horizontal" backgroundColor="#762889" paddingBottom="15"
                    marginTop="-10">
                    <Image width="15%" class="logo" src="~/assets/images/logo.png"></Image>
                    <Label text="Recharge U" class="font-weight-bold"
                        color="#FFFFFF" padding="15" fontSize="24"></Label>
                </StackLayout>

                <StackLayout paddingLeft="20" paddingRight="20" paddingTop="20"
                    paddingBottom="5" marginTop="-20" backgroundColor="#fff"
                    borderRadius="10" height="85%" width="90%"
                    stretch="aspectFit" class="form">
                    <GridLayout columns="*" rows="auto,*,auto" height="100%">

                        <!-- <GridLayout marginTop="-200" columns="auto,*,auto" rows="auto,auto"
                            col="0" row="3">

                            <TextField col="0" row="0" class="input" hint="Name" autocorrect="false" v-model="cell.name"></TextField>

                            <TextField col="0" row="1" class="input" hint="Phone" autocorrect="false" v-model="cell.phone"></TextField>
                            
                            <ActivityIndicator col="0" row="2" rowSpan="3" :busy="processing"></ActivityIndicator>

                            <Button col="0" row="3" text="Recharge" @tap="handleFormSubmit" class="btn btn-primary m-t-20 button-text"></Button>
                        </GridLayout> -->

                        <GridLayout marginTop="50" rows="auto, auto, auto, auto">
                            <StackLayout row="0" class="input-field">
                                <TextField class="input" hint="Name"
                                    autocorrect="false"
                                    autocapitalizationType="none" v-model="cell.name"></TextField>
                                <StackLayout class="hr-light"></StackLayout>
                            </StackLayout>

                            <StackLayout row="1" class="input-field">
                                <!-- <TextField class="input" ref="password" :isEnabled="!processing"
                                    hint="Password" secure="true" v-model="user.password"
                                    :returnKeyType="isLoggingIn ? 'done' : 'next'"
                                    @returnPress="focusConfirmPassword"></TextField> -->
                                    <TextField class="input" hint="Phone"
                                    autocorrect="false"
                                    autocapitalizationType="none" v-model="cell.phone"></TextField>
                                <StackLayout class="hr-light"></StackLayout>
                            </StackLayout>

                            <StackLayout row="2" v-show="!isLoggingIn" class="input-field">
                                <!-- <TextField class="input" ref="confirmPassword" :isEnabled="!processing"
                                    hint="Confirm password" secure="true" v-model="user.confirmPassword"
                                    returnKeyType="done"></TextField> -->
                                    <!-- <TextField class="input" hint="Offers"
                                    autocorrect="false"
                                    autocapitalizationType="none" v-model="cell.offer_id"></TextField> -->
                                    <ListView for="item in offerStore.offers" @itemTap="onItemTap">
                                        <v-template>
                                            <Label :text="item.name" />
                                        </v-template>
                                    </ListView>
                                <StackLayout class="hr-light"></StackLayout>
                            </StackLayout>

                            <StackLayout row="3" class="input-field">
                                <Button text="Recharge" @tap="handleFormSubmit" class="btn btn-primary m-t-10 button-text"></Button>
                                <StackLayout class="hr-light"></StackLayout>
                            </StackLayout>

                            <!-- <ActivityIndicator rowSpan="3" :busy="processing"></ActivityIndicator> -->
                        </GridLayout>

                        <!-- <Button text="Recharge" @tap="handleFormSubmit" class="btn btn-primary m-t-15 button-text"></Button> -->

                    </GridLayout>

                </StackLayout>

            </StackLayout>

            <StackLayout col="0" row="1" orientation="horizontal"
                backgroundColor="#FFFFFF" height="60">
                <GridLayout rows="*" columns="*,*,*,*,*">
                    <Image col="0" row="0" (tap)="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/images/shape2@3x.png"></Image>
                    <Image col="1" row="0" (tap)="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/images/shape1@3x.png"></Image>
                    <Image col="2" row="0" (tap)="onButtonTap()" height="60"
                        width="60" margin="10" src="~/assets/images/home@3x.png"></Image>
                    <Image col="3" row="0" (tap)="onButtonTap()" height="25"
                        width="25" margin="10" src="~/assets/images/shape3@3x.png"></Image>
                    <Image col="4" row="0" (tap)="onButtonTapOut()" height="25"
                        width="25" margin="10" src="~/assets/images/icon04@3x.png"></Image>
                </GridLayout>
            </StackLayout>

        </GridLayout>
    </page>
</template>

<script>

    import {mapState, mapGetters} from 'vuex';
    import {apiDomain} from './../config';
    import moment from 'moment'
    import Login from "./Login";

    export default {
        data () {
            return {
                contact: '',
                type: 'cell',
                cell: {
                    name: '',
                    phone: '',
                    offer_id: '',
                    call: 'rechargeCell'
                },
                nauta: {
                    name: '',
                    email: '',
                    offer_id: '',
                    call: 'rechargeNauta'
                },
                choose_offer_cell: '',
                choose_offer_nauta: '',
                server: apiDomain,
                now: moment(new Date()).format('YYYY/MM/DD'),
                moment
            }
        },

        computed: {
            ...mapState({
                userStore: state => state.userStore,
                rechargeStore: state => state.rechargeStore,
                offerStore: state => state.offerStore
            }),
            ...mapGetters({
                optionsCell: 'getCellOffers',
                optionsNauta: 'getNautaOffers'
            })
        },

        created () {
            this.$store.dispatch('getOfferList');
        },

        methods: {
            handleFormSubmit() {
                // this.$backendService.logout();
                // this.$navigateTo(Login, {
                //     clearHistory: true
                // });

                // this.$store.dispatch('getTest');
                console.log(this.offerStore.offers);
            },

            onButtonTapOut() {
                this.$backendService.logout();
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            }
        }
    };
</script>

<style>
    .logo {
        margin-left: 5px;
    }

    .button-text {
        background-color: #762889;
        color: #fff;
        border-radius: 100px;
    }

    .ActionBar {
        background-color: transparent;
    }

    .album-image {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    #searchRow {
        margin-top: 20;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
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
</style>
