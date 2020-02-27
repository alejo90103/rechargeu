<!--
# @Author: Codeals
# @Date:   05-12-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 08-01-2020
# @Copyright: Codeals
-->

<!--
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 4 & Angular 7
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
Renew Support: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!-- <html lang="en"> -->

	<!-- begin::Head -->
	<!-- <head> -->

@extends('layouts.app')

@section('css')


		<!--begin::Page Vendors Styles(used by this page) -->
		<link href="{{ asset('assets/vendors/custom/datatables/datatables.bundle.css') }}" rel="stylesheet" type="text/css" />

		<!--end::Page Vendors Styles -->

		<!--end::Global Theme Styles -->

		<!--begin::Layout Skins(used by all pages) -->
		<link href="{{ asset('assets/css/demo2/skins/header/base/light.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('assets/css/demo2/skins/header/menu/light.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('assets/css/demo2/skins/brand/dark.css') }}" rel="stylesheet" type="text/css" />
		<link href="{{ asset('assets/css/demo2/skins/aside/dark.css') }}" rel="stylesheet" type="text/css" />

		<!--end::Layout Skins -->

@endsection

@section('content')

<div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
  <!-- NOTIFICACION -->
    @if(Session::has('msg'))
        <div class="alert alert-success fade show" role="alert">
            <div class="alert-icon"><i class="flaticon2-bell"></i></div>
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
				<!-- end:: Aside -->

					<!-- begin:: Header -->

					<!-- end:: Header -->
    <div class="kt-subheader   kt-grid__item" id="kt_subheader">
        <div class="kt-container ">
			<div class="kt-subheader__main">
				<h3 class="kt-subheader__title">
					Recargas por Cliente </h3>
				<span class="kt-subheader__separator kt-hidden"></span>
				<div class="kt-subheader__breadcrumbs">
					<a href="{{ route('/') }}" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
					<span class="kt-subheader__breadcrumbs-separator"></span>
					<a href="" class="kt-subheader__breadcrumbs-link">
						Dashboard </a>

					<!-- <span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">Active link</span> -->
				</div>
			</div>

        </div>
	</div>

	<!-- end:: Subheader -->

	<!-- begin:: Content -->
	<div class="kt-container  kt-grid__item kt-grid__item--fluid" id="kt_content">
		<div class="alert alert-light alert-elevate" role="alert">
			<div class="alert-icon"><i class="flaticon-warning kt-font-brand"></i></div>
			<div class="alert-text">
				Reporte de Recargas por usuarios, tipo, oferta y demas datos.
			</div>
		</div>
		<div class="kt-portlet kt-portlet--mobile">
			<div class="kt-portlet__head kt-portlet__head--lg">
				<div class="kt-portlet__head-label">
					<span class="kt-portlet__head-icon">
						<i class="kt-font-brand flaticon2-line-chart"></i>
					</span>
					<h3 class="kt-portlet__head-title">
						Reporte
					</h3>
				</div>
				<!-- <div class="kt-portlet__head-toolbar">
					<div class="kt-portlet__head-wrapper">
						<div class="kt-portlet__head-actions">
							<div class="dropdown dropdown-inline">
								<button type="button" class="btn btn-default btn-icon-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="la la-download"></i> Export
								</button>
								<div class="dropdown-menu dropdown-menu-right">
									<ul class="kt-nav">
										<li class="kt-nav__section kt-nav__section--first">
											<span class="kt-nav__section-text">Choose an option</span>
										</li>
										<li class="kt-nav__item">
											<a href="#" class="kt-nav__link">
												<i class="kt-nav__link-icon la la-print"></i>
												<span class="kt-nav__link-text">Print</span>
											</a>
										</li>
										<li class="kt-nav__item">
											<a href="#" class="kt-nav__link">
												<i class="kt-nav__link-icon la la-copy"></i>
												<span class="kt-nav__link-text">Copy</span>
											</a>
										</li>
										<li class="kt-nav__item">
											<a href="#" class="kt-nav__link">
												<i class="kt-nav__link-icon la la-file-excel-o"></i>
												<span class="kt-nav__link-text">Excel</span>
											</a>
										</li>
										<li class="kt-nav__item">
											<a href="#" class="kt-nav__link">
												<i class="kt-nav__link-icon la la-file-text-o"></i>
												<span class="kt-nav__link-text">CSV</span>
											</a>
										</li>
										<li class="kt-nav__item">
											<a href="#" class="kt-nav__link">
												<i class="kt-nav__link-icon la la-file-pdf-o"></i>
												<span class="kt-nav__link-text">PDF</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							&nbsp;

						</div>
					</div>
				</div> -->
			</div>
			<div class="kt-portlet__body">

				<!--begin: Datatable -->
				<table class="table table-striped- table-bordered table-hover table-checkable" id="kt_table_1">
					<thead>
						<tr>
							<th>Realizada</th>
							<th>Cliente</th>
							<th>Tipo</th>
							<th>Recarga a</th>
							<th>Pagó</th>
							<th>Recargó</th>
					    <th>Status</th>
							<th>Oferta</th>
							<th>Inicio</th>
							<th>ADs</th>
							<th>Ajustar</th>
	<!-- <th>Actions</th> -->
						</tr>
					</thead>
					<tbody>

					  @foreach($userRechanges as $userRechange)

							<tr>
								<td>{{$userRechange->done}}</td>
						    <td>{{$userRechange->user->email}}</td>
								<td>{{$userRechange->type}}</td>
						    @if($userRechange->type == "Cell")
							    <td>{{$userRechange->phone}}</td>
						    @else
									<td>{{$userRechange->email}}</td>
						    @endif
                            @if($userRechange->currency == "978")
							    <td>{{$userRechange->price_pay}} EUR</td>
						    @else
								<td>{{$userRechange->price_pay_usd}} USD</td>
						    @endif
								<td>{{$userRechange->recharge_amount}}</td>
						    <td>{{$userRechange->status_contact}}</td>
								<td>{{$userRechange->name}}</td>
								<td>{{$userRechange->date_ini}}</td>
								<td>{{$userRechange->ads}}</td>
								<td>
									  <a href="{{ route('recharges.edit', $userRechange->idRecharge) }}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Estado">
											<i class="la la-edit"></i>
									  </a>
								</td>
							</tr>
							<!-- <tr>
								<td>112</td>
								<td>43538-171</td>
								<td>Argentina</td>
								<td>Oberá</td>
								<td>79213 Orin Street</td>
								<td>Kalli Gusticke</td>
								<td>Hegmann-Nitzsche</td>
								<td>10/26/2016</td>
								<td>2</td>
								<td>2</td>
								<td nowrap></td>
							</tr> -->

					  @endforeach

					</tbody>
					<tfoot>
						<tr>
							<th>Realizada</th>
							<th>Cliente</th>
							<th>Tipo</th>
							<th>Recarga a</th>
							<th>Pagó</th>
							<th>Recargó</th>
                            <th>Status</th>
							<th>Oferta</th>
							<th>Inicio</th>
							<th>ADs</th>
							<th>Ajustar</th>
						</tr>
					</tfoot>
				</table>

				<!--end: Datatable -->
			</div>
		</div>
	</div>
	<!-- end:: Content -->
</div>
		<!-- end:: Page -->

@endsection

@section('js')
		<!-- begin::Global Config(global config for global JS sciprts) -->
		<script>
			var KTAppOptions = {
				"colors": {
					"state": {
						"brand": "#5d78ff",
						"dark": "#282a3c",
						"light": "#ffffff",
						"primary": "#5867dd",
						"success": "#34bfa3",
						"info": "#36a3f7",
						"warning": "#ffb822",
						"danger": "#fd3995"
					},
					"base": {
						"label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
						"shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
					}
				}
			};
		</script>

		<!-- end::Global Config -->

		<!--begin::Page Vendors(used by this page) -->
		<script src="{{ asset('assets/vendors/custom/datatables/datatables.bundle.js') }}" type="text/javascript"></script>

		<!--end::Page Vendors -->

		<!--begin::Page Scripts(used by this page) -->
		<script src="{{ asset('assets/js/demo2/pages/crud/datatables/extensions/rowgroup.js') }}" type="text/javascript"></script>

		<!--end::Page Scripts -->
@endsection
