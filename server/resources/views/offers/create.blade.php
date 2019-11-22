<!--
# @Author: Codeals
# @Date:   20-06-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 22-11-2019
# @Copyright: Codeals
-->

@extends('layouts.app')

@section('content')

<!-- begin:: Subheader -->


						<!-- end:: Subheader -->

						<!-- begin:: Content -->
						<div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">

              @if ($errors->any())
                  <div class="alert alert-danger fade show" role="alert">
        						<div class="alert-icon"><i class="flaticon2-cross"></i></div>
        						<div class="alert-text">
                      @foreach ($errors->all() as $err)
              				 {{ $err }} </br>
              				@endforeach
                    </div>
        						<div class="alert-close">
        							<button type="button" class="close" data-dismiss="alert" aria-label="Close">
        								<span aria-hidden="true"><i class="la la-close"></i></span>
        							</button>
        						</div>
        					</div>
              @endif

							<!--begin::Portlet-->
							<div class="row">

								<div class="col-lg-12">


									<div class="kt-portlet">
										<div class="row">

										</div>

										<div class="row">

											<div class="col-lg-3">

											</div>

											<div class="col-lg-6">

												<div class="kt-portlet__head">
													<div class="kt-portlet__head-label">
														<h3 class="kt-portlet__head-title">
															Crear Oferta
														</h3>
													</div>
												</div>
												<!--begin::Form-->
												<form class="kt-form kt-form--label-right" action="{{route('offers.store')}}" method="post">
                      		@csrf
													<div class="kt-portlet__body">
														<div class="form-group form-group-last">
															<!-- <div class="alert alert-secondary" role="alert">
																<div class="alert-icon"><i class="flaticon-warning kt-font-brand"></i></div>
																<div class="alert-text">
																	Here are examples of <code>.form-control</code> applied to each textual HTML5 input type:
																</div>
															</div> -->
														</div>
														<div class="form-group row">
															<label for="example-text-input" class="col-2 col-form-label">Text</label>
															<div class="col-10">
																<input class="form-control" type="text" value="Artisanal kale" id="example-text-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-search-input" class="col-2 col-form-label">Search</label>
															<div class="col-10">
																<input class="form-control" type="search" value="How do I shoot web" id="example-search-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-email-input" class="col-2 col-form-label">Email</label>
															<div class="col-10">
																<input class="form-control" type="email" value="bootstrap@example.com" id="example-email-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-url-input" class="col-2 col-form-label">URL</label>
															<div class="col-10">
																<input class="form-control" type="url" value="https://getbootstrap.com" id="example-url-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-tel-input" class="col-2 col-form-label">Telephone</label>
															<div class="col-10">
																<input class="form-control" type="tel" value="1-(555)-555-5555" id="example-tel-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-password-input" class="col-2 col-form-label">Password</label>
															<div class="col-10">
																<input class="form-control" type="password" value="hunter2" id="example-password-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-number-input" class="col-2 col-form-label">Number</label>
															<div class="col-10">
																<input class="form-control" type="number" value="42" id="example-number-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-datetime-local-input" class="col-2 col-form-label">Date and time</label>
															<div class="col-10">
																<input class="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="example-datetime-local-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-date-input" class="col-2 col-form-label">Date</label>
															<div class="col-10">
																<input class="form-control" type="date" value="2011-08-19" id="example-date-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-month-input" class="col-2 col-form-label">Month</label>
															<div class="col-10">
																<input class="form-control" type="month" value="2011-08" id="example-month-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-week-input" class="col-2 col-form-label">Week</label>
															<div class="col-10">
																<input class="form-control" type="week" value="2011-W33" id="example-week-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-time-input" class="col-2 col-form-label">Time</label>
															<div class="col-10">
																<input class="form-control" type="time" value="13:45:00" id="example-time-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-color-input" class="col-2 col-form-label">Color</label>
															<div class="col-10">
																<input class="form-control" type="color" value="#563d7c" id="example-color-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-email-input" class="col-2 col-form-label">Range</label>
															<div class="col-10">
																<input class="form-control" type="range">
															</div>
														</div>
													</div>
													<div class="kt-portlet__foot">
														<div class="kt-form__actions">
															<div class="row">
																<div class="col-2">
																</div>
																<div class="col-10">
																	<button type="reset" class="btn btn-success">Submit</button>
																	<!-- <button type="reset" class="btn btn-secondary">Cancel</button> -->
																</div>
															</div>
														</div>
													</div>
												</form>
											</div>
											<div class="col-lg-3">

											</div>
										</div>


									</div>
									<!--end::Portlet-->
								</div>
							</div>
						</div>

						<!-- end:: Content -->

@endsection

@section('js')

    <!--begin::Page Scripts(used by this page) -->
		<script src="{{ asset('assets/js/demo2/pages/crud/forms/validation/form-controls.js') }}" type="text/javascript"></script>

		<!--end::Page Scripts -->

@endsection
