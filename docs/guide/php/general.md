# 常用轮子

## 匹配中文的表达式

```
// UTF-8 汉字: `/^[\x{4e00}-\x{9fa5}]+$/u`

// GB2312 汉字: `/^[".chr(0xa1)."-".chr(0xff)."]+$/`
```

## 计算字符长度

> php

```php
/**
说明: 长度=(中文+英文/2);
备注: 奇数英文/2,舍去法取整; 如 7/2=3

编码范围
1. GBK (GB2312/GB18030)
\x00-\xff GBK双字节编码范围
\x20-\x7f ASCII
\xa1-\xff 中文
\x80-\xff 中文

2. UTF-8 (Unicode)
\u4e00-\u9fa5 (中文)
\x3130-\x318F (韩文
\xAC00-\xD7A3 (韩文)
\u0800-\u4e00 (日文)
*/

//方法1
function getStringLen($str) {
    $zhlen = 0; //全角
    $enlen = 0; //半角

    for ($i = 0, $l = mb_strlen($str, 'UTF-8'); $i < $l; $i++) {
        if (preg_match('/[^\x80-\xff]/', mb_substr($str, $i, 1, 'UTF-8'))) {
            $enlen += 1;
        } else {
            $zhlen += 1;
        }
    }

    //半角两个算一个
    return $zhlen + floor($enlen/2);
}

//方法2
function getStringLen($str) {
    mb_internal_encoding("UTF-8");

    $str = preg_replace('/[\x80-\xff]/', '|-', $str);
    $str = str_replace('|-|-|-', '|-', $str);

    return mb_strlen($str) / 2;
}

echo getStringLen('绯闻绯闻113413'); //7

```

> javascript

```javascript
//js
function getStringLen(str) {
  var zhlen = 0; //全角
  var enlen = 0; //半角

  for (var i = 0; i < str.length; i++) {
    if (str.substring(i, i + 1).match(/[^\x00-\xff]/gi) != null) {
      zhlen += 1;
    } else {
      enlen += 1;
    }
  }

  //半角两个算一个
  return zhlen + Math.floor(enlen / 2);
}

console.log(getStringLen("绯闻绯闻113413")); //7
```

## 接收邮件

```php
/**
 * 获取邮箱正文
 * 中文需要转码
 */

$mbox = imap_open ("{pop.163.com:995/pop3/ssl}INBOX", "your account", "your password");

$num = imap_num_msg($mbox);
$result = '';

if ($num) {
	$body = imap_base64(imap_fetchbody($mbox, imap_num_msg($mbox), 1));
	$result = iconv('utf8', 'gbk', $body);
}

echo $result;
```
