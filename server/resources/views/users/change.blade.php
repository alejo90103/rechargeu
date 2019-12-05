<!--
# @Author: Codeals
# @Date:   11-07-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 24-11-2019
# @Copyright: Codeals
-->

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
									<span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">{!! trans('user.views.change') !!} {!! trans('user.views.password') !!}</span>
								</div>
							</div>

						</div> -->

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

              <!-- NOTIFICACION -->
              @if(Session::has('msg'))
                  <div class="alert alert-success fade show" role="alert">
                    <div class="alert-icon"><i class="flaticon-like"></i></div>
                    <div class="alert-text">{{ Session::get('msg') }}</div>
                    <div class="alert-close">
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="la la-close"></i></span>
                      </button>
                    </div>
                  </div>
              @endif

              @if(Session::has('err'))
                  <div class="alert alert-danger fade show" role="alert">
                    <div class="alert-icon"><i class="flaticon2-cross"></i></div>
                    <div class="alert-text">{{ Session::get('err') }}</div>
                    <div class="alert-close">
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="la la-close"></i></span>
                      </button>
                    </div>
                  </div>
              @endif

              <div class="kt-subheader   kt-grid__item" id="kt_subheader">
                  <div class="kt-container ">
                      <div class="kt-subheader__main">

                          <h3 class="kt-subheader__title">RowGroup Examples</h3>

                          <span class="kt-subheader__separator kt-subheader__separator--v"></span>

                          <span class="kt-subheader__desc">#XRS-45670</span>

                          <a href="#" class="btn btn-label-primary btn-bold btn-icon-h kt-margin-l-10">
                              Add New
                          </a>
                      </div>
                      <div class="kt-subheader__toolbar">
                          <div class="kt-subheader__wrapper">
                              <a href="#" class="btn kt-subheader__btn-primary">
                                  Actions &nbsp;
                                  <!--<i class="flaticon2-calendar-1"></i>-->
                              </a>

                              <a href="#" class="btn kt-subheader__btn-primary btn-icon">
                                  <i class="flaticon2-file"></i>
                              </a>

                              <a href="#" class="btn kt-subheader__btn-primary btn-icon">
                                  <i class="flaticon-download-1"></i>
                              </a>

                              <a href="#" class="btn kt-subheader__btn-primary btn-icon">
                                  <i class="flaticon2-fax"></i>
                              </a>

                              <a href="#" class="btn kt-subheader__btn-primary btn-icon">
                                  <i class="flaticon2-settings"></i>
                              </a>

                              <div class="dropdown dropdown-inline" data-toggle="kt-tooltip" title="" data-placement="left" data-original-title="Quick actions">
                                  <a href="#" class="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon kt-svg-icon--success kt-svg-icon--md">
                                          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                              <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                              <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                              <path d="M11,14 L9,14 C8.44771525,14 8,13.5522847 8,13 C8,12.4477153 8.44771525,12 9,12 L11,12 L11,10 C11,9.44771525 11.4477153,9 12,9 C12.5522847,9 13,9.44771525 13,10 L13,12 L15,12 C15.5522847,12 16,12.4477153 16,13 C16,13.5522847 15.5522847,14 15,14 L13,14 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,14 Z" fill="#000000"></path>
                                          </g>
                                      </svg>                        <!--<i class="flaticon2-plus"></i>-->
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-right">
                                      <!--begin::Nav-->
                                      <ul class="kt-nav">
                                          <li class="kt-nav__head">
                                              Export Options:
                                              <i class="flaticon2-correct kt-font-warning" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more..."></i>
                                          </li>
                                          <li class="kt-nav__separator"></li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-drop"></i>
                                                  <span class="kt-nav__link-text">Orders</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-new-email"></i>
                                                  <span class="kt-nav__link-text">Members</span>
                                                  <span class="kt-nav__link-badge">
                                                      <span class="kt-badge kt-badge--brand kt-badge--rounded">15</span>
                                                  </span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-calendar-8"></i>
                                                  <span class="kt-nav__link-text">Reports</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__item">
                                              <a href="#" class="kt-nav__link">
                                                  <i class="kt-nav__link-icon flaticon2-link"></i>
                                                  <span class="kt-nav__link-text">Finance</span>
                                              </a>
                                          </li>
                                          <li class="kt-nav__separator"></li>
                                          <li class="kt-nav__foot">
                                              <a class="btn btn-label-brand btn-bold btn-sm" href="#">More options</a>
                                              <a class="btn btn-clean btn-bold btn-sm kt-hidden" href="#" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more...">Learn more</a>
                                          </li>
                                      </ul>
                                      <!--end::Nav-->
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="kt-container  kt-grid__item kt-grid__item--fluid">
                  <div class="alert alert-light alert-elevate" role="alert">
                      <div class="alert-icon"><i class="flaticon-warning kt-font-brand"></i></div>
                      <div class="alert-text">
                          RowGroup adds this ability to DataTables with the ability to customise the start and end grouping rows displayed in the DataTable, letting you integrate the summarised data to fit perfectly in with your site.
                          See official documentation <a class="kt-link kt-font-bold" href="https://datatables.net/extensions/rowgroup/" target="_blank">here</a>.
                      </div>
                  </div>
                  <div class="kt-portlet kt-portlet--mobile">
                      <div class="kt-portlet__head kt-portlet__head--lg">
                          <div class="kt-portlet__head-label">
                              <span class="kt-portlet__head-icon">
                                  <i class="kt-font-brand flaticon2-bell"></i>
                              </span>
                              <h3 class="kt-portlet__head-title">
                                  Ofertas
                              </h3>
                          </div>

                      </div>
                      <div class="kt-portlet__body">

							<!--begin::Portlet-->
							<div class="row">

                <!--Begin:: App Aside-->
								<div class="kt-grid__item kt-app__toggle kt-app__aside" id="kt_user_profile_aside">

									<!--begin:: Widgets/Applications/User/Profile1-->
									<div class="kt-portlet ">
										<div class="kt-portlet__head  kt-portlet__head--noborder">
											<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title">
												</h3>
											</div>

										</div>
										<div class="kt-portlet__body kt-portlet__body--fit-y">

											<!--begin::Widget -->
											<div class="kt-widget kt-widget--user-profile-1">
												<div class="kt-widget__head">
													<!-- <div class="kt-widget__media">
														<img src="{{ asset('uploads/users/'.$user->imagen) }}" alt="image">
													</div> -->
													<div class="kt-widget__content">
														<div class="kt-widget__section">
															<a href="#" class="kt-widget__username">
																{{$user->name}}
																<i class="flaticon2-correct kt-font-success"></i>
															</a>
															<span class="kt-widget__subtitle">
																{{$user->role}}
															</span>
														</div>
                            @if($user->admin == 1)
														<div class="kt-widget__action">
															<a href="{{ route('users.edit', $user->id) }}" class="btn btn-info btn-sm">Editar</a>&nbsp;
														</div>
                            @endif
													</div>
												</div>
												<div class="kt-widget__body">
													<div class="kt-widget__content">
														<div class="kt-widget__info">
															<!-- <span class="kt-widget__label">{!! trans('user.views.email') !!}:</span> -->
															<a href="#" class="kt-widget__data">{{$user->email}}</a>
														</div>


													</div>

												</div>
											</div>

											<!--end::Widget -->
										</div>
									</div>

									<!--end:: Widgets/Applications/User/Profile1-->
								</div>

								<div class="col-lg-8">
									<div class="kt-portlet">
										<div class="kt-portlet__head">
											<div class="kt-portlet__head-label">
												<h3 class="kt-portlet__head-title">
													Cambiar password
												</h3>
											</div>
										</div>

										<!--begin::Form-->
										<form class="kt-form kt-form--label-right" action="{{route('users.store-password')}}" method="post" enctype="multipart/form-data">
                      @csrf
											<div class="kt-portlet__body">
												<div class="kt-section">
													<h3 class="kt-section__title">
														Nueva contraseña
													</h3>

		                			<input type="hidden" name="password" value="">

													<div class="kt-section__content">
														<div class="form-group form-group-last row">
															<div class="col-lg-6">
																<label class="form-control-label">* Nueva contraseña:</label>
																<input type="password" name="password" class="form-control" placeholder="" value="{{ old('password') }}">
															</div>

                              <div class="col-lg-6">
																<label class="form-control-label">* Confirmar contraseña:</label>
																<input type="password" name="password_confirmation" class="form-control" placeholder="" value="{{ old('email') }}">
															</div>

														</div>

													</div>
												</div>
												<!-- <div class="kt-separator kt-separator--border-dashed kt-separator--space-xl"></div> -->

											</div>
											<div class="kt-portlet__foot">
												<div class="kt-form__actions">
													<div class="row">
														<div class="col-lg-12">
															<button type="submit" class="btn btn-brand">Aceptar</button>
															<!-- <button type="reset" class="btn btn-secondary">{!! trans('share.views.cancel') !!}</button> -->
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
                    </div>
						</div>

						<!-- end:: Content -->

@endsection

@section('js')

    <!--begin::Page Scripts(used by this page) -->
		<script src="{{ asset('assets/js/demo4/pages/crud/forms/validation/form-controls.js') }}" type="text/javascript"></script>

		<!--end::Page Scripts -->

@endsection
