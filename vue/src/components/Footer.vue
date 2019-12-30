<!--
@Author: Codeals
@Date:   07-09-2019
@Email:  ian@codeals.es
@Last modified by:   alejandro
@Last modified time: 2019-11-23T19:34:40+01:00
@Copyright: Codeals
-->
<template>
  <footer class="footer" data-background-color="black">
    <div class="container">
      <nav class="float-left">
        <ul>
          <li>
            <router-link :to="{name: 'terms'}">{{$t('footer.terms')}}</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright float-right">
        &copy;
        {{$t('footer.copyright')}}
        <!-- <i class="fa fa-heart heart"></i> por <a href="http://codeals.es">Codeals</a>.  -->
        <router-link :to="{name: 'dashboard'}">{{$t('app.title')}}</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
}
</script>

<style lang="css" scoped>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  input[type=number] {
    -moz-appearance:textfield; /* Firefox */
  }
</style>
