<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <title><?php echo CHtml::encode($this->pageTitle); ?></title>

    <!-- Bootstrap -->
    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style>
        body {
            padding-top: 50px;
        }
    </style>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="/js/angular.min.js"></script>
    <script src="/js/main.js"></script>
</head>
<body ng-app="test" ng-controller="MainCtr">


<div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="#"><?php echo CHtml::encode($this->pageTitle); ?></a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#" ng-click="newMessage()">Новое сообщение</a></li>
            </ul>
        </div><!--/.nav-collapse -->
    </div>
</div>

<div class="modal" ng-class="classModalMesage()">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" ng-click="closeModalMesage()"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">Новое сообщение</h4>
            </div>
            <div class="modal-body">
                <form name="form" action="/message/create" method="post">

                    <p><input type="text" name="username" ng-model="username" class="form-control" placeholder="Ваше имя*" ng-pattern="word" required="true"></p>
                    <span class="error" ng-show="!form.username.$error.pattern && username">Допустимы только буквы и числа!</span>
                    <span class="error" ng-show="form.username.$error.required">Обязательное поле!</span>

                    <p><input type="email" name="email" ng-model="email" class="form-control" placeholder="Ваш email"></p>
                    <span ng-show="form.email.$error.email">Некорректный email.</span>

                    <p><textarea name="text" ng-model="text" class="form-control" placeholder="Текст*" ng-pattern="tags" required="true"></textarea></p>
                    <span class="error" ng-show="!form.text.$error.pattern && text">Недопустимы html теги!</span>
                    <span class="error" ng-show="form.text.$error.required">Обязательное поле!</span>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal" ng-click="closeModalMesage()" >Отмена</button>
                <button type="button" class="btn btn-primary" ng-click="sendModalMesage()">Отправить</button>
            </div>
        </div>
    </div>
</div>

<div class="container">

    <?php echo $content; ?>

</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>