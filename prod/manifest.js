export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","img/bg/calculator_bg.png","img/bg/civil_bg.png","img/bg/contacts_bg.png","img/bg/faq_bg.png","img/bg/header_bg.png","img/bg/prisoners_bg.png","img/bg/prisoners_google.png","img/bg/support_bg.png","img/docs/1.jpeg","img/docs/10.jpeg","img/docs/11.jpg","img/docs/12.jpeg","img/docs/13.jpg","img/docs/14.jpeg","img/docs/15.jpg","img/docs/16.jpg","img/docs/17.jpeg","img/docs/18.jpg","img/docs/19.jpg","img/docs/2.jpg","img/docs/20.jpg","img/docs/21.jpeg","img/docs/22.jpg","img/docs/23.JPG","img/docs/24.jpg","img/docs/25.JPG","img/docs/3.jpg","img/docs/4.jpg","img/docs/5.jpg","img/docs/6.jpg","img/docs/7.jpg","img/docs/8.jpg","img/docs/9.jpg","img/peoples/1.jpeg","img/social/etsy_black.png","img/social/etsy_tq.png","img/social/fb_black.png","img/social/fb_tq.png","img/social/fb_yellow.png","img/social/insta_black.png","img/social/insta_tq.png","img/social/insta_yellow.png","img/social/in_black.png","img/social/in_tq.png","img/social/patronite_black.png","img/social/patronite_tq.png","img/social/patronite_yellow.png","img/social/pinterest_black.png","img/social/pinterest_tq.png","img/social/telega_black.png","img/social/telega_tq.png","img/social/telega_yellow.png","img/social/tweeter_black.png","img/social/tweeter_tq.png","img/social/tweeter_yellow.png","img/social/youtube_black.png","img/social/youtube_tq.png","img/social/youtube_yellow.png","smui-dark.css","smui.css"]),
	_: {
		mime: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".JPG":"image/jpeg",".css":"text/css"},
		entry: {"file":"start-c393ba2d.js","js":["start-c393ba2d.js","chunks/vendor-b372d4c3.js"],"css":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		]
	}
};
