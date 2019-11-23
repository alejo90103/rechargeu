<!--
# @Author: Codeals
# @Date:   20-06-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 23-11-2019
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
															Editar Oferta
														</h3>
													</div>
												</div>
												<!--begin::Form-->
												<form class="kt-form kt-form--label-right" action="{{ route('offers.update', $offer->id) }}" method="post">
													<input type="hidden" name="_method" value="PUT">
                      		@csrf
													<input type="hidden" name="id" value="{{$offer->id}}">
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
															<label for="example-text-input" class="col-2 col-form-label">Nombre Oferta</label>
															<div class="col-10">
																<input class="form-control" name="name" type="text" value="{{$offer->name}}" id="example-text-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-search-input" class="col-2 col-form-label">Tipo</label>
															<div class="col-10">
																 {!! Form::select('type', $types, $offer->type, ['class' => 'form-control', 'id' => 'example-search-input']) !!}
																<!-- <input class="form-control" type="search" value="How do I shoot web" id="example-search-input"> -->
															</div>
														</div>
														<!-- <div class="form-group row">
															<label for="example-tel-input" class="col-2 col-form-label">Celular</label>
															<div class="col-10">
																<input class="form-control" name="phone" type="tel" value="{{ old('phone') }}" id="example-tel-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-email-input" class="col-2 col-form-label">Email</label>
															<div class="col-10">
																<input class="form-control" name="phone" type="email" value="{{ old('email') }}" id="example-email-input">
															</div>
														</div> -->
														<div class="form-group row">
															<label for="example-datetime-local-input" class="col-2 col-form-label">Fecha Inicio</label>
															<div class="col-10">
																<input class="form-control" name="date_ini" type="date" value="{{$offer->date_ini}}" id="example-datetime-local-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-date-input" class="col-2 col-form-label">Fecha Fin</label>
															<div class="col-10">
																<input class="form-control" name="date_end" type="date" value="{{$offer->date_end}}" id="example-date-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-date-input" class="col-2 col-form-label">Fecha Explira</label>
															<div class="col-10">
																<input class="form-control" name="date_expire" type="date" value="{{$offer->date_expire}}" id="example-date-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-date-input" class="col-2 col-form-label">Precio a Pagar</label>
															<div class="col-10">
																<input class="form-control" name="price_pay" type="text" value="{{$offer->price_pay}}" id="example-date-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-date-input" class="col-2 col-form-label">Monto a Recargar</label>
															<div class="col-10">
																<input class="form-control" name="recharge_amount" type="text" value="{{$offer->recharge_amount}}" id="example-date-input">
															</div>
														</div>
														<div class="form-group row">
															<label for="example-date-input" class="col-2 col-form-label">Descripción de Oferta</label>
															<div class="col-10">
																<input class="form-control" name="receive" type="text" value="{{$offer->receive}}" id="example-date-input">
															</div>
														</div>
													</div>
													<div class="kt-portlet__foot">
														<div class="kt-form__actions">
															<div class="row">
																<div class="col-2">
																</div>
																<div class="col-10">
																	<button type="submit" class="btn btn-success">Submit</button>
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
