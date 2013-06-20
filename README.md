jquery.placeholder
==================

为不支持placeholder的浏览器添加placeholder效果

现有方案基本都是通过修改input值的方法来实现，这样就会修改input本身的值。本插件通过clone一个新的input并隐藏原来input的方式来实现，当clone的input发生变化后同步修改原来的input的值。这里只是一个简单的demo没有过多的考虑细节。
