var template = "<dd class='img-list'>" +
    "<div class='information_text' data-value='"+item.moodInfo.id+"'>"+
    "    <ul class='left'>"+
    "        <li><img class='head' src='"+item.publisher.portaitUrl+"'></li>"+
    "        <li><img class='text-bg' src='/dist/img/text_bg.png'></li>"+
    "        <li><span>"+item.moodInfo.infoIntentionName+"</span></li>"+
    "    </ul>"+
    "    <ul class='right'>"+
    "        <li>"+
    "            <span>"+item.publisher.nickname+"</span>"+
    "            <img src='"+item.moodInfo.typePicture+"'>"+
    "            <span class='date-time'>"+getDateDiff(item.moodInfo.createTime)+"</span>"+
    "        </li>"+
    "        <li><span>"+item.moodInfo.content+"</span></li>"+
    "        <li>"+
    "            <span>"+item.moodInfo.commentCount+"条评论</span>"+
    "            <img src='/dist/img/location.png'>"+
    "            <span>"+item.moodInfo.addressName+"</span>"+
    "        </li>"+
    "    </ul>"+
    "    <ul class='font-img'>"+
    "        <li>"+
    "            <dl>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_1.png' data-value='9'>"+
    "                    <span>x"+item.moodInfo.blessingCount+"</span>"+
    "                </dd>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_5.png' data-value='11'>"+
    "                    <span>x"+item.moodInfo.hugCount+"</span>"+
    "                </dd>"+
    "            </dl>"+
    "        </li>"+
    "        <li>"+
    "            <dl>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_2.png' data-value='10'>"+
    "                    <span>x"+item.moodInfo.envyCount+"</span>"+
    "                </dd>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_6.png' data-value='7'>"+
    "                    <span>x"+item.moodInfo.admireCount+"</span>"+
    "                </dd>"+
    "            </dl>"+
    "        </li>"+
    "        <li>"+
    "            <dl>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_3.png' data-value='13'>"+
    "                    <span>x"+item.moodInfo.rollingCount+"</span>"+
    "                </dd>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_7.png' data-value='12'>"+
    "                    <span>x"+item.moodInfo.ignoreCount+"</span>"+
    "                </dd>"+
    "            </dl>"+
    "        </li>"+
    "        <li>"+
    "            <dl>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_4.png' data-value='8'>"+
    "                    <span>x"+item.moodInfo.awesomeCount+"</span>"+
    "                </dd>"+
    "                <dd>"+
    "                    <img src='/dist/img/font_img_8.png'>"+
    "                    <span></span>"+
    "                </dd>"+
    "            </dl>"+
    "        </li>"+
    "    </ul>"+
    "</div>" +
    "</dd>";


var template = "<div class='information_video' data-value='9270'>" +
    "    <div class='mood'>" +
    "        <div class='avatar-con'>" +
    "            <span class='avatar-img'>" +
    "                <img src='http://file.mransoft.com/picture/head/100032/20180512/0507130773.jpg'>" +
    "            </span>" +
    "            <em class='bg-red'>求安慰</em>" +
    "        </div>" +
    "        <div class='mood-item-content-con'>" +
    "            <div class='mood-item-name'>" +
    "                <div>" +
    "                    <span class='name'>有话好好说</span>" +
    "                    <span class='bird'>" +
    "                        <img src='http://img.mransoft.com/emotic/detail/MXzxtRdES7.gif'>" +
    "                    </span>" +
    "                </div>" +
    "                <div class='minute'>" +
    "                    <div class='date-time'>2天前</div>" +
    "                </div>" +
    "            </div>" +
    "            <div class='mood-item-content-text'>是谁在弹奏一曲东风破</div>" +
    "        </div>" +
    "    </div>" +
    "    <div class='mood-text-lo'>" +
    "        <div class='content-t'>0条评论</div>" +
    "        <div class='right'>" +
    "            <div class='mood-location-img'>" +
    "                <img src='/dist/img/location.png' alt=''>" +
    "            </div>" +
    "            <div class='mood-location-text'>南京市</div>" +
    "        </div>" +
    "    </div>" +
    "    <ul class='font-img' style='display: block;'>" +
    "        <li>" +
    "            <dl>" +
    "                <dd class='phiz-1'>" +
    "                    <img class='hider' data-value='9'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "                <dd class='phiz-5'>" +
    "                    <img class='hider' data-value='11'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "            </dl>" +
    "        </li>" +
    "        <li>" +
    "            <dl>" +
    "                <dd class='phiz-2'>" +
    "                    <img class='hider' data-value='10'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "                <dd class='phiz-6'>" +
    "                    <img class='hider' data-value='7'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "            </dl>" +
    "        </li>" +
    "        <li>" +
    "            <dl>" +
    "                <dd class='phiz-3'>" +
    "                    <img class='hider' data-value='13'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "                <dd class='phiz-7'>" +
    "                    <img class='hider' data-value='12'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "            </dl>" +
    "        </li>" +
    "        <li>" +
    "            <dl>" +
    "                <dd class='phiz-4'>" +
    "                    <img class='hider' data-value='8'>" +
    "                    <span>x0</span>" +
    "                </dd>" +
    "                <dd>" +
    "                    <img src='/dist/img/font_8.png'>" +
    "                    <span></span>" +
    "                </dd>" +
    "            </dl>" +
    "        </li>" +
    "    </ul>" +
    "</div>";









