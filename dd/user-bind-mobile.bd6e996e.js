webpackJsonp([6],{77:function(e,n,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var u=t(31),r=s(u),i=t(78),o=s(i),a=t(79),c=s(a);t(80);var d=r.default.extend({template:o.default,ready:function(){this.setTitle({title:"员工绑定"})},data:function(){return c.default},methods:{sendSms:function(){var e=this;this.sms_number=60;var n=setInterval(function(){e.sms_number--,0==e.sms_number&&clearInterval(n)},1e3)},bindPhone:function(){}},computed:{sms_text:function(){return 0==this.sms_number?"获取验证码":this.sms_number+"秒后再次获取"}}});n.default=d},78:function(e,n){e.exports='<div>\n    <div class="vux-center">为保障账号安全，请勿向他人透露账号信息</div>\n    <group>\n        <x-input placeholder="请输入手机号" keyboard="number" :value.sync="phone" :show-clear="false">\n        </x-input>\n        <x-input placeholder="请输入验证码" keyboard="number" :value.sync="verification_code" :show-clear="false">\n            <div class="vux-center-v" slot="right">\n                <x-button @click="sendSms" :disabled="sms_number>0">{{sms_text}}</x-button>\n            </div>\n        </x-input>\n    </group>\n\n    <group style="padding: 0 20px;">\n        <x-button type="primary" @click="bindPhone">绑定</x-button>\n    </group>\n</div>'},79:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t={phone:"",verification_code:"",sms_number:0,showToast:!1,toastText:""};n.default=t},80:function(e,n){}});