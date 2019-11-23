<!--
@Author: Codeals
@Date:   07-09-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 21-11-2019
@Copyright: Codeals
-->
<template>
  <footer class="footer" data-background-color="black">
    <div class="container">
      <nav class="float-left">
        <ul>
          <li>
            <a href="http://codeals.es">
              Codeals
            </a>
          </li>
          <li>
            <a href="http://codeals.es/#about">
              About Us
            </a>
          </li>
          <li>
            <a href="http://blog.codeals.es">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright float-right">
        &copy;
        Hecho con <i class="fa fa-heart heart"></i> por <a href="http://codeals.es">Codeals</a>. <router-link :to="{name: 'home'}">Recargame.</router-link>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
