模仿bootstrap推荐网站[koffijberghairdressers](http://koffijberghairdressers.com/)，侵删。

效果图请戳☞[这里](https://liyaozr.github.io/Website-imitation/one/)

仿站过程中遇到的一些知识点~

#### 1.关于html中的role属性

>html 里面的 role 本质上是增强语义性，当现有的HTML标签不能充分表达语义性的时候，就可以借助role来说明。通常这种情况出现在一些自定义的组件上，这样可增强组件的可访问性、可用性和可交互性。

如 `role="banner"` 代表横幅区，`role="navigation"` 代表导航模块，`role="menubar"` 代表菜单栏模块，`role="menuitem"` 代表菜单项。

>除此之外，role 属性还有一个重要的用途就是标明模拟元素，例如模拟的弹框，不会像 alert 的弹框那样被屏幕阅读器直接识别，这时可以用 role="alertdialog" 标出，屏幕阅读器会识别出这是一个警告弹出框。另外还有模拟的多选框、单选框等等，都可以用相应的 role 属性标出。

如果需要考虑到视障碍人士的阅读体验，建议添加此属性。

#### 2.向下的小箭头如何实现

利用css3

html代码

```html
<a class="arrow" href="#over-ons(链接指向点击后需要展示的地方)"></a>
```
css代码

```css
body{
	background: black;
}/* 为了方便看效果 */
.arrow{
	display:block;
	width: 40px;
	height: 40px;
	background: url('https://liyaozr.github.io/Website-imitation/one/image/down.svg');
	animation: 2s infinite bounce;
	margin: 40px;
}
@keyframes bounce{
    0%,100%,20%,50%,80%{transform:translateY(0);}
    40%{transform:translateY(-30px);}
    60%{transform:translateY(-15px);}
}
```
也可以这样

```css
body{
	background: black;
}/* 为了方便看效果 */
.arrow{
	display:block;
	width: 40px;
	height: 40px;
	background: url('https://liyaozr.github.io/Website-imitation/one/image/down.svg');
	animation: 1s infinite ease bounce;
	margin: 40px;
}
@keyframes bounce{
	0%{transform:translateY(0);opacity: 1;}
	100%{transform:translateY(50px);opacity: 0;}
}
```
然后就是滚动隐藏效果，这个很简单

```javascript
// 滚动页面隐藏小箭头
if ($(window).scrollTop()) $(".arrow").hide();
// 滚动距离为0时显示小箭头
if ($(window).scrollTop()===0) $(".arrow").show();
```
各种效果请自由发挥。接下来说说animation如何实现~

使用animation属性定义CSS3动画需要2步：

（1）定义动画；

（2）调用动画；

在CSS3中，在使用动画之前，我们必须使用@keyframes规则定义动画。

语法：

```css
@keyframes <identifier>{
	<keyframes-blocks>
};
<keyframes-blocks>:[ [ from | to | <percentage> ]{ sRules } ] [ [ , from | to | <percentage> ]{ sRules } ]*
```

- identifier-动画名（就像函数名一样）
- keyframes-blocks-定义动画在每个阶段的样式，即帧动画。

定义动画时，简单的动画可以直接使用关键字from和to，即从一种状态过渡到另一种状态：

```css
@keyframes testanimations {
	from { opacity: 1; }
	to { opacity: 0; }
}
```
如果复杂的动画，可以混合<percentage>去设置某个时间段内的任意时间点的样式:

```css
@keyframes testanimations{
	0% { transform: translate(0, 0); }
	20% { transform: translate(20px, 20px); }
	40% { transform: translate(40px, 0); }
	60% { transform: translate(60px, 20px); }
	80% { transform: translate(80px, 0); }
	100% { transform: translate(100px, 20px); }
}
```
上面代码中的0%和100%可以写成from和to。

就像函数一样，定义之后不会主动执行，需要调用才能执行。css3动画也是一样，调用之后才会生效。

调用动画名----animation-name：动画名;

关于animation属性：

（1）animation-name：动画名称，需要与@keyframes规则定义的动画名称完全一致（区分大小写）

（2）animation-duration：完成动画需要的时间，单位s（秒），可以为小数，如：0.5

（3）animation-timing-function：设置动画的播放速率

- ease：由快到慢
- linear：匀速
- ease-in ：减显效果，越来越快
- ease-out ：减隐效果，越来越慢
- ease-in-out ：慢快慢
- cubic-bezier（`<number>, <number>, <number>, <number>`）： 自己定义速度（[详解](https://segmentfault.com/a/1190000004618375)）
- step-start
- step-end
- steps(<integer>)  这三个详解请戳[这里](https://idiotwu.me/understanding-css3-timing-function-steps/)

（4）animation-delay：定义动画播放的延迟时间

（5）animation-iteration-count：定义动画的播放次数

- 正整数：定义次数
- infinite：循环

（6）animation-direction：定义动画的播放方向

- normal：每次循环都向正方向播放（默认值）
- reverse：每次循环都向反方向播放
- alternate播放次数是奇数时，动画向原方向播放；播放次数是偶数时，动画向反方向播放
- alternate-reverse动画先反运行再正方向运行，并持续交替运行

（7）animation-play-state：定义动画的播放状态

- running：播放动画（默认值
- paused：暂停动画

（8）animation-fill-mode

- none：动画完成最后一帧时会反转到初始帧处（默认值）
- forwards：动画结束之后继续应用最后的关键帧位置
- backwards：会在向元素应用动画样式时迅速应用动画的初始帧
- both：元素动画同时具有forwards和backwards效果

**animation：将以上8个值进行简写：**

	* 如果提供多组属性值，以逗号进行分隔。
	* 如果只提供一个<time>参数，则为'animation-duration'的值定义；
	* 如果提供二个<time>参数，则第一个为'animation-duration'的值定义，第二个为'animation-delay'的值定义

了解这些属性并不难，难的是如何利用这些属性来做出漂亮的效果T.T

#### 3.轮播图效果

页面中做的是轮播文字，做的时候忘记加overflow:hidden，光设置高度变化，然后效果就一直不对，文字是会溢出的。。所以无论高度如何变化，它都不会有在一半的地方显示那种效果（并不知道这种效果专业术语是什么）

网页的效果是用css3加jQuery做的，关于纯css效果轮播图：

效果图

关键点：

1. 使用背景图，利用padding-bottom撑开高度
2. 动画设置延迟，计算好时间


#### 4.背景图滚动效果

`background-attachment: fixed;`

#### 5.随机背景

```js
var bg=['url(image/bg1.jpg)','url(image/bg2.jpg)','url(image/bg3.jpg)'];
$(function () {
	var num;
	num  = Math.floor(Math.random()*3);
	$('#wrapall').css('background', bg[num]+'no-repeat');
});
```
