<?php

return [
	'title' => '註冊新會員',
	'notice' => '<span class="text-red bold">支付0-50%</span> 優惠積分, <span class="text-red bold"> 並支付50-100%</span> 註冊積分。', // don't remove the <span></span>
	'package' => '配套',
	'name' => '全名',
	'username' => '賬號',
	'email' => '郵箱',
	'password' => '密碼',
	'repassword' => '確認密碼',
	'spassword' => '安全密碼',
	'respassword' => '確認安全密碼',
	'direct' => '推薦人',
	'nationality' => '國籍',
	'mobile' => '移動電話',
	'upline' => 'Upline ID',
	'uplineNotice' => '請區分大小寫',
	'uplineLink' => '培育人架構',
	'registerPoint' => '選擇用優惠積分支付',
	'checkID' => '檢查ID',
	'registerNeed' => '需支付註冊積分：',
	'promoNeed' => '需支付優惠积分：',
	'modal.title' => '會員資料',
	'modal.notFound' => '沒有找到該會員',
	'modal.username' => '用戶名',
	'modal.name' => '全名',
	'modal.join' => '自動加入',
	'security' => '您的安全密碼',
	'agree' => '我同意 <a href="' . route('terms', ['lang' => \App::getLocale()]) . '" target="_blank">該條款和協議</a>',
	'registerNotice' => '將用優惠積分支付。' // like "90% will be used on promotion point"
];
