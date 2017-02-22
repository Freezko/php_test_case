<h1>Сообщения</h1>


<div class="">
    <div class="list-group">
            <span class="list-group-item" ng-repeat="message in messages">
                <h4 class="list-group-item-heading">{{message.username}}</h4>
                <p class="list-group-item-heading">{{message.email}}</p>
                <p class="list-group-item-text">{{message.text}}</p>
            </span>
    </div>
</div>

<ul class="nav nav-pills">
    <li ng-class="classPagination(n+1)" ng-repeat="n in [] | range:countPages">
        <a href="#" ng-click="getMessagesByPage(n+1)">{{n+1}}</a>
    </li>
</ul>