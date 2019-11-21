<!--
@Author: Codeals
@Date:   05-08-2019
@Email:  ian@codeals.es
@Last modified by:   Codeals
@Last modified time: 07-09-2019
@Copyright: Codeals
-->

<script>
export default {

}
</script>

<template>
  <div class="main main-raised" id="dashboard-wrapper">
    <div class="section section-basic">
      <div class="container">
        <div class="row">

          <div class="col-lg-12 col-md-12 center">
            <ul class="nav nav-pills nav-pills-icons" role="tablist">
              <!-- color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" -->
              <li class="nav-item">
                <a class="nav-link active" href="#dashboard-1" role="tab" data-toggle="tab">
                  <i class="material-icons">phone_iphone</i> Móvil
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#schedule-1" role="tab" data-toggle="tab">
                  <i class="material-icons">wifi</i> Nauta
                </a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
                  <i class="material-icons">list</i> Tasks
                </a>
              </li> -->
            </ul>
            <div class="tab-content tab-space">
              <div class="tab-pane active" id="dashboard-1">
                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                <br>
                <br> Dramatically visualize customer directed convergence without revolutionary ROI.
              </div>
              <div class="tab-pane" id="schedule-1">
                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                <br>
                <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
              </div>
              <div class="tab-pane" id="tasks-1">
                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                <br>
                <br>Dynamically innovate resource-leveling customer service for state of the art customer service.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .center {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
</style>
