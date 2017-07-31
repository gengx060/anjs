angular.module('menu', []) 
  .directive('menu', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: {
       
      },
      controller: function($scope, $element) {
        $scope.menus = [
          { name: 'welcome', route: '/welcome', nav: false, title:'Welcome' },
          { name: 'users',   route: '/comment', nav: true,  title:'Github Users' }
        ];
      },
      template:'\
      <nav class="navbar navbar-inverse navbar-static-top" role="navigation">\
  <div class="container-fluid">\
    <!-- Brand and toggle get grouped for better mobile display -->\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\
        <span class="sr-only">Toggle navigation</span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
      <a class="navbar-brand" href="#">\
        <i class="active fa fa-home"></i><span>Brand</span>\
      </a>\
    </div>\
    <!-- Collect the nav links, forms, and other content for toggling -->\
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\
      <ul class="nav navbar-nav">\
        <li  ng-repeat="menu in menus">\
          <a href="#!{{menu.route}}"  ng-if="menu.nav">{{menu.name}}</a>\
        </li>\
        <!--li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li-->\
        <li class="dropdown">\
          <a href="#" onclick="return false;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>\
          <ul class="dropdown-menu">\
            <li><a href="#">Action</a></li>\
            <li><a href="#">Another action</a></li>\
            <li><a href="#">Something else here</a></li>\
            <li role="separator" class="divider"></li>\
            <li><a href="#">Separated link</a></li>\
            <li role="separator" class="divider"></li>\
            <li><a href="#">One more separated link</a></li>\
          </ul>\
        </li>\
      </ul>\
      <ul class="nav navbar-nav navbar-right">\
    <li class="active" style="margin-top:10px">\
      <i class="fa fa-spinner fa-spin fa-2x fa-inverse"></i>\
    </li>\
      </ul>\
    </div><!-- /.navbar-collapse -->\
  </div><!-- /.container-fluid -->\
</nav>',
      replace: true
    };
  })