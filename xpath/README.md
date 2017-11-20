# xPath

### xPath简介

XPath 是一门在 XML 文档中查找信息的语言。XPath 可用来在 XML 文档中对元素和属性进行遍历。

[w3school参考手册](http://www.w3school.com.cn/xpath/index.asp)
<br/>
[XPath 详解,总结](https://www.cnblogs.com/fdszlzl/archive/2009/06/02/1494836.html)

### 基本语法

| 表达式  		| 描述                 			   |
| -------------	|------------------------  |
| nodename	    | 选取此节点的所有子节点。    |
| /			    | 从根节点选取     		   |
| //			| 从匹配选择的当前节点选择文档中的节点，而不考虑它们的位置。|
| .			    | 选取当前节点  			   |
| ..			| 选取当前节点的父节点。        |
| @			    | 选取属性  		 	       |


---
### 详细说明：
<table style="border-collapse: collapse" border="0">
<tbody valign="top">
<thead>
<tr style="height: 18px">
<td style="width: 168px;border-right: black 0.5pt solid; padding-right: 7px; border-top: black 0.5pt solid; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black"><strong>运算符/特殊字符</strong></span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: black 0.5pt solid; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black"><strong>说明</strong></span></div>
</td>
</thead>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">/ </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">此路径运算符出现在模式开头时，表示应从根节点选择。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">// </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">从当前节点开始递归下降，此路径运算符出现在模式开头时，表示应从根节点递归下降。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">. </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">当前上下文。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">.. </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">当前上下文节点父级。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">* </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">通配符；选择所有元素节点与元素名无关。（不包括文本，注释，指令等节点，如果也要包含这些节点请用node()函数）</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">@ </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">属性名的前缀。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">@* </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">选择所有属性，与名称无关。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">: </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">命名空间分隔符；将命名空间前缀与元素名或属性名分隔。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">( ) </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">括号运算符(优先级最高)，强制运算优先级。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">[ ] </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">应用筛选模式（即谓词，包括"过滤表达式"和"轴（向前/向后）"）。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">[ ] </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">下标运算符；用于在集合中编制索引。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">| </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">两个节点集合的联合，如：//messages/message/to | //messages/message/cc</span></div>
</td>
</tr>
<tr style="height: 18px">
	<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
		<div><span style="font-size: 9pt; color: black">- </span></div>
	</td>
	<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
		<div><span style="font-size: 9pt; color: black">减法。</span></div>
	</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">div，</span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">浮点除法。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">and, or </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">逻辑运算。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">mod </span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">求余。</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt">not()</span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">逻辑非</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt">=</span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">等于</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">！=</span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">不等于</span></div>
</td>
</tr>
<tr style="height: 18px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">特殊比较运算符</span></div>
</td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
	<div><span style="font-size: 9pt; color: black">&lt; 或者 &amp;lt; </span></div>
	<div><span style="font-size: 9pt; color: black">&lt;= 或者 &amp;lt;= </span></div>
	<div><span style="font-size: 9pt; color: black">&gt; 或者 &amp;gt; </span></div>
	<div><span style="font-size: 9pt; color: black">&gt;= 或者 &amp;gt;= </span></div>
	<div><span style="font-size: 9pt; color: black">需要转义的时候必须使用转义的形式，如在XSLT中，而在XMLDOM的scripting中不需要转义。</span></div>
</td>
</tr>
</tbody>
</table>


### 常用表达式实例：

<table style="border-collapse: collapse" border="0">
<tbody valign="top">
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: black 0.5pt solid; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: black 0.5pt solid; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">Document Root文档根.</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择文档根下面的所有元素节点，即根节点（XML文档只有一个根节点）</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">根元素下所有的节点（包括文本节点，注释节点等）</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/text()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找文档根节点下的所有文本节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">messages节点下的所有message节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">messages节点下的第一个message节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/self::node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点（self轴表示自身，node()表示选择所有节点）</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点下的所有子节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/*[last()]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点的最后一个子节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/[last()]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">Error，谓词前必须是节点或节点集</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/node()[last()]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点的最后一个子节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/text()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点的所有子节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]//text()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点下递归下降查找所有的文本节点（无限深度）</span></div></td></tr>
<tr style="height: 91px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1] /child::node() </span></div>
<div><span style="font-size: 9pt">/messages/message[1] /node() </span></div>
<div><span style="font-size: 9pt">/messages/message[position()=1]/node() </span></div>
<div><span style="font-size: 9pt">//message[@id=1] /node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: 0.5pt solid">
<div><span style="font-size: 9pt">第一个message节点下的所有子节点</span></div></td></tr>
<tr style="height: 24px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=1] //child::node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">递归所有子节点（无限深度）</span></div></td></tr>
<tr style="height: 24px">
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[position()=1]/node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择id=1的message节点以及id=0的message节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1] /parent::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">Messages节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/body/attachments/parent::node() </span></div>
<div><span style="font-size: 9pt">/messages/message[1]/body/attachments/parent::* /messages/message[1]/body/attachments/..</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">attachments节点的父节点。父节点只有一个,所以node()和* 返回结果一样。 </span></div>
<div><span style="font-size: 9pt">（..也表示父节点. 表示自身节点）</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]/ancestor::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">Ancestor轴表示所有的祖辈，父，祖父等。 </span></div>
<div><span style="font-size: 9pt">向上递归</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]/ancestor-or-self::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">向上递归,包含自身</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]/ancestor::node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">对比使用*,多一个文档根元素(Document root)</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/descendant::node() </span></div>
<div><span style="font-size: 9pt">//messages/message[1]//node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">递归下降查找message节点的所有节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">/messages/message[1]/sender/following::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找第一个message节点的sender节点后的所有同级节点，并对每一个同级节点递归向下查找。</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=1]/sender/following-sibling::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找id=1的message节点的sender节点的所有后续的同级节点。</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=1]/datetime/@date</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找id=1的message节点的datetime节点的date属性</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=1]/datetime[@date] </span></div>
<div><span style="font-size: 9pt">//message/datetime[attribute::date]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找id=1的message节点的所有含有date属性的datetime节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[datetime]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找所有含有datetime节点的message节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message/datetime/attribute::* </span></div>
<div><span style="font-size: 9pt">//message/datetime/attribute::node() </span></div>
<div><span style="font-size: 9pt">//message/datetime/@*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">返回message节点下datetime节点的所有属性节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message/datetime[attribute::*] </span></div>
<div><span style="font-size: 9pt">//message/datetime[attribute::node()] </span></div>
<div><span style="font-size: 9pt">//message/datetime[@*] </span></div>
<div><span style="font-size: 9pt">//message/datetime[@node()]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择所有含有属性的datetime节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//attribute::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择根节点下的所有属性节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]/body/preceding::node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">顺序选择body节点所在节点前的所有同级节点。（查找顺序为：先找到body节点的顶级节点（根节点）,得到根节点标签前的所有同级节点，执行完成后继续向下一级，顺序得到该节点标签前的所有同级节点，依次类推。） </span></div>
<div><span style="font-size: 9pt">注意：查找同级节点是顺序查找，而不是递归查找。</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]/body/preceding-sibling::node()</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">顺序查找body标签前的所有同级节点。（和上例一个最大的区别是：不从最顶层开始到body节点逐层查找。我们可以理解成少了一个循环，而只查找当前节点前的同级节点）</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=1]//*[namespace::amazon]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">查找id=1的所有message节点下的所有命名空间为amazon的节点。</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//namespace::*</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">文档中的所有的命名空间节点。（包括默认命名空间xmlns:xml）</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]//books/*[local-name()='book']</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择books下的所有的book节点， </span></div>
<div><span style="font-size: 9pt">注意：由于book节点定义了命名空间&lt;amazone:book&gt;.若写成//message[@id=0]//books/book则查找不出任何节点。</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]//books/*[local-name()='book' and namespace-uri()='http://www.amazon.com/books/schema']</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择books下的所有的book节点，(节点名和命名空间都匹配) </span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]//books/*[local-name()='book'][year&gt;2006]</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">选择year节点值&gt;2006的book节点</span></div></td></tr>
<tr>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: black 0.5pt solid; border-bottom: black 0.5pt solid">
<div><span style="font-size: 9pt">//message[@id=0]//books/*[local-name()='book'][1]/year&gt;2006</span></div></td>
<td style="border-right: black 0.5pt solid; padding-right: 7px; border-top: medium none; padding-left: 7px; border-left: medium none; width: 340px; border-bottom: black 0.5pt solid; height: 18px">
<div><span style="font-size: 9pt">指示第一个book节点的year节点值是否大于2006. </span></div>
<div><span style="font-size: 9pt">返回xs:boolean: true</span></div></td></tr></tbody></table>