{!! Form::open(['action' => 'IndexController@addComment', 'method' => 'post']) !!}

@if($errors->any())

    <div class="alert alert-danger">
        <ul class="unstyled">
            @foreach($errors->all() AS $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>

@endif

<div class="row">

    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12 pull-right">
        <div class="form-group">
            {!! Form::label('text','Text') !!}
            {!! Form::textarea('text', null, ['class' => 'form-control', 'placeholder' => 'Text', 'rows' => 7]) !!}
        </div>
    </div>

    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12 pull-left">
        <div class="form-group">
            {!! Form::label('name','User Name') !!}
            {!! Form::text('name', null, ['class' => 'form-control', 'placeholder' => 'User Name']) !!}
        </div>
        <div class="form-group">
            {!! Form::label('email','E-mail') !!}
            {!! Form::text('email', null, ['class' => 'form-control', 'placeholder' => 'E-mail']) !!}
        </div>
        <div class="form-group text-right">
            {!! Form::submit("Сохранить", ['class'=>'btn btn-info']) !!}
        </div>
    </div>

</div>

{!! Form::close() !!}