@if(count($list))
    @foreach($list as $item)
        <div class="row">

            <div class="col-lg-12">
                <div class="ibox float-e-margins">
                    <div class="ibox-content">

                        <div>
                            <h3 class="font-bold no-margins">
                                {{$item->name}}
                            </h3>
                            @if($item->email)
                                <small><a href="{{$item->email}}">{{$item->email}}</a></small>
                            @endif
                        </div>
                        <div class="m-t-sm">
                            {{$item->text}}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    @endforeach
@else
    <h3 class="text-center">Записей нет</h3>
@endif