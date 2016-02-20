;(function($,win,undefined){
//add1 2 
  var defs = {
    name:"Orz,"
    test:'ok',
    https:'ok',
    vim:'ok'
  }

  $.fn[pName]=function(options,value){
    var name=defs.name;
    if(typeof options === 'object' || !arguments.length){
      var opts= $.extend({},defs,options);
      return this.each(function(){
        if (!$.data(this,'plugin-' + name)){
            $.data(this,'plugin-' + name,new Plugin($(this),opts));
        }
      })
    }
  }

  function Plugin(ele,opts){
    this.$e = ele;
    this.opts=opts;
    this.init(opts);
  }

  Plugin.prototype={
    constructor:Plugin,
    init:function(opts){},
    hide:function(){
      this.$e.css('display','none')
    },
    show:function(){
      this.$e.css('display','block')
    },
    destroy:function(){
      $.data(this.$e[0],'plugin-' + defs.name,null);
      $.removeData(this.$e[0],'plugin-' + defs.name);
    }
  }

  $.fn.log = function (msg) {win.console && console.log && win.console.log("%s: %o", msg||'$', this,this.length);return this;};

})(jQuery,window);

$("p").Orz();

