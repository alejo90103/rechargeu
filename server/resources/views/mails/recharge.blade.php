<!-- # @Author: Codeals
# @Date:   20-08-2019
# @Email:  ian@codeals.es
# @Last modified by:   alejandro
# @Last modified time: 2020-01-19T03:02:01+01:00
# @Copyright: Codeals
-->

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">

<div class="content">

    <div class="row">
        <img width="100%" alt="Logo" src="https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/80476548_113157163525186_4240691235934699520_o.jpg?_nc_cat=110&_nc_ohc=qih_deDvEhIAQnY45Qy_TDQkNJGxnyBt-djZa1aHuTsV6SU2f9BL5sL4w&_nc_ht=scontent-mad1-1.xx&oh=ae43a296d016d869744b3570799cba76&oe=5EA54C05" />
    </div>

    <div class="row">
      <table width="60%" border="0" align="center">
        <tr>
          <td>
            <h1>Hola {{$user}}, ¡¡¡Gracias por la recarga relizada!!! </h1>
          </td>
        </tr>
        <tr>
          <td>
            @if (!$status)
              <table>
                <tr>
                  <td>Existio un error en la recarga del {{$date_recharge}} a continuación listado de recargas no realizadas</td>
                </tr>
                <tr>
                  <td>Error de recarga en</td>
                </tr>
                @foreach ($err_number as $number)
                  <tr>
                    <td>{{$number}}</td>
                  </tr>
                @endforeach
              </table>
            @elseif ($schedule)
              <strong>Recarga(s) programadas con éxito el día {{$date_recharge}} </strong>
            @else
              <strong>Recarga(s) del {{$date_recharge}} realizadas con éxito </strong>
            @endif
          </td>
        </tr>
        <tr>
          <td>
            <strong>Visitanos: </strong><p>https://codeals.es</p>
          </td>
        </tr>
      </table>
    </div>
</div>
