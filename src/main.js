//游戏入口
function main(){
		cc.game.onStart = function(){
        //load resources
        cc.LoaderScene.preload(["res/bg.jpg"], function () {
            var MyScene = cc.Scene.extend({
                onEnter:function () {
                    this._super();
                    
                    cc.view.adjustViewPort(true);
										cc.view.setDesignResolutionSize(640, 960, cc.ResolutionPolicy.SHOW_ALL);
										cc.view.resizeWithBrowserSize(true);

                    var size = cc.director.getWinSize();
                    var sprite = cc.Sprite.create("res/bg.jpg");
                    sprite.setPosition(size.width / 2, size.height / 2);
                    this.addChild(sprite, 0);

										var sys = cc.sys;
                    var user = sys.localStorage.getItem("user");
                    var str = 'Hello';
                    if(user == null){
                    	str += ' null';
                    	sys.localStorage.setItem("user","huhu");
                    }                                
                    else
                    	str += user;                              
                    
                    var label = cc.LabelTTF.create(str, "Arial", 40);
                    label.setPosition(size.width / 2, size.height / 2);
                    this.addChild(label, 1);
                }
            });
            _sceneMain = new MyScene();
            cc.director.runScene(_sceneMain);
        }, this);
    };
    cc.game.run("gameCanvas");
} 