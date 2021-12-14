<template>
    <section class="w-full">
        <div class="container mx-auto px-12 border-2 border-gray-800 rounded-lg py-10 glass-900">

            <!-- Player name / class / level / health / armor / speed / initiative -->
            <div class="flex items-center justify-between">

                <div class="">

                    <!-- Character name -->
                    <p class="text-white text-xl font-bold">Бомбур</p>
                    
                    <!-- Charcter race etc -->
                    <p class="text-gray-400">
                        воїн / гірний дварф / 3 рівень
                    </p>

                </div>
                
                <div class="flex space-x-10">

                    <!-- Health points -->
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center w-20 h-20 border-2 border-gray-800 rounded-md">
                            <p class="text-white text-xl font-bold">26</p>
                        </div>
                        <p class="text-center text-gray-600 font-bold text-sm mt-2 leading-4">Очки <br> здоров'я</p>
                    </div>

                    <!-- Armor poitns -->
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center w-20 h-20 border-2 border-gray-800 rounded-md">
                            <p class="text-white text-xl font-bold">16</p>
                        </div>
                        <p class="text-center text-gray-600 font-bold text-sm mt-2 leading-4">Очки <br> броні</p>
                    </div>

                    <!-- Speed -->
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center w-20 h-20 border-2 border-gray-800 rounded-md">
                            <p class="text-white text-xl font-bold">25</p>
                        </div>
                        <p class="text-center text-gray-600 font-bold text-sm mt-2 leading-4">Швидкість</p>
                    </div>

                    <!-- Initiative -->
                    <div class="flex flex-col items-center">
                        <div class="flex items-center justify-center w-20 h-20 border-2 border-gray-800 rounded-md">
                            <p class="text-white text-xl font-bold">4</p>
                        </div>
                        <p class="text-center text-gray-600 font-bold text-sm mt-2 leading-4">Ініціатива</p>
                    </div>

                </div>

            </div>

            <!-- Player status -->
            <div class="flex items-center justify-center space-x-5">

                <!-- Poisoned -->
                <div v-on:click="test()" class="w-12 h-12 cursor-pointer rounded-md bg-gradient-to-b from-poisoned-start to-poisoned-finish p-0.5">
                    <div class="w-full h-full flex items-center justify-center rounded-md glass-bg bg-gray-900">
                        <p class="" >
                            <!-- Poisoned bottle -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.75008 2.16667C9.60642 2.16667 9.46865 2.22374 9.36706 2.32532C9.26548 2.4269 9.20841 2.56468 9.20841 2.70833V4.875C9.20841 5.01866 9.26548 5.15644 9.36706 5.25802C9.46865 5.3596 9.60642 5.41667 9.75008 5.41667H10.8334V7.58333C9.8278 7.58333 8.86338 7.98281 8.1523 8.69389C7.44123 9.40496 7.04175 10.3694 7.04175 11.375V22.2083C7.04175 22.6393 7.21295 23.0526 7.5177 23.3574C7.82245 23.6621 8.23577 23.8333 8.66675 23.8333H17.3334C17.7644 23.8333 18.1777 23.6621 18.4825 23.3574C18.7872 23.0526 18.9584 22.6393 18.9584 22.2083V11.375C18.9584 10.3694 18.5589 9.40496 17.8479 8.69389C17.1368 7.98281 16.1724 7.58333 15.1667 7.58333V5.41667H16.2501C16.3937 5.41667 16.5315 5.3596 16.6331 5.25802C16.7347 5.15644 16.7917 5.01866 16.7917 4.875V2.70833C16.7917 2.56468 16.7347 2.4269 16.6331 2.32532C16.5315 2.22374 16.3937 2.16667 16.2501 2.16667H9.75008ZM11.9167 8.125V5.41667H14.0834V8.125C14.0834 8.26866 14.1405 8.40644 14.2421 8.50802C14.3436 8.6096 14.4814 8.66667 14.6251 8.66667H15.1667C15.791 8.66674 16.3962 8.88241 16.8798 9.2772C17.3634 9.672 17.6959 10.2217 17.8209 10.8333H8.17925C8.30431 10.2217 8.63675 9.672 9.12038 9.2772C9.604 8.88241 10.2091 8.66674 10.8334 8.66667H11.3751C11.5187 8.66667 11.6565 8.6096 11.7581 8.50802C11.8597 8.40644 11.9167 8.26866 11.9167 8.125ZM15.2984 16.5403L14.9154 16.1574L13.766 17.3068L14.9154 18.4557L15.2984 18.0727L16.0643 18.8386L14.5319 20.371L13.766 19.6045L14.149 19.2216L13.0001 18.0727L11.8517 19.221L12.2342 19.6045L11.4682 20.3705L11.0853 19.9875L10.3188 19.2216L9.93587 18.8386L10.7018 18.0722L11.0853 18.4557L12.2336 17.3068L11.0853 16.1574L10.7018 16.5403L9.93587 15.7744L10.3188 15.3915L11.0847 14.6255L11.4682 14.2426L12.2342 15.0085L11.8512 15.3915L13.0001 16.5409L14.1495 15.3915L13.766 15.008L14.5319 14.242L16.0643 15.7739L15.2984 16.5403Z" fill="url(#paint0_linear_66_939)"/>
                                <defs>
                                <linearGradient id="paint0_linear_66_939" x1="13.0001" y1="2.16667" x2="13.0001" y2="23.8333" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#7C67FF"/>
                                <stop offset="1" stop-color="#7000FF"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </p>
                    </div>
                </div>

                <!-- Bleed -->
                <div v-on:click="test()" class="w-12 h-12 cursor-pointer rounded-md bg-gradient-to-br from-bleed-start to-bleed-finish p-0.5">
                    <div class="w-full h-full flex items-center justify-center rounded-md glass-bg bg-gray-900">
                        <p class="" >
                            <!-- Poisoned bottle -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
                                <path d="M11.5901 10.8173C11.567 10.7525 11.5395 10.6893 11.5078 10.6281L11.5118 10.6368C11.3962 10.3669 10.4673 8.57138 10.3122 8.32675L5.99883 0L1.5755 8.531C1.42515 8.77642 0.600627 10.3677 0.486681 10.6368L0.441577 10.7366C0.147393 11.4539 -0.00264437 12.2222 3.52693e-05 12.9976C3.52693e-05 14.5895 0.632133 16.1163 1.75727 17.2419C2.88241 18.3676 4.40843 19 5.99962 19C7.59081 19 9.11683 18.3676 10.242 17.2419C11.3671 16.1163 11.9992 14.5895 11.9992 12.9976V12.9928L12 12.9129C12 12.1568 11.8497 11.4356 11.5767 10.7785L11.5901 10.8158V10.8173ZM6.002 17.4317C5.2345 17.4319 4.4802 17.2321 3.81334 16.852C3.14648 16.4719 2.59006 15.9245 2.19886 15.2639C1.80766 14.6033 1.59516 13.8522 1.58229 13.0844C1.56942 12.3167 1.75661 11.5588 2.12545 10.8854L2.11358 10.9084C2.05562 11.2166 2.02648 11.5297 2.02654 11.8433V11.8441C2.02738 13.2498 2.58588 14.5976 3.57936 15.5916C4.57284 16.5855 5.92005 17.1443 7.32504 17.1451C7.41445 17.1451 7.5102 17.1451 7.59883 17.1404C7.09309 17.3348 6.55566 17.4336 6.01386 17.4317H5.99567H5.99646H6.002Z" fill="url(#paint0_linear_66_959)" fill-opacity="0.8"/>
                                <defs>
                                <linearGradient id="paint0_linear_66_959" x1="0" y1="0" x2="16.9791" y2="7.11042" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF3C3C"/>
                                <stop offset="1" stop-color="#FF6A3C"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {

    methods: {
        test() {
            console.log('Hello it\'s me!')
        }
    }
}
</script>

<style scoped>

</style>