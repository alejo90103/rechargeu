<!--
# @Author: Codeals
# @Date:   20-06-2019
# @Email:  ian@codeals.es
# @Last modified by:   Codeals
# @Last modified time: 10-08-2019
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
		<div class="kt-subheader   kt-grid__item" id="kt_subheader">
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
					<span class="kt-subheader__breadcrumbs-link kt-subheader__breadcrumbs-link--active">{!! trans('user.views.users') !!}</span>
				</div>
			</div>

    <!--  -->
		</div>

<!-- end:: Subheader -->

<!-- begin:: Content -->

    <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
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
				<!-- <div class="alert alert-light alert-elevate" role="alert">
					<div class="alert-icon"><i class="flaticon-warning kt-font-brand"></i></div>
					<div class="alert-text">
						You can use the dom initialisation parameter to move DataTables features around the table to where you want them.
						See official documentation <a class="kt-link kt-font-bold" href="https://datatables.net/examples/advanced_init/dom_multiple_elements.html" target="_blank">here</a>.
					</div>
				</div> -->
				<div class="kt-portlet kt-portlet--mobile">
					<div class="kt-portlet__head kt-portlet__head--lg">
						<div class="kt-portlet__head-label">
							<span class="kt-portlet__head-icon">
								<i class="kt-font-brand flaticon-users"></i>
							</span>
							<h3 class="kt-portlet__head-title">
								{!! trans('user.views.users') !!}
							</h3>
						</div>
						<div class="kt-portlet__head-toolbar">
							<div class="kt-portlet__head-wrapper">
								<div class="kt-portlet__head-actions">

									&nbsp;
                  <a href="{{route('users.all_users.export')}}" class="btn btn-default btn-elevate btn-icon-sm">
										<i class="la la-download"></i> Export
									</a>&nbsp;
									<a href="{{ route('users.create') }}" class="btn btn-brand btn-elevate btn-icon-sm">
										<i class="flaticon-user-add"></i>
										{!! trans('share.views.new') !!}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="kt-portlet__body">

						<!--begin: Datatable -->
						<table class="table table-striped- table-bordered table-hover table-checkable" id="kt_table_1">
							<thead>
								<tr>

                  <th>{!! trans('user.views.user') !!}</th>
									<th>{!! trans('user.views.name') !!}</th>
									<th>{!! trans('user.views.email') !!}</th>
									<th>{!! trans('user.views.role') !!}</th>
									<th>{!! trans('user.views.registered') !!}</th>
                  <th>{!! trans('user.views.synchronized') !!}</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
                @foreach($users as $user)
								<tr>
                  <td>
                    <span style="width: 207px;">
                      <div class="kt-user-card-v2">
                        <div class="kt-user-card-v2__pic">
                          <img alt="photo" src="{{ asset('uploads/users/'.$user->imagen) }}">
                        </div>
                        @if($user->role == 'Super Admin')
                          <div class="kt-user-card-v2__details">
                            <a class="kt-user-card-v2__name" href="#">Control Total</a>
                            <span class="kt-user-card-v2__email">All</span>
                          </div>
                        @elseif($user->role == 'Admin')

                          <div class="kt-user-card-v2__details">
                            <a class="kt-user-card-v2__name" href="#">{{$user->userCompany->company->name}}</a>
                            <span class="kt-user-card-v2__email">{{$user->userCompany->company->address}}</span>
                          </div>
                        @else

                          <div class="kt-user-card-v2__details">
                            <a class="kt-user-card-v2__name" href="#">{{$user->userFarm->farm->name}}</a>
                            <span class="kt-user-card-v2__email">{{$user->userFarm->farm->address}}</span>
                          </div>
                        @endif

                      </div>
                  </span>
                  </td>
									<td>{{$user->name}}</td>
                  <td>{{$user->email}}</td>
                  <td>{{$user->role}}</td>
                  <td>{{$user->created_at}}</td>
                  <td>{{$user->updated_at}}</td>

									<td>

                      <a href="{{ route('users.edit', $user->id) }}" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="{!! trans('share.views.edit') !!}">
                        <i class="la la-edit"></i>
                      </a>


                        <!-- <a href="{{ route('users.destroy', $user->id) }}" onClick="return confirm('¿Eliminar registro?')" title="Delete"><i class="fa fa-close text-danger actions_icon"></i></a> -->
                        {!! Form::open(['route' => ['users.destroy', $user->id], 'id' => 'form_user_'.$user->id, 'style' => 'display: inline']) !!}
                            <input type="hidden" name="_method" value="DELETE">
                            <button type="submit" form-id="form_user_{{$user->id}}" data-dialog="delete_dialog" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="{!! trans('user.views.delete') !!}">
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

            <div class="modal modal-stick-to-bottom fade" id="delete_dialog" role="dialog" data-backdrop="false" style="display: none;" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{!! trans('share.views.carefull') !!}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div class="modal-body">
                                <p>{!! trans('share.views.msg_delete') !!}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">{!! trans('share.views.cancel') !!}</button>
                                <button type="button" class="btn btn-danger delete">{!! trans('share.views.delete') !!}</button>
                            </div>
                        </div>
                    </div>
                </div>

<!-- end:: Content -->

@endsection

@section('js')

<!--begin::Page Vendors(used by this page) -->
		<script src="{{ asset('assets/vendors/custom/datatables/datatables.bundle.js') }}" type="text/javascript"></script>

		<!--end::Page Vendors -->

		<!--begin::Page Scripts(used by this page) -->
		<!-- <script src="{{ asset('assets/js/demo4/pages/crud/datatables/advanced/multiple-controls.js') }}" type="text/javascript"></script> -->

        <script type="text/javascript">
            var form_to_submit = '';

            $(document).ready(function() {

                $('[data-dialog]').click(function (e) {
                    e.preventDefault();
                    form_to_submit = $(this).attr('form-id');
                    $('#delete_dialog').modal('show');
                });

                $('.delete').click(function () {
                    if(form_to_submit != '') {
                        // alert('Eliminar '+form_to_submit);
                        $("#"+form_to_submit).submit();
                    }
                });
            });

        </script>
		<!--end::Page Scripts -->

    <script type="text/javascript">

  			var KTDatatablesAdvancedMultipleControls = function() {

        	var initTable1 = function() {
        		var table = $('#kt_table_1');

        		// begin first table
        		table.DataTable({
        			// DOM Layout settings
        			dom:
        				"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        				"<'row'<'col-sm-12 col-md-6'i><'col-sm-12 col-md-6'p>>" +
        				"<'row'<'col-sm-12'tr>>" +
        				"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
        				"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>", // read more: https://datatables.net/examples/basic_init/dom.html

        			columnDefs: [
        				{
        					targets: 3,
        					render: function(data, type, full, meta) {
        						var status = {
        							'Super Admin': {'title': 'Super Admin', 'class': 'kt-badge--brand'},
        							'Admin': {'title': 'Admin', 'class': ' kt-badge--success'},
        							'Supervisor': {'title': 'Supervisor', 'class': ' kt-badge--warning'},
        							'Guest': {'title': 'Guest', 'class': ' kt-badge--danger'},
        						};
        						if (typeof status[data] === 'undefined') {
        							return data;
        						}
        						return '<span class="kt-badge ' + status[data].class + ' kt-badge--inline kt-badge--pill">' + status[data].title + '</span>';
        					},
        				},

        			],
        		});
        	};

        	return {

        		//main function to initiate the module
        		init: function() {
        			initTable1();
        		},

        	};

        }();

        jQuery(document).ready(function() {
        	KTDatatablesAdvancedMultipleControls.init();
        });

		</script>

@endsection
