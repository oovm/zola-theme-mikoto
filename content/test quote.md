+++
title = "Blockquote Testing"
date = 2019-07-01

[taxonomies]
categories = ["Tests"]
tags = ["blockquote"]
+++

```tex
\quote{body = "这是一条**普通**信息!", type = "info"}
\quote{body = "这是一条**成功**信息!", type = "success"}
\quote{body = "这是一条**警告**信息!", type = "warning"}
\quote{body = "这是一条**危险**信息!", type = "danger"}
```

{% quote() %}
这是一条**普通**信息!
{% end %}

{% quote(type = "success") %}
这是一条**成功**信息!
{% end %}

{% quote(type = "warning") %}
这是一条**警告**信息!
{% end %}

{% quote(type = "danger") %}
这是一条**危险**信息!
{% end %}


<!-- more -->

