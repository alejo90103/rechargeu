<!--
# @Author: Codeals
# @Date:   20-06-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 23-11-2019
# @Copyright: Codeals
-->

@extends('layouts.app')

@section('css')

    <!--begin::Page Vendors Styles(used by this page) -->
    <link href="{{ asset('assets/vendors/custom/datatables/datatables.bundle.css') }}" rel="stylesheet" type="text/css" />
    <!--end::Page Vendors Styles -->

@endsection

@section('content')

<!-- begin:: Subheader -->

<!-- end:: Subheader -->

<!-- begin:: Content -->
						<div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">

							<div class="kt-portlet kt-portlet--mobile">
								<div class="kt-portlet__head kt-portlet__head--lg">
									<div class="kt-portlet__head-label">
										<span class="kt-portlet__head-icon">
											<i class="kt-font-brand flaticon2-line-chart"></i>
										</span>
										<h3 class="kt-portlet__head-title">
											Listas Oferta
											<small></small>
										</h3>
									</div>

								</div>
								<div class="kt-portlet__body">

                  <!-- NOTIFICACION -->
                  @if(Session::has('msg'))
                      <div class="alert alert-success fade show" role="alert">
            						<div class="alert-icon"><i class="flaticon-user-ok"></i></div>
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

									<!--begin: Search Form -->
									<div class="kt-form kt-form--label-right kt-margin-t-20 kt-margin-b-10">
										<div class="row align-items-center">
											<div class="col-xl-8 order-2 order-xl-1">
												<div class="row align-items-center">
													<div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
														<div class="kt-input-icon kt-input-icon--left">
															<input type="text" class="form-control" placeholder="Search..." id="generalSearch">
															<span class="kt-input-icon__icon kt-input-icon__icon--left">
																<span><i class="la la-search"></i></span>
															</span>
														</div>
													</div>
													<!-- <div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
														<div class="kt-form__group kt-form__group--inline">
															<div class="kt-form__label">
																<label>Oferta:</label>
															</div>
															<div class="kt-form__control">
																<select class="form-control bootstrap-select" id="kt_form_status">
																	<option value="">All</option>
																	<option value="switch engine">Switch Engine</option>
																	<option value="cal_max">Cal Máx</option>
																	<option value="cal_min">Cal Mín</option>
																	<option value="weights">Weights</option>
																	<option value="Mix">Mix</option>
																</select>
															</div>
														</div>
													</div>
													<div class="col-md-4 kt-margin-b-20-tablet-and-mobile">
														<div class="kt-form__group kt-form__group--inline">
															<div class="kt-form__label">
																<label>Type:</label>
															</div>
															<div class="kt-form__control">
																<select class="form-control bootstrap-select" id="kt_form_type">
																	<option value="">All</option>
																	<option value="Read">Read</option>
																	<option value="Write">Write</option>
																</select>
															</div>
														</div>
													</div> -->
												</div>
											</div>
											<!-- <div class="col-xl-4 order-1 order-xl-2 kt-align-right">
												<a href="#" class="btn btn-default kt-hidden">
													<i class="la la-cart-plus"></i> New Order
												</a>
												<div class="kt-separator kt-separator--border-dashed kt-separator--space-lg d-xl-none"></div>
											</div> -->
										</div>
									</div>

									<!--end: Search Form -->
								</div>
								<div class="kt-portlet__body kt-portlet__body--fit">

									<!--begin: Datatable -->
									<table class="kt-datatable" id="html_table" width="100%">
										<thead>
											<tr>
												<th title="Field #1">Offer</th>
												<th title="Field #2">Tipo</th>
												<th title="Field #3">Fecha Inicio</th>
												<th title="Field #4">Fecha Fin</th>
                        <th title="Field #5">Precio a Pagar</th>
                        <th title="Field #6">Monto a Recargar</th>
												<th title="Field #7">Expira</th>
												<th title="Field #8">Descripción</th>
												<th title="Field #9">Acciones</th>
											</tr>
										</thead>
										<tbody>
                      @foreach($offers as $offer)
											<tr>
                        <td>{{$offer->name}}</td>
                        <td>{{$offer->type}}</td>
												<td>{{$offer->date_ini}}</td>
												<td>{{$offer->date_end}}</td>
												<td>{{$offer->price_pay}}</td>
												<td>{{$offer->recharge_amount}}</td>
												<td>{{$offer->date_expire}}</td>
												<td>{{$offer->receive}}</td>
                        <td>

                      <a href="{{ route('offers.edit', $offer->id) }}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Editar">
                        <i class="la la-edit"></i>
                      </a>

                        <!-- <a href="{{ route('offers.destroy', $offer->id) }}" onClick="return confirm('¿Eliminar registro?')" title="Delete"><i class="fa fa-close text-danger actions_icon"></i></a> -->
                        {!! Form::open(['route' => ['offers.destroy', $offer->id], 'id' => 'form_offer_'.$offer->id, 'style' => 'display: inline']) !!}
                            <input type="hidden" name="_method" value="DELETE">
                            <button type="submit" form-id="form_offer_{{$offer->id}}" data-dialog="delete_dialog" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Eliminar">
                                <i class="la la-trash"></i>
                            </button>
                        {!! Form::close() !!}
                      </td>
											</tr>
                    @endforeach
										</tbody>
									</table>

									<!--end: Datatable -->
								</div>
							</div>
						</div>

						<!-- end:: Content -->

@endsection

@section('js')


    <!--begin::Page Scripts(used by this page) -->
		<script src="{{ asset('assets/js/demo2/pages/crud/metronic-datatable/base/html-table.js') }}" type="text/javascript"></script>

		<!--end::Page Scripts -->

@endsection
