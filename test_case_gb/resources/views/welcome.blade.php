<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Тестовое задание</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

</head>
<body class="top-navigation">

<div id="wrapper">

    <div id="page-wrapper" class="gray-bg">

        <div class="wrapper wrapper-content">
            <div class="container">
                <div class="row">
                    <h1 class="text-center">Тестовое задание</h1>
                    <h2 class="text-center">Гостевая книга</h2>
                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="ibox float-e-margins">
                            <div class="ibox-title">
                                <h5>Ваше сообщение</h5>
                            </div>
                            <div class="ibox-content">

                                @include('partials.form')

                            </div>
                        </div>
                    </div>
                </div>

                @include('partials.comments')

            </div>
            <div class="text-center">{!! $list->links() !!}</div>
        </div>
        <div class="footer">
            <div>
                <a href="mailto:galeaf@gmail.com">Мынто Денис</a>
            </div>
        </div>
    </div>
</div>


<script src="js/jquery-2.1.1.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>