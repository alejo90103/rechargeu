<!--
# @Author: Codeals
# @Date:   20-06-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 24-11-2019
# @Copyright: Codeals
-->

@extends('layouts.app')

@section('content')

<!-- begin:: Subheader -->
						<!-- <div class="kt-subheader   kt-grid__item" id="kt_subheader">
							<div class="kt-subheader__main">
								<h3 class="kt-subheader__title">
									{!! trans('user.views.user') !!} </h3>
								<span class="kt-subheader__separator kt-hidden"></span>
								<div class="kt-subheader__breadcrumbs">
									<a href="{{ route('/') }}" class="kt-subheader__breadcrumbs-home"><i class="flaticon-home-2"></i></a>
									<span class="kt-subheader__breadcrumbs-separator"></span>
									<a href="{{ route('/') }}" class="kt-subheader__breadcrumbs-link">
										{!! trans('share.layouts.home') !!} </a>
									<span class="kt-subheader__breadcrumbs-separator"></span>
									<a href="{{ route('users.index') }}" class="kt-subheader__breadcrumbs-link">
										{!! trans('user.views.users') !!} </a>
									<span class="kt-subheader__breadcrumbs-separator"></span>
									<span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">{!! trans('share.views.insert') !!}</span>
								</div>
							</div> -->

						</div>

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
										<div class="kt-portlet__head">
											<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title">
													{!! trans('share.views.insert') !!} {!! trans('user.views.user') !!}
												</h3>
											</div>
										</div>

										<!--begin::Form-->
										<form class="kt-form kt-form--label-right" action="{{route('users.store')}}" method="post" enctype="multipart/form-data">
                      @csrf
											<div class="kt-portlet__body">
												<div class="kt-section">
													<h3 class="kt-section__title">
														{!! trans('user.views.user') !!}
													</h3>

		                			<input type="hidden" name="password" value="">

													<div class="kt-section__content">
														<div class="form-group form-group-last row">
															<div class="col-lg-3">
																<label class="form-control-label">* {!! trans('user.views.name') !!}:</label>
																<input type="text" name="name" class="form-control" placeholder="" value="{{ old('name') }}">
															</div>

                              <div class="col-lg-3">
																<label class="form-control-label">* {!! trans('user.views.email') !!}:</label>
																<input type="text" name="email" class="form-control" placeholder="" value="{{ old('email') }}">
															</div>

                              <div class="col-lg-3 form-group-sub">
																<label class="form-control-label">* {!! trans('user.views.role') !!}:</label>
                                {!! Form::select('role', $roles, null, ['class' => 'form-control']) !!}
															</div>

															<div class="col-lg-3 form-group-sub">
																<label class="form-control-label">* {!! trans('user.views.logo') !!}:</label>
																<input type="file" class="form-control" name="imagen" placeholder="" value="{{ old('imagen') }}">
															</div>
														</div>

													</div>
												</div>

											</div>
											<div class="kt-portlet__foot">
												<div class="kt-form__actions">
													<div class="row">
														<div class="col-lg-12">
															<button type="submit" class="btn btn-brand">{!! trans('share.views.accept') !!}</button>
															<button type="reset" class="btn btn-secondary">{!! trans('share.views.cancel') !!}</button>
														</div>
													</div>
												</div>
											</div>
										</form>

										<!--end::Form-->
									</div>

									<!--end::Portlet-->
								</div>
							</div>
						</div>

						<!-- end:: Content -->

@endsection

@section('js')

    <!--begin::Page Scripts(used by this page) -->
		<script src="{{ asset('assets/js/demo4/pages/crud/forms/validation/form-controls.js') }}" type="text/javascript"></script>

		<!--end::Page Scripts -->

@endsection
